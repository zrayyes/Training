#include <stdio.h>

int main(int argc, char *argv[])
{
    FILE *fptr = fopen("./mega.png","rb");
    if(!fptr) {
        perror("File opening failed");
        return 1;
    }

    return 0;
}