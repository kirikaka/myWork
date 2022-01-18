class Money:
    def __init__(self,dollar,Yan,euro):
        self.dollar=dollar
        self.Yan=Yan
        self.euro=euro

    def flow(self):
        self.dollar=1200



    def __str__(self):
        msg="달러 :"+str(self.dollar)+" 엔 :"+str(self.Yan)+" 유로 : "+str(self.euro)
        return msg


day1=Money(1400,140,1900)

print(day1)
day1.flow()
print(day1)