import tkinter as tk

def startTimer():
    if(running):
        global timer
        timer +=1
        timeText.configure(text=str(timer))
    window.after(100,startTimer)

def start():
    global running
    runnig = True

def stop():
    global running
    running = False

window =tk.Tk()
running = False

timer=0

timeText=tk.Label(window,text="0",font=("Helvetica",80))
timeText.pack()

startButton=tk.Button(window, text="시작", bg="yellow",command=start)
startButton.pack(fill=tk.BOTH)

stopButton=tk.Button(window, text="그만", bg="yellow",command=stop)
stopButton.pack(fill=tk.BOTH)

startTimer()
window.mainloop()