# 3) sort ფუნქციის გამოყენებით დაალაგე (name, age) tuple-ების სია ასაკის მიხედვით. people = [
#     ("Nika", 21),
#     ("Ana", 19),
#     ("Gio", 25)
# ]


people = [
    ("Nika", 21),
    ("Ana", 19),
    ("Gio", 25)
]

calkeCvladi = sorted(people, key=lambda age: age[1])

print(calkeCvladi)