from tkinter import *

def callback1():
    temp=float(e1.get())
    myTemp=(temp-32)*5/9
    e2.insert(0,str(myTemp))

def callback2():
    temp1=float(e2.get())
    myTemp1=(temp1*9/5)+32
    e1.insert(0,(str)(myTemp1))

root=Tk()
l1=Label(root, text="화씨")
l2=Label(root, text="섭씨")
l1.grid(row=0,column=0)
l2.grid(row=1,column=0)

e1=Entry(root)
e2=Entry(root)
e1.grid(row=0,column=1)
e2.grid(row=1,column=1)

b1=Button(root, text="화씨->섭씨",command = callback1)
b2=Button(root, text="섭씨->화씨",command = callback2)
b1.grid(row=2,column=0)
b2.grid(row=2,column=1)

root.mainloop()