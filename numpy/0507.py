import numpy as np
import csv

f=open('age.csv')
data=csv.reader(f)
next (data) #skip header data
data=list(data)

name=input("동네 : ")
mn=1
result_name=''
result=0

for row in data:
    if name in row[0]:
        home = np.array(row[3:], dtype=int)/int(row[2]) #전체로 각 나이에 대한 인구를 나눈다.
        
        
for row in data:
    away=np.array(row[3:],dtype=int)/int(row[2])
    s=np.sum((home-away)**2)
    if s<mn and name not in row[0]:
        mn=s
        result_name=row[0]
        result=away
        
        
import matplotlib.pyplot as plt
plt.style.use('ggplot')
plt.figure(figsize=(10,5),dpi=300)
plt.rc('font',family='Malgun Gothic')
plt.title(name+"지역과 가장 비슷한 인구 구조를 가진 지역")
plt.plot(home,label=name)
plt.plot(result,label=result_name)
plt.legend()
plt.show()