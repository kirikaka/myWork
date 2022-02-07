import sys

while(True):
  n=list(map(int,sys.stdin.readline().rstrip()))
  a=list(reversed(n))
  if(n==[0]):
    break
  elif(n==a):
    print('yes')
  else:
    print('no')
  
