#include <stdio.h>
#include <ctype.h>
#include <string.h>

// CONSTANT EXPRESSION
#define VERSION 3

int main()
{
    // CHARS
    int ch = 'a'; // can also use char
    printf("Original %c\n", ch);
    printf("Lowercase %c\n", tolower(ch));
    printf("Uppercase %c\n", toupper(ch));
    printf("Original %c\n", ch);

    // STRINGS
    char input[64]; // 63 characters plus null
    printf("Say something\n");
    fgets(input, 64, stdin);
    printf("The string is %d characters long.\n", strlen(input));

    char buffer[128];
    strcpy(buffer, input);
    strcat(buffer, "I was added too");
    puts(buffer);

    // CONST
    const int levels = 14;

    // ARRAYS
    int numbers[] = {1, 2, 3};
    int unknowns[10];
    char names[4][5] = {
        "Cat",
        "Dog",
        "Bee",
        "Lion"
    };

    // STRUCTS
    struct bank {
        char name[32];
        int account;
        float balance;
    };

    struct bank abank;
    strcpy(abank.name,"Main account");
    abank.account = 2134;
    abank.balance = 1823.44;


    return 0;
}