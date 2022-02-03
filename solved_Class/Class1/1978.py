import sys

n=int(sys.stdin.readline())
a=list(map(int,sys.stdin.readline().split()))
for i in range(n):
  for j in range(2,a[i]):
    if(a[i]%j==0):
      a[i]=0

cnt=0
for i in a:
  if(i!=0 and i!=1):
     cnt+=1
     
print(cnt)   