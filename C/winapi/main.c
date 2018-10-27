#include <windows.h>
#include <psapi.h>
#include <wchar.h>

// DWORD = u32
// LPDWORD = pointer to dword
DWORD* getAllProcessIds(){
    static DWORD aProcesses[1024], cbNeeded;
    if ( !EnumProcesses( aProcesses, sizeof(aProcesses), &cbNeeded ) )
    {
        wprintf(L"EnumProcesses failed\n");
        exit(1);
    }
    wprintf(L"Processes = %d\n", cbNeeded/ sizeof(DWORD));
    return aProcesses;
};


int wmain(void) {
    wprintf(L"Starting...\n");

    DWORD* pids = getAllProcessIds();

    wprintf(L"Done.\n");
    return 0;
}