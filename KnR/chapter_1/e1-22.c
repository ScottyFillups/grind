#include <stdio.h>
#include <stdbool.h>

enum comment_type {
    NONE,
    SINGLE,
    MULTI
};

int main(void) {
    char input;
    char prev = '\0';
    enum comment_type curr_comment = NONE;

    while ((input = getchar()) != EOF) {
        if (prev == '/' && input == '*' && curr_comment == NONE) {
            curr_comment = MULTI;
        } else if (prev == '/' && input == '/' && curr_comment == NONE) {
            curr_comment = SINGLE;
        } else if (prev == '*' && input == '/' && curr_comment == MULTI) {
            curr_comment = NONE;
            input = '\0';
        } else if (input == '\n' && curr_comment == SINGLE) {
            curr_comment = NONE;
        } else if (curr_comment == NONE && prev != '\0') {
            putchar(prev);
        }
        prev = input;
    }

    putchar(prev);

    return 0;
}

