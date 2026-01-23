print(" "*60 +"whelcome to the bank")

chose= input(" "*52 +"do you want to register or login ? ").strip()

def register():
    try:
        username = input(" "*50 +"Enter you're name: ")
        password = int(input(" "*50 +"Enter you're password: "))
    except ValueError:
        print(" "*50 +"input a correct info")
        register()

    with open("level201/classwork/text1.txt", "w") as users:
        users.write(f"username:{username}  password:{password} \n")

def Login():
    try:
        username = input(" "*50 +"Enter you're name: ")
        password = int(input(" "*50 +"Enter you're password: "))
    except ValueError:
        print(" "*50 +"input a correct info")
        register()

    logedIn=False

    with open("level201/classwork/text1.txt", "r") as users:
        xazebi= users.readlines()

    for i in xazebi:
        if username in i and str(password) in i:
            logedIn=True

    if logedIn:
        print("yes")
    else:
        print("false")
 

if chose=="register":
    register()
elif chose=="login":
   Login()


