#include <stdio.h>
#include <math.h>

void f(void)
{
    static int x = 0;
    printf("Value of x:\t%d\n", x);
    x++;
}

int *primes(void){
    static int arr[] = {2,3,5,7,11};

    return arr;
}

int main()
{
    // TYPE CAST
    int a, b;
    float c;

    a = 10;
    b = 3;
    c = (float)a / b;
    printf("%d/%d = %.2f\n", a, b, c);

    printf("The square root of %d is %.2f\n", a, sqrt(abs(a)));

    // Challenge
    int in = 15;
    printf("Float: %.1f\n", (float)in);

    // STATIC VARIABLES
    f();
    f();

    // Challenge
    int *primes_arr = primes();

    for (int x =0; x<5;x++){
        printf("#%d = \t %d\n",x+1,*(primes_arr+x));
    }
    
    return 0;
}