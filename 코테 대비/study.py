# -*- coding: utf-8 -*-
import pandas as pd
import numpy as np
import seaborn as sns

for i in range(2,9,2):
    print(f"9x{i}=",9*i,end=' ')

iris=sns.load_dataset('iris')
iris.head()

#iris의 species 열 값 분포를 확인하시오.(1)
iris.groupby("species").size()


#iris의 species 열 값 분포를 확인하시오.(2)
iris['species'].value_counts()

name=iris.groupby('species')
for x,y in name:
    print(x)
    print(y.head(1))
    print()

iris['species'].apply(lambda x:1 if x=='setosa' else 0)


titanic=sns.load_dataset('titanic')
titanic.head()

# +
#titanic에서 pclass, age, sibsp, fare, class 열만 뽑아 df에 저장하시오.

df=titanic[['pclass','age','sibsp','fare','class']]
df
# -

#df의 열 별 결측치 개수를 구하시오.
df.isnull().sum()

#df에 결측치가 있다면, 해당 열의 평균값으로 채우시오.
x=df.mean(axis=0)
df.fillna(x)

survived=pd.read_csv('survived.csv')
survived

#기존에 생성한 df와 survived 데이터프레임을 병합해 df2에 저장하시오.
df2=pd.concat([df,survived],axis=1)
df2

#df2 데이터에서 각 class 별 생존율을 구하시오.
df2['ave']=df2.survived/df2.pclass
df2.groupby('class').agg({'ave':'mean'})
