import sys

n=sys.stdin.readline().rstrip()
n=n.split(n[0])
cnt=0
for i in n:
  if(len(i)>0):
    cnt+=1

print(cnt)