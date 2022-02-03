import sys

cnt=1
res=[]
while(True):
  l,p,v=map(int,sys.stdin.readline().split())
  if(l+p+v==0):
    break
  else:
    a=v//p*l+min((v%p),l)
    print("Case "+str(cnt)+": "+str(a))
    cnt+=1
