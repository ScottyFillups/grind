#include <stdio.h>

int main(void) {
    float fahr;

    printf("Celsius to fahrenheit:\n");
    for (float cel = -50.0; cel <= 50.0; cel += 10.0) {
        fahr = (9.0/5.0) * cel + 32.0;
        printf("%4.1f %4.1f\n", cel, fahr);
    }

    return 0;
} 
