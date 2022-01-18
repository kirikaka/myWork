n=int(input())
og=n
count=0
var1=0
while(True):
    a=n%10
    b=n//10
    
    if(a+b>=10):
        var1=a+b-10
    else:
        var1=a+b


    n=(a*10)+(var1)
    count=count+1
    if(n==og):
        break
    
    

print(count)


