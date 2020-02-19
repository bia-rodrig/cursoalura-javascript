var botaoAdicionar = document.querySelector("#buscar-pacientes")

botaoAdicionar.addEventListener("click", function(){
  var xhr = new XMLHttpRequest(); //responsável por fazer requisições

//configuração do xhr
  //qual tipo de requisição quer fazer e para onde
  xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes") //abre a conexão(tipo de requisição, para onde vai a requisição)

  //adiciona evento para escutar a resposta da requisição
  //xhr, quando vc carregar a resposta (load), executa a função
  xhr.addEventListener("load", function(){

    var erroAjax = document.querySelector("#erro-ajax");
    //tratamento de console.error();
    if(xhr.status == 200){ //200 tudo ok
      erroAjax.classList.add("invisivel");
      var resposta = xhr.responseText; //resposta
      //console.log(resposta);
      //console.log(typeof resposta);

      var pacientes = JSON.parse(resposta);
      //console.log(pacientes);
      //console.log(typeof pacientes);

      pacientes.forEach(function(paciente){
        adicionaPacienteNaTabela(paciente);
      });
    }
    else{
      //se der algum erro, imprime o erro
      console.log(xhr.status);
      console.log(xhr.responseText);

      erroAjax.classList.remove("invisivel");
    }



  });

  xhr.send();//pega a requisição que acabou de criar e aenvia
})
