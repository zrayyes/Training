from time import time
import random
import threading


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


def main():
    print("Start")
    t0 = time()
    threads = []

    for i in range(10000):
        rand = random.randint(20000, 100000000)
        thread = threading.Thread(target=calculate_prime_factors, args=(rand,))
        threads.append(thread)
        thread.start()

    for t in threads:
        t.join()

    t1 = time()
    total = t1 - t0
    print("Execution Time: %.2fs" % total)


if __name__ == "__main__":
    main()
