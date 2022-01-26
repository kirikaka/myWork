n=int(input())
road=list(map(int,input().split()))
city=list(map(int,input().split()))

res=0
all_road=sum(road)
ch=city[0]
for i in range(len(road)):
  if(city[i]<ch):
    ch=city[i]
  res+=road[i]*ch

print(res) 