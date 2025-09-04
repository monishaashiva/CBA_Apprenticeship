ticket_price = float(input("Enter ticket price: "))
show_time = int(input("Enter show time (hour, 0-23): "))

if show_time < 17:
    final_price = ticket_price * 0.7
    print(f"Matinee show! Price after 30% discount: ₹{final_price:.2f}")
else:
    final_price = ticket_price
    print(f"Full price: ₹{final_price:.2f}")
