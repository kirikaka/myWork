from tkinter  import *

def calc1():
    b1["text"]="월급 계산"
    hourSalary=int(e2.get())
    hour=int(e3.get())
    monthlySalary=hour*hourSalary
    e4.insert(0,str(monthlySalary))

def calc2():
    b2["text"]="시급 계산"
    monthlySalary=int(e4.get())
    hour=int(e3.get())
    hourSalary=monthlySalary/hour
    e2.insert(0,str(int(hourSalary)))


def calc3():
    b3["text"]="근무시간 계산"
window=Tk()

l1=Label(window, text="근무시간")
l2=Label(window, text="시급")
l3=Label(window, text="총근무시간")
l4=Label(window, text="월급")

l1.grid(row=0,column=0)
l2.grid(row=1,column=0)
l3.grid(row=2,column=0)
l4.grid(row=3,column=0)

e1=Entry(window)
e2=Entry(window)
e3=Entry(window)
e4=Entry(window)

e1.grid(row=0,column=1)
e2.grid(row=1,column=1)
e3.grid(row=2,column=1)
e4.grid(row=3,column=1)



b1=Button(window, text="총 얼마버냐?",command=calc1)
b2=Button(window, text="한시간에 얼마버냐?",command=calc2)
b3=Button(window, text="얼마나 하냐?",command=calc3)

b1.grid(row=4,column=0)
b2.grid(row=4,column=1)
b3.grid(row=5,column=0)

window.mainloop()