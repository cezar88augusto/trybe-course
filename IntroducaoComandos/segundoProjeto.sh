VARIAVEL= `whoami`
echo $VARIAVEL
VARIAVEL=whoami
echo $VARIAVEL
VARIAVEL="EU sou um usuário"
echo $VARIAVEL
VARIAVEL="Eu estou logado como usuario `whoami`"
echo $VARIAVEL
echo "Digite sua idade: "
read IDADE
echo "Eu tenho" $IDADE "anos de idade."
echo "Nome: "
read NOME
echo "Idade: "
read IDADE
echo "Qual o usuário?"
USUARIO=`whoami`
echo "Nome: " $NOME "Idde: " $IDADE
