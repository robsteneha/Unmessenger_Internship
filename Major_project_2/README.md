## STEPS to setup and execute this project

### Create a project directory

`mkdir Major_project_2/web_scraping`

### Create a virtual env

`python3 -m venv Major_project_2/web_scraping/scrapy_venv`

### Activate virtual env
`cd Major_project_2/web_scraping`

`source scrapy_venv/bin/activate`

### Install scrapy
`pip3 install scrapy`

### Setup scrapy and start crawling

`scrapy startproject imdb_scraper`

`cd imdb_scraper/imdb_scraper/spiders`

`scrapy genspider imdb_spider "https://www.imdb.com/chart/top/?ref_=nv_mv_250"`

### Edit the spider file

`nano imdb_spider.py`

### Store the output in output.csv file

`scrapy crawl imdb_spider  -o output.csv`