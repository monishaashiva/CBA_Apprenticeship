email = input("Enter your email ID: ")
user, domain = email.split("@")
masked = user[0] + "***" + "@" + domain
print(f"Masked email: {masked}")
