t=int(input())

time=[300,60,10]
res=[]
for i in range(len(time)):
  cnt=t//time[i]
  t=t%time[i]
  res.append(cnt)
  

if(t!=0):
  print(-1)
else:
  for i in range(len(res)):
    print(res[i],end=' ')
