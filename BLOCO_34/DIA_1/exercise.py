""" Maior número """


def biggerNumber(a, b):
    if a > b:
        return a
    return b


""" Média Aritmética """


def average(array):
    counter = 0
    for number in array:
        counter += number
    return counter / len(array)


""" Desenhar asteriscos """


def drawing(n):
    for row in range(n):
        for column in range(n):
            print("*", end="")
        print()


""" Maior número na lista """


def biggerNameInList(names):
    biggerLength = len(names[0])
    biggerName = ""
    for name in names:
        if biggerLength < len(name):
            biggerLength = len(name)
            biggerName = name
    return biggerName


""" Calcular e mostrar em tupla """


def paint_costs(area):
    can_price = 80
    required_liters = area / 3
    required_cans = required_liters // 18
    if required_liters % 18:
        required_cans += 1
    return required_cans, required_cans * can_price


""" Tipo de triângulo """


def type_of_triangle(side1, side2, side3):
    is_triangle = (
        side1 + side2 > side3 or side2 + side3 > side1 or side1 + side3 > side2
    )
    if not is_triangle:
        return "não é triângulo"
    elif side1 == side2 == side3:
        return "equilátero"
    elif side1 == side2 or side2 == side3 or side1 == side3:
        return "isósceles"
    else:
        return "escaleno"


if __name__ == "__main__":
    print("Maior número:", biggerNumber(5, 8)),
    print("Média do array:", average([10, 20, 30])),
    print(drawing(5))
    print(
        biggerNameInList(
            ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]
        )
    )
    print(paint_costs(50)),
    print(type_of_triangle(5, 6, 7))
