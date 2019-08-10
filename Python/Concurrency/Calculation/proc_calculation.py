from time import time
import random
from multiprocessing import Process


def calculate_prime_factors(n):
    prime_factors = []
    d = 2
    while d*d <= n:
        while (n % d) == 0:
            prime_factors.append(d)
            # Floor-Divide and Assign
            n //= d
        d += 1
    if n > 1:
        prime_factors.append(n)
    print(prime_factors)


def execute_proc():
    for i in range(1000):
        rand = random.randint(20000, 100000000)
        calculate_prime_factors(rand)


def main():
    print("Start")
    t0 = time()
    procs = []

    for i in range(10):
        proc = Process(target=execute_proc)
        procs.append(proc)
        proc.start()

    for p in procs:
        p.join()

    t1 = time()
    total = t1 - t0
    print("Execution Time: %.2fs" % total)


if __name__ == "__main__":
    main()
