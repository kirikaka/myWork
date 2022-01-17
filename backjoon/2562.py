a=[]
for i in range(9):
    a.append(int(input()))

count=0
max=a[0]
for i in range(len(a)):
    if(a[i]>max):
        max=a[i]
        count=i


print(max)
print(count+1)