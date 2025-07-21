def make_upper_case(s):
    return s.upper()

def repeat_str(r, s):
    return s*r

def no_space(x): 
    return x.replace(" ", "")

def create_array(n):
    res=[]
    i=1
    while i<=n: 
        res+=i
        re+=1
    return res

def maps(a):
    res=[]
    
    for i in a:
        res.append(i*2)
    return res


def basic_op(op, v1, v2):
    if op=="+":
        return v1+v2
    elif op=="-":
        return v1-v2
    elif op=="*":
        return v1*v2
    else:
        return v1/v2
    

def double_char(s):
    res=""
    for i in s:
        res+=i*2
    return res

def bonus_time(salary, bonus):
    if bonus:
        return  "$"+str(salary*10)
    else:
         return  f"${salary}"
    
def monkey_count(n):
    result=[]
    
    for i in range(n+1):
        if i !=0: 
            result.append(i)  
    return result
