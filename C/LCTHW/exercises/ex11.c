#include <stdio.h>

int nameToInt(char *string)
{
    int name = (string[0] << 8 * 3) + (string[1] << 8 * 2) + (string[2] << 8 * 1) + (string[3] << 8 * 0);

    return name;
}

char *intToName(int n)
{
    static char name[4];
    name[0] = (char)(n >> 8 * 3);
    name[1] = (char)(n >> 8 * 2);
    name[2] = (char)(n >> 8 * 1);
    name[3] = (char)(n >> 8 * 0);

    return name;
}

int main(int argc, char *argv[])
{
    int numbers[4] = {1};
    char name[4] = {'a'};

    printf("numbers: %d %d %d %d\n",
           numbers[0], numbers[1], numbers[2], numbers[3]);

    printf("chars: %c %c %c %c\n",
           name[0], name[1], name[2], name[3]);

    printf("name: %s\n", name);

    numbers[0] = 1;
    numbers[1] = 2;
    numbers[2] = 3;
    numbers[3] = 4;

    name[0] = 'Z';
    name[1] = 'u';
    name[2] = 'h';
    name[3] = '\0';

    printf("numbers: %d %d %d %d\n",
           numbers[0], numbers[1], numbers[2], numbers[3]);

    printf("chars: %c %c %c %c\n",
           name[0], name[1], name[2], name[3]);

    printf("name: %s\n", name);

    char *another = "Zuh";
    printf("another: %s\n", another);

    printf("another each: %c %c %c %c\n",
           another[0], another[1], another[2], another[3]);

    int nameAsInt = nameToInt(another);
    printf("Name as int: %d\n", nameAsInt);

    char *intAsName = intToName(nameAsInt);
    printf("Int as name: %s\n", intAsName);

    return 0;
}