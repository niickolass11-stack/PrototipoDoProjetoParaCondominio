// const formulario = document.querySelector(".login-box");

const botao = document.querySelector(".botao-login");

const apartamento = document.querySelector("#apartamento");

const senha = document.querySelector("#senha");

botao.addEventListener("click", function() {

    numeroApartamento = apartamento.value;

    senhaApartamento = senha.value;

    if(numeroApartamento === "101" && senhaApartamento === "1234") {

        window.location.href = "painel.html";
    }else {

        alert("Erro")
    }

});








