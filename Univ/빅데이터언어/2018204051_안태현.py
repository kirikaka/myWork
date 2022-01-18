def cake():
    print("N단 케이크의 N입력")
    x=int(input("(1이상 10이하의 N 입력) : "))
    print()

    if x<1 or x>10:
        cake()
    elif x>=1 and x<=10:
        for i in range(1,x+1):
            n1=4*(x-i)
            for _ in range(2):
                for _ in range(n1):
                    print(" ", end="")
                for _ in range(i*4-3):
                    print("*"*2, end="")
                print()
        prompt()




def lightning():
    print("번개의 밑변의 길이")
    x=int(input("(3이상 10이하의 길이 입력) : "))
    print()

    if x<3 or x>10:
        lightning()
    elif x>=3 or x<=10:
        for i in range(1,2*x):
            if i<x:
                for _ in range(x-i):
                    print(" ", end="")
                for _ in range(x):
                    print("*", end="")
            elif i==x:
                for _ in range(x):
                    print("*"*2, end="")
            elif i>x:
                for _ in range(2*x-i):
                    print(" ", end="")
                for _ in range(x):
                    print("*", end="")
            print()
    prompt()

def prompt():
    print()
    print("도형을 선택하세요")
    print()
    print("1. N단 케이크")
    print("2. 번개")
    print("3. 종료")
    
    y=0
    while True:
        y= int(input())
        print()
        if y==1:
            cake()   
        elif y==2:
            lightning()
        elif y==3:
            break
        
prompt()


    
    



