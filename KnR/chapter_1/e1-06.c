#include <stdio.h>

int main(void) {
    char input;
    int blanks, tabs, newlines;
    blanks = tabs = newlines = 0;

    while ((input = getchar()) != EOF) {
        if (input == '\n') {
            newlines++;
        }
        else if (input == ' ') {
            blanks++;
        }
        else if (input == '\t') {
            tabs++;
        }
    }

    printf("Blanks: %d, Tabs: %d, Newlines: %d\n", blanks, tabs, newlines);
    return 0;
}
