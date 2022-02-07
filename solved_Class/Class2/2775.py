import sys

n=int(sys.stdin.readline())

for _ in range(n):
  floor=int(sys.stdin.readline())
  room=int(sys.stdin.readline())
  need=[]
  for i in range(1,room+1):
    need.append(i)
  for i in range(floor):
    for k in range(1,room):
      need[k]+=need[k-1]
  print(need[-1])
             
    
