import urllib.request
from time import time
import threading


def download_image(image_path, file_name):
    print("Downloading image from", image_path)
    urllib.request.urlretrieve(image_path, file_name)
    print("Completed download")


def execute_thread(i):
    image_name = "temp/img-"+str(i)+".jpg"
    download_image("https://picsum.photos/200/300", image_name)


def main():
    t0 = time()
    threads = []

    for i in range(10):
        thread = threading.Thread(target=execute_thread, args=(i,))
        threads.append(thread)
        thread.start()

    # Make sure all threads are completed before moving on
    for t in threads:
        t.join()

    t1 = time()
    total_time = t1 - t0
    print("Total Execution Time %.2f" % total_time)


if __name__ == "__main__":
    main()
