#define TAB_STEP 8

#include <stdio.h>

int main(void) {
    int count = 0;
    int blanks;
    char input;

    while ((input = getchar()) != EOF) {
        if (input == '\t') {
            blanks = TAB_STEP - (count % TAB_STEP);
            for (int i = 0; i < blanks; i++) {
                count++;
                putchar(' ');
            }
        } else {
            putchar(input);
            count++;

            if (input == '\n') {
                count = 0;
            }
        }
    }

    return 0;
}
