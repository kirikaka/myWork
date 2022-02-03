class vehicle():
    def __init__(self, make,model, color,price):
        self.make=make
        self.model=model
        self.color=color
        self.price=price

    def setMaker(self,make):
        self.make=make

    def getMake(self):
        return self.make

    def show(self):
        print( "차량=("+str(self.make)+","+str(self.model)+","+str(self.color)+","+str(self.price)+")")


class Truck(vehicle):
    def __init__(self,make,model,color,price,payload):
        super().__init__(make,model,color,price)
        self.payload=payload

    def setPayload(self,payload):
        self.payload=payload

    def getPayload(self):
        return self.payload

    def show(self):
        super().show()
        return str(self.payload)

myTruck=Truck("Bens","S-Class","Blue","1억",1500)
myTruck.setMaker("Benz")
myTruck.setPayload(4500)
print(myTruck.show())