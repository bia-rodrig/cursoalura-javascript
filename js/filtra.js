var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){ //a cada letra digitada no input, executa função

  var pacientes = document.querySelectorAll(".paciente"); //pega todos os pacientes
  //Mostrar apenas o que for igual com o campo campoFiltro

  if (this.value.length > 0){
    //Se a caixa de texto for preenchida, compara com os pacientes da lista
    //o que for diferente, recebe classe invisivel, que o apaga da tela
    for (var i = 0; i < pacientes.length; i++){
      var paciente = pacientes[i];
      var tdNome = paciente.querySelector(".info-nome");
      var nome = tdNome.textContent;
      var expressao = new RegExp(this.value, "i");
      if ( !expressao.test(nome)){ //verifica se o nome, tem algum pedaço do que foi digitado no input. se for falso (diferente), adiciona classe
        paciente.classList.add("invisivel");
      }
      else{
        paciente.classList.remove("invisivel"); //remove a classe se o valor for igual ao input
      }
    }
  }else{
    for (var i = 0; i < pacientes.length; i++){
      var paciente = pacientes[i];
      paciente.classList.remove("invisivel");
    }
  }

})
