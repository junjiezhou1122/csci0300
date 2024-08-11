#include <math.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "reverse.h"

static int total_tests = 0;
static int num_correct = 0;
static int num_incorrect = 0;

#define USAGE "\"./reverse_test\" runs reverse tests"

void assert_equal(char** expected, char** actual, const char* message, int len) {
  total_tests++;
  int element_correct = 0;
  int element_incorrect = 0;

  for (int i = 0; i < len; i++) {
    if (!strcmp(expected[i], actual[i])) {
      element_correct++;
      if (element_correct == len) num_correct++;
    } else {
      element_incorrect++;
      if (element_correct == len) num_incorrect++;
      printf("\033[0;31m"); // set color to red
      printf(
          "[FAILED Test %d: %s]: At index: %d, expected string: %s, actual "
          "string: %s\n",
          total_tests, message, i, expected[i], actual[i]);
      printf("\033[0m"); // reset text to default color
    }
  }

  // If no elements are wrong, the test passed! Print a message that says this :)
  if (element_incorrect == 0) {
    printf("\033[0;32m"); // set color to green
    printf("[PASSED Test %d: %s]\n", total_tests, message);
    printf("\033[0m"); // reset text to default color
  }
}

void test_reverse() {
  // test 1: test single element
  char* str[] = {"hello"};
  reverse_arr(str, 1);
  assert_equal(str, str, "one element test", 1);

  // test 2: test three elements (odd number of elements)
  char* str2[] = {"hello", "my", "name"};
  char* reverse2[] = {"name", "my", "hello"};
  reverse_arr(str2, 3);
  assert_equal(str2, reverse2, "three element test", 3);

  // test 3: test four elements (even number of elements)
  char* str3[] = {"hello", "my", "name", "is"};
  char* reverse3[] = {"is", "name", "my", "hello"};
  reverse_arr(str3, 4);
  assert_equal(str3, reverse3, "four element test", 4);

  // test 4: test five elements
  char* str4[] = {"i", "love", "systems", "csci", "300"};
  char* reverse4[] = {"300", "csci", "systems", "love", "i"};
  reverse_arr(str4, 5);
  assert_equal(str4, reverse4, "five element test", 5);

  // test 5: test 2 elements
  char* str5[] = {"csci", "300"};
  char* reverse5[] = {"300", "csci"};
  reverse_arr(str5, 2);
  assert_equal(str5, reverse5, "two element test", 2);
}

void print_test_summary() {
  printf("Passed %d tests, Failed %d tests | %f%%\n", num_correct,
         num_incorrect,
         100 * ceil((float)num_correct) / (total_tests == 0 ? 1 : total_tests));
  total_tests = 0;
  num_incorrect = 0;
  num_correct = 0;
}

void run_test(void (*func)(), const char* message) {
  printf("=================== Running %s Tests. ===================\n",
         message);
  func();
  printf("%s: ", message);
  print_test_summary();
}

int main(int argc, char** argv) {
  if (argc <= 1) {
    printf("Testing for correctness...\n");
    run_test(&test_reverse, "Reverse");
    return 0;
  }

  int num_elements = atoi(argv[1]);
  if (argc - 2 != num_elements) {
    printf("Incorrect number of arguments\n");
    return 1;
  }

  char* arr[num_elements];
  for (int i = 0; i < num_elements; i++) {
    arr[i] = argv[i + 2];
  }

  printf("Original array:\n");
  for (int i = 0; i < num_elements; i++) {
    printf("%s ", arr[i]);
  }
  printf("\n");

  reverse_arr(arr, num_elements);

  printf("Reversed array:\n");
  for (int i = 0; i < num_elements; i++) {
    printf("%s ", arr[i]);
  }
  printf("\n");

  return 0;
}