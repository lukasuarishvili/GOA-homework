# 1) მოცემულია რიცხვების სია: nums = [1, , 3, 4, 5, 6]. იპოვე ყველა უნიკალური წყვილი (a, b), სადაც: a + b == 7

nums1 = [1, 2, 3, 4, 5, 6]
nums2 = [7,8,9,10,12,11,13,14,15,22]

def uniqeNums(list, sum):

    uniqes=[]

    for i in list:
        for j in list:
            if i+j == sum :
                uniqes.append((i,j))

    return uniqes

# print(uniqeNums(nums1, 7))
# print(uniqeNums(nums2, 26))
# print(uniqeNums(nums2, 20))

# 2) მოცემულია სეტი და text ცვლადი: banned = {"bad", "ugly", "stupid"}, text = "This is a bad and ugly example". შეამოწმე: შეიცავს თუ არა ტექსტი აკრძალულ სიტყვებს, დაბეჭდე რომელი აკრძალული სიტყვაა ნაპოვნი

banned = {"bad", "ugly", "stupid", "Democraci", "rights", "revolution"}
text01 = "This is a bad and ugly example"
text02 = "we are slaves to our goverments"
text03 = "why do we not have rights we should have revolution"

def Sensor(sentanse, words):
    sensord_words= {}
     
    for i in sentanse.split() :
        if i in words:
            sensord_words.add(i)

    if  sensord_words :
         return f" ცენზურა ვერ გადალახა 🙅‍♀️, აღმოჩენილია: {sensord_words} სიტყვები"
    else: 
         return f"ცენზურის მიერ დამტკიცებულია ✅ 👍"

# print(Sensor(text01,banned))
# print(Sensor(text02,banned))
# print(Sensor(text03,banned))

# 3) მოცემულია ორი სეტი: yesterday = {"Ana", "Nika", "Luka"}, today = {"Nika", "Saba", "Luka"}. იპოვე: ვინ დაემატა დღეს, ვინ დარჩა სიაში და ვინ ამოვარდა სიიდან


yesterday1 = {"Ana", "Nika", "Luka"}
today1 = {"Nika", "Saba", "Luka"}

yesterday2 = {"Ana", "Nika", "Luka", "dato", "temo", "gio", "arzen"}
today2 = {"Nika", "temo", "gio",}

yesterday3 = {"Ana", "vaza", "saba", "qeti", "gabro"}
today3 = {"Nika", "vaza", "saba", "qeti", "gabro" }



def changed(old, new):
    new_members= new.difference(old)
    old_members= old.intersection(new)
    kiked_members=old-new
    return f"new members:{new_members} \nold members:{old_members} \nkiked members:{kiked_members} \n__________________ "

# print(changed(yesterday1, today1))
# print(changed(yesterday2, today2))
# print(changed(yesterday3, today3))


# 4) მოცემულია სამი სეტი: required = {"python", "sql"}, forbidden = {"java"}, candidate = {"python", "java", "git"}. დაადგინე: აკმაყოფილებს თუ არა კანდიდატი მოთხოვნილებებს, რომელი წესები ირღვევა ან თუ ირღვევა საერთოდ.
# 💥💥
required = {"python", "sql"}
forbidden = {"java"}
candidate1 = {"python", "java", "git"}
candidate2 = {"python", "java", "git"}
candidate3 = {"python", "java", "git"}


def checkCandidate(candidate):
    checksReqs=False

    result=""
    return result 


# 5) მოცემულია სტრინგი "abccdefee" მოაშორე ის ასოები რომლებიც არის უნიკალური სტრინგში
# 💥💥
cvladi="abccdefee"

uniqeChars= set(cvladi)
print(uniqeChars)
res=""
for i in cvladi:
    if i  not in uniqeChars:
        res+=f"{i}"

print(res)


# 6) დაწერე ფუნქცია is_unique(s), რომელიც აბრუნებს True-ს თუ სტრინგში ყველა სიმბოლო უნიკალურია.
# 💥💥

# 7) დაწერე ფუნქცია pair_sum(nums, target), რომელიც აბრუნებს ყველა უნიკალურ წყვილს (a, b) სადაც a + b == target. pair_sum([1,2,3,4,5,6], 7) დააბრუნე სეტში ტუპლების წყვილები რომლის დროსაც პირობა შესრულდება

def pair_sum(nums, target):
    uniqes=set()

    for i in nums:
        for j in nums:
            if i+j == target :
                uniqes.add((i,j))

    return uniqes


print(pair_sum([1,2,3,4,5,6], 7))
print(pair_sum([1,2,3,4,5,6], 6))
print(pair_sum([1,2,3,4,5,6], 5))

