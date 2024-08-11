.PHONY: all clean format

CFLAGS = -Wall -Werror
CFLAGS += -o3

all: reverse_test test_reverse.o reverse.o

%: %.c
	gcc $(CFLAGS) -c $^ -o $@


reverse_test: reverse.o test_reverse.o
	gcc $(CFLAGS) $^ -o $@


clean:
	rm -f reverse_test
	rm -f test_reverse.o
	rm -f reverse.o

format:
	clang-format -i reverse.c reverse.h test_reverse.c
