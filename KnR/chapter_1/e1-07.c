#include <stdio.h>

int main(void)
{
    char input;
    int was_blank = 0;

    while ((input = getchar()) != EOF) {
        if (input == ' ') {
            if (!was_blank) {
                putchar(input);
            }
            was_blank = 1;
        } else {
            putchar(input);
            was_blank = 0;
        }
    }

    return 0;
}
