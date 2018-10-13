#include <stdio.h>

int main()
{
    char input[64];
    printf("Input long string:");
    fgets(input,64,stdin);
    puts(input);

    return(0);
}