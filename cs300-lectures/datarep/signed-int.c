#include <stdio.h>

#include "hexdump.h"

void f() {
  char i1 = 1;
  char i2 = -1;

  hexdump(&i1, sizeof(i1));
  hexdump(&i2, sizeof(i2));

  char i3 = i1 + i2;
  hexdump(&i3, sizeof(i3));
}

int main() {
  f();
}
