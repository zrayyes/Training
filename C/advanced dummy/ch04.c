#include <stdio.h>
#include <string.h>

int print_arr(int *arr, size_t nitems, size_t size)
{
    printf("Array:\t%");
    for (int n = 0; n < nitems; n++)
    {
        printf("%03d ", arr[n]);
    }
    printf("\n");
}

void bubble_sort(int *arr, size_t nitems)
{
    for (int outer = 0; outer < nitems; outer++)
    {
        for (int inner = outer + 1; inner < nitems; inner++)
        {
            if (arr[outer] > arr[inner])
            {
                arr[outer] ^= arr[inner];
                arr[inner] ^= arr[outer];
                arr[outer] ^= arr[inner];
            }
        }
    }
}

void bubble_sort_str(char *arr, size_t nitems)
{
    for (int outer = 0; outer < nitems; outer++)
    {
        for (int inner = outer + 1; inner < nitems; inner++)
        {
            if (arr[outer] > arr[inner])
            {
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

    print_arr(numbers, 10, sizeof(int));
    bubble_sort(numbers, 10);
    print_arr(numbers, 10, sizeof(int));

    // Challenge: Sort string
    char input[] = "This is a string";
    printf("String:\t%s\n", input);

    bubble_sort_str(input,strlen(input));

    printf("String:\t%s\n", input);
    // 
    return 0;
}