import os
import csv

# data= []
# with open("data.csv", "r") as dataFile:
#    for i in dataFile:
#     userData= i.split()
#     data.append({
#       "name":userData[0],
#       "surname":userData[1],
#       "age": userData[3],
#       "id":userData[2]
#     })

with open("data.csv", "r") as dataFile:
    data= csv.reader(dataFile, )

    for i in data:
        print(i)
