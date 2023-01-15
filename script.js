function calcularImc () {
  let valorAltura = document.getElementById('altura').value
  let valorPeso = document.getElementById('peso').value

  if (valorAltura != "") {
    if (valorPeso != "") {
      let calculoIMC = valorPeso / (valorAltura * valorAltura)
      if (calculoIMC < '18.5') {document.getElementById("resultado").innerHTML ='Você está abaixo do peso!';} 
        else if (calculoIMC < 25) {document.getElementById("resultado").innerHTML ='Você está com seu peso normal!';}  
        else if (calculoIMC < 30) {document.getElementById("resultado").innerHTML ='Você está com excesso de peso!';} 
        else if (calculoIMC < 35) {document.getElementById("resultado").innerHTML ='Você está com Obesidade classe I!';} 
        else if (calculoIMC < 40) {document.getElementById("resultado").innerHTML ='Você está com Obesidade classe II!';}   
        else if (calculoIMC >= 40) {document.getElementById("resultado").innerHTML ='Você está com Obesidade classe III!';}
    }
    else {
      alert("Preencha o valor do Peso")
    }
  } 
  else {
    alert("Preencha o valor da Altura")
  }
  }