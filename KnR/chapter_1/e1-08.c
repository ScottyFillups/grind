#include <stdio.h>

int main(void)
{
    char input;

    while ((input = getchar()) != EOF) {
        if (input == '\t') {
            printf(">\b-");
        } else {
            putchar(input);
        }
    }

    return 0;
}
