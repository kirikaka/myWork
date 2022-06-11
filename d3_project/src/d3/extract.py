from urllib.request import urlopen
import requests
from bs4 import BeautifulSoup

url = 'https://klas.kw.ac.kr/std/cps/inqire/AtnlcScreStdPage.do'

html=urlopen(url)
bsObject=BeautifulSoup(html,"html.parser")

print(bsObject)
