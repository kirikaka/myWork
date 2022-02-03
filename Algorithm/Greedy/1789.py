s=int(input())

count=0
i=1
res=0
while(True):
  if(res<s):
    res+=i
    i+=1
    count+=1
  elif(res>s):
    count-=1
    break;
  else:
    break;
print(count)