import urllib.request
from time import time
from bs4 import BeautifulSoup


t0 = time()
req = urllib.request.urlopen("http://example.com")
t1 = time()
print("Total time taken to fetch page %.2fs"%(t1-t0))

soup = BeautifulSoup(req.read(), "html.parser")

for link in soup.find_all("a"):
    print(link.get("href"))

t2 = time()
print("Total time taken to execute %.2fs"%(t2-t0))
