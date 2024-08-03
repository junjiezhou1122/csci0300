#include <fcntl.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

int main() {
  int fd = open("files/file1a.txt", O_RDWR);

  // Edit the file contents
  fd[0] = '1';
  fd[1] = " byte was written!\n";

  close(fd);

  return 0;
}
