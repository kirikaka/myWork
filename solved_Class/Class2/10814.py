import sys

n=int(sys.stdin.readline())
man=[]
for i in range(n):
  man.append(list(sys.stdin.readline().split()))
  man[i][0]=int(man[i][0])

man=sorted(man,key=lambda x:x[0])
for i in man:
  print(i[0],i[1])