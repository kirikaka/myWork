import sys
n=int(sys.stdin.readline())
cnt=1
all=1
while(n>all):
  all+=6*cnt
  cnt+=1
  
print(cnt)
  
  
