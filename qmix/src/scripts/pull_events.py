from urllib.request import Request, urlopen
from bs4 import BeautifulSoup

def getWebpage(url, hdr):
    page = Request(url, headers=hdr)
    page = urlopen(page).read()
    return BeautifulSoup(page, "html.parser")

'''
    event {
        title : ...,
        date : ...,
        location: ...,
        about : ...,
        photo : ...,
        link : ...
    }

'''

def main():
    hdr = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.3',
        'Accept-Encoding': 'none',
        'Accept-Language': 'en-US,en;q=0.8',
        'Connection': 'keep-alive'}
       

    url = "https://www.facebook.com/pg/QUMIX/events/"
    soup = getWebpage(url, hdr)
    # print(soup)
    # for artist in soup.findAll("div", attrs={"class": "ye-chart-item__title"}):
    #     artist = str(artist).split("\n") [-3].rstrip()
    #     if artist [0] == " ":   
    #         artist = artist[1:]
    #     write(writer, (genresDict[genre], artist))
    # print(soup)

    f = open("results.txt", "a", encoding="utf-8")
    f.write(str(soup))
    f.close()
    for items in soup.findAll("div", attrs={"class": "_2x2s"}):
        print(items)

if __name__ == "__main__":
    main()