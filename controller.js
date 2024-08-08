// FUNÇÃO PARA VALIDAÇÃO DE ACESSO 

function acessar() {
    let loginEmail = document.getElementById("loginEmail").value;
    let loginSenha = document.getElementById("loginSenha").value;

    if (!loginEmail || !loginSenha) {
        alert("Favor preencher todos os campos!");
    } else {
        // alert("Campos preenchidos com sucesso!");
        window.location.href = "cadastro.html";
    }
}
//  FUNÇÃO PARA ARMAZANAMENTO DE NOMES EM ARRY
    var dadosLista = [];
    function salvarUser(){
    let nomeUser = document.getElementById ("nomeUser").value;

    if(nomeUser){
        dadosLista.push(nomeUser);
        // console.log(dadosLista); ( foi apenas usado para ver se o arreio foi preenchido)
        criaLista();
        document.getElementById("nomeUser").value = "";
        // USADO PARA LIMPAR O CAMPO DE DIGITAÇÃO DA PÁGINA APÓS O USO 

    }else{
        alert("Favor informe um nome para cadastro");
    }
}

// FUNÇAO PARA CRIAR LISTA DE USUÁRIOS 
function criaLista(){
    let tabela = document.getElementById("tabela").innerHTML = "<tr><th>Nome Usuário</th><th>Ações</th></tr>";
    for(let i=0;i <= (dadosLista.length - 1);i++){
        tabela += "<tr><td>" + dadosLista[i] +  "</td><td></td></tr>";
        // USADO PARA ADICIONAR UMA LISTA CASO A ANTERIOR FOR USADA
        document.getElementById("tabela").innerHTML = tabela;
        // PARA RECEBER A LISTA NA VARIAVEL TABELA COM O ELEMENTO GetElementBYID
    }
}
FUNÇÃO PARA EDITAR NOMES DE LISTA
