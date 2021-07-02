""" Nome do arquivo e a maneira que vou lidar com ele """
characters_file = open("meus-personagens.txt", mode="w")

characters_file.write("Tio Patinhas\n")
characters_file.write("Neo\n")
characters_file.write("Homem Aranha\n")

more_character = ["Sonho\n", "Ash\n"]

characters_file.writelines(more_character)
characters_file.close()

