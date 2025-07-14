#task2


#2)შექმენი ფაილი სადაც გამოიყენებ ყველა set ფუნქციას(.clear, .set) და ასე შემდეგ
set={1,2,3,4,235,6,7,8,9}
set1={1,12,52,63,2,24,34,73,382,24,9}
set.clear()
set.add(1)
set.add(2)
set.add(3)
both_set=set.union(set1)
difrent=set1.difference(set)
print(set)
print(both_set)
print(difrent)



#task3
#3)შექმენი dictionary შენს შესახებ, შემდეგ გამოიტანე მხოლოდ key

dict={
    "key":"valiu",
    "name":"surname",
    "age":"number"
}
print(dict.keys())
#task4
#4)შექმენი dictionary შენს შესახებ, შემდეგ გამოიტანე მხოლოდ value

dict={
    "key":"valiu",
    "name":"surname",
    "age":"number"
}
print(dict.values())

#task5
#5)შექმენი ფუნქცია AddToDatabase, რომლესაც არგუმენტად გადაეცემა სახელი, გვარი და ასაკი, შემდეგ ეს ინფორმაცია უნდა დააბატოთ dictionaryს და გამოიტან
dict={}

def AddToDatabase(name,age,surname):
    dict.update({"age":age},)
    dict.update({"surname":surname})
    dict.update({"name":name})
    print(dict)

AddToDatabase("luka", 15,"suar")



    