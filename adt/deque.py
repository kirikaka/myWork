class Deque:
    Default_CAPACITY=10
    def __init__(self,data,size,front,back):

        self.data=[None]*Deque.Default_CAPACITY
        self.size=size
        self.front=0
        self.back=(self.front+self.size-1)%len(self.data)

    def _len(self):
        return self.size
    
    def is_empty(self):
        return self.size==0

    def first(self):
        return self.data[self.front]

    def resize(self,cap):
        old=self.data
        self.data=[None]*cap
        walk=self.front
        for k in range(self.size):
            self.data[k]=old[walk]
            walk=(1+walk)%len(old)
        self.front=0



    def add_first(self,e):
        if self.size==len(self.data):
            self.resize(2*len(self.data))
        self.front=(self.front-1)%len(self.data)
        self.data[self.front]=e
        self.size+=1

        

    def add_last(self,e):
        if self.size==len(self.data):
            self.resize(2*len(self.data))
        avail=(self.front+self.size)%len(self.data)
        self.data[avail]=e
        self.size+=1



    def delete_first(self):
        if self.is_empty():
            raise Empty("Que  is Enque")
        ret=self.data[self.front]
        self.data[self.front]=None
        self.front=(self.front+1)%len(self.data)
        self.size-=1
        return ret

        

    def delete_laset(self):
        if self.is_empty():
            raise Empty("Que  is Enque")
        ret=self.data[self.back]
        self.data[self.back]=None
        self.back=(self.back-1)%len(self.data)
        self.size-=1
        return ret

    