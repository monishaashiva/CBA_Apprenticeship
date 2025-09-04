age = int(input("Enter age: "))

if age < 5:
    print("Ticket: Free")
elif age <= 60:
    print("Ticket: Full")
else:
    print("Ticket: Half")
