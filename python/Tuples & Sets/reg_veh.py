vehicles = set()
while True:
    num = input("Enter vehicle number (or 'q' to quit): ")
    if num.lower() == 'q':
        break
    if num in vehicles:
        print("Duplicate! Already registered.")
    else:
        vehicles.add(num)
        print("Registered.")
