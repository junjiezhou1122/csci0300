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
    if (g_game_over) {
        return;
    }
    
    int current_location = snake_head_y * width + snake_head_x;
    
    static enum input_key real_input = INPUT_RIGHT;
    int snake_new_head_x = snake_head_x;
    int snake_new_head_y = snake_head_y;
    
    if (input != INPUT_NONE) {
        real_input = input;
    }
    
    switch (real_input) {
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
    
    // Remove the snake from the old location first
    if (cells[current_location] & FLAG_GRASS) {
        cells[current_location] = FLAG_GRASS;
    } else {
        cells[current_location] = PLAIN_CELL;
    }
    
    // Check if the snake is eating food
    if (cells[new_location] & FLAG_FOOD) {
        g_score++;
        place_food(cells, width, height);
    }
    
    // Move the snake to the new location
    if (cells[new_location] & FLAG_GRASS) {
        cells[new_location] = FLAG_SNAKE | FLAG_GRASS;
    } else {
        cells[new_location] = FLAG_SNAKE;
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
    unsigned food_index;
    do {
        food_index = generate_index(width * height);
    } while (cells[food_index] & (FLAG_WALL | FLAG_SNAKE));

    // 只在空白格子或草地上放置食物
    if (cells[food_index] == PLAIN_CELL || cells[food_index] == FLAG_GRASS) {
        cells[food_index] |= FLAG_FOOD;
    } else {
        // 如果没有合适的位置，重新尝试
        place_food(cells, width, height);
    }
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