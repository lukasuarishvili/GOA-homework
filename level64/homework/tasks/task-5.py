"""
✅ დავალება 5:
შექმენი class Book, რომელსაც ექნება title, author, და year.
დაუმატე ფუნქცია info, რომელიც დაბეჭდავს მაგ წიგნის დეტალებს – Title, Author, Year
"""

class book:
    def __init__(self, title, author,  year ):
        self.title=title
        self.author=author
        self.year=year

    def info(self):
        print(f"{self.title} {self.year} {self.author}")

book_1=book('!!!',"@@@","###")

book_2=book("###" , "!!!","@@@")

print(book_1.info() , book_2.info() )
