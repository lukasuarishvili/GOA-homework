"""# ==== SIMPLE ====

# 1. ლუწი თუ კენტი
num = int(input("შეიყვანე რიცხვი: "))
if num % 2 == 0:
    print("ლუწია")
else:
    print("კენტია")

# 2. ემთხვევა თუ არა არჩეულ რიცხვს (if/else გარეშე)
num = int(input("შეიყვანე რიცხვი: "))
chosen = 7
print(num == chosen)

# 3. ყველა მათემატიკური მოქმედება ორ რიცხვზე
a = 10
b = 3
print("მიმატება:", a + b)
print("გამოკლება:", a - b)
print("გამრავლება:", a * b)
print("გაყოფა:", a / b)
print("ნაშთიანი გაყოფა:", a % b)
print("ხარისხი:", a ** b)
print("მთელი გაყოფა:", a // b)

# 4. სახელი და გვარი კონკატენაცია
name = input("შეიყვანე სახელი: ")
surname = input("შეიყვანე გვარი: ")
print("სრული სახელი:", name + " " + surname)

# ==== MEDIUM ====

# 1. მარტივია თუ არა რიცხვი
num = int(input("შეიყვანე რიცხვი: "))
if num > 1:
    for i in range(2, num):
        if num % i == 0:
            print("არ არის მარტივი")
            break
    else:
        print("მარტივია")
else:
    print("არ არის მარტივი")
"""
# 2. უდიდესი რიცხვი სიიდან (max() გარეშე)
def find_max(numbers):
    j=numbers[0]
    for i in  numbers:
        if i>j:
            j=i
    return j

nums = [10, 25, 7, 90, 3]
print("უდიდესი რიცხვი:", find_max(nums))

# ==== HARD ====

# 1. მარტივი რიცხვების სია 1-დან 30-მდე
def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, n):
        if n % i == 0:
            return False
    return True

primes = [n for n in range(1, 31) if is_prime(n)]
print("მარტივი რიცხვები 1-დან 30-მდე:", primes)

# ==== VERY HARD ====

# კალკულატორი ფუნქცია
def calculator(a, b, operator):
    if operator == '+':
        return a + b
    elif operator == '-':
        return a - b
    elif operator == '*':
        return a * b
    elif operator == '/':
        if b != 0:
            return a / b
        else:
            return "ნულზე გაყოფა არ შეიძლება"
    else:
        return "არასწორი ოპერაცია"

a = float(input("შეიყვანე პირველი რიცხვი: "))
b = float(input("შეიყვანე მეორე რიცხვი: "))
op = input("შეიყვანე ოპერაცია (+, -, *, /): ")
print("შედეგი:", calculator(a, b, op))
