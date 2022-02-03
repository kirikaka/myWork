import sys

n=sys.stdin.readline().rstrip()

n=n.lower()
k={}
cnt=0
for i in n:
  k[i]=0
for i in n:
  if(i in k.keys()):
    k[i]+=1
k=sorted(k.items(),key=lambda x:x[1],reverse=True)
res=list(filter(lambda x:k[x][1]==k[0][1],range(len(k))))
if(len(res)==1):
  print(k[res[0]][0].upper())
else:
  print('?')