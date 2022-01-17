from tkinter import *

myColor="blue"

def paint(event):
    x1,y1=(event.x-1),(event.y-1)
    x2,y2=(event.x+1),(event.y+1)
    w.create_oval(x1,y1,x2,y2,fill=myColor)

def change_color():
    global myColor
    myColor="black"

window=Tk()

w=Canvas(window,width=400,height=400)
w.pack()
w.bind("<B1-Motion>",paint)
button=Button(window,text="Black",command=change_color)
button.pack()


w.mainloop()