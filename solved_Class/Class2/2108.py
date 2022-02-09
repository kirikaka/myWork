import sys
from collections import Counter
n=int(sys.stdin.readline())
a=[]
for _ in range(n):
  a.append(int(sys.stdin.readline()))
  
avg=round(sum(a)/n)
a.sort()
mid=a[n//2]

count=Counter(a).most_common()
if(len(count)>1 and count[0][1]==count[1][1]):
  lot=count[1][0]
else:
  lot=count[0][0]
  
rang=max(a)-min(a)
print(avg)
print(mid)
print(lot)
print(rang)
