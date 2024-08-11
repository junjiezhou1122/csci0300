#include "game.h"

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <string.h>
#include <unistd.h>
#include <stddef.h>

#include "linked_list.h"
#include "mbstrings.h"
#include "common.h"

/** Updates the game by a single step, and modifies the game information
 * accordingly. Arguments:
 *  - cells: a pointer to the first integer in an array of integers representing
 *    each board cell.
 *  - width: width of the board.
 *  - height: height of the board.
 *  - snake_p: pointer to your snake struct (not used until part 3!)
 *  - input: the next input.
 *  - growing: 0 if the snake does not grow on eating, 1 if it does.
 */
void update(int* cells, size_t width, size_t height, snake_t* snake_p,
            enum input_key input, int growing) {
    // `update` should update the board, your snake's data, and global
    // variables representing game information to reflect new state. If in the
    // updated position, the sn ake runs into a wall or itself, it will not move
    // and global variable g_game_over will be 1. Otherwise, it will be moved
    // to the new position. If the snake eats food, the game score (`g_score`)
    // increases by 1. This function assumes that the board is surrounded by
    // walls, so it does not handle the case where a snake runs off the board.

    // TODO: implement!
    if (!g_game_over) {
        if (snake_head_x < 0 || snake_head_x >= (int)width || 
            snake_head_y < 0 || snake_head_y >= (int)height) {
            g_game_over = 1;
            return;
        }

        if (cells[snake_head_y * width + snake_head_x] & FLAG_WALL) {
            g_game_over = 1;
            return;
        }
        
        
        if (input == INPUT_NONE) {
            if ((snake_head_x == (int)width / 2) && (snake_head_y == (int)width / 2)) {
                cells[snake_head_y * width + snake_head_x] = FLAG_SNAKE;
            } else {
                // Remove the snake from the current cell, preserving the grass state
                cells[snake_head_y * width + snake_head_x] &= ~FLAG_SNAKE;

                // Update snake's position
                snake_head_x += 1;

                // Check for collisions with walls or itself
                if (snake_head_x >= (int)width || (cells[snake_head_y * width + snake_head_x] & FLAG_SNAKE)) {
                    g_game_over = 1;
                } else {
                    // Check if the new cell has grass
                    if (cells[snake_head_y * width + snake_head_x] & FLAG_GRASS) {
                        cells[snake_head_y * width + snake_head_x] |= FLAG_SNAKE;
                    } else {
                        cells[snake_head_y * width + snake_head_x] = FLAG_SNAKE;
                    }
                }
            }
        }
    }    
}

/** Sets a random space on the given board to food.
 * Arguments:
 *  - cells: a pointer to the first integer in an array of integers representing
 *    each board cell.
 *  - width: the width of the board
 *  - height: the height of the board
 */
void place_food(int* cells, size_t width, size_t height) {
    /* DO NOT MODIFY THIS FUNCTION */
    unsigned food_index = generate_index(width * height);
    // check that the cell is empty or only contains grass
    if ((*(cells + food_index) == PLAIN_CELL) || (*(cells + food_index) == FLAG_GRASS)) {
        *(cells + food_index) |= FLAG_FOOD;
    } else {
        place_food(cells, width, height);
    }
    /* DO NOT MODIFY THIS FUNCTION */
}

/** Prompts the user for their name and saves it in the given buffer.
 * Arguments:
 *  - `write_into`: a pointer to the buffer to be written into.
 */
void read_name(char* write_into) {
    // TODO: implement! (remove the call to strcpy once you begin your
    // implementation)
    strcpy(write_into, "placeholder");
}

/** Cleans up on game over — should free any allocated memory so that the
 * LeakSanitizer doesn't complain.
 * Arguments:
 *  - cells: a pointer to the first integer in an array of integers representing
 *    each board cell.
 *  - snake_p: a pointer to your snake struct. (not needed until part 3)
 */
void teardown(int* cells, snake_t* snake_p) {
    // TODO: implement!
    if (cells != NULL){
        free(cells);
    }
   
}
