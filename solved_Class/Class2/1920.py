import sys

n=int(sys.stdin.readline())
a=sorted(map(int,sys.stdin.readline().split()))

m=int(sys.stdin.readline())
b=list(map(int,sys.stdin.readline().split()))

def binary_search(l,a,start,end):
  if start>end:
    return 0
  k=(start+end)//2
  if l==a[k]:
    return 1
  elif l<a[k]:
    return binary_search(l,a,start,k-1)
  else:
    return binary_search(l,a,k+1,end)

for i in b:
  start=0
  end=n-1
  print(binary_search(i,a,start,end))
