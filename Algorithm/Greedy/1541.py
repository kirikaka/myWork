a=input().split('-')

res=[]
for i in a:
    res_b=0
    b=i.split('+')
    for k in b:
        res_b+=int(k)
    res.append(res_b)
result=res[0]
for i in range(1,len(res)):
    result-=res[i]
print(result)