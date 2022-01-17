

n,k =map(int,input().split())
coin=[]
res=0
for _ in range(n):
    coin.append(int(input()))
    
for i in range(n):
    count=k//coin[n-i-1]
    if(count!=0):
        res+=count
        k=k%coin[n-i-1]
        
print(res)