from turtle import *

speed(9)
width(7)
color("brown")
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)

#end of the square 

penup()
goto(0,200)
pendown()
begin_fill()
left(150)
color("red")

forward(200)
right(120)
forward(200)
end_fill() 

penup()
goto(65,0)
pendown()

begin_fill()
color("yellow")
left(150)

forward(90)  #height of the door 
right(90)
forward(70) 
right(90)
forward(90)

end_fill()

penup()
goto(10,140)
begin_fill()
color("green")

forward(20)
left(90)
forward(40)
left(90)
forward(40)
left(90)
forward(40)
left(90)
forward(40)
end_fill()

penup()
goto(190,140)
pendown()
begin_fill()


forward(20)
right(90)
forward(40)
right(90)
forward(40)
right(90)
forward(40)
right(90)
forward(40)
end_fill()

exitonclick()



