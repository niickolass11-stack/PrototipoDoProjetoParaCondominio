const apartamentos = {

    "101": {

        responsavel: "João",

        telefone: "(31) 99999-9999",

        mes: "Agosto/2026",

        valor: "R$ 250,00",

        vencimento: "10/08/2026",

        status: "🟢 Pago",

        formaPagamento: "Pix",

        dataPagamento: "08/08/2026"

    },


    "102": {

        responsavel: "Maria",

        telefone: "(31) 98888-8888",

        mes: "Agosto/2026",

        valor: "R$ 250,00",

        vencimento: "10/08/2026",

        status: "🔴 Pendente",

        formaPagamento: "Ainda não informado",

        dataPagamento: "Ainda não realizado"

    },


    "103": {

        responsavel: "Carlos",

        telefone: "(31) 97777-7777",

        mes: "Agosto/2026",

        valor: "R$ 250,00",

        vencimento: "10/08/2026",

        status: "🔴 Pendente",

        formaPagamento: "Ainda não informado",

        dataPagamento: "Ainda não realizado"

    },


    "104": {

        responsavel: "Pedro",

        telefone: "(31) 96666-6666",

        mes: "Agosto/2026",

        valor: "R$ 250,00",

        vencimento: "10/08/2026",

        status: "🟢 Pago",

        formaPagamento: "Pix",

        dataPagamento: "07/08/2026"

    }

};

const parametros = new URLSearchParams(window.location.search);

const numeroApartamento = parametros.get("apartamento");

const apartamento = apartamentos[numeroApartamento];

if (!apartamento) {

    alert("Apartamento não encontrado.");

} else {

    document.querySelector("#titulo-apartamento").textContent =
        "Detalhes do apartamento " + numeroApartamento;


    document.querySelector("#responsavel-apartamento").textContent =
        apartamento.responsavel;


    document.querySelector("#telefone-apartamento").textContent =
        apartamento.telefone;


    document.querySelector("#mes-cobranca").textContent =
        apartamento.mes;


    document.querySelector("#valor-cobranca").textContent =
        apartamento.valor;


    document.querySelector("#vencimento-cobranca").textContent =
        apartamento.vencimento;


    document.querySelector("#status-cobranca").textContent =
        apartamento.status;


    document.querySelector("#forma-pagamento").textContent =
        apartamento.formaPagamento;


    document.querySelector("#data-pagamento").textContent =
        apartamento.dataPagamento;

}