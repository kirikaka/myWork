import pandas as pd
import numpy as np

# d={'one':pd.Series([1.,2.,3.],index=['a','b','c']),
# 'two':pd.Series([1.,2.,3.,4.],index=['a','b','c','d'])}

# df=pd.DataFrame(d)
# print(df)

# names=['bob','jessica','mary','john','mel']
# births=[968,155,77,578,973]

# BabyDataset=list(zip(names,births))
# # print(BabyDataset)
# df=pd.DataFrame(data=BabyDataset,columns=['Names','Births'])
# df.to_csv('births1880.csv',index=False,header=False)

# # print(df.dtypes)
# # print(df.Births.dtype)
# # print(df.head(2))
# # print(df.tail(2))
# # print(df.columns)
# # print(df.values)
# # print(df.index)

# df['Births'].plot()
# MaxValue=df['Births'].max()
# # print(MaxValue)
# MaxName=df['Names'][df['Births']==df['Births'].max()].values
# # print(MaxName)

# print(df['Names'].unique())
# print(df['Names'].describe())

# d=[0,1,2,3,4,5,6,7,8,9]

# df=pd.DataFrame(d)
# df.columns=['Rev']
# # print(df)

# df['NewCol']=5
# # print(df)

# df['NewCol']=df['NewCol']+1
# # print(df)
# del df['NewCol']
# # print(df)
# i=['a','b','c','d','e','f','g','h','i','j']
# df.index=i
# print(df)

# print(df.loc['a'])
# print(df.loc['a':'d'])

# print(df.iloc[0:3])
# print(df['Rev'])
# print(df[['Rev','test']])

# print(df.at['a','Rev'])
# print(df.iat[0,0])

index=pd.date_range('1/1/2020',periods=8)
df=pd.DataFrame(np.random.rand(8,3), index=index,columns=list('ABC'))
# print(df)
# print(df['B'])
# print(df['B']>0.4)
df['D']=df['A']/df['B']
# print(df)
df['E']=np.sum(df,axis=1)
print(df.head())