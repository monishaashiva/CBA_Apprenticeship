correct_pin = "1234"  # Replace with actual PIN
attempts = 0
while attempts < 3:
    pin = input("Enter your ATM PIN: ")
    if pin == correct_pin:
        print("PIN verified. You may proceed with withdrawal.")
        break
    else:
        attempts += 1
        print(f"Incorrect PIN. Attempts left: {3 - attempts}")
else:
    print("Card blocked due to 3 incorrect attempts.")
