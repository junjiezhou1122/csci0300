#include "u-lib.hh"
#ifndef ALLOC_SLOWDOWN
#define ALLOC_SLOWDOWN 100
#endif

extern uint8_t end[];

uint8_t* heap_top;
uint8_t* stack_bottom;

void process_main() {
    // Fork a total of three new copies.
    pid_t p1 = sys_fork();
    assert(p1 >= 0);
    pid_t p2 = sys_fork();
    assert(p2 >= 0);

    // Check fork return values: fork should return 0 to child.
    if (sys_getpid() == 1) {
        assert(p1 != 0 && p2 != 0 && p1 != p2);
    } else {
        assert(p1 == 0 || p2 == 0);
    }

    // The rest of this code is like p-allocator.c.

    pid_t p = sys_getpid();
    srand(p);

    heap_top = (uint8_t*) round_up((uintptr_t) end, PAGESIZE);
    stack_bottom = (uint8_t*) round_down((uintptr_t) rdrsp() - 1, PAGESIZE);

    while (true) {
        if (rand(0, ALLOC_SLOWDOWN - 1) < p) {
            if (heap_top == stack_bottom
                || sys_page_alloc(heap_top) < 0) {
                break;
            }
            *heap_top = p;               // check we can write to new page
            console[CPOS(24, 79)] = p;   // check we can write to console
            heap_top += PAGESIZE;
        }
        sys_yield();
    }

    // After running out of memory, do nothing forever
    while (true) {
        sys_yield();
    }
}
