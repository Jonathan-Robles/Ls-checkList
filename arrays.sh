#!/bin/bash

#read -p "Please enter the fruit : " nombre
#Fruits+=($nombre)

Cars=(`cat "arrays.txt"`)

Fruits=('Apple' 'Banana' 'Orange')

Vegetables[0]="Tomate"
Vegetables[1]="Potato"
Vegetables[2]="Onion"
Vegetables[3]="Garlic"

echo ${Vegetables[@]}
echo ${Fruits[@]}
echo ${Cars[@]}

echo ${Fruits[0]}
echo ${Fruits[-1]}
echo ${#Fruits[@]}
echo ${#Fruits}
echo ${#Fruits[2]}
echo ${Fruits[@]:2:2}


Fruits=(${Cars[@]} "watermelon")
Fruits+=('Watermelon')

All=(${Fruits[@]} ${Vegetables[@]} ${Cars[@]})

echo ${All[@]}




echo " Hi! I am a ${Fruits[1]} "

saludo="Hola! yo soy un..."


for i in ${Fruits[@]}
do
	echo $saludo $i
done

for i in "${Fruits[@]}"
do
	Fruits+=($i)
done


NAME="John"


echo "Hi $NAME"  # Hi John

echo 'Hi $NAME'  # Hi $NAME

declare -A sounds

sounds[dog]="bark"
sounds[cow]="moo"
sounds[bird]="tweet"
sounds[wolf]="howl"

echo ${sounds[dog]} # Dog's sound
echo ${sounds[@]}   # All values
echo ${!sounds[@]}  # All keys
echo ${#sounds[@]}  # Number of elements
unset sounds[dog]   # Delete dog

