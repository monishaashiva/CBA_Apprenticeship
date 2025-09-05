numbers = [int(x) for x in input("Enter integers (space-separated): ").split()]
positive_numbers = [num for num in numbers if num >= 0]
print("List without negatives:", positive_numbers)
