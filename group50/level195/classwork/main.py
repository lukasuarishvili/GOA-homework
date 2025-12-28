# მომხმარებელს შემოაყვანინეთ ორი რიცხვი, პროგრამამ უნდა სცადოს რიცხვების წაკითხვა და მათი ერთმანეთზე გაყოფა, თუ მომხმარებელი შეიყვანს სტრინგს ან სხვა რაიმე ტიპის მონაცემს გამოიტანეთ შესაბამისი ერორი, თუ შეცდომა არ მოხდა დაიბეჭდოს გაყოფის შედეგი, და ნებისმიერ შემთხვევაში ასევე დაიბეჭდოს "პროგრამამ დაასრულა მუშაობა"


try:
    inp1= int(input("num1: "))
    inp2= int(input("num2: "))

    res= inp1/inp2

    print("Dasrulda")

except ZeroDivisionError:

    print("Cant divaide by zero dasrulda")

except ValueError:
    print("Cant use strings\ndasrulda")