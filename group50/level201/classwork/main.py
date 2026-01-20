with open("level201/classwork/text.txt", "r") as filepath:
    fileInfo = filepath.read().split() 


cvladi  = [ "Goa" + name for name in fileInfo]


with open("level201/classwork/text.txt", "w") as filepath:
    filepath.write(" ".join(cvladi ))
    


