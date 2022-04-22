# %%
def encode(string):
    sList = list(string)
    for letter in sList:
        oneBit = bin(ord(letter))
        triBit = f"{oneBit}{oneBit}{oneBit}"

    bits = [f"{bin(ord(c))}{bin(ord(c))}{bin(ord(c))}" for c in string]
    return bits


encode('hey')
# %%


# def decode(bits):
#     return string
