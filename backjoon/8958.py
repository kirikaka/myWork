n=int(input())
a=[]
for i in range(n):
    a.append(list(input()))

b=[]


for i in range(len(a)):
    sum=0
    score=0
    for j in range(len(a[i])):
        if(a[i][j]=='O'):
            score=score+1
            sum=sum+score
        else:
            
            score=0
    b.append(sum)

for i in range(len(b)):
    print(b[i])

    



