print("N단 케이크의 N입력")
x=int(input("(1이상 10이하의 N 입력) : "))

while x>1 and x<10:
    for i in range(1,x+1):
        n1=4*(x-i)
        for _ in range(2):
            for _ in range(n1):
                print(" ", end="")
            for _ in range(i*4-3):
                print("*"*2, end="")
            print()           
    break