marks = []
print("Enter 5 marks:")
for _ in range(5):
    marks.append(float(input("> ")))

highest = max(marks)
lowest = min(marks)
average = sum(marks) / len(marks)

print(f"Highest mark: {highest}")
print(f"Lowest mark: {lowest}")
print(f"Average mark: {average:.2f}")
