man=int(input())
time=[]
res=0
time=input().split()
for i in range(len(time)):
    time[i]=int(time[i])
time=sorted(time)
for i in range(len(time)):
    res+=time[i]*(len(time)-i)
print(res)