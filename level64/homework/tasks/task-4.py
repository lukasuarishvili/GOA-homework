"""
✅ დავალება 4:
შექმენი class Rectangle, რომელსაც ექნება width და height.
დაუმატე ფუნქცია area, რომელიც დააბრუნებს ფართობს.
"""

class Rectangle:
    
    def __init__(self, width ,height):
        self.width=width
        self.height=height

    def area(self):
        return self.width*self.height
    
Rectangle_1=Rectangle(10,10)
Rectangle_2=Rectangle(30,10)

print(Rectangle_1.area())
print(Rectangle_2.area())


                