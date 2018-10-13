#include <stdio.h>

int main()
{
    float a, b;
    printf("Please enter values a:");
    scanf_s("%f", &a);
    printf("\nPlease enter values b:");
    scanf_s("%f", &b);
    printf("a + b = %f\n", a + b);
    printf("a - b = %f\n", a - b);
    printf("a * b = %f\n", a * b);
    printf("a / b = %f\n", a / b);
    printf("a^b = %f\n", pow(a, b));
    printf("sqrt a = %f, sqrt b = %f\n", sqrt(a), sqrt(b));

    return (0);
}