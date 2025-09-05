salaries = [float(x) for x in input("Enter employee salaries (space-separated): ").split()]
salaries.sort(reverse=True)
print("Salaries sorted (descending):", salaries)
