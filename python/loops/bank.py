balance = float(input("Enter starting balance: "))
for month in range(1, 13):
    balance += balance * 0.05
    print(f"Month {month}: ₹{balance:.2f}")
