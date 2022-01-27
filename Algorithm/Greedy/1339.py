#다시하기 순서대로 하는법


import sys

n=int(sys.stdin.readline())

word=[]
dic={}
res=[]
for i in range(n):
  word.append(sys.stdin.readline().rstrip())
for i in word:
  for j in range(len(i)):
    if i[j] not in dic:
      dic[i[j]]=10**(len(i)-j-1)
    else:
      dic[i[j]]+=10**(len(i)-j-1)

for i in dic.values():
  res.append(i)
res.sort(reverse=True)
result=0
for i in range(len(res)):
  result+=res[i]*(9-i)
print(result)
