def count_arara(n):
    if n % 2 == 0:
        result = "adak " * (n // 2) 
    else:
        result = "adak " * (n // 2) + "anane" 
    if result.endswith(" "):
        result = result[0:-1]
    return result

nums=[x*2 for x in range(10)]
print(nums)
