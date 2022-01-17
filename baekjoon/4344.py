c=int(input())
a=[]
b=[]
d=[]

for i in range(c):
    a.append(input().split())
for i in range(c):
    a[i]=list(map(int,a[i]))
    

for i in range(len(a)):
    sum=0
    for j in range(1,a[i][0]+1):
        sum=sum+a[i][j]
    
    b.append(sum/a[i][0])

for i in range(len(a)):
    count=0
    for j in range(1,a[i][0]+1):
        if(b[i]<a[i][j]):
            count=count+1
    x=count/a[i][0]*100
    d.append("%.3f"%x)

for i in range(len(d)):
    print(d[i]+"%")