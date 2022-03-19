import sys
from collections import Counter
input=sys.stdin.readline

n=int(input())
a=list(map(int,input().split()))

m=int(input())
b=list(map(int,input().split()))

result=dict(Counter(a).most_common())
result_key=result.keys()
res=[]
for i in b:
  if i in result_key:
    print(result.get(i),end=' ')
  else:
    print('0',end=' ')
