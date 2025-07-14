#task1
arr=["ა","ე","ი","ო","უ","ფ","დ","ჯ"]
print(arr[0:5:])

#task2
arr=[15,34,90,135,35,120,145,150,185,35,65,]

for i in range(len(arr)):
   if  arr[i]%3==0 and arr[i]%5==0:
      i="good"
      print(i)
else:
    print(arr[i])
       
#task3

arr=[1 , 4 ,"h" , 7 , "j" , 6 ,"r" ]

print(str(arr))
  
#task4
arr="#######"

for i in range(4):
    print(" "*i+arr)
  
#task5

age=int(input("how old are you? "))

if age>12 :  print("შენ არ ხარ 12 წლის")  

else:print  ("შენ ხარ თორმრტი წლის ან ნაკლები ")

