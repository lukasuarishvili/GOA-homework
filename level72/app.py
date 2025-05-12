"""
დაწერე ფუნქცია, სადაც იქნება 1-დან 30-მდე რიცხვების სია. შემდეგ გაფილტროს ეს სია და ახალ სიაში მოხვდეს ისეთი რიცხვები რომლებიც არის მარტივი. (20 ქულა)
"""
list =[i for i in range(1, 31)]

def find_primes(list):
    primes = []
    primes.append(2)
    for num in list:
        if num%2==0 and num%3==0 and num==1 :
            list.remove(num)   
        elif num%3==0:
            list.remove(num)     


    return list

print(find_primes(list))

