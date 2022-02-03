import sys
music=list(map(int,sys.stdin.readline().split()))
a=sorted(music)
b=sorted(music,reverse=True)
if(music==a):
  print("ascending")
elif(music==b):
  print("descending")
else:
  print("mixed")

