print("번개의 밑변의 길이")
x=int(input("(3이상 10이하의 길이 입력) : "))

for i in range(1,2*x):
    if i<x:
        for j in range(x-i):
            print(" ", end="")
        for j in range(x):
            print("*", end="")
    elif i==x:
        for j in range(x):
            print("*"*2, end="")
    elif i>x:
        for j in range(2*x-i):
            print(" ", end="")
        for j in range(x):
            print("*", end="")
    print()