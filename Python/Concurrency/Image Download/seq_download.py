import urllib.request
import time


def download_image(image_path, file_name):
    print("Downloading image from", image_path)
    urllib.request.urlretrieve(image_path, file_name)


def main():
    t0 = time.time()
    for i in range(10):
        image_name = "temp/img-"+str(i)+".jpg"
        download_image("https://picsum.photos/200/300", image_name)

    t1 = time.time()
    total_time = t1 - t0
    print("Total Execution Time %.2f" % total_time)


if __name__ == "__main__":
    main()
