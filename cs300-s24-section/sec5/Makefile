CC = gcc
FLAGS = -ggdb3 -Wall -Wextra -Wshadow -std=gnu11 -Wno-unused-parameter

# Executables
BINS = problem1b problem1c problem2a problem2b

# Source files
FILES = src/problem1a.c src/problem1b.c src/problem1c.c src/problem2a.c src/problem2b.c

# All the text files used by different programs
TXT_FILES = files/file1a.txt files/file1b.txt files/file1c.txt files/file2a.txt files/file2b.txt

# File to dump file contents and length to terminal
dump: util/dump.c
	$(CC) $(FLAGS) $< -o $@

all: $(BINS) dump

# Running first problem (won't compile)
run-1a:
	@ echo "0123456789... This file is 55 characters (bytes) long!" > files/file1a.txt
	$(CC) $(FLAGS) src/problem1a.c -o problem1

# Running individual problems
run-1b: problem1b dump
	@ echo "0123456789... This file is 55 characters (bytes) long!" > files/file1b.txt
	@ echo "\nfiles/file1b.txt before:"
	@ ./dump files/file1b.txt
	@ echo "\nRunning ./problem1b..."
	@ ./problem1b
	@ echo "\nfiles/file1b.txt after:"
	@ ./dump files/file1b.txt
	@ echo "\n"

# Running individual problems
run-1c: problem1c dump
	@ echo "0123456789... This file is 55 characters (bytes) long!" > files/file1c.txt
	@ echo "\nfiles/file1c.txt before:"
	@ ./dump files/file1c.txt
	@ echo "\nRunning ./problem1c..."
	@ ./problem1c
	@ echo "\nfiles/file1c.txt after:"
	@ ./dump files/file1c.txt
	@ echo "\n"

# Running individual problems
run-2a: problem2a dump
	@ echo "0123456789... This file is 55 characters (bytes) long!" > files/file2a.txt
	@ echo "\nfiles/file2a.txt before:"
	@ ./dump files/file2a.txt
	@ echo "\nRunning ./problem2a..."
	@ ./problem2a
	@ echo "\nfiles/file2a.txt after:"
	@ ./dump files/file2a.txt
	@ echo "\n"

# Running individual problems
run-2b: problem2b dump
	@ echo "0123456789... This file is 55 characters (bytes) long!" > files/file2b.txt
	@ echo "\nfiles/file2b.txt before:"
	@ ./dump files/file2b.txt
	@ echo "\nRunning ./problem2b..."
	@ ./problem2b
	@ echo "\nfiles/file2b.txt after:"
	@ ./dump files/file2b.txt
	@ echo "\n"

# Wildcard rule to compile an individual problem
%: src/%.c
	$(CC) $(FLAGS) $< -o $@

clean:
	rm -f ${TXT_FILES} ${BINS} dump

.PHONY: all clean run-1a run-1b run-1c run-2a run-2b
