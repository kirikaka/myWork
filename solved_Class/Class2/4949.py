import sys


while(True):
  input=sys.stdin.readline().rstrip()

  need=[]
  result=1
  for j in input:
    if j =='(' or j== '[':
      need.append(j)
    elif j==')':
      if need and need[-1]=='(' :
        need.pop()
      else:
        result=0
        break
    elif j==']':
      if need and need[-1]=='[' :
        need.pop()
      else:
        result=0
        break
  if(input=="."):
    break
  print("yes" if result and not(need) else "no")
      
    
    