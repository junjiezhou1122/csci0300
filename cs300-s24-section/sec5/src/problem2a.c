#include <fcntl.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

int main() {
  int fd = open("files/file2a.txt", O_RDWR);

  // Seek to beyond end of file
  lseek(fd, 128, SEEK_SET);

  // Read data from file
  char buf[16];
  memset(buf, '\0', 16);
  int bytes_read = read(fd, buf, 15);
  buf[bytes_read] = '\0';

  // Print each character individually in case we have null bytes
  printf("The data read was: ");
  for (int i = 0; i < 16; i++) {
    printf("%c", buf[i]);
  }
  printf(". It is %d bytes.\n", bytes_read);

  close(fd);

  return 0;
}
