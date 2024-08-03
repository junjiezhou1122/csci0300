#include <fcntl.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

int main() {
  int fd = open("files/file2b.txt", O_RDWR);

  // Seek to beyond end of file
  lseek(fd, 128, SEEK_SET);

  // Write data to file
  char data[] = "This is 18 bytes!\n";
  write(fd, data, 18);

  close(fd);

  return 0;
}
