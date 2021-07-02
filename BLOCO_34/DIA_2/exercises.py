import random

""" Exercício 1: Faça um programa que receba um nome e imprima o mesmo na vertical em escada invertida. Exemplo: """


""" def vertical_inverted_ladder(words):
    for i in range(len(words)):
        for j in range(len(words) - i):
            print(words[j], end="")
        print()


if __name__ == "__main__":
    name = input("Digite um nome: ")
    vertical_inverted_ladder(name) """


""" """ """ """  """ """ """ """

palavras = [
    "cat",
    "elephant",
    "dog",
    "monkey",
    "duck",
    "chameleon",
    "bear",
    "moose",
    "rooster",
]

maximo_tentativas = 3


def palavra_escolhida(files):
    palavra = random.choice(files)
    return palavra


def embaralhar(palavra):
    palavra_embaralhada = "".join(random.sample(palavra, len(palavra)))
    return palavra_embaralhada


def jogar():
    palavra_certa = palavra_escolhida(palavras)
    palavra_certa_emabaralhada = embaralhar(palavra_certa)
    print("Que palavra é essa: ", palavra_certa_emabaralhada)

    for tentativa in range(maximo_tentativas):
        chute = input("Chute: ")
        if chute == palavra_certa:
            return print("Voce acertou")
        else:
            print("Tente novamente! Tentativa:", tentativa+1)


if __name__ == "__main__":
    with open('words.txt') as file:
        jogar()
