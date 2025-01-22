#number guessing game
import random

def Main():
   answer=input("do you want to play number a guessing game? ")
   if answer=="yes" or "Yes" or "YES":
       game()
   else:
       quit()
       

def game():

    number = random.randint(1, 10)

    guss_limit=3
    guess_counter=0
    while  guss_limit>guess_counter:
        guees=int(input(" guess the number between 1 and 10 ? " ))
        if guees==number:
            print("good job")
            break
        else: print("try agan")
        guess_counter+=1

Main()