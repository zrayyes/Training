#include <stdio.h>
#include <string.h>
#include <ctype.h>

void minusTen(int *v);
char *longer(char *a, char *b);
char *encrypt(char *input);

int main()
{
    // Challenge
    char a, b, c, *p;
    a = 'A';
    p = &a;
    b = *p;
    p = &c;
    *p = 'Z';

    printf("A is %c, B is %c, C is %c\n", a, b, c);

    // Arrays
    int array[] = {11, 12, 13, 14};
    int *aptr;

    aptr = array;

    for (int x = 0; x < 4; x++)
    {
        printf("Element %d: %d\n", x + 1, *aptr);
        aptr++;
    }

    // Functions with addresses
    int value, *vptr;
    value = 100;
    vptr = &value;

    printf("Value is %d\n", value);
    minusTen(&value);
    printf("Value is %d\n", value);

    printf("Encrypted is %s\n", encrypt("This is stupid."));

    return (0);
}

void minusTen(int *v)
{
    *v = *v - 10;
}

char *longer(char *a, char *b)
{
    int len1, len2;
    len1 = strlen(a);
    len2 = strlen(b);

    if (len1 > len2)
    {
        return a;
    }
    else
    {
        return b;
    }
}

char *encrypt(char *input)
{
    // static = unchanging, don't throw away after function dies
    static char output[64];
    int x = 0;

    // while character is not \0
    while (*input)
    {
        if (isalpha(*input))
        {
            output[x] = *input + 1;
        }
        else
        {
            output[x] = *input;
        }
        x++;
        input++;
    }

    return output;
}