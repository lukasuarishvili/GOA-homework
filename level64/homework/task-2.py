"""
დავალება 2:
შექმენი class Student, რომელსაც ექნება name, age, და grade.
დაუმატე ფუნქცია is_passing, რომელიც დააბრუნებს True თუ grade > 5, სხვა შემთხვევაში False.

"""

class Student :
    def __init__(self, name,  age,grade):
        self.name=name
        self.age=age
        self.grade=grade
    
    def is_passing(self):
        if  self.grade> 5:
            return True
        else:
            return False

student_1=Student("luka", 10, 10)
student_2=Student("lado" ,10 , 2)

print(student_1.is_passing())
print(student_2.is_passing())
