import sys
n=int(sys.stdin.readline())
res=[]
for i in range(1,n+1):
  k=list(map(int,str(i)))
  if(i+sum(k)==n):
    res.append(i)
if(len(res)==0):
  print(0)
else:
  print(min(res))
  
