#ifndef COMMON_SHARD_HPP
#define COMMON_SHARD_HPP

#include <algorithm>
#include <array>
#include <cassert>
#include <cmath>
#include <cstdint>
#include <cstring>
#include <sstream>
#include <stdexcept>
#include <string>
#include <string_view>
#include <utility>
#include <vector>

#include "common/color.hpp"
#include "common/utils.hpp"

// This configures the maximum "granularity" per shard; functionally, this means
// the "depth" of a shard's bounds. For example, with MAX_GRANULARITY = 4, each
// shard will look something like this:
// {"AAAA", "AAAB"}.
//
// As MAX_GRANULARITY configures the number of times the VALID_CHARS range can
// be split, it essentially configures the number of buckets within the range,
// which translates into the maximum number of allowed servers. At
// MAX_GRANULARITY = 4, the highest granularity can support = 1,679,616 servers.
// At the maximum server limit, we'd see each shard look like: {"AAAA", "AAAA"}.
#define MAX_GRANULARITY 4

// Currently, only alphanumeric characters are supported, to ease sharding.
// Sharding functions will need to convert characters to upper case before
// processing (NOTE: I explored using the to_upper function in utils, but this
// creates a new string every time to avoid mangling the old string. This
// doesn't seem ideal (or frankly necessary), so I've chosen to manually
// std::toupper(c).)
constexpr std::string_view VALID_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Helper constant that defines the number of buckets used at each granularity
// level. Symbolically, for i in 0..MAX_GRANULARITY, this becomes
// GRANULARITY_OPTS[i] = (VALID_CHARS.size()) ^ i. For example, with
// MAX_GRANULARITY = 4 and VALID_CHARS.size() = 36,
//      GRANULARITY_OPTS = { 1, 36, 1296, 46656, 1679616 }
//
// (also pretty cool that you can programmatically initialize this at compile
// time lol)
constexpr std::array<size_t, MAX_GRANULARITY + 1> GRANULARITY_OPTS = [] {
  std::array<size_t, MAX_GRANULARITY + 1> opts{};
  for (size_t granularity = 0; granularity <= MAX_GRANULARITY; granularity++) {
    // manual powering b/c std::pow isn't constexpr :(
    size_t num_buckets = 1;
    for (size_t i = 0; i < granularity; i++) num_buckets *= VALID_CHARS.size();
    opts[granularity] = num_buckets;
  }
  return opts;
}();

// Struct representing a server's shard range: [lower, upper]
struct Shard {
  std::string lower;  // inclusive
  std::string upper;  // inclusive

  // bucket granularity
  size_t granularity() const {
    assert(lower.size() == upper.size());
    return lower.size();
  }

  // checks if shard contains string; i.e., if string is within shard bounds
  bool contains(const std::string& s) const {
    // god string::compare is so unintuitive... from cppreference (paraphrased):
    // "str1.compare(size_t pos1, size_t count1, string str2) compares a [pos1,
    // pos1+count1) substring of str1 to str2."
    return 0 <= s.compare(0, granularity(), lower) &&
           s.compare(0, granularity(), upper) <= 0;
  }

  friend std::ostream& operator<<(std::ostream& os, const Shard& s) {
    return os << '[' << s.lower << ", " << s.upper << ']';
  }
  bool operator==(const Shard& rhs) const {
    return lower == rhs.lower && upper == rhs.upper;
  }
  bool operator<(const Shard& rhs) const {
    return lower < rhs.lower;
  }
};

enum class OverlapStatus {
  NO_OVERLAP,
  OVERLAP_START,
  OVERLAP_END,
  COMPLETELY_CONTAINS,
  COMPLETELY_CONTAINED
};

// Splits the shard at the midpoint.
// In the case of uneven shard length, gives middle key to the first shard --
// e.g., for shard [A, E] (length 5), shard 1 would get [A, C], shard 2 gets [D,
// E]. The shard's size must be greater than 1.
std::pair<Shard, Shard> split_shard(const Shard& shard);
// Same as above, except specify the key to split on. Gives the key split on to
// the first shard by default; set first = false to give to second shard.
// e.g., for shard = [A, E], at = B, first = true, the splits are [A, B] and [C,
// E], if first = false, the splits are [A, A], [B, E].
std::pair<Shard, Shard> split_shard(const Shard& shard, const std::string& at,
                                    bool first = true);

// Returns the overlap status of 'a' relative to 'b'.
//
// The comments in each case show an example of what a pair of shards in that
// case would look like, so check out the implementation in shard.cpp. This
// function will be very useful in implementing your shardcontroller's Move
// function!
OverlapStatus get_overlap(const Shard& a, const Shard& b);

/* ==================================================*/
/* === INTERNALS: DO NOT MODIFY BELOW THIS LINE ===  */
/* ==================================================*/

// Sorts a vector of shards in ascending order.
void sort_shards(std::vector<Shard>& shards);

// Validates a key, according to VALID_CHARS
bool is_valid(const std::string& s);

// Converts a bucket into its string representation, and vice versa
std::string bucket_to_str(size_t bucket, size_t granularity);
size_t str_to_bucket(const std::string& s);

// Splits the entire valid character range into n shards.
std::vector<Shard> split_into(size_t n_shards);

#endif /* end of include guard */
