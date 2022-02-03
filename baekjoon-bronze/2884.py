h, m = map(int, input().split())
if(m < 45):
    if(h == 0):
        h = 23
        m = m+15
    else:
        h = h-1
        m = m+15
elif(m > 44):
    m = m-45

print(h, m)
