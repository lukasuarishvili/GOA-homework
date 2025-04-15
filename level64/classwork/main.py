
class Mycat:
    cata = "💵"

name=Mycat.cata

print(name)  



class Human:
    def __init__(self, name, surname ,age):
        self.name = name
        self.surname = surname
        self.age =age

    def __str__(self):
        return f"{self.name} {self.surname} {self.age}"
    
    def Myage(self):
        
        return f"Shen xar {self} wlis"
    
    def myname(self):
        return f"shen gqvia{self}"
    
__name__= "data"

__age__="33"

__surname__ = "tutashxia"

print( Human.Myage(__age__), Human.myname(__name__))