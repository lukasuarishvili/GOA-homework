textFile= open("text.txt")
csvFile=open("text.csv")
imgFile=open("image.png")
jsFile= open("code.js")
pyFile=open("python.py")


with open("./test.exe") as exeFile :
    print([ "Goa "+ i  for i in exeFile.read().split() ])

