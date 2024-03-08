let salario = parseFloat(prompt("Insira aqui o seu salário."))

if(salario<=280) {
alert("O valor do seu salário antes do reajuste era " + salario + "\nO percentual de aumento aplicado foi de 20% \nO valor do aumento foi igual à: " + (salario*20)/100 + "\nSeu novo salário, após o aumento, é igual à: " + Number(salario + (salario*20)/100))
} else if (salario>280 && salario<=700) {
alert("O valor do seu salário antes do reajuste era " + salario + "\nO percentual de aumento aplicado foi de 15% \nO valor do aumento foi igual à: " + (salario*15)/100 + "\nSeu novo salário, após o aumento, é igual à: " + Number(salario + (salario*15)/100))
} else if (salario>700 && salario<=1500) {
alert("O valor do seu salário antes do reajuste era " + salario + "\nO percentual de aumento aplicado foi de 10% \nO valor do aumento foi igual à: " + (salario*10)/100 + "\nSeu novo salário, após o aumento, é igual à: " + Number(salario + (salario*10)/100))
} else {
alert("O valor do seu salário antes do reajuste era " + salario + "\nO percentual de aumento aplicado foi de 5% \nO valor do aumento foi igual à: " + (salario*5)/100 + "\nSeu novo salário, após o aumento, é igual à: " + Number(salario + (salario*5)/100))
}