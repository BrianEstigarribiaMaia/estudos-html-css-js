var acaoEscolhida   = "";
var valorTela       = "";
var valorAntigoTela = "";

function botaoDigitoClick(event){
    var digito = event.target.value;
    atualizarTela(`${valorTela}${digito}`);
}

function botaoAcaoClick(event) {
    var acao = event.target.value;
    rodarAcao(acao);
}

function atualizarTela(valor) {
    var tela = document.getElementById("tela");
    valorTela = valor;
    tela.innerHTML = valorTela;
}

function rodarAcao(acao){
    if(acao === "="){
        var resultado;

        if(acaoEscolhida === "+"){
            resultado = parseInt(valorAntigoTela) + parseInt(valorTela);
        }
        if(acaoEscolhida === "-"){
            resultado = parseInt(valorAntigoTela) - parseInt(valorTela);
        }
        if(acaoEscolhida === "*"){
            resultado = parseInt(valorAntigoTela) * parseInt(valorTela);
        }
        if(acaoEscolhida === "/"){
            resultado = parseInt(valorAntigoTela) / parseInt(valorTela);
        }

        atualizarTela(resultado);
    }else{
        if(acao === "c"){
            location.reload();
        }
        valorAntigoTela = valorTela;
        atualizarTela("");
        acaoEscolhida = acao;
    }
}