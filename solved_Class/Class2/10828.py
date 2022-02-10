import sys
input=sys.stdin.readline

li=[]
def push(num):
  li.append(num)

def top():
  if len(li)==0:
    print(-1)
  else:
    print(li[-1])


def size():
  print(len(li))

def pop():
  if len(li)==0:
    print(-1)
  else:
    print(li.pop(-1))

def empty():
  if len(li)==0:
    print(1)
  else:
    print(0)
    
n=int(input())
for _ in range(n):
  a=input().split()
  if(a[0]=='push'):
    push(int(a[1]))
  elif a[0]=='top':
    top()
  elif a[0]=='size':
    size()
  elif a[0]=='empty':
    empty()
  elif a[0]=='pop':
    pop()
    