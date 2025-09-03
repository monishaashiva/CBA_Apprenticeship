item_cost = float(input("Enter the cost of the item: "))
gst_rate = 18 / 100
gst_amount = item_cost * gst_rate
final_bill = item_cost + gst_amount
print(f"Final bill amount (including 18% GST): {final_bill:.2f}")
