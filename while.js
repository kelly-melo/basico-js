let v1 = prompt("Qual é o seu nome?")
let v2 = prompt("Você já visitou alguma cidade?")
let cidades = ''
let contagem = 0
while (v2 === "sim") {
cidade = prompt("Qual o nome da cidade que você visitou?");
cidades += " \n- " + cidade
contagem++;
v2 = prompt("Você visitou mais alguma cidade?")
}
alert("Seu nome é " + v1 + ", e você já visitou " + contagem + " cidades, que são: " + cidades)