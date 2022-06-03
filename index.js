let namepilot = prompt("Qual seu nome piloto?")

let inicialvelocity = 0

let velocity = prompt("Em qual velocidade gostaria de seguir com a nave?")
confirm("tem certeza dessa velocidade?")


if(velocity <=0){
    alert("A nave está parada!. Considere aumentar")
} else if (velocity <40){
    alert("você está devagar, considere aumentar")
} else if (velocity >40 && velocity <80){
    alert("Parece uma velocidade boa a se manter")
} else if (velocity >80 && velocity <100){
    alert("Velocidade alta! considere diminuir")
} else if (velocity >=100){
    alert("velocidade perigosa! controle automático ativado.")
}

alert("O piloto: " + namepilot + "\nAtingiu a velocidade de" + velocity + "Km!")