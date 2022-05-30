import requests

url = 'http://apis.data.go.kr/1400377/mtweather/mountListSearch'
params ={'serviceKey' : 'zXAXa5ZdLo2wCsLnFs4vmycfBK0s1LkMCX7v44gshco5EMEi5g3C82pf8qvsMAAYNVmcYR0ItahguTG48s00vQ==', 'pageNo' : '1', 'numOfRows' : '10', '_type' : 'json', 'localArea' : '1', 'obsid' : '1910', 'tm' : '202106301806' }

response = requests.get(url, params=params)
print(response.content)