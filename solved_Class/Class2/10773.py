import sys
input = sys.stdin.readline

n=int(input())
num=[]
for _ in range(n):
  k=int(input())
  if len(num)!=0 and k==0:
    num.pop()
  else:
    num.append(k)
print(sum(num))