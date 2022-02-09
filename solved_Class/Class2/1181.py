import sys
num=int(sys.stdin.readline())

all=[]
for i in range(num):
  all.append(sys.stdin.readline().rstrip())
all=list(set(all))
all.sort()
res=sorted(all,key=len)

for i in res:
  print(i)
    
    
  
# for i in range(len(res)):
#   for j in range(i+1,len(res)):
#     if(len(res[i])==len(res[j])):
#       for k in range(len(res[j])):
        
    
  
    
