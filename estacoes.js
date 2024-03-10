let mes = prompt("Insira aqui um mês. \nEx.: Janeiro, Fevereiro, Março, etc.")

switch (mes) {

    case "Janeiro": case "Fevereiro": case "Março":
        alert("A estação do ano referente a esse mês é o verão!")
        break;
        case "Abril": case "Maio": case "Junho":
        alert("A estação do ano referente a esse mês é o outono!")
        break;
        case "Julho": case "Agosto": case "Setembro":
        alert("A estação do ano referente a esse mês é o inverno!")
        break;
        case "Outubro": case "Novembro": case "Dezembro":
        alert("A estação do ano referente a esse mês é a primavera!")
        break;
    default:
        alert("Desculpe, não foi possível encontrar uma estação do ano referente ao mês que você escolheu.")
        break;
}