import sys
k=int(sys.stdin.readline())
result=[]
for i in range(k):
  res=[]
  n=sys.stdin.readline().rstrip().split()
  a=int(n[0])
  b=n[1]
  for j in b:
    res.append(j*a)
  result.append("".join(res))
for i in result:
  print(i)

