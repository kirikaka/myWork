#Heapque 이용

import sys

n=int(sys.stdin.readline())
card=[]
for i in range(n):
  card.append(int(sys.stdin.readline()))
res=0
while(len(card)>1):
  card.sort(reverse=True)

  a=card.pop()
  b=card.pop()
  res+=a+b
  card.append(a+b)
print(res)
  
  