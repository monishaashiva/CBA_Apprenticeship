sentence = input("Enter a sentence: ")
processed = ''.join(char.lower() for char in sentence if char.isalnum())
if processed == processed[::-1]:
    print("Palindrome")
else:
    print("Not a palindrome")
