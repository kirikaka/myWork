import sys
import math

a,b,v=map(int,sys.stdin.readline().split())
day=(v-b)/(a-b)
print(math.ceil(day))
  