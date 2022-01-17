a=int(input())
b=int(input())
c=int(input())
mul=a*b*c
f=list(map(int,str(mul)))
count=[]
for _ in range(10):
    count.append(0)

for i in range(len(f)):
    for j in range(0,10):
        if(f[i]==j):
            count[j]=count[j]+1
            break

for i in range(len(count)):
    print(count[i])