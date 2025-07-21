def vowel_one(s):
    res=""
    
    for i in s :
        if i.lower() in "aeiou":
            res+="1"
            
        else:
            res+="0"
            
    return res

print(vowel_one(f"hello world"))

def count_letters_and_digits(s):
    counter=0
    
    for i in s.lower():
        if i in "asdfghjklqwertyuiopzxcvbnm1234567890":
            counter+=1
    return counter

print( count_letters_and_digits(f"hello world123-/"))




def solution(text, ending):
    i=0
    for j in ending:
        i+=1
    if  text[-i:]==ending:
        print(i)
        return True 
    
    else : 
        return False
    
print(solution(f"i am you're father , ","falce"))



            