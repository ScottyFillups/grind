#include <stdio.h>

int main(void) {
    int lower, upper, step;
    float fahr, celsius;

    lower = 0;
    upper = 300;
    step = 20;

    fahr = upper;
    printf("Fahrenheit to celsius conversions:\n");
    while (fahr >= lower) {
        celsius = (5.0/9.0) * (fahr-32.0);
        printf("%4.0f %6.1f\n", fahr, celsius);
        fahr = fahr - step;
    }
}
