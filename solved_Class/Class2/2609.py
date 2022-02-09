import sys
a,b=map(int,sys.stdin.readline().split())

big=max(a,b)
max_num=1
min_num=1
while(True):
  small=min(a,b)/max_num
  if(big%small==0):
    print(int(small))
    break
  else:
    max_num+=1
while(True):
  if((big*min_num)%min(a,b)==0):
    print(big*min_num)
    break
  else:
    min_num+=1