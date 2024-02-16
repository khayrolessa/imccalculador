function calcularIMC(){
    const inputpeso = document.querySelector('.inputpeso');
    const inputaltura = document.querySelector('.inputaltura');

    const result = document.querySelector('.resultado');
    const resulttexto = document.querySelector('.resultadotexto');

    if (inputpeso && inputaltura && result){

        const peso = parseFloat(inputpeso.value);
        const altura = (parseFloat(inputaltura.value)/100);

        if(!isNaN(peso) && !isNaN(altura) && altura !== 0) {
            const imc = peso / (altura*altura);


            result.textContent = 'Seu IMC é: ' + imc.toFixed(2);
            if(imc < 18.5){resulttexto.textContent = 'Você está abaixo do peso.';} 
            else if(imc > 18.5 && imc < 24.9) { resulttexto.textContent = 'Você está no peso ideal.'; }
            else if(imc > 25 && imc < 29.9) { resulttexto.textContent = 'Você está Sobrepeso.'; }
            else if(imc > 30 && imc < 34.9) { resulttexto.textContent = 'Você está em Obesidade Grau I.'; }
            else if(imc > 35 && imc < 39.9) { resulttexto.textContent = 'Você está Obesidade Grau II'; }
            else if(imc > 39.9) { resulttexto.textContent = 'Você está em Obesidade Mórbida'; }
        }  else {

            result.textContent = 'Por favor, insira valores válidos.'
        }
    }

}
