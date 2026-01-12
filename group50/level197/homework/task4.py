# 4) მოცემულია სია numbers = [2, 3, 4, 5, 7], lambdaს გამოყენებით სიის ყველა წევრი გაამრავლე საკუთარ ინდექსებზე და შემდეგ ჩაამატე ეს რიცხვები ახალ ცარიელ ლისტში

numbers = [2, 3, 4, 5, 7]

cvladi= lambda numList:  [i *numbers.index(i)  for i in numList ]

print(cvladi(numbers))
