#---------------------------------task-1--------------
double_char= lambda s: "".join(map(lambda letter:letter*2, s ))
print(double_char("String"))
print(double_char("Hello World"))

#---------------------------------task-2-----------------
get_average= lambda list: int(sum(list)/len(list))
print(get_average([2, 2, 2, 2]))


#---------------------------------task-3------------------------
def get_planet_name(id):
    
    planets = {
        1: "Mercury",
        2: "Venus",
        3: "Earth",
        4: "Mars",
        5: "Jupiter",
        6: "Saturn",
        7: "Uranus",
        8: "Neptune",
    }
    
    if id in planets:
        return planets[id]
print(get_planet_name(2))



