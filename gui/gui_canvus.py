from tkinter import *

myColor="blue"

def paint(event):
    x1,y1=(event.x-1),(event.y-1)
    x2,y2=(event.x+1),(event.y+1)
    canvas.create_oval(x1,y1,x2,y2,fill=myColor)

def change_color():
    global myColor
    myColor="red"

window=Tk()
canvas=Canvas(window,width=300,height=200)
canvas.pack()
canvas.bind("<B1-Motion>",paint)
button = Button(window, text="REd",command=change_color)
button.pack()

window.mainloop()
