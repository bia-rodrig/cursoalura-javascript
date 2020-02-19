//Arquivo que cuidará dos forms
var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
  event.preventDefault(); //previne comportamento

  //pegando dados do form
  var form = document.querySelector("#form-adiciona");

  //cria objeto paciente já calculando o IMC
  var paciente = obtemPacienteDoFormulario(form);

  var erros = validaPaciente(paciente);

  if (erros.length > 0){
    exibeMensagensDeErro(erros);
    return;
  }

  adicionaPacienteNaTabela(paciente);

  form.reset();
  //apaga mensagens de erro quando corrige
  var mensagensErro = document.querySelector("#mensagens-erro");
  mensagensErro.innerHTML ="";


})

function adicionaPacienteNaTabela(paciente){

  //Cria o elemento HTML com os dados inseridos no formulario
  var pacienteTr = montaTr(paciente);

  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
}

function obtemPacienteDoFormulario(form){
  //cria objeto paciente
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }
  return paciente;
}

function montaTr(paciente){
  //cria a linha da tabela
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  //Coloca as Tds dentro da Tr
  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montaTd(dado, classe){
  var td = document.createElement("td");
  td.classList.add(classe);
  td.textContent = dado;

  return td;
}

function validaPaciente(paciente){
  var erros = []

  if (paciente.nome.length == 0){
    erros.push("O nome não pode ser em branco");
  }

  if (!validaPeso(paciente.peso)){
    erros.push("O peso é invalido"); //push adicina no array
  }
  if (!validaAltura(paciente.altura)){
    erros.push("A altura é invalida");
  }
  if (paciente.gordura.length == 0){
    erros.push("Gordura não pode ser em branco");
  }

  if (paciente.peso.length == 0){
    erros.push("Peso não pode ser em branco");
  }
  if (paciente.altura.length == 0){
    erros.push("Altura não pode ser em branco");
  }

   return erros;
}

function exibeMensagensDeErro(erros){
  var ul = document.querySelector("#mensagens-erro");

  ul.innerHTML = ""; //zera a lista de erros

  erros.forEach(function(erro){ //erro = item de erros
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });

}
