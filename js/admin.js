// const botaoAdmin = document.querySelector("#botao-admin");

// const usuarioAdmin = document.querySelector("#usuario-admin");

// const senhaAdmin = document.querySelector("#senha-admin");


// botaoAdmin.addEventListener("click", function() {

//     const usuario = usuarioAdmin.value;

//     const senha = senhaAdmin.value;


//     if (usuario === "sindico" && senha === "1234") {

//         window.location.href = "admin.html";

//     } else {

//         alert("Usuário ou senha inválidos!");

//     }

// });

// const botaoConfirmar = document.querySelector("#confirmar-101");

// const statusPagamento = document.querySelector("#status-101");


// botaoConfirmar.addEventListener("click", function() {

//     statusPagamento.textContent = "🟢 Pago";

//     statusPagamento.classList.remove("status-pendente");

//     statusPagamento.classList.add("status-pago");

//     botaoConfirmar.textContent = "Pagamento confirmado";

//     botaoConfirmar.disabled = true;

// });

const botaoConfirmar = document.querySelector("#confirmar-101");

const statusPagamento = document.querySelector("#status-101");


if (botaoConfirmar) {

    botaoConfirmar.addEventListener("click", function() {

        statusPagamento.textContent = "🟢 Pago";

        statusPagamento.classList.remove("status-pendente");

        statusPagamento.classList.add("status-pago");

        botaoConfirmar.textContent = "Pagamento confirmado";

        botaoConfirmar.disabled = true;

    });

}