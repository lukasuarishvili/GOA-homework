# მოცემულია რიცხვების სია: numbers = [1, 2, 3, 4, 5]. შექმენი lambda რომელიც ამ რიცხვებს გაამრავლებს 2-ზე. გამოიყენე for ციკლი რათა ახალ ლისთში ჩაამატო უკვე ორზე გამრავლებული რიცხვები.

numbers = [1, 2, 3, 4, 5]

newList=[]
cvladi= lambda numList: [newList.append(i*2) for i in numList ]

cvladi(numbers)

print(newList)


