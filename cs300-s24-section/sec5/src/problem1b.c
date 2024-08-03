#include <fcntl.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/stat.h>
#include <sys/types.h>
#include <unistd.h>

int main() {
  int fd = open("files/file1b.txt", O_RDWR);

  // Determine how long the file is
  struct stat stats;
  fstat(fd, &stats);
  printf("The file is %lld bytes long.\n", stats.st_size);

  // Write data to end of file
  char data[] = "This is 26 bytes of data.\n";
  lseek(fd, 0, SEEK_END);
  write(fd, data, strlen(data));

  // Determine how long the file is now
  fstat(fd, &stats);
  printf("The file is now %lld bytes long.\n", stats.st_size);

  close(fd);

  return 0;
}
