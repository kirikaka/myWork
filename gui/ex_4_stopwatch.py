from tkinter import *

def startTimer():
    if(running):
        global timer
        timer+=1
        timeText.configure(text=str(timer))
    tk.after(1000,startTimer)

def start():
    global running
    running =True

def stop():
    global running
    running =False

tk=Tk()
running=False
timer=0

timeText=Label(tk,text="0",font=("Helvetica",80))
timeText.pack()

startButton=Button(tk,text="start",bg="blue",command =start)
startButton.pack(fill=BOTH)

stopButton=Button(tk,text="stop",bg="blue",command =stop)
stopButton.pack(fill=BOTH)

startTimer()
tk.mainloop()