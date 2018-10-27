#include <Windows.h>
#include <Psapi.h>
#include <wchar.h>
#include <processthreadsapi.h>

// DWORD = u32
// LPDWORD = pointer to dword
DWORD *getAllProcessIds() {
    static DWORD aProcesses[1024], cbNeeded;
    if (!EnumProcesses(aProcesses, sizeof(aProcesses), &cbNeeded)) {
        wprintf(L"EnumProcesses failed\n");
        exit(1);
    }
    wprintf(L"Processes = %d\n", cbNeeded / sizeof(DWORD));
    return aProcesses;
};

HANDLE getProcessHandle(DWORD pid) {
    HANDLE handle = OpenProcess(PROCESS_QUERY_INFORMATION, TRUE, pid);

    if (handle == NULL) {
        wprintf(L"OpenProcess failed\n");
        exit(1);
    }

    return handle;
};

int wmain(void) {
    wprintf(L"Starting...\n");

    DWORD *pids = getAllProcessIds();

    HANDLE h1 = getProcessHandle(9568);

    wprintf(L"Done.\n");
    return 0;
}