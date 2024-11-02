import scrapy
import json

class ImdbSpiderSpider(scrapy.Spider):
    name = "imdb_spider"
    allowed_domains = ["www.imdb.com"]
    start_urls = ["https://www.imdb.com/chart/top/?ref_=nv_mv_250"]
    user_agent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36"

    def parse(self, response):
        script_output = response.css("script[id='__NEXT_DATA__']::text").get()
        # reviews = response.css("li.ipc-metadata-list-summary-item.sc-4929eaf6-0.DLYcv.cli-parent")
        response_json = json.loads(script_output)
        reviews = response_json['props']['pageProps']['pageData']['chartTitles']['edges']


        # for review in reviews:
        #     yield {
        #         'Rating': review.css("div div div span div span::text").get(),
        #         'Title': review.css("div div div div a h3::text").get().split(".")[-1].strip(),
        #         'Release Year': review.css("div div div div span::text").get(),
        #     }

        # output = []
        # for review in reviews:
        #     temp_op = {}
        #     temp_op["Rating"] = review['node']['ratingsSummary']['aggregateRating']
        #     temp_op["Title"] = review['node']['titleText']['text']
        #     temp_op["Release Year"] = review['node']['releaseYear']['year']
        #     output.append(temp_op)

        for review in reviews:
            yield {
                'Rating': review['node']['ratingsSummary']['aggregateRating'],
                'Title': review['node']['titleText']['text'],
                'Release Year': review['node']['releaseYear']['year'],
            }