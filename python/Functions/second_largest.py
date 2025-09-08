def second_largest(lst):
    unique = list(set(lst))
    unique.sort()
    return unique[-2] if len(unique) >= 2 else None
print(second_largest([1, 2, 3, 4, 4]))
