"""age=15

def main(age):
    age=str(age)
    if age==0:
        return 0
    else:
        for i in age:
            
main(15)
"""

def main(age):
    if age == 0:
        return "0"
    
    Shedegi = ""
    number = age 
    
    while number > 0:
        Shedegi = str(number % 2) + Shedegi
    
        number = number // 2
        
    
    print(Shedegi) 


main(31)