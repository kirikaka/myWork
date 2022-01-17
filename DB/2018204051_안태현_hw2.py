
text1,text2=input("조인할 파일 2개를 입력하세요 : ").split()
how_to_join=int(input("조인 방법을 선택하세요(1. Nested loop 2. Block Nested Loop) : "))
col1,col2=map(int,input("조인할 각 컬럼 값들을 입력하세요 : ").split())
block_cap=int(input("한 블록 내의 투플 개수를 입력하세요 : "))
save_txt=input("출력할 파일명을 입력하세요 : ")

new_file=open(save_txt,'w')

lines1=[]
with open(text1,'r') as f:
    line=None
    while line !='':
        line=f.readline()
        lines1.append(line.strip('\n'))

for i in range(len(lines1)):
    lines1[i]=lines1[i].split(' ')
lines1=lines1[1:501]

lines2=[]
with open(text2,'r') as f:
    line=None
    while line !='':
        line=f.readline()
        lines2.append(line.strip('\n'))

for i in range(len(lines2)):
    lines2[i]=lines2[i].split(' ')
lines2=lines2[1:501]


new_lines1=[]
new_lines2=[]
for i in range(len(lines1)):
    new_lines1.append(lines1[i][col1-1])
for i in range(len(lines2)):
    new_lines2.append(lines2[i][col2-1])


result=[]
block_access=0
row_num=0



if how_to_join == 1:
    blocks_1=len(new_lines1)%block_cap
    blocks_2=len(new_lines2)%block_cap
    if blocks_1 !=0:
        blocks_1=len(new_lines1)//block_cap+1
        blocks_2=len(new_lines2)//block_cap+1
    else:
        blocks_1=len(new_lines1)//block_cap
        blocks_2=len(new_lines2)//block_cap
    block_access=(blocks_1*blocks_2)+blocks_1
    for i in range(len(new_lines1)):
        for j in range(len(new_lines2)):
            if new_lines1[i]==new_lines2[j]:
                row_num=row_num+1
                result.append(lines1[i]+lines2[j])
elif how_to_join == 2:
    blocked_lines1=[]
    blocked_lines2=[]

    for i in range(0,(len(new_lines1)//block_cap+1)):
        blocked_lines1.append(new_lines1[(block_cap*i):(i*block_cap)+block_cap])
    for i in range(0,(len(new_lines2)//block_cap+1)):
        blocked_lines2.append(new_lines2[(block_cap*i):(block_cap*i)+block_cap])
    block_access=len(blocked_lines2)*len(blocked_lines1)+len(blocked_lines1)
    for i in range(0,len(blocked_lines1)):
        for j in range(0,len(blocked_lines2)):
                for a in range(len(blocked_lines1[i])):
                    for b in range(len(blocked_lines1[j])):
                        if blocked_lines1[i][a]==blocked_lines2[j][b]:
                            row_num=row_num+1                        
                            result.append(lines1[i]+lines2[j])
            
                
result=sum(result,[])

for i in range(len(result)):
    new_file.write(result[i]+" ")


print("Result rows : " , row_num)
print("블록의 접근횟수 : " ,block_access)

#인풋파일 2개 같은 포러에 일부러 넣어둠