n=int(input())
a=[]
res=0
a=list(map(int,input().split(" ")))
m=a[0]

for i in range(len(a)):
    if(m<a[i]):
        m=a[i]

for i in range(len(a)):
    a[i]=a[i]/m*100
    res=res+a[i]

avg=sum(a)/n

print(avg)
