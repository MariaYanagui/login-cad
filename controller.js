// FUNÇÃO PARA VALIDAÇÃO DE ACESSO 

function acessar(){
    let loginEmail = document.getElementById ("loginEmail").value;
    let loginSenha = document.getElementbById ("loginSenha").value;
    
    if(!loginEmail || loginSenha){
        alert("Favor preencher todos os campos!");
    }else{
        alert("Campos preenchidos com sucesso!");
    }
}