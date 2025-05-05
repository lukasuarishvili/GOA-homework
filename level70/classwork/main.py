x='hello world'
y="hello world"
print(id(x)   == id(y))

list=[1,2,3,4,5]

list=[id(i) for i in range(10)  ]
print(list)



class Card(): 
    def __init__(self, name, surname, age):
        self.name=name
        self.surname=surname
        self.age=age
    
    def __str__(self):
        return f"{self.name, self.surname, self.age}"
test_1=Card("!!!" ,"@@@" ,20)
print(test_1)


num=0

while num<10:
    print(f"Goa best")
    num+=1