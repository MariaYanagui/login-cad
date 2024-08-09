// FUNÇÃO PARA VALIDAÇÃO DE ACESSO 

function acessar() {
    let loginEmail = document.getElementById("loginEmail").value;
    // VALOR DA ENTRADA DO EMAIL 
    let loginSenha = document.getElementById("loginSenha").value;
    // VALOR DA ENTRADA DA SENHA

    if (!loginEmail || !loginSenha) {
        alert("Favor preencher todos os campos!");
        // VERIFICA SE O CAMPO FOI PREENCHIDO CORRETAMENTE 
    } else {
        // alert("Campos preenchidos com sucesso!");
        window.location.href = "cadastro.html";
        // USADO PARA LEVAR O USUÁRIO PARA A PÁGINA DE CADASTRO 
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
        // USADO PARA LIMPAR O CAMPO DE DIGITAÇÃO DA PÁGINA APÓS O USO (COLOCAR EM BRANCO)

    }else{
        alert("Favor informe um nome para cadastro");
    }
}

// FUNÇAO PARA CRIAR LISTA DE USUÁRIOS 
function criaLista(){
    let tabela = document.getElementById("tabela").innerHTML = "<tr><th>Nome Usuário</th><th>Ações</th></tr>";
    for(let i=0;i <= (dadosLista.length - 1);i++){
        // ACESSA A POSSIÇÃO NA TABELA 
        tabela += "<tr><td>" + dadosLista[i] +  "</td><td><button type='button'onclick='editar(parentNode.parentNode.rowIndex)'>Editar</button><button type='button'onclick='excluir(parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
        // USADO PARA ADICIONAR UMA LISTA CASO A ANTERIOR FOR USADA E A CRIAÇÃO DO BOTÃO PARA EDIÇÃO
        document.getElementById("tabela").innerHTML = tabela;
        // PARA RECEBER A LISTA NA VARIAVEL TABELA COM O ELEMENTO GetElementBYID
    }
}
// FUNÇÃO PARA EDITAR NOMES DE LISTA
function editar(i){
    document.getElementById("nomeUser").value = dadosLista [(i -1)];
    // TRAZER O VALOR DO ARRAY DE VOLTA PARA O CAMPO
    dadosLista.splice(dadosLista)[(i -1)];
}
// FUNÇÃO PARA EXCLUIR NOME DE LISTA
function excluir(i){
    dadosLista.splice((i - 1), 1);
    document.getElementById("tabela").deleteRow(i);
    document.getElementById("nomeUser").value = "";
    // ADICIONEI O UM ELEMENTO PARA DEIXAR O NOME EM BRANCO APÓS O USO DO BOTÃO EXCLUIR 

}
    
