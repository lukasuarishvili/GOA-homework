# 3) მოცემულია words = ["hi", "hello", "world"], შექმენი lambda რომელიც აბრუნებს სტრინგების სიგრძეს

words = ["hi", "hello", "world"]

length= lambda word :  len(word)

for i in words:
    print(length(i))