import sys
n= int(sys.stdin.readline())
num=[]
for i in range(n):
  num.append(int(sys.stdin.readline()))
num=list(set(num))
num.sort()
for i in num:
  print(i)