buy=int(input())
change=1000-buy
count=0
coin=[500,100,50,10,5,1]
cnt=0

for i in range(len(coin)):
  cnt=change//coin[i]
  count+=cnt
  change=change%coin[i]
  
print(count)