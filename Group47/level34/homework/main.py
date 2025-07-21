#task 1 
# შექმენით tuple, საიდანაც დაპრინტავთ პირველ ორ ელემენტს 
books=("harry poter", "lotr", "silmarilion")

print(books[1],books[0])

#task 2
# numbers = (2, 56, 99, 22, 15, 23, 66, 11, 134, 23, 66, 91, 22, 2, 23)
# numbers tuple-ში დაპრინტეთ რამდენჯერ მეორდება ციფრი 23 count-ის გამოყენებით

numbers = (2, 56, 99, 22, 15, 23, 66, 11, 134, 23, 66, 91, 22, 2, 23)

def numbers_tuple():
    print(numbers.count(23))

numbers_tuple()


#task 3
#aura = (10, 25, 5, 80, 70, 20) 
#aura tuple-დან for loop-ის გამოყენებით დაბეჭდეთ მხოლოდ 10-ზე დიდი რიცხვები
aura = (10, 25, 5, 80, 70, 20)
def aura_tuple():
    for i in aura:
        if i >10:
            print(i)

aura_tuple()


#task4
#კომენტარის სახით ახსენით, რა განსხვავებაა list-სა და tuple-ს შორის
# list-ის შეცვლა შესაძლებელი და tuple-ს არრ არის შესაძლებელი 
# list-[] და tuple-()

#task5
# კომენტარის სახით ახსენით, რას ნიშნავს immutable და mutable
# immutable-ნიშნავს რომ მისი თავდაპირველი შექმნის შემდეგ მისი შეცვლა აღარრ არის შესაძლებელი.
# mutable-ნიშნავს რომ მისი თაცდაპირველი შექმნის შემდეგ შეგილი შეცვალო: გაზარდო(append) , ამოიღო(pop) და აშ. 
