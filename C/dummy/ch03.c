#include <stdio.h>

void doSomething(int count);

int main (){
    int a = 1;
    int b = 5;

    // IF
    if (a > 10){
        printf("Number is greater than 10\n");
    } else {
        printf("Number is less than 10\n");
    }
    // Loops
    while (a <= 10) {
        printf("%d\n",a);
        a++;
    }

    do{
        printf("%d\n",b);
        b++;
    }
    while (b <= 10);

    for (char x='A';x<'K';x++){
        printf("%c\n",x);
    }

    // SWITCH
    switch (a){
        case 1:
            printf("Number is 1\n");
            break;
        default:
            break;
    }

    doSomething(5);

    return 0;
}

void doSomething(int count){
    printf("I did something %d times\n",count);
}