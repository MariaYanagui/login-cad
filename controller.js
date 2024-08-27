// FUNÇÃO PARA VALIDAÇÃO DE ACESSO 

function acessar() {
    let loginEmail = document.getElementById("loginEmail").value;
    // VALOR DA ENTRADA DO EMAIL PELO VALUE(QUE PEGA O VALOR DO INPUT)
    // O getElementByID recupera um elemento da página apenas pelo ID 
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
    var email = [];
    function salvarUser(){
    let nomeUser = document.getElementById ("nomeUser").value;
    let emailUser = document.getElementById("emailUser").value;

    if(nomeUser){
        dadosLista.push(nomeUser);
        email.push(emailUser);
        // console.log(dadosLista); ( virou comentário pois foi apenas usado para ver se o array foi preenchido)
        criaLista();
        document.getElementById("nomeUser").value = "";
        document.getElementById("emailUser").value = "";
        // USADO PARA LIMPAR O CAMPO DE DIGITAÇÃO DA PÁGINA APÓS O USO (COLOCAR EM BRANCO)

    }else{
        alert("Favor informe um nome para cadastro");
    }
    // ALERTA CASO O CAMPO ESTEJA VAZIO 
    }
// FUNÇAO PARA CRIAR LISTA DE USUÁRIOS 
function criaLista(){
    let tabela = document.getElementById("tabela").innerHTML = "<tr><th>Nome Usuário</th><th>Email</th><th>Ações</th></tr>";
    for(let i=0;i <= (dadosLista.length - 1);i++){
        // ACESSA A POSSIÇÃO NA TABELA 
        tabela += "<tr><td>" + dadosLista[i] +  "</td><td>" + email[i] +  "</td><td><button type='button'onclick='editar(parentNode.parentNode.rowIndex)'>Editar</button><button type='button'onclick='excluir(parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
        // USADO PARA ADICIONAR UMA LISTA CASO A ANTERIOR FOR USADA E A CRIAÇÃO DO BOTÃO PARA EDIÇÃO
        document.getElementById("tabela").innerHTML = tabela;
        // PARA RECEBER A LISTA NA VARIAVEL TABELA COM O ELEMENTO GetElementBYID
    }
}
// FUNÇÃO PARA EDITAR NOMES DE LISTA
function editar(i){
    document.getElementById("nomeUser").value = dadosLista [(i -1)];
    document.getElementById("emailUser").value = email [(i -1)];
    // TRAZER O VALOR DO ARRAY DE VOLTA PARA O CAMPO
    // O método splice faz o quê? altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos
    dadosLista.splice(dadosLista[(i - 1)], 1);
    email.splice(email[(i - 1)], 1);
}
// FUNÇÃO PARA EXCLUIR NOME DE LISTA
function excluir(i){
    dadosLista.splice((i - 1), 1);
    dadosLista.splice((i - 1), 1);
    document.getElementById("tabela").deleteRow(i);
    // O índice passado para deleteRow deve ser verificado, pois a contagem de linhas pode não coincidir com os índices da lista 
    document.getElementById("nomeUser").value = "";
    document.getElementById("emailUser").value = "";
    // ADICIONEI O UM ELEMENTO PARA DEIXAR O NOME EM BRANCO APÓS O USO DO BOTÃO EXCLUIR 

} 
// VALIDAÇÃO DE EMAIL 
function checarEmail(){
    if(document.forms[0].email.value == "" || 
       document.forms[0].email.value.indexOf("@") == -1 ||
       document.forms[0].email.value.indexOf(".") == -1)
       {
        alert("Por favor, informe um email válido");
        return false;
    }
}