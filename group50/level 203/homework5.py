def spin_words(sentence):
    words = sentence.split()
    result = []

    for i in words:
        if len(i) >= 5:
            result.append(i[::-1])
        else:
            result.append(i)

    return " ".join(result)