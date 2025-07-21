#Task-3
def series_sum(n):
    result = 0
    for i in range(n):
        result += 1 / (3 * i + 1)
    if len(str(round(result, 2))) == 3:
        return str(round(result, 2)) + "0"
    elif n == 0:
        return "0.00"
    return str(round(result, 2))

