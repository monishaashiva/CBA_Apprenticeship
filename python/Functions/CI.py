def compound_interest(p, r, t):
    return p * ((1 + r/100) ** t)
amount = compound_interest(1000, 5, 2)
print("Compound Interest:", amount)
