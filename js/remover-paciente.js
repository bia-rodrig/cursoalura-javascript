var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
  //Quem foi clicado - event.target
  var alvoEvento = event.target; //a celula que foi clicada
  var paiDoAlvo = alvoEvento.parentNode; //o pai da celula (a linha toda)
  paiDoAlvo.classList.add("fadeOut");

  setTimeout(function(){ //espera meio segundo para executar o que está aqui dentro
    paiDoAlvo.remove();
  }, 500);
});

// pacientes.forEach(function (paciente){
//   paciente.addEventListener("dblclick", function(){
//     this.remove(); //remove o paciente que recebeu o duplo clique - o dono do evento
//   });
// });
