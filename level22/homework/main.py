#task1------------?

names=["luka","davita","gio","nika","olak","luka"]
counter=0
for i in names:
   print(i)
   if names[i]=="luka":
      counter+=1
print(counter)


#task2
arr=[3,2,5,7,8,5,4,3,2,1,5,6,7,3,4,45,65,3,23,]
new_arr=arr[-1:1:-1]
print( new_arr )

#task3
list_of_numbers=[1,2,3,4,]

for i in range(len(list_of_numbers)):
   print(list_of_numbers)

#task4
arr=["python","java","css","c++","c#"]
print(arr)
arr.insert(4,'javascript')
print(arr)

#task5

arr=[1,2,3,4,6,5,7,8,9,3,3,8,5,1,5,8,6,3,2,8,5,3,5,7,9,0,0,8,7,6,8,]

print(arr.count(5))

print(arr)

arr.remove(5)

print(arr)