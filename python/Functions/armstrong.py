def is_armstrong(num):
    digits = [int(x) for x in str(num)]
    return num == sum([d**len(digits) for d in digits])
print(is_armstrong(153))
