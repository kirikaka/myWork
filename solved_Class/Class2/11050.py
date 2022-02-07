import sys
from math import factorial


n,k=map(int,sys.stdin.readline().split())
res=factorial(n)//((factorial(k)*factorial(n-k)))
print(res)
  