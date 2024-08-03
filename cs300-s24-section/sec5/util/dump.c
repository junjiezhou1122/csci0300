#include <fcntl.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

int main(int argc, char* argv[]) {
  // Error check
  if (argc < 2) {
    printf("Error: must provide file to dump, provided %d arguments. Exiting\n",
           argc);
    return -1;
  }

  // Open a file and dump its contentx
  size_t bytes_in_file = 0;
  char read_char = '\0';

  int fd = open(argv[1], O_RDONLY);
  if (fd == -1) {
    printf("Error opening file %s, exiting.\n", argv[1]);
    return -1;
  }

  printf("File %s contains:\n", argv[1]);

  // As long as we can read the bytes in the file, read them
  while (read(fd, &read_char, 1) != 0) {
    printf("%c", read_char);
    bytes_in_file++;
  }

  // Done with string
  fflush(stdout);

  printf("\nFile %s's length is %ld bytes.\n", argv[1], bytes_in_file);

  return 0;
}
