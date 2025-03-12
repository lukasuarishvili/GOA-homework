
"""(MEDIUM) 
მომხმარებელს შემოატანინე რიცხვი. თუ ეს რიცხვი არის მარტივი მაშინ დაპრინტოს რომ მარტივია. თუ არ არის მარტივი მაშინ დაიპრინტოს რომ არ არის. (15 ქულა)"""
 

x=int(input("num:"))


def prime(x):
    if x <2:
        return False
    for i in range(2,x):
        if x%i==0:
            return False
    else:
        return True
        
    
if prime(x) :
    print("არის მარტივი ")
else:
    print(" არ არის მარტივი ")