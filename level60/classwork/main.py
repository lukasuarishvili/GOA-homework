def count_arara(n):
    if n % 2 == 0:
        result = "adak " * (n // 2) 
    else:
        result = "adak " * (n // 2) + "anane" 
    if result.endswith(" "):
        result = result[0:-1]
    return result

