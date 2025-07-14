
"""Week 2: Guess the Number Game
Skills: Random module, loops, conditionals.
Description: The program randomly selects a number, and the user guesses it. Give feedback if the guess is too high or too low.
Bonus: Add difficulty levels with different number ranges.
"""

from random import randint

def Main():
    print("#"*174)
    print(" "*65 + "welcome to the number guessing game")
    print(" "*70+"do you want to play? y/n")
    user_input = input(" "*80+ "> ")

    if user_input.upper() == "YES" :
        print(" "*174)
        print("#"*174)
        print(" "*174)

        game_interface() 
    else:
        print(" "*80+"goodbye")
        print("#"*174)
        quit()
        



def game_interface():
    print(" "*73+"choose the difficulty:")
    print(" "*80+"1.easy")
    print(" "*80+"2.mid")
    print(" "*80+"3.hard")
    user_input1=input(" "*82+">")
    print(" "*174)
    print("#"*174)

    
    if user_input1=="1":
        a=1
        b=10
        num=rundom_num(a,b)
        guss_count=3
        print("your job is to guss the number between "+str(a)+" and "+str(b))
        print("you have "+str(guss_count)+" guess")
        print("can you do it?")
        
        game(num,guss_count)


    elif user_input1=="2":
        a=1
        b=15
        num=rundom_num(a,b)
        guss_count=5
        print("your job is to guss the number between "+str(a)+" and "+str(b))
        print("you have "+str(guss_count)+" guess")
        print("can you do it?")

        
        game(num,guss_count)

    elif user_input1=="3":
        a=1
        b=20
        num=rundom_num(a,b)
        guss_count=7
        print("your job is to guss the number between "+str(a)+" and "+str(b))
        print("you have "+str(guss_count)+" guess")
        print("can you do it?")
        game(num,guss_count)

    else:
        print(" "*74+"not a valid options")
        print("#"*174)
        print(" "*174)

        game_interface()

def game(num,guss_count):
    i=0
    
    while i<=guss_count:
    
        user_input=input("take a guess: ")
        if int(user_input)==num:
            print("good job")
            quit()
        elif int(user_input)>num :
            
            print("to high"+str(guss_count-i)+" guessis left")
            
        elif int(user_input)<num :
            1
            print("to low"+str(guss_count-i)+" guessis left")

            
        i=i+1

def rundom_num(a,b):
    num=randint(a,b)
    return num

Main()