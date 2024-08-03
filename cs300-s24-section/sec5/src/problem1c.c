#include <fcntl.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

int main() {
  int fd = open("files/file1c.txt", O_RDWR | O_APPEND);

  // Write data to the file
  char data[] = "8 bytes\n";
  write(fd, data, 8);

  // Read data from the same location
  lseek(fd, -15, SEEK_END);
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
