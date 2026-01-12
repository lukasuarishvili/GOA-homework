# 2) მოცემუმლია სია numbers = [1, 2, 3, 4, 5, 6], lambdaს გამოყენებით ახალ სიაში ჩაამატე მხოლოდ ლუწი რიცხვები

numbers = [1, 2, 3, 4, 5, 6]


luwi= lambda numList : [ i  for i in numList if i %2==0 ]  
print(luwi(numbers))