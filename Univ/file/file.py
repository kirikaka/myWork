

infilename=input(print("입력 파일 이름 : \n"))
out_filename=input(print("출력 파일 이름 : "))

infile=open(infilename, "r")

out_file=open(out_filename, "w")

s=infile.read()
out_file.write(s)

infile.close()
out_file.close()
out_file=open(out_filename, "r")
outfile1=out_file.read()
print(outfile1)

out_file=open(out_filename, "w")
out_file.write("21q31234dff\n")
out_file.close
out_file=open(out_filename, "r")
out_file=out_file.read()
print(out_file) 

