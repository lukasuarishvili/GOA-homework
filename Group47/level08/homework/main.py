#task1

age= int(input("whats you're age? "))

k=13<age<19  
print(k)

#task2
score=int(input("what did you get on the exam?"  ))

is_A= score>=9
is_b=score>=8 and score<9
is_C=score>=7 and score<8
is_D=score>=6 and score<7
is_F=score<6

print(is_A)
print(is_b)
print(is_C)
print(is_D)
print(is_F)

#task3
a=1<2
b=1>2
print(a or b)
print(a and b)
print(a or a)
print(b or b)
print(b and b)
print(a and a)

#task4

a=1
a>b
a<b
a==b
a>=b
a<=b
a!=b

#task5
a=3
b=2
c=1
is_a_greatest=  b<a>c
is_b_middle= a<b>c
is_c_least= a>c<b