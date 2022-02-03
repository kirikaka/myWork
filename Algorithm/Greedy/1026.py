n=int(input())
a=list(map(int,input().split()))
b=list(map(int,input().split()))
result=0
a.sort()
for i in range(n):
    loc=b.index(max(b))
    result +=max(b)*a[i]
    del b[loc]
print(result)
    