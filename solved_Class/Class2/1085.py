import sys
x,y,w,h=map(int,sys.stdin.readline().split())
res=[]
res.append(x-0)
res.append(y-0)
res.append(w-x)
res.append(h-y)
print(min(res))