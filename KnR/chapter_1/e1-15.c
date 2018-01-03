#define MAX_BUFFER 1000
#define PRINT_LEN 80

#include <stdio.h>

int getlines(char s[], int lim);

int main(void) {
    char line[MAX_BUFFER];
    int len;

    while ((len = getlines(line, MAX_BUFFER)) != 0) {
        if (len > PRINT_LEN) {
            printf("%s", line);
        }
    }

    return 0;
}

int getlines(char s[], int lim) {
    char input;
    int i;

    for (i = 0; (input = getchar()) != EOF && i < lim-1 ; i++) {
        s[i] = input;
        if (input == '\n') {
            break;
        }
    }
    s[i+1] = '\0';

    return i;
}

