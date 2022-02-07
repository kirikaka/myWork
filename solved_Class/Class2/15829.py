import sys


alpha='abcdefghijklmnopqrstuvwxyz'
n=int(sys.stdin.readline())
a=sys.stdin.readline().rstrip()
result=0
for i in range(len(a)):
 result+=(alpha.index(a[i])+1)*(31**i)
print(result%1234567891)  
