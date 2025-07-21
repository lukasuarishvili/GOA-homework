"""
✅ დავალება 3:
შექმენი class Dog, რომელსაც ექნება name და age.
და დაუმატე ფუნქცია bark, რომელიც დაბეჭდავს "Woof!".
"""

class Dog:
    def __init__(self , name ,age):
        self.name=name
        self.age=age

    def bark(self):
        print("woof")


dog_1=Dog("###", 3)

dog_2=Dog("@@@", 5)

dog_1.bark()
dog_2.bark()