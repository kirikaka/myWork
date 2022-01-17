from random import random

random.randrange(5,51)
a={}

for i in range(1,51):
    a[i] = random.randint(5,51)
    if (a[i]>=5 and a[i]<=15):
        print("[o]", i,'번째 손님','(소요시간 : ',a[i],'분)')
    else:
        print("[ ]", i,'번째 손님','(소요시간 : ',a[i],'분)')



