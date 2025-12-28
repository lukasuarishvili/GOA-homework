# 1) მოცემულია სია: nums = [10, 20, 30], მომხმარებელს შეაყვანინე ინდექსი და დაბეჭდე შესაბამისი ელემენტი. თუ ინდექსი არ არის რიცხვი გამოიტანე ერორი, თუ ინდექსი სცდება სიის ზომას გამოიტანე ერორი, თუ ყველაფერი სწორია დაბეჭდე ელემენტი, ნებისმიერ შემთხვევაში დაბეჭდე "შემოწმება დასრულდა"

nums = [10, 20, 30]

try:
    user_inp= int(input("Enter a index: "))
    print(nums[user_inp])
except ValueError:
    print("erroe value type")

except IndexError:
    print("Erorr index type")

finally:
    print("შემოწმება დასრულდა")




# 2) მომხმარებელს შეაყვანინე ასაკი. თუ ასაკი არ არის რიცხვი გამოიტანე ერორი, თუ ასაკი უარყოფითია გამოიტანე შეცდომა (ValueError), თუ ყველაფერი სწორია დაბეჭდე "ასაკი მიღებულია".

try:
    UserAge= int(input("Enter you're age:"))

    if UserAge <0:
        raise ValueError
    
    print("age acepted")

except ValueError:
    print("must be integer or a positive ")




# 3) მომხმარებელს შემოაყვანინე პაროლი, პაროლი უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს, უნდა შეიცავდეს რიცხვს, არ უნდა შეიცავდეს space,წესის დარღვევა -> valueError, წარმატება -> "პაროლი მიღებულია", საბოლოოდ გამოიტანე "შემოწმება დასრულებულია"

try:
    userPassword= input("Enter you password: ")

    if len(userPassword) < 8 :
        raise ValueError
    
    if  " " in userPassword:
        raise ValueError
    
    hasNumber= False

    for i in userPassword:
        if i in "1234567890":
            hasNumber = True
    

    if not hasNumber:
        raise ValueError
    
    print("პაროლი მიღებულია")

except ValueError:
    print("Error")

finally:
    print("შემოწმება დასრულებულია")


# 4) მომხმარებელს შემოაყვანინე 5 მნიშვნელობა, რომელსაც დაამატებ სიაში. თუ შემოყვანილი მნიშვნელობა არ არის რიცხვი დაბეჭდე ერორი, თუ რიცხვი უარყოფითია -> valueError, თუ ყველაფერი კარგადაა გამოითვალე სიაში მყოფი რიცხვების საშუალო არითმეტიკული, საბოლოოდ დაბეჭდე "რიცხვების დამუშავება დასრულებულია"


nums = []

for i in range(5):
    try:
        x = int(input("Enrer a num: "))

        if x < 0:
            raise ValueError

        nums.append(x)

    except ValueError:
        print("error")

if nums:
    print( f"საშუალო:  {sum(nums) / len(nums)}")

print("რიცხვების დამუშავება დასრულებულია")