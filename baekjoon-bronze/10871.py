c=[]
n,x=map(int,input().split())
a=input()
c=a.split(" ")
c=list(map(int,c))
k=[]
for i in range(n):
    if(c[i]<x):
        k.append(c[i])

for i in range(len(k)):
    print(k[i],end=" ")