persons=(
    "abragi",
    "Data",
    "arzeni",
    "Nika",
    "iulius",
    "Maxsimus"
)


sortedWord=()

words = (list(persons)).sort(reverse=True)
print(type(words))

for i in list(words):
   sortedWord+=(i,) # 
   


print(sortedWord)