from facebook_scraper import get_posts

for post in get_posts('/pg/QUMIX/events/', pages=10):
    print("\n", post) 