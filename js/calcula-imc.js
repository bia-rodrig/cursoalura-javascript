var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//Formula IMC = massa/(altura * altura)

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++){
  var paciente = pacientes[i];
  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

//Verifica altura e peso
  var pesoValido = validaPeso(peso);
  var alturaValida = validaAltura(altura);

  var tdImc = paciente.querySelector(".info-imc");

  if(!pesoValido){
    tdImc.textContent = "Peso invalido"
    paciente.classList.add("paciente-invalido");
  }

  if(!alturaValida){
    tdImc.textContent = "Altura invalida"
    paciente.classList.add("paciente-invalido");
  }

  if (pesoValido && alturaValida){
    var imc = calculaImc(peso, altura)
    tdImc.textContent = imc;
  }
}

function validaPeso(peso){
  if (peso >= 0 && peso < 1000){
    return true;
  }
  else{
    return false;
  }
}

function validaAltura(altura){
  if (altura >= 0 && altura <= 3.0){
    return true;
  }
  else{
    return false;
  }
}

function calculaImc(peso, altura){
  var imc = 0;
  imc = peso/(altura * altura);

  return imc.toFixed(2);//limita em 2 casas
}
