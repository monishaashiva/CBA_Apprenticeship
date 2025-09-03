purchase_amount = float(input("Enter the purchase amount: "))

if purchase_amount > 5000:
    discount = 0.20
else:
    discount = 0.10

discount_amount = purchase_amount * discount
final_amount = purchase_amount - discount_amount

print(f"Discount applied: {discount * 100}%")
print(f"Final amount to pay: {final_amount:.2f}")
