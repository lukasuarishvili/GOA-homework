def is_palindrome(s):
    l = s[::-1]
        
    if l.capitalize()==s.capitalize():
        return True
    else:
        return False
    
def bonus_time(salary, bonus):
    if bonus:
        return  "$"+str(salary*10)
    else:
         return  f"${salary}"
    
def min_max(lst):
    result=[min(lst),max(lst)]

    return result