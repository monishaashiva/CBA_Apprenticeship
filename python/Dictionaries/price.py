products = {"apple": 30, "banana": 10, "milk": 50}
name = input("Enter product name: ")
print(f"Price: {products.get(name, 'Not found')}")
