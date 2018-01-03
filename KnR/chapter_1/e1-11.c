#include <stdio.h>
#include <stdbool.h>

bool is_letter(char a) {
    return ('A' <= a && a <= 'Z') || ('a' <= a && a <= 'z');
}

bool is_word_char(char a) {
    return is_letter(a) || ('0' <= a && a <= '9') || (a == '\'');
}

bool is_whitespace(char a) {
    return a == ' ' || a == '\n' || a == '\t';
}

int main(void) {
    char input;
    int nw, nl, nc;
    bool in_word = false;
    bool valid = true;
    nw = nl = nc;

    while ((input = getchar()) != EOF) {
        nc++;
        if (input == '\n') {
            nl++;
        }
        if (is_whitespace(input)) {
            if (valid && in_word) {
                nw++;
            }
            in_word = false;
            valid = true;
        } else {
            if ( (!in_word && !is_letter(input)) || !is_word_char(input) ) {
                valid = false;
            }
            in_word = true;
        }
    }

    printf("Words: %d, Newlines: %d, Characters: %d\n", nw, nl, nc);

    return 0;
}


