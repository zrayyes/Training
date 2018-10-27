#include <Windows.h>
#include <Psapi.h>
#include <wchar.h>
#include <processthreadsapi.h>
#include <string.h>

void reverse(char *str) {
    char *last = str + strlen(str) - 1;
    while (str < last) {
        do {
            *str = *str ^ *last;
            *last = *str ^ *last;
            *str = *str ^ *last;
        } while (0);
        str++;
        last--;
    }
};

char *nameFromPath(char *path) {
    static char name[25];
    int x = 0;

    reverse(path);
    while (*path != '\\') {
        name[x] = *path;
        x++;
        path++;
    }
    name[x] = '\0';
    reverse(name);
    return name;
};

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

char *getNameFromHandle(HANDLE h) {
    LPSTR filename[128];
    DWORD pathLength = GetProcessImageFileNameA(h, filename, sizeof(filename));
    return nameFromPath(filename);
}

int wmain(void) {
    wprintf(L"Starting...\n");

    DWORD *pids = getAllProcessIds();
    HANDLE h1 = getProcessHandle(9568);
    char *name = getNameFromHandle(h1);

    wprintf(L"%S\n", name);

    wprintf(L"\nDone.\n");
    return 0;
}