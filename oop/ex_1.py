class Car:
    def __init__(self,speed):
        self.speed=speed

    def drive(self):
        self.speed=60

myCar=Car(5)
myCar.drive()
myCar.color="blue"
myCar.model="Benz"
print(myCar.color)
print(myCar.model)


print(myCar.speed)
myCar1=Car(65)
print(myCar.color)
print(myCar.model)

print(myCar1.speed)