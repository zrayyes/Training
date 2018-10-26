#include <stdio.h>
#include <stdlib.h>

int main (){
    char *name;

    name = malloc(sizeof(char) * 64);
    if (name == NULL){
        puts("Failed to allocate memory");
        return 1;
    }

    printf("Enter your name: ");
    fgets(name,64,stdin);
    printf("Hello, %s",name);

    return 0;
}