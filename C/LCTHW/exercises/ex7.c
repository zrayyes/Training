#include <stdio.h>

int main(int argc, char *argv[])
{
    int distance = 100;
    float power = 2.345f;
    double super_power = 5678.1234;
    char initial = 'B';
    char first_name[] = "Zuhair";
    char last_name[] = "Rayyes";

    printf("You are %d miles away.\n", distance);
    printf("You have %f levels of power.\n", power);
    printf("You have %f awesome super powers.\n", super_power);
    printf("I have an initial %c.\n", initial);
    printf("I have an first name %s.\n", first_name);
    printf("I have an last name %s.\n", last_name);
    printf("My whole name is %s %c, %s.\n", first_name, initial, last_name);

    int bugs = 100;
    double bug_rate = 1.2;

    printf("You have %d bugs at a rate of %f.\n", bugs, bug_rate);

    long universe_of_defects = 1L * 1024L * 1024L * 1024L ;
    printf("The entire universe has %ld bugs.\n", universe_of_defects);

    double expected_bugs = bugs * bug_rate;
    printf("You are expected to have %f bugs.\n", expected_bugs);

    double part_of_universe = expected_bugs / universe_of_defects;
    printf("That is a %e portion of the universe.\n", part_of_universe);

    char null_byte = '\0';
    int care_percentage = bugs * null_byte;
    printf("Which means you should care %d%%.\n", care_percentage);

    return 0;
}