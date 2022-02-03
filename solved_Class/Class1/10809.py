alpha="abcdefghijklmnopqrstuvwxyz"
import sys
n=sys.stdin.readline()

for i in alpha:
  if i in n:
    print(n.index(i),end=' ')
  else:
    print(-1,end=' ')