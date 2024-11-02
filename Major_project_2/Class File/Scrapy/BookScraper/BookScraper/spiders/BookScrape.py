import scrapy


class BookscrapeSpider(scrapy.Spider):
    name = "BookScrape"
    allowed_domains = ["books.toscrape.com"]
    start_urls = ["https://books.toscrape.com/catalogue/page-1.html"]

    def parse(self, response):
        books = response.css("article.product_pod")

        for book in books:
            yield {
                'Title': book.css("h3 a::attr(title)").get(),
                'Rating' : book.css("p::attr(class)").get(),
                'Price' : book.css("div p::text").get(),
            }

        next_page = response.css("li.next a::attr(href)").get()

        if next_page is not None:
            next_page_url = "https://books.toscrape.com/catalogue/" + next_page
        
            yield response.follow(next_page_url, callback=self.parse)
        
