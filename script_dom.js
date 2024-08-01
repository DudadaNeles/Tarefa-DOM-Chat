function edita(event) {
    var conteudo = event.target.closest(".mensagem").querySelector(".conteudo");
    var novoConteudo = prompt("Escreva a nova mensagem");
    conteudo.innerText = novoConteudo;
}

function exclui(event) {
    var conteudo = event.target.closest(".mensagem");
    conteudo.remove();
}


function enviar(){
    var conteudo = document.querySelector(".caixa_de_texto").value;
    let novoConteudo = document.createElement("div");
    novoConteudo.innerText = conteudo;
    novoConteudo.classList.add("conteudo");

    let novoBotaoEditar = document.createElement("button");
    novoBotaoEditar.innerText = "Editar";
    novoBotaoEditar.classList.add("editar");

    let novoBotaoExcluir = document.createElement("button");
    novoBotaoExcluir.innerText = "Excluir";
    novoBotaoExcluir.classList.add("excluir");

    let butoes = document.createElement("div");
    butoes.classList.add("butoes");
    butoes.append(novoBotaoEditar);
    butoes.append(novoBotaoExcluir);

    let novaMensagem = document.createElement("div");
    novaMensagem.classList.add("mensagem");
    novaMensagem.append(novoConteudo);
    novaMensagem.append(butoes);

    let escopo = document.querySelector(".mensagens");
    escopo.append(novaMensagem);

    document.querySelector('.caixa_de_texto').value = "";
}



let mensagens = document.querySelector('.mensagens');
let botaoEnviar = document.querySelector(".Enviar");

mensagens.addEventListener('click', function(event) {
    if (event.target.classList.contains("editar")) edita(event);
    else if (event.target.classList.contains("excluir")) exclui(event);
});

botaoEnviar.addEventListener("click",enviar);