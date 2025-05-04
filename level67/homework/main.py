#task-1
class Dog():
    def __init__(self, name, age):
        self.name=name
        self.age=age

    def __str__(self):
        return f"{self.name} {self.age}"

test_1=Dog("!!!", "@@@")
test_2=Dog("$$$","&&&")
print(test_1 ,test_2)        

#task-2
class Car():
    def drive(self):
        return f"The car is driving"
    
    def stop(self):
        return f"The car has stopped"
    

test_3=Car()
test_4=Car()
print(test_3.drive())
print(test_4.stop())

#task-4
class Student():
    def __init__(self , full_name, grade , subject):
        self.fullname=full_name
        self.grade=grade
        self.subject=subject

    def introduce(self):
        print(f"My name is {self.fullname}, I study {self.subject} and my grade is {self.grade}.")

test_5=Student("!!!", 10, "###" )
test_5.introduce()

#task-3
class Circle():
    def __init__(self , radius):
        self.radius=radius

    def area(self):
        return 3.14*(self.radius**2)
test_6=Circle(10)

print(f"{int(test_6.area())}sm")

#task-5
class BankAccount():
    def __init__(self, balance):
        self.balance=balance
        
    def deposit(self ,amount):
        self.balance+=amount
        return f"youre balance is {self.balance}"
    
    def withdraw(self,amount):
        if amount >self.balance:
            return f"not enofe money" 
        else:
            self.balance-=amount
            return f"youre balance is {self.balance}"

test_7=BankAccount(700) 
test_8=BankAccount(700)
print(test_7.deposit(300))
print(test_8.withdraw(800))