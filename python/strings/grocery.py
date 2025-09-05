items = []
print("Enter 10 grocery items:")
for _ in range(10):
    items.append(input("> ").strip().lower())

search_item = input("Enter item to search: ").strip().lower()
if search_item in items:
    print("Item exists in list.")
else:
    print("Item not found.")
