table=[('A','.-'),('B','-...'),('C','-.-.'),('D','-..'),('E','.'),('F','..-.'),('G','--.'),
('H','....'),('I','..'),('J','.---'),('K','-.-'),('L','.-..'),('M','--'),('N','-.'),
('O','---'),('P','.--.'),('Q','--.-'),('R','.-.'),('S','...'),('T','-'),('U','..-'),
('V','...-'),('W','.--'),('X','-..-'),('Y','-.--'),('Z','--..')]

class Tree:
    def __init__(self,element='',left=None,right=None):
        self.element=element
        self.left=left
        self.right=right
        

mos = Tree('',
                Tree('E',
                     Tree('I',
                          Tree('S',
                               Tree('H'),
                               Tree('V')),
                          Tree('U',
                               Tree('F'),
                               Tree(''))),
                     Tree('A',
                          Tree('R',
                               Tree('L'),
                               Tree('')),   
                          Tree('W',
                               Tree('P'),
                               Tree('J')))),
                Tree('T',
                     Tree('N',
                          Tree('D',
                               Tree('B'),
                               Tree('X')),
                          Tree('K',
                               Tree('C'),
                               Tree('Y'))),
                     Tree('M',
                          Tree('G',
                               Tree('Z'),
                               Tree('Q')),
                          Tree('O',
                               Tree(''),
                               Tree('')))))


result=[]

def encoder(s):
    if(len(s)!= 0):
        num=ord(s[0])-65
        result.append(table[num][1])
        new=s[1:]
        encoder(new)
       


def decoder(mos,s,i=0):

    if i==len(s):
        return mos.element
    elif s[i]=='.':
        return decoder(mos.left,s,i+1)
    else:
        return decoder(mos.right,s,i+1)

    

sent=input("입력 문장 : ")
encoder(sent)
print("Morse Code : ", result)

res=''

for i in range(0,len(result)):
    res += decoder(mos,result[i])

print("Decoding : ",res)

