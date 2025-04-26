from termcolor import *

class Person:
    def __init__(self , name , surname , father_name):
        self.name = name
        self.surname = surname
        self.father_name = father_name

    def __str__(self):
        return f'{self.name} {self.surname} {self.father_name}'
    
Person_1=Person("data", "tutashxia", "arqipo")
Person_2=Person("mushni" , "zarandia" , "segedi")
print(Person_1, Person_2 )

class catt:
    def __init__(self, name):
        super().__init__()
        self.name = name

    def __str__(self):
        return f'{self.breed}'
    
    def meow(self):
        return f'{self.name} meow !'
    

class dog(catt):
    def __init__(self, name):
        super().__init__(name)
        self.name = name

    def __str__(self):
        return f'{self.name}'
    
    def say(self):
        return f'{self.name} meow!'
    
dog_1 = dog("data")
dog_2 = dog("mushni")
print(dog_1.say() , dog_2.say())