sik=input().split('-')

a=sik
res=[]
for i in a:
    res_b=0
    b=a.split('+')
    for k in b:
        res_b+=k
    res.append(res_b)
result=res[0]
for i in res:
    result-=i
print(result)