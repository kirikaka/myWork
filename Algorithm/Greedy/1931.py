#다시하기 - 힌트봤음
#그리디

n= int(input())
meeting=[]
for i in range(n):
    x=list(map(int,input().split()))
    meeting.append(x)
meeting.sort(key=lambda x:x[0])
meeting.sort(key=lambda x:x[1])


count=1
end=meeting[0][1]
for i in range(1,n):
    if meeting[i][0]>=end:
        count+=1
        end=meeting[i][1]
        
print(count)

    

