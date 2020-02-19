# JavaScript - ALURA
Projeto desenvolvido: Controle de pacientes de uma nutricionista.
**Tópicos:**
* Variáveis e Operadores;
* Arrays, Loop e Estilos;
* Eventos, Formulários e Criando Elementos;
* Boas Práticas com JavaScript;
* Validação de Formulários;
* Remoção, Delegação e Animação;
* Filtrando uma tabela
* AjaxBuscando pacientes com AJAX

![](https://github.com/bia-rodrig/cursoalura-javascript/blob/master/imagens_readme/JavaScript_AparecidaNutricionista.jpg)


## DOM - Document Object Model

É uma interface que repreenta como os documentos HTML e XML são lidos pelo browser. 



## **Script** 

tag onde vai o código JavaScript ou a referência para o arquivo *.js*.

Como boa prática, é importante sempre inserir a referencia para o arquivo JavaScript, no final do body (antes de fecha-lo).

Referenciar o arquivo JavaScript:

```html
<script src="js/principal.js"></script>
```

(o arquivo JavaScript, neste caso, está dentro de uma pasta chamada "*js*").

* ```console.log(document)```: Exibe os elementos html;

* ```alert("Essa é uma mensagem")```: Exibe uma mensagem no navegador;
* ```document.querySelector("h1")```: Retorna o primeiro objeto h1 do documento html;

Para selecionar um elemento, dê preferencia para o uso de classes ou ids:

* Selecionando por classe: ```document.querySelector(".nome_da_classe");```
* Selecionando por ID: ```document.querySelector("#nomeID");```

## Variável

A variável no JavaScript é declarada como **var**;



## Operadores Lógicos

- OU: ```||```;
- E: ``&&``;
- NOT: ```!```;



## Buscar unico elemento

``document.querySelector("tag_id_classe");``

Retorna o objeto selecionado.



Exemplo HTML

```html
<tbody id="tabela-pacientes">
    <tr class="paciente" id="primeiro-paciente">
        <td class="info-nome">Paulo</td>
        <td class="info-peso">100</td>
        <td class="info-altura">2.00</td>
        <td class="info-gordura">10</td>
        <td class="info-imc">0</td>
    </tr>
    <tr class="paciente" >
        <td class="info-nome">João</td>
        <td class="info-peso">80</td>
        <td class="info-altura">1.72</td>
        <td class="info-gordura">40</td>
        <td class="info-imc">0</td>
    </tr>
</tbody>
```



Código JavaScript para calcular o IMC do paciente na tabela

```javascript
var paciente = document.querySelector("#primeiro-paciente"); 
//no documento HTML, seleciona o objeto <tr> pelo id

var tdPeso = paciente.querySelector(".info-peso");
//dentro do objeto <tr> que foir selecionado como "paciente", seleciona o <td> pela classe

var peso = tdPeso.textContent; //acessa o conteúdo da <td> que foi selecionada

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var imc = peso/(altura*altura); //faz o calculo com os valores obtidos

var tdImc = paciente.querySelector(".info-imc");
tdImc.textContent = imc; //exibe no <td> do imc o valor obtido
```



## Buscar mais de um elemento

```document.querySelectorAll("tag_id_classe");```

Retorna um array com todos os elementos selecionados.

```javascript
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i <pacientes.length; i++){ //repetição
    console.log(pacientes[i]) ;	 //imprime todos os objetos selecionados
}

```



### Alterando cor de um elemento

É possivel fazer a alteração diretamente no JavaScript.

```javascript
paciente.style.color = "red"; //altera a cor do texto para vermelho
paciente.style.backgroundColor = "black"; //altera o fundo para preto
```

Note que, o que no CSS são duas palavras (background-color), no JavaScript, o mesmo item é junto e com Capslock no início da segunda palavra.

Mas essa não é uma boa prática. É importante deixar as estilizações no CSS. Para isso, atribula classes ou IDs aos elementos.



No CSS, criar uma referência à classe com a cor que deseja:

```css
.paciente-invalido{
    background-color: lightcoral;
}
```

No JavaScript, é possível adicionar um elemento à essa classe:

```javascript
paciente.classList.add("paciente-invalido"); //adiciona à classe paciente-invalido
```

Com isso, o elemento selecionado como paciente, receberá a estilização do CSS, referente à classe ```.paciente-invalido```.



## EventListener

Fica monitorando um elemento para qualquer tipo de ação do usuário.

Exemplo:

*Colocar monitoração de click no título*:

```javascript
var titulo = document.querySelector("h1");
titulo.addEventListener("click", funcao(){});
```

Ao adicionar um evento de click em um botão, ele recarrega a página após enviar os dados do formulário.

Faz parte dos comportamentos padrões do botão:

* Recarregar página
* Limpar formulário
* Enviar dados

Para alterar o comportamento padrão de um elemento, utilize *preventDefault();*:

```javascript
botao.addEventListener("click", function(event){
    event.preventDefault();
})
```

Colocar o prevent dentro da função que você não quer que se comporte de maneira padrão. Então a função precisa ter como parametro, o "event".

### Duplo click

Para duplo click, utilizar

```javascript
titulo.addEventListener("dblclick", function(event){});
```



### Elemento que foi clicado

utilizar o **.target** para pegar qual elemento foi clicado.

```javascript
titulo.addEventListener("dblclick", function(event){
    var alvoClicado = event.target;
});
```



### TimeOut

Serve para dar um "pause" na execução do programa.

Exemplo: Apagar a linha toda da célula que foi clicada

```javascript
tabela.addEventListener("dblclick", function(event){
  //Quem foi clicado - event.target
  var alvoEvento = event.target; //a celula que foi clicada
  var paiDoAlvo = alvoEvento.parentNode; //o pai da celula (a linha toda)
  paiDoAlvo.classList.add("fadeOut"); //fadeOut é animação do evento

  setTimeout(function(){ //espera meio segundo para executar o que está aqui dentro
    paiDoAlvo.remove();
  }, 500); //500 - duração do fadeOut
});
```



## Funções

### Função nomeada

```javascript
titulo.addEventListener("click", nomeDaFuncao); //sem parenteses, não aguarda retorno
titulo.addEventListener("click", nomeDaFuncao()); //como parenteses, agurda retorno da funlão
```



### Função anonima

```javascript
titulo.addEventListener("click", function(){
    //aqui vai o código da função
})
```

A palavra *function* é padrão.

Neste caso a função só existirá para o elemento título.



## Pegar valor de Input

Para acessar valor de uma label, usa-se **".textContent()"**.

Para pegar o valor de um input, deve-se ser feito através da referência "*name*" e pela opção "*value*".

Exemplo HTML:

```html
<input id="nome" type="text" name="nome" placeholder="legenda_que_some" class="classe">
```

Exemplo JavaScript:

```javascript
var nome = form.nome.value;
```



### Limpar formulário

**form.reset(); **- Limpa os campos do formulário



## Criar elementos HTML

utilizar o **.document.createElement("elemento_a_ser_criado");**

Exemplo:

```javascript
var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
  //previne comportamento
  event.preventDefault();

  //pegando dados do form
  var form = document.querySelector("#form-adiciona");

  var nome = form.nome.value;//pega valor do input do formulario que tem o name="nome"
  var idade = form.idade.value;

  //Criar elemento HTML com os dados do formulario
    var pacienteTr = document.createElement("tr"); //cria uma tr
    var nomeTd = document.createElement("td"); //cria td
    var idadeTd = document.createElement("td");
    
    //adiciona os dados do form aos respectivos Tds
    nomeTd.textContent = nome;
   	idadeTd.textContent = idade;
    
    //colocar as Tds dentro da Tr
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(idadeTd);

    //coloca a Tr dentro da tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
})
```



* **elementoQueRecebe.appendChild(elementoParaAdicionar)**; 



## Arquivos JavaScript

É possível ter mais de um arquivo JavaScript referenciadp no mesmo HTML. Porém não pode esquecer de declarar no ```<script></script>```.



## Adicionar elementos em um array

Em JavaScript, para adicionar um elemento à um array, utilizar a função **push();**

```javascript
var erros = validaPaciente(paciente); //cria um array com array retornado pela função

function validaPaciente(paciente){
    var erros = []; //declara um array vazio
	erros.push("A altura é inválida"); //Adiciona a string dentro do array erros.
    erros.push("O nome é estrnaho");
    
    return erros;
}
```



## innerHTML

Para adicionar um valor à um item HTML.

Exemplo de zerar uma lista:

```javascript
var ul = document.querySelector("#mensagens-erro");
ul.innerHTML = "";
```



## forEach

Navega por todos os dados de um array, sem precisar utilizar o *for*.

```javascript
erros.forEach(function(erro){ //onde erro é cada item do array
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
})
```



# AJAX

Serve para fazer requisições com JavaScript e com isso, fazer integração entre sistemas.

É assincrono, ou seja, não para a aplicação enquanto faz a busca.

**API**: interface de programação que dá os dados prontos para serem usados.

precisa ter um endereço: o caminho onde buscar os dados.

E como resposta, obtem objetos dentro de um array.

Objetos: usam chaves {};

Array: usam colchetes [];

### XMLHttpRequest

Comando para fazer solicitação dos dados.

XML - antigamente, os dados eram fornecidos somente em formato XML.

HttpRequest - é a requisição Http.

**JSON**: JavaScript Object Notation - resposta da API.

É necessário converter essa resposta em um objeto JavaScript. Para isso, usar **JSON.parser()**.

```javascript
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

      var pacientes = JSON.parse(resposta);

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
```



