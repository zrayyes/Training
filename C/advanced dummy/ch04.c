#include <stdio.h>

#define SIZE 10

void print_arr(int *arr)
{
    for (int n = 0; n < SIZE; n++)
    {
        printf("%03d ", arr[n]);
    }
    printf("\n");
}

void bubble_sort(int *arr)
{
    for (int outer = 0; outer < SIZE; outer++)
    {
        for (int inner = outer + 1; inner < SIZE; inner++)
        {
            if (arr[outer] > arr[inner]){
                arr[outer] ^= arr[inner];
                arr[inner] ^= arr[outer];
                arr[outer] ^= arr[inner];
            }
        }
    }
}

int main(int argc, char *argv[])
{
    int numbers[] = {7, 2, 3, 6, 1, 4, 0, 9, 8, 5};

    print_arr(numbers);
    bubble_sort(numbers);
    print_arr(numbers);

    return 0;
}