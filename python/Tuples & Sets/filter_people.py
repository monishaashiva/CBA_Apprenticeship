people = [("Ana", 20), ("Bravo", 15), ("Camo", 23)]
adults = [person for person in people if person[1] > 18]
print("People above 18:", adults)
