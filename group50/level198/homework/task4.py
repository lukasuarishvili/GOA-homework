# 4) მოცემულია სია nums = [1, 2, 3, 4, 5, 6], filter -> map ის გამოყენებით აიყვანე ყველა რიცხვი კვადრატში და დატოვე მხოლოდ ის რიცხვები რომლებიც მეტია 20-ზე 


nums = [1, 2, 3, 4, 5, 6]

print(list(filter(lambda x : x  if x>20  else None , map( lambda x : x**2, nums))))