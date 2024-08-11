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

// Define global variables for game state
extern int g_game_over; // Set to 1 when the game is over
extern int g_score;     // Game score
extern int snake_head_x, snake_head_y; // Snake's current head position

/**
 * Updates the game by a single step, modifying the game information accordingly.
 * Arguments:
 *  - cells: a pointer to the first integer in an array of integers representing each board cell.
 *  - width: width of the board.
 *  - height: height of the board.
 *  - snake_p: pointer to your snake struct (not used until part 3).
 *  - input: the next input direction.
 *  - growing: 0 if the snake does not grow on eating, 1 if it does.
 */
void update(int* cells, size_t width, size_t height, snake_t* snake_p,
            enum input_key input, int growing) {
    // Check if the game is over
    if (g_game_over) {
        return;
    }

    // Current location of the snake's head
    int current_location = snake_head_y * width + snake_head_x;

    // Track the real input direction
    static enum input_key real_input = INPUT_RIGHT;
    int snake_new_head_x = snake_head_x;
    int snake_new_head_y = snake_head_y;

    // Update the direction based on input
    if (input != INPUT_NONE) {
        real_input = input;
    }

    // Calculate new head position based on direction
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

    // Calculate the new location index
    int new_location = snake_new_head_y * width + snake_new_head_x;

    // Check for collisions with walls or itself
    if (cells[new_location] & FLAG_WALL || cells[new_location] & FLAG_SNAKE) {
        g_game_over = 1;
        return;
    }

    // Handle snake movement and food consumption
    if (cells[new_location] & FLAG_FOOD) {
        g_score++;
        if (!growing) {
            // Remove the tail if the snake is not growing
            remove_snake_tail(cells, width, height);
        }
        place_food(cells, width, height); // Place new food
    } else {
        // Move the snake to the new position
        if (!growing) {
            remove_snake_tail(cells, width, height);
        }
    }

    // Update the board with the new head position
    cells[new_location] = FLAG_SNAKE;

    // Update the snake's head position
    snake_head_x = snake_new_head_x;
    snake_head_y = snake_new_head_y;
}

/**
 * Removes the snake's tail from the board.
 * Arguments:
 *  - cells: a pointer to the first integer in an array of integers representing each board cell.
 *  - width: width of the board.
 *  - height: height of the board.
 */
void remove_snake_tail(int* cells, size_t width, size_t height) {
    // TODO: Implement logic to remove the snake's tail based on the linked list structure
}

/**
 * Sets a random space on the given board to food.
 * Arguments:
 *  - cells: a pointer to the first integer in an array of integers representing each board cell.
 *  - width: the width of the board.
 *  - height: the height of the board.
 */
void place_food(int* cells, size_t width, size_t height) {
    unsigned int food_index;
    do {
        food_index = generate_index(width * height);
    } while (cells[food_index] != PLAIN_CELL && cells[food_index] != FLAG_GRASS);

    // Place the food at the chosen index
    cells[food_index] |= FLAG_FOOD;
}

/**
 * Prompts the user for their name and saves it in the given buffer.
 * Arguments:
 *  - `write_into`: a pointer to the buffer to be written into.
 */
void read_name(char* write_into) {
    printf("Enter your name: ");
    fgets(write_into, NAME_BUFFER_SIZE, stdin);
    write_into[strcspn(write_into, "\n")] = 0; // Remove newline character
}

/**
 * Cleans up on game over — should free any allocated memory to prevent leaks.
 * Arguments:
 *  - cells: a pointer to the first integer in an array of integers representing each board cell.
 *  - snake_p: a pointer to your snake struct. (not needed until part 3)
 */
void teardown(int* cells, snake_t* snake_p) {
    if (cells != NULL) {
        free(cells);
    }

    // TODO: Free any other dynamically allocated resources related to the snake
}