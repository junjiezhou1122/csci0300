CC = gcc
FLAGS = -ggdb3 -Wall -Wextra -Wshadow -std=gnu11 -Wno-unused-variable -Wno-unused-but-set-variable

all: tictactoe question1 discussion

tictactoe: tictactoe.h tictactoe.c
	$(CC) $(FLAGS) $^ -o $@ -lm

question1: question1.c
	$(CC) $(FLAGS) $^ -o $@ -lm

discussion: discussion.c
	$(CC) $(FLAGS) $^ -o $@ -lm

clean:
	rm -f tictactoe discussion question1

.PHONY: clean
