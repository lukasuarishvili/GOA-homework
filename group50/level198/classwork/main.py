# ; map ფუნქციის და lambdaს გამოყენებით ლისტის ყველა ელემენტი აქციე uppercaseებად. names = ["nika", "ana", "aleqsandre', "daviti", "gabrieli", "luka"]

names = ["nika", "ana", "aleqsandre", "daviti", "gabrieli", "luka"] 

names= list(map(lambda name: name.upper(), names ))

print(names)


