#შექმენით ფუნქცია სახელად manual_difference, რომელიც არგუმენტად მიიღებს ორ sets, ფუნქციამ უნდა იმუშაოს იგივენაირად, როგორც ჩაშენებული ფუნქცია .difference
set1={1,2,3,4}
set2={1}

def manual_difference(set1,set2):

   difrent = set1 - set2
   return difrent

manual_difference(set1,set2)


#1)შექმენით 2 dict სხვადასხვა მოსწავლის ინფრომაციით, ინფორმაციასში უნდა შედიოდეს: ასაკი, საშუალო ქულა, სახელი და გვარი. შემდეგ გამოიტანეთ ორივე მოსწავლის ყველა ინფორმაცია

dict1={
   "name":"nika",
   "age":17,
   "number":14,
   "surname":"svili"
}

dict2={
   "name":"luva",
   "age":16,
   "number":120,
   "surname":"suarish"
}

print(dict1,dict2)