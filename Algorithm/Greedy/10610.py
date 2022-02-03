#시간초과하여 join함수찾음


a=list(input())

if "0"not in a:
  print(-1)
else:
  a.sort(reverse=True)
  result=''.join(a)
  if(int(result)%30==0):
    print(result)
  else:
    print(-1)


