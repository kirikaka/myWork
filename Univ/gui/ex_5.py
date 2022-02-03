from tkinter import *

def donothing():
    filewin = Toplevel(top)
    button=Button(filewin, text="Do nothing Button")
    button.pack()

top=Tk()
menubar=Menu(top)

# lb1=Listbox(top)
# lb1.insert(1,"python")
# lb1.insert(2,"C++")
# lb1.insert(3,"JAVA")
# lb1.insert(4,"PHP")

# lb1.pack()
# top.mainloop()

filemenu=Menu(menubar,tearoff=0)
menubar.add_cascade(label="File",menu=filemenu)
filemenu.add_command(label="New", command=donothing)
filemenu.add_command(label="Open", command=donothing)
filemenu.add_command(label="Save", command=donothing)
filemenu.add_command(label="Save as..", command=donothing)
filemenu.add_command(label="Close", command=donothing)
filemenu.add_separator()
filemenu.add_command(label="Exit",command=donothing)

editmenu=Menu(menubar,tearoff=0)
menubar.add_cascade(label="Edit",menu=editmenu)
editmenu.add_command(label="Undo", command=donothing)
editmenu.add_separator()
editmenu.add_command(label="Cut", command=donothing)
editmenu.add_command(label="copy", command=donothing)
editmenu.add_command(label="Paste", command=donothing)
editmenu.add_command(label="Delete", command=donothing)
editmenu.add_command(label="Select All",command=donothing)


helpmenu=Menu(menubar,tearoff=0)
menubar.add_cascade(label="Help",menu=helpmenu)
helpmenu.add_command(label="Index", command=donothing)
helpmenu.add_command(label="About...", command=donothing)

top.config(menu=menubar)
top.mainloop()