#include <stdio.h>
#include <string.h>

int main(int argc, char *argv[])
{

    printf("There are %d arguments added\n", argc);
    for (int x = 0; x < argc; x++)
    {
        printf("Argument %d:\t%s\n", x + 1, argv[x]);
        if (strcmp(argv[x], "-v") == 0)
        {
            printf("print version number");
        }
    }

    return 0;
}