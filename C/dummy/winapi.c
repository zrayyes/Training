#include <windows.h>
#include <stdlib.h>
#include <string.h>
#include <Psapi.h>

int main()
{
    DWORD size, bytesReturned;
    DWORD *ptr;

    ptr = (DWORD *)malloc(size);
    BOOL res = EnumProcesses(ptr, size, &bytesReturned);
}