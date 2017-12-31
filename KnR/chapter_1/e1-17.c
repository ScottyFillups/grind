#define MAX_LEN 1000

#include <stdio.h>

void reverse(char s[], int lim);
int getlines(char s[], int lim);

int main(void)
{
    char line[MAX_LEN];
    int len;

    while (getlines(line, MAX_LEN) != 0) {
        reverse(line, MAX_LEN);
        printf("%s", line);
    }

    return 0;
}

// returns length, IGNORING NULL TERMINATOR
int getlines(char s[], int lim)
{
    int i;
    char input;

    for (i = 0; (input = getchar()) != EOF && i < lim-1; i++) {
        s[i] = input;
        if (input == '\n') {
            i++;
            break;
        }
    }

    s[i] = '\0';

    return i;
}

// the newline and null terminator shouldn't change positions
void reverse(char s[], int lim)
{
    char temp[MAX_LEN];
    int i = 0;
    int j = 0;

    while (s[i] != '\n') {
        temp[i] = s[i];
        i++;
    }
    while (i > 0) {
        i--;
        s[j] = temp[i];
        j++;
    }   
}
