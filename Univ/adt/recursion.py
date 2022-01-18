# def power(x,n):
#     if n==0: return 1
#     elif(n%2==0):
#         return power(x*x,n//2)
#     else:
#         return x*power(x*x,(n-1)//2)


# print(power(4,3))


n = int(input())
def hanoi(n, a, b, c):
    if n == 1:
        print(a, c)
    else:
        hanoi(n - 1, a, c, b)
        print(a, c)
        hanoi(n - 1, b, a, c)
sum = 1
for i in range(n - 1):
    sum = sum * 2 + 1
print(sum)
hanoi(n, 1, 2, 3)
