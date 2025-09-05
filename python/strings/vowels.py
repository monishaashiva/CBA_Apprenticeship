sentence = input("Enter a sentence: ")
vowels = "aeiouAEIOU"
count = sum(1 for char in sentence if char in vowels)
print(f"Number of vowels: {count}")
