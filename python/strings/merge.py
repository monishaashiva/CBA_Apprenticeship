list1 = input("Enter first shopping list items (comma-separated): ").split(",")
list2 = input("Enter second shopping list items (comma-separated): ").split(",")

merged = list(set([item.strip().lower() for item in list1 + list2]))
print("Merged list without duplicates:", merged)
