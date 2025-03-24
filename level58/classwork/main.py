def longest_word(string_of_words):
    arr=string_of_words.split()
    
    res=""
    
    for i in arr[-1::-1]:
        if len(i)>len(res):
            res=i
                


def lottery(s):
    res=""
    num=""
    for i in s:
        if i   in "1234567890" and  i not in num :
            res+=i
            num+=i
    if res=="":
        return 'One more run!'
    else:
        return res 