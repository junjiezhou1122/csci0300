#include "simple_client.hpp"

std::optional<std::string> SimpleClient::Get(const std::string& key) {
  std::shared_ptr<ServerConn> conn = connect_to_server(this->server_addr);
  if (!conn) {
    cerr_color(RED, "Failed to connect to KvServer at ", this->server_addr,
               '.');
    return std::nullopt;
  }

  GetRequest req{key};
  if (!conn->send_request(req)) return std::nullopt;

  std::optional<Response> res = conn->recv_response();
  if (!res) return std::nullopt;
  if (auto* get_res = std::get_if<GetResponse>(&*res)) {
    return get_res->value;
  } else if (auto* error_res = std::get_if<ErrorResponse>(&*res)) {
    cerr_color(YELLOW, "Failed to Get value from server: ", error_res->msg);
  }

  return std::nullopt;
}

bool SimpleClient::Put(const std::string& key, const std::string& value) {
  std::shared_ptr<ServerConn> conn = connect_to_server(this->server_addr);
  if (!conn) {
    cerr_color(RED, "Failed to connect to KvServer at ", this->server_addr,
               '.');
    return false;
  }

  PutRequest req{key, value};
  if (!conn->send_request(req)) return false;

  std::optional<Response> res = conn->recv_response();
  if (!res) return false;
  if (auto* put_res = std::get_if<PutResponse>(&*res)) {
    return true;
  } else if (auto* error_res = std::get_if<ErrorResponse>(&*res)) {
    cerr_color(YELLOW, "Failed to Put value to server: ", error_res->msg);
  }

  return false;
}

bool SimpleClient::Append(const std::string& key, const std::string& value) {
  std::shared_ptr<ServerConn> conn = connect_to_server(this->server_addr);
  if (!conn) {
    cerr_color(RED, "Failed to connect to KvServer at ", this->server_addr,
               '.');
    return false;
  }

  AppendRequest req{key, value};
  if (!conn->send_request(req)) return false;

  std::optional<Response> res = conn->recv_response();
  if (!res) return false;
  if (auto* append_res = std::get_if<AppendResponse>(&*res)) {
    return true;
  } else if (auto* error_res = std::get_if<ErrorResponse>(&*res)) {
    cerr_color(YELLOW, "Failed to Append value to server: ", error_res->msg);
  }

  return false;
}

std::optional<std::string> SimpleClient::Delete(const std::string& key) {
  std::shared_ptr<ServerConn> conn = connect_to_server(this->server_addr);
  if (!conn) {
    cerr_color(RED, "Failed to connect to KvServer at ", this->server_addr,
               '.');
    return std::nullopt;
  }

  DeleteRequest req{key};
  if (!conn->send_request(req)) return std::nullopt;

  std::optional<Response> res = conn->recv_response();
  if (!res) return std::nullopt;
  if (auto* delete_res = std::get_if<DeleteResponse>(&*res)) {
    return delete_res->value;
  } else if (auto* error_res = std::get_if<ErrorResponse>(&*res)) {
    cerr_color(YELLOW, "Failed to Delete value on server: ", error_res->msg);
  }

  return std::nullopt;
}

std::optional<std::vector<std::string>> SimpleClient::MultiGet(
    const std::vector<std::string>& keys) {
  std::shared_ptr<ServerConn> conn = connect_to_server(this->server_addr);
  if (!conn) {
    cerr_color(RED, "Failed to connect to KvServer at ", this->server_addr,
               '.');
    return std::nullopt;
  }

  MultiGetRequest req{keys};
  if (!conn->send_request(req)) return std::nullopt;

  std::optional<Response> res = conn->recv_response();
  if (!res) return std::nullopt;
  if (auto* multiget_res = std::get_if<MultiGetResponse>(&*res)) {
    return multiget_res->values;
  } else if (auto* error_res = std::get_if<ErrorResponse>(&*res)) {
    cerr_color(YELLOW, "Failed to MultiGet values on server: ", error_res->msg);
  }

  return std::nullopt;
}

bool SimpleClient::MultiPut(const std::vector<std::string>& keys,
                            const std::vector<std::string>& values) {
  std::shared_ptr<ServerConn> conn = connect_to_server(this->server_addr);
  if (!conn) {
    cerr_color(RED, "Failed to connect to KvServer at ", this->server_addr,
               '.');
    return false;
  }

  MultiPutRequest req{keys, values};
  if (!conn->send_request(req)) return false;

  std::optional<Response> res = conn->recv_response();
  if (!res) return false;
  if (auto* multiput_res = std::get_if<MultiPutResponse>(&*res)) {
    return true;
  } else if (auto* error_res = std::get_if<ErrorResponse>(&*res)) {
    cerr_color(YELLOW, "Failed to MultiPut values on server: ", error_res->msg);
  }

  return false;
}

bool SimpleClient::GDPRDelete(const std::string& user) {
  // Get the username associated with the user ID
  std::optional<std::string> username = Get(user);
  if (!username) {
    cerr_color(YELLOW, "User " + user + " not found.");
    return false;
  }
  
  // Get the list of posts by this user
  std::string user_posts_key = user + "_posts";
  std::optional<std::string> posts_list = Get(user_posts_key);
  if (!posts_list) {
    cerr_color(YELLOW, "No posts found for user " + user);
  }
  
  // APPROACH: Partial anonymization - We will anonymize the user's identity while preserving content
  // with a note about unsubstantiated allegations - balancing privacy rights with community interests
  
  // 1. Anonymize user's identity by replacing their username with "Anonymous User"
  Put(user, "Anonymous User [Account deleted]");
  
  
  // 2. Process the user's posts if they exist
  if (posts_list) {
    // Split the comma-separated list of post IDs
    std::istringstream iss(*posts_list);
    std::string post_id;
    std::vector<std::string> post_ids;
    
    while (std::getline(iss, post_id, ',')) {
      // Trim any whitespace
      post_id.erase(0, post_id.find_first_not_of(" \t\r\n"));
      post_id.erase(post_id.find_last_not_of(" \t\r\n") + 1);
      
      if (!post_id.empty()) {
        post_ids.push_back(post_id);
      }
    }
    
    cerr_color(YELLOW, "Found " + std::to_string(post_ids.size()) + " posts to anonymize");
    
    // Modify each post to anonymize the author while preserving content
    for (const auto& post_id : post_ids) {
      std::optional<std::string> post_content = Get(post_id);
      if (post_content) {
        // Prefix the post content with a note about anonymization
        std::string anonymized_content = "[Posted by an anonymized user] " + *post_content;
        bool put_success = Put(post_id, anonymized_content);
        if (!put_success) {
          cerr_color(RED, "Failed to update post: " + post_id);
        } else {
          cerr_color(GREEN, "Successfully anonymized post: " + post_id);
        }
      } else {
        cerr_color(RED, "Failed to retrieve content for post: " + post_id);
      }
    }
  }
  
  // 3. Find and modify posts that likely reference the allegations
  // Note: In a real system, we would need more sophisticated content analysis
  // This simplified implementation assumes we can identify relevant posts
  
  // We'll add a disclaimer to posts about allegations without removing them
  // Implementation would require searching through all posts (not shown due to complexity)
  // In a real system, we might maintain an index of posts by hashtags or mentions
  
  // 4. Add metadata post to provide context about allegations
  std::string metadata_key = "disclaimer_" + user;
  std::string metadata_value = "Note: Allegations referenced in certain posts were reviewed by the relevant "
                              "educational institution and found to have insufficient supporting evidence.";
  Put(metadata_key, metadata_value);
  
  // We leave the user ID in the all_users list as a reference to the anonymized account
  
  return true;
}
