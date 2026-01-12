# 2) filter ფუნქციის და lambdaს გამოყენებით შექმენი ახალი სია და ახალ სიაში ჩაამატე მხოლოდ ის სიტყვები რომელთა სიგრძეც მეტია 4-ზე.  names = ["nika", "ana", "aleqsandre', "daviti", "gabrieli", "luka"]


names = ["nika", "ana", "aleqsandre", "daviti", "gabrieli", "fisxela"]



axaliSia= list(filter(lambda name: len(name)>4  , names))

print(axaliSia)




