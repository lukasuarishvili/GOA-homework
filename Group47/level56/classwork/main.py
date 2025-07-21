
def nugzar_chubinidze(glss_wine, limit):
    if glss_wine>=limit:
        return "ნუგზარი აღარ დალიო მეტი!"
    else:
        return "მოდი ახლა მართლა, დამილოცნიე!"

gulis_wneva=120
pulsi=80



#user_wneva=int(input("რამდენი აქვს იურის გულის წნევა შენი აზრით?"))
#user_pulsi=int(input("რამდენი აქვს იურის პულსი?  "))

def  yuri_gagarini(user_wneva, user_pulsi):

    if user_wneva==gulis_wneva and user_pulsi==pulsi:
        return"TRUE"
    
    else:
        return "FALSE"
    


ship=150
ship1=200
ship2=250
ship3=300 
#user_input=int(input(" gold_coin ?"))

def captianjack(user_input):
    if user_input==0 or user_input<0:
        return"აჯანყება"
    elif user_input>=ship3 and user_input-ship3<=0:
        return "აჯანყება"
        
    elif user_input>=ship2 and user_input-ship2<=0:
        return "აჯანყება"
          
    elif  user_input>=ship1 and user_input-ship1<=0:
        
        return "აჯანყება"
        
    elif  user_input>=ship and  user_input-ship<=0:
        
        return "აჯანყება"
    else:
        return " არ აჯანყდება"
        
#


    
list_0=[1,2,3,4,5,5,6,6,7,8,8,9]
list_1=[]

for i in list_0:
    if i not in list_1:
        list_1.append(i)
    else:
        None

            
        
print(list_1)
print(set(list_0))