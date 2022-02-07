import sys

n,m=map(int,sys.stdin.readline().split())
card=list(map(int,sys.stdin.readline().split()))
result=0
for i in range(n):
  for j in range(i+1,n):
    for k in range(j+1,n):
      if(card[i]+card[j]+card[k]>m):
        continue
      else:
        result=max(result,card[i]+card[j]+card[k])
print(result)
     
