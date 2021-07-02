import random

random_number = random.randint(1, 10)  # escolhe um número aleatório entre 1 e 10
guess = ""

while guess != random_number:  # enquanto não adivinhar o número
    guess = int(input("Qual o seu palpite? "))
    print(random_number)
    # pergunte a pessoa usuária um número

print("O número sorteado era: ", guess)

""" Exercício 1: Faça um programa que solicite o nome de uma pessoa usuária e imprima-o na vertical. Exemplo: """

""" 
C
E
Z
A
R 
"""

NAME = input("Insira seu nome: ")

for letter in NAME:
    print(letter)


"""  Receba os valores em um mesmo input , solicitando à pessoa usuária que separe-os com um espaço. Receba os valores no formato str e utilize o método split para pegar cada valor separado. O método isdigit , embutido no tipo str , pode ser utilizado para verificar se a string corresponde a um número natural. """

nums = input("Insira valores aqui, separados por espaço: ")

numsArr = nums.split(" ")

sum = 0
for num in numsArr:
    if not num.isdigit():
        print(f"Erro ao somar valores, {num} não é um dígito.")
    else:
        sum += int(num)

print(f"A soma dos valores válidos é: {sum}")
