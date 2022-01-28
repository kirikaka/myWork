import sys

a,b=map(int,sys.stdin.readline().split())
cnt=0
while(True):
  if(b==a):
    cnt+=1
    print(cnt)
    break
  elif(b<a):
    print(-1)
    break
  else:
    if(b%2!=0):
      b=(b-1)//10
      cnt+=1
    elif(b%2==0):
      b=b//2
      cnt+=1

    else:
      print(-1)
      break
      
  
