import sys
man=[]
n=int(sys.stdin.readline())
for i in range(n):
  man.append(list(map(int,sys.stdin.readline().split())))
for i in range(len(man)):
  rank=1
  need=man[:i]+man[i+1:]
  for j in range(len(need)):
    if(man[i][0]<need[j][0] and man[i][1]<need[j][1]):
      rank+=1
  man[i].append(rank)
for i in man:
  print(i[2],end=' ')
