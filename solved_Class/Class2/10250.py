import sys
n=int(sys.stdin.readline())

for i in range(n):
  a,b,c=map(int,sys.stdin.readline().split())
  if(c%a==0):
    w=a*100
    h=c//a
  else:
    w=c%a*100
    h=c//a+1
  print(w+h)