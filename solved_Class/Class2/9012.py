import sys

input=sys.stdin.readline
n=int(input())
for _ in range(n):
  a=input().rstrip()
  cnt=[]
  result=1
  for i in a:
    if i =='(':
      cnt.append(i)
    else:
      if(cnt and cnt[-1] =='('):
        cnt.pop()
      else:
        result=0
        break
  print("YES" if result and not cnt else "NO")
