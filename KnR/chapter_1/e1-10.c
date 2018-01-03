#include <stdio.h>
#include <stdbool.h>

int main(void) {
    char input;
    bool in_word = false;

    while ((input = getchar()) != EOF) {
        if (input != ' ') {
            putchar(input);
            in_word = true;
        } else {
            if (in_word) {
                putchar('\n');
                in_word = false;
            }
        }
    }

    return 0;
}
