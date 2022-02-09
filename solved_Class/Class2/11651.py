import sys
n=int(sys.stdin.readline())
loc=[]
for _ in range(n):
  loc.append(list(map(int,sys.stdin.readline().split())))
loc=sorted(loc,key=lambda x:(x[1],x[0]))
for x in loc:
  print(x[0],x[1])  