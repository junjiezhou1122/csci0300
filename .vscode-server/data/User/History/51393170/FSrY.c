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
    if (g_game_over){
        return;
    }
    int current_location = snake_head_y * width + snake_head_x;

        static enum input_key real_input = INPUT_RIGHT;
        int snake_new_head_x = snake_head_x;
        int snake_new_head_y = snake_head_y;
        
        if(input != INPUT_NONE){
            real_input = input;
        }
        switch (real_input)
        {
        case INPUT_UP:
            snake_new_head_y--;
            break;
        
        case INPUT_DOWN:
            snake_new_head_y++;
            break;
        
        case INPUT_LEFT:
            snake_new_head_x--;
            break;
        
        case INPUT_RIGHT:
            snake_new_head_x++;
            break;
        
        case INPUT_NONE:  
        default:
            break;
        }

        int new_location = snake_new_head_y * width + snake_new_head_x;
        
        if (cells[new_location] & FLAG_WALL || cells[new_location] & FLAG_SNAKE) {
            g_game_over = 1;
            return;
    }
        if (cells[new_location] & FLAG_GRASS){
            cells[new_location] = FLAG_SNAKE | FLAG_GRASS;
        }else if (cells[new_location] & FLAG_FOOD){
            g_score++;
            cells[new_location] = FLAG_SNAKE;
            
        }else{
        cells[new_location] = FLAG_SNAKE;
        }

        //remove the snake from the old location
        if (cells[current_location] & FLAG_GRASS) {
            cells[current_location] ^= FLAG_SNAKE; // Remove the snake but keep the grass
        } else if (cells[current_location] & FLAG_FOOD){
            cells[current_location] = PLAIN_CELL;
        }else{
            cells[current_location] = PLAIN_CELL; // Clear the cell
        }

        
        // Update the snake's head position
        snake_head_x = snake_new_head_x;
        snake_head_y = snake_new_head_y;
        
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
