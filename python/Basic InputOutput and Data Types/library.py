''' A library wants to track how many books a user borrows. 
 Write a program to ask the user for their name and number of books borrowed, and print a formatted receipt. '''

user_name = input("Enter your name: ")

# Ask the user for number of books borrowed (as an integer)
books_borrowed = int(input("Enter number of books borrowed: "))

# Print a formatted receipt
print("\nLibrary Borrowing Receipt")
print("--------------------------")
print(f"User Name       : {user_name}")
print(f"Books Borrowed  : {books_borrowed}")
print("--------------------------")
print("Thank you for using our library!")
