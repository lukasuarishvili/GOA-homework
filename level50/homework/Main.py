def open_or_senior(data):
    res=[]
    for i in data:
        if i[0]>=55 and i[-1]>7:
            res.append("Senior")
        else:
            res.append("Open")
            
    return res

def is_triangle(a, b, c):
    if a ==0 or b==0 or c==0 :
        return False
    elif a+b<=c:
        return False
    elif a+c<=b:
        return False
    elif c+b<=a:
        return False
    else:
        return True
    
def lovefunc( flower1, flower2 ):
    if flower1%2==0 and flower2%2!=0:
        return True
        
    elif flower1%2==0 and flower2%2==0:
        return False
    elif flower2%2==0 and flower1%2!=0:
        return True
    
    
    else:
        return False
    
        

def bmi(weight, height):
    a= height * height
    b=weight
    bmi = b/a
    
    
    if bmi <= 18.5 :
        return "Underweight"
    elif bmi <= 25.0:
        return "Normal"
    elif bmi <= 30.0:
        return "Overweight"
    else:
        return "Obese"


def grow(arr):    
    
    mult = 1    
    for i in arr:       
     mult *= i    


