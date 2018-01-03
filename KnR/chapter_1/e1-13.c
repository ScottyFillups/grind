#define ARR_SIZE 6

#include <stdio.h>

char lower(char a) {
    if ('A' <= a && a <= 'Z') {
        a = a - 'A' + 'a';
    }
    return a;
}

int main(void) {
    char test[ARR_SIZE] = {'a', 'A', 'Z', '2', '!', 'V'};

    for (int i = 0; i < ARR_SIZE; i++) {
        printf("%c ", lower(test[i]));
    }
    putchar('\n');

    return 0;
}

