word = input("Enter a word: ")
freq = {}
for char in word:
    freq[char] = freq.get(char, 0) + 1
print(freq)
