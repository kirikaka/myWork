class Person():
    def __init__(self,name,id):
        self.name=name
        self.id=id

class Student(Person):
    def __init__(self,name,id):
        super().__init__(name,id)
        self.grade=0.0
        self.lecture=[]

    def setLec(self,lecture):
        self.lecture.append(lecture)

    def __str__(self):
        return "\n이름 ="+self.name+"\n주민번호 = "+self.id+"\n수강과목 = "+str(self.lecture)+"\n학점 = "+str(self.grade)

class Professor(Person):
    def __init__(self,name,id):
        super().__init__(name,id)
        self.teaching=[]
        self.salary=300

    def setTeach(self,teaching):
        self.teaching.append(teaching)
         
         
    def __str__(self):
        return "\n이름 ="+self.name+"\n주민번호 = "+self.id+"\n강의과목 = "+str(self.teaching)+"\n봉급 = "+str(self.salary)


hong=Student("홍길동","1861")
hong.setLec("JAva")
print(hong)


kim=Professor("김철수","16516")
kim.setTeach("Python")
print(kim)    