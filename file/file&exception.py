infile=open("file reading.txt","r", encoding='UTF8')
for line in infile:
    line =line.rstrip()
    print(line)
infile.close()