# 3) მოცემულია სია nums = [1, 2, 3, 4, 5, 6], filter -> map ის გამოყენებით დატოვე ლუწი რიცხვები და თითოეული გაამრავლე 2-ზე

nums = [1, 2, 3, 4, 5, 6]


print(list(  map( lambda num: num*2   ,filter( lambda num: num%2==0 , nums))))

