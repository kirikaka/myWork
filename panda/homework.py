import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

plt.rc('font',family='Malgun Gothic')
df=pd.read_csv('subway_time.csv',encoding='cp949')
df.iloc[[0],0]='승하차'
df.iloc[[0],1]='위치'



df.set_index('호선명',inplace=True)


name=input("출퇴근 시간 유동인구가 많은 역을 조사할 호선>>>")
a=df.index.str.startswith(name)

df1=df[a]


df1.set_index('지하철역',inplace=True)


df1=df1.apply(pd.to_numeric)

x=df1.loc[:,'07:00:00~07:59:59':'Unnamed: 13'].sum(axis=1)#출근시간 인구수 합산
y=df1.loc[:,'17:00:00~17:59:59':'Unnamed: 33'].sum(axis=1)#퇴근시간 인구수 합산
df1["sum"]=x+y #출퇴근 시간 인구수 합산

df1=df1.sort_values(by='sum',ascending=False)  #정렬


df1=df1.drop(['sum'],axis=1)#합계 열 삭제



pro1=df1.head(3) #1,2,3,등만 남기기
up=list(range(0,48,2))# 승차 인덱싱
down=list(range(1,49,2))#하차 인덱싱

first="1등 "+name + " "+pro1.index[0]
second="2등 "+name +" "+pro1.index[1]
third="3등 "+name +" "+pro1.index[2]
pro1.index=[first,second,third]

pro1x=pro1.iloc[:,up]#승차만 따로 데이터프레임 생성
pro1y=pro1.iloc[:,down]#하차만 따로 데이터프레임 생성
col_title=pro1x.columns.tolist()
pro1y.columns=col_title






pro1x.T.plot()
plt.title(name +" 승차")
plt.show()

pro1y.T.plot()
plt.title(name +" 하차")
plt.show()

