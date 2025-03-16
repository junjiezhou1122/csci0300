#include "concurrent_kvstore.hpp"

#include <algorithm>  // For std::sort and std::find
#include <mutex>
#include <optional>
#include <shared_mutex>  // Add this include for shared_mutex and unique_lock

bool ConcurrentKvStore::Get(const GetRequest* req, GetResponse* res) {
  // TODO (Part A, Step 3 and Step 4): Implement!
  size_t bucket_idx = store.bucket(req->key);
  std::shared_lock<std::shared_mutex> lock(store.bucket_locks[bucket_idx]); // Use store.bucket_locks
  
  std::optional<DbItem> item = store.getIfExistsNoLock(bucket_idx, req->key);

  if(item) {
    res->value = item->value;
    return true;
  }
  return false;
}

bool ConcurrentKvStore::Put(const PutRequest* req, PutResponse*) {
  // TODO (Part A, Step 3 and Step 4): Implement!
  size_t bucket_idx = store.bucket(req->key);
  // Use unique_lock instead of shared_lock since we're modifying data
  std::unique_lock<std::shared_mutex> lock(store.bucket_locks[bucket_idx]);
  
  // Use insertItemNoLock since we already have the lock
  store.insertItemNoLock(bucket_idx, req->key, req->value);
  return true;
}

bool ConcurrentKvStore::Append(const AppendRequest* req, AppendResponse*) {
  // TODO (Part A, Step 3 and Step 4): Implement!
  size_t bucket_idx = store.bucket(req->key);
  std::unique_lock<std::shared_mutex> lock(store.bucket_locks[bucket_idx]);
  
  auto item_opt = store.getIfExistsNoLock(bucket_idx, req->key);
  if (item_opt) {
    // If key exists, append to its value
    std::string new_value = item_opt->value + req->value;
    store.insertItemNoLock(bucket_idx, req->key, new_value);
  } else {
    // If key doesn't exist, create it with the value
    store.insertItemNoLock(bucket_idx, req->key, req->value);
  }
  return true;
}

bool ConcurrentKvStore::Delete(const DeleteRequest* req, DeleteResponse* res) {
  // TODO (Part A, Step 3 and Step 4): Implement!
  size_t bucket_idx = store.bucket(req->key);
  std::unique_lock<std::shared_mutex> lock(store.bucket_locks[bucket_idx]);
  
  // First get the item to save its value in the response
  auto item = store.getIfExistsNoLock(bucket_idx, req->key);
  if (item) {
    res->value = item->value;
    // Now remove the item
    store.removeItemNoLock(bucket_idx, req->key);
    return true;
  }
  
  return false;
}

bool ConcurrentKvStore::MultiGet(const MultiGetRequest* req,
                               MultiGetResponse* res) {
  // First gather all bucket indices we need to lock
  std::vector<size_t> bucket_indices;
  for (const auto& key : req->keys) {
    size_t bucket_idx = store.bucket(key);
    // Only add unique bucket indices
    if (std::find(bucket_indices.begin(), bucket_indices.end(), bucket_idx) == bucket_indices.end()) {
      bucket_indices.push_back(bucket_idx);
    }
  }
  
  // Sort bucket indices to enforce consistent locking order and prevent deadlocks
  std::sort(bucket_indices.begin(), bucket_indices.end());
  
  // Create locks for all required buckets before accessing any data
  std::vector<std::shared_lock<std::shared_mutex>> locks;
  for (size_t idx : bucket_indices) {
    locks.push_back(std::shared_lock<std::shared_mutex>(store.bucket_locks[idx]));
  }
  
  // Now safely access the data with all locks held
  for (const auto& key : req->keys) {
    size_t bucket_idx = store.bucket(key);
    std::optional<DbItem> item = store.getIfExistsNoLock(bucket_idx, key);
    
    if (item) {
      res->values.push_back(item->value);
    } else {
      return false;
    }
  }
  
  // Locks are automatically released when they go out of scope
  return true;
}

bool ConcurrentKvStore::MultiPut(const MultiPutRequest* req,
                                 MultiPutResponse*) {
  // Check if keys and values have the same size
  if (req->keys.size() != req->values.size()) {
    return false;
  }
  
  // First gather all the bucket indices we need to lock
  std::vector<size_t> bucket_indices;
  for (const auto& key : req->keys) {
    size_t bucket_idx = store.bucket(key);
    // Only add unique bucket indices
    if (std::find(bucket_indices.begin(), bucket_indices.end(), bucket_idx) == bucket_indices.end()) {
      bucket_indices.push_back(bucket_idx);
    }
  }
  
  // Sort bucket indices to enforce consistent locking order and prevent deadlocks
  std::sort(bucket_indices.begin(), bucket_indices.end());
  
  // Create locks for all required buckets before modifying any data
  std::vector<std::unique_lock<std::shared_mutex>> locks;
  for (size_t idx : bucket_indices) {
    locks.push_back(std::unique_lock<std::shared_mutex>(store.bucket_locks[idx]));
  }
  
  // Now safely modify the data with all locks held
  for (size_t i = 0; i < req->keys.size(); i++) {
    size_t bucket_idx = store.bucket(req->keys[i]);
    store.insertItemNoLock(bucket_idx, req->keys[i], req->values[i]);
  }
  
  // Locks are automatically released when they go out of scope
  return true;
}

std::vector<std::string> ConcurrentKvStore::AllKeys() {
  std::vector<std::string> keys;
  
  // Get all bucket indices
  std::vector<size_t> bucket_indices;
  for (size_t i = 0; i < store.BUCKET_COUNT; i++) {
    bucket_indices.push_back(i);
  }
  
  // Sort bucket indices to enforce consistent locking order
  std::sort(bucket_indices.begin(), bucket_indices.end());
  
  // Create shared locks for all buckets before accessing any data
  std::vector<std::shared_lock<std::shared_mutex>> locks;
  for (size_t idx : bucket_indices) {
    locks.push_back(std::shared_lock<std::shared_mutex>(store.bucket_locks[idx]));
  }
  
  // Now safely access the data with all locks held
  for (size_t i = 0; i < store.BUCKET_COUNT; i++) {
    for (const auto& item : store.buckets[i]) {
      keys.push_back(item.key);
    }
  }
  
  return keys;
}
