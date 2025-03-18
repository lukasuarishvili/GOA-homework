def solution(text, ending):
    i=0
    for j in ending:
        i+=1
    if  text[-i:]==ending:
        print(i)
        return True 
    
    else : 
        return False
    
def vowel_indices(word):
    res=[]
    counter=1
    for i in word: 
        if i.lower() in " aeiouy":
            res.append(counter)
            counter+=1
        else:
             counter+=1
            
    return res

