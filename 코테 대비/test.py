import pandas as pd
import numpy as np
import seaborn as sns

# #Question1
# for i in range(2,9,2):
#     print("9 x",i,"=",9*i,end=' ')

#Question2
iris=sns.load_dataset('iris')
iris.head()

print(iris.groupby("species").size())
