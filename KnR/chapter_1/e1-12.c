#define HIST_SIZE 30

#include <stdio.h>
#include <stdbool.h>

int main(void) {
    char input;
    bool in_word = false;
    int word_size = 0;
    int occ[HIST_SIZE] = {0};

    while ((input = getchar()) != EOF) {
        if (input != ' ' && input != '\n' && input != '\t') {
            word_size++;
            in_word = true;
        } else {
            if (in_word) {
                occ[word_size-1]++;
            }
            word_size = 0;
            in_word = false;
        }
    }

    for (int i = 1; i <= HIST_SIZE; i++) {
        printf("%d: ", i);
        for (int j = 0; j < occ[i-1]; j++) {
            putchar('@');
        }
        putchar('\n');
    }

    return 0;
}

