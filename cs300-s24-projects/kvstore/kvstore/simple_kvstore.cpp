#include "simple_kvstore.hpp"

bool SimpleKvStore::Get(const GetRequest* req, GetResponse* res) {
  // TODO (Part A, Step 1 and Step 2): Implement!
  std::lock_guard<std::mutex> lock(mtx);  
  auto it = key_value_store.find(req->key); // it is the <key, value>
  if (it != key_value_store.end()){
    res->value = it->second;
    return true;
  }
  return false;
}

bool SimpleKvStore::Put(const PutRequest* req, PutResponse*) {
  // TODO (Part A, Step 1 and Step 2): Implement!
  std::lock_guard<std::mutex> lock(mtx);
  key_value_store[req->key] = req->value;
  return true;
}

bool SimpleKvStore::Append(const AppendRequest* req, AppendResponse*) {
  // TODO (Part A, Step 1 and Step 2): Implement!
  std::lock_guard<std::mutex> lock(mtx);
  key_value_store[req->key] += req->value;
  return true;
}

bool SimpleKvStore::Delete(const DeleteRequest* req, DeleteResponse* res) {
  // TODO (Part A, Step 1 and Step 2): Implement!
  std::lock_guard<std::mutex> lock(mtx);
  auto it = key_value_store.find(req->key);
  if (it != key_value_store.end()) {
    res->value = it->second;
    key_value_store.erase(it);
    return true;
  }
  return false;
}

bool SimpleKvStore::MultiGet(const MultiGetRequest* req,
                             MultiGetResponse* res) {
  // TODO (Part A, Step 1 and Step 2): Implement!
  std::lock_guard<std::mutex> lock(mtx);
  for (const auto& key: req->keys) {
    auto it = key_value_store.find(key);
    if (it != key_value_store.end()) {
      res->values.push_back(it->second);
    } else {
      return false;
    }
  }
  return true;
}

bool SimpleKvStore::MultiPut(const MultiPutRequest* req, MultiPutResponse*) {
  // TODO (Part A, Step 1 and Step 2): Implement!
  std::lock_guard<std::mutex> lock(mtx);
  for (size_t i = 0; i < req->keys.size(); i++) {
    if (i < req->values.size()) {
      key_value_store[req->keys[i]] = req->values[i];
    } else {
      return false;
    }
  }
  return true;
}

std::vector<std::string> SimpleKvStore::AllKeys() {
  // TODO (Part A, Step 1 and Step 2): Implement!
  std::lock_guard<std::mutex> lock(mtx);
  std::vector<std::string> keys;
  for (const auto& entry: key_value_store) {
    keys.push_back(entry.first);
  }
  return keys;
}
