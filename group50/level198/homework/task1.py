# 1) მოცემულია სია nums = [1, 2, 3, 4, 5], map-ის და lambda-ს გამოყენებით მიიღე ახალი სია სადაც თითოეული რიცხვი გამრავლებულია 3-ზე

nums = [1, 2, 3, 4, 5]

newList=[]
map(lambda num:newList.append(num*3) ,nums )
