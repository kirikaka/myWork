#원리 다시 생각해보기
import sys
n=int(sys.stdin.readline())
res=[]
for i in range(n):
  a=int(input())
  rank=[]
  for k in range(a):
    test1,test2=map(int, sys.stdin.readline().split())
    rank.append([test1,test2])

  rank.sort()
  first=rank[0][1]
  cnt=1
  for j in range(1,len(rank)):
    if(rank[j][1]<first):
      cnt+=1
      first=rank[j][1]
  res.append(cnt)
for i in res:
  print(i) 


  
 

                   
  

