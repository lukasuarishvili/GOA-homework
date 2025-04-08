def double_char(s):
    res=""
    
    for i in s:
        res+=i*2
        
    return res

def get_age(age):
    arr=list(age)
    return int(arr[0])

def feast(beast, dish):
    if beast[0] == dish[0] and dish[-1] == beast[-1]:
        return True
    else:
        return False

def array_plus_array(arr1,arr2):
    x=0
    x1=0
    for i in arr1:
        x=x+i
    for p in arr2:
        x1=x1+p
    
    return x1+x

def solution(number):
    if number<0:
        return 0
    result=0
    for i in range(number):
        if i%3==0 or i%5==0:
            result+=i
    return result