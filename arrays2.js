//método sort
let mangas = ["One Piece", "Naruto", "Dragon Ball", "Veil", "Black Clover", "Berserk", "Monster"]
mangas.sort()
alert(mangas)

//método reverse
mangas.reverse()
alert(mangas)

//método push e unshift
listaDeCompras = ['Morango', 'Maçã', 'Uva', 'Kiwi']
listaDeCompras.push('Manga')
listaDeCompras.unshift('Abacaxi')
alert(listaDeCompras)

//método shift e pop
listaDeCompras.shift()
listaDeCompras.pop()
alert(listaDeCompras)

//acessando elementos de um array bidimensional
const number = [[11, 22, 13], [14, 25, 16], [17, 28, 19]]
alert(number[2][0])

//acessando elementos de um array multidimensional
const number1 = [[[11, 22, 13], [14, 25, 16]], [[17, 28, 19], [9, 15, 26]]]
alert(number1[1][0][1])

//método splice
listaDeCompras.splice(0, 0, 'Banana')
alert(listaDeCompras)