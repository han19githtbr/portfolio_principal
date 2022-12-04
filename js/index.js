document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

document.querySelector("#qtde").addEventListener("change", atualizarPreco)
document.querySelector("#js").addEventListener("change", atualizarPreco)
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco)
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco)
document.querySelector("#prazo").addEventListener("change", function () {
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
    atualizarPreco()
})

function atualizarPreco(){
    const qtde = document.querySelector("#qtde").value
    const temJS = document.querySelector("#js").checked
    const incluiLayout = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#prazo").value
  
    let preco = qtde * 100;
    if (temJS) preco *= 1.1
    if (incluiLayout) preco += 500
    let taxaUrgencia = 1 - prazo*0.1;
    preco *= 1 + taxaUrgencia
   
    document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`
}


let form = document.querySelector("#contactForm");
$('input[type=text]').focus(function(){
    resetarCampoInvalido($(this));
})

let message = document.querySelector("#contactForm");
$('textarea[name=mensagem]').focus(function(){
    resetarCampoInvalido($(this));
})


form.addEventListener("submit", function(event){
    console.log("Teste");
    event.preventDefault();
    
    let nome = $('input[name=nome]').val();
    let email = $('input[name=email]').val();
    let assunto = $('input[name=assunto]').val();
    let mensagem = $('textarea[name=mensagem]').val();

    if (verificarNome(nome) == false) {
        aplicarCampoInvalido($('input[name=nome]'));
    }else if(verificarEmail(email) == false){
        aplicarCampoInvalido($('input[name=email]'));
    }else if(verificarAssunto(assunto) == false){
        aplicarCampoInvalido($('input[name=assunto]'));
    }else if(verificarMensagem(mensagem) == false){
        aplicarCampoInvalido($('textarea[name=mensagem]'));
    /*}else if(verificarCpf(cpf) == false){
        aplicarCampoInvalido($('input[name=cpf]'));*/
    }else{
        return false;
    }
})


function verificarNome(nome){
    if (nome == '') {
       return false;
    }
    let amount = nome.split(' ').length;
    let splitStr = nome.split(' ');

    if (amount >= 2) {
        for (let i = 0; i < amount; i++) {
            if (splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)) {

            } else {
                return false;
            }
        }
    } else {
        return false;
    }
}


function verificarEmail(email){
    if (email == '') {
       return false;
    }
    if(email.match(/^([a-z0-9-_.]{1,})+@+([a-z.]{1,}[a-z]{1,})$/)) {
    
    }else{
        return false;
    }
}


function verificarAssunto(assunto){
    if (assunto == ''){
        return false;
    }
}


function verificarMensagem(mensagem){
    if (mensagem == ''){
        return false;
    }
}


function aplicarCampoInvalido(el){
    alert('ALERTA Campo Inválido');
    el.css('color', 'red');
    el.css('border', '1px solid red');
    el.val('Campo Inválido');
}


function resetarCampoInvalido(el){
    el.css('color', 'black');
    el.css('border', '1px solid white');
    el.val('');
}

