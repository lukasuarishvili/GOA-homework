# 5) nums = [9, 2, 7, 4, 5, 6, 1], დატოვე მხოლოდ კენტი რიცხვები დაა დაალაგე ზრდადობით

nums = [9, 2, 7, 4, 5, 6, 1]


cvladi= lambda numLust : filter( lambda num: num if num%2==1 else None, sorted(numLust))


print(list(cvladi(nums)))