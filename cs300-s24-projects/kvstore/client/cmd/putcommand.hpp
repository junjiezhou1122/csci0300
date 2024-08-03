#ifndef CLIENT_PUTCOMMAND_HPP
#define CLIENT_PUTCOMMAND_HPP

#include <memory>
#include <sstream>

#include "../client.hpp"
#include "common/utils.hpp"
#include "repl/replcommand.hpp"

class PutCommand : public ReplCommand {
 public:
  explicit PutCommand(std::shared_ptr<Client> c) : client(c) {
  }

  void handle(const std::string& s) override;

  std::string name() const override;
  std::string params() const override;
  std::string description() const override;

 private:
  std::shared_ptr<Client> client;
};

#endif /* end of include guard */
