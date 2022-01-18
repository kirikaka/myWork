# 백준 2839
n= input()
n=int(n)
max5=n//5
max3=n//3
res=[]
for i in range(max5+1):
    for j in range(max3+1):
        if(n==(5*i+3*j)):
            res.append((i+j))

 
if(len(res)==0):
    print("-1")
else:
    print(min(res))


        