import requests
import time

""" Isso é como se fosse um "Sleep"  """
""" esse _ significa que a variável não será usada """
for _ in range(15):
    response = requests.get("https://www.cloudflare.com/rate-limit-test/")
    print(response.status_code)
    time.sleep(1)

""" Respostas:
sem o TIME
aparecerá 200 por algum tempo, depois 429  """