# 🏢 Sistema de Gerenciamento de Condomínio

Protótipo de um sistema web desenvolvido com o objetivo de
facilitar o acompanhamento e o gerenciamento dos pagamentos
de um condomínio.

---

## 🎯 Objetivo do projeto

O projeto surgiu a partir de uma situação real:

O controle dos pagamentos do condomínio é realizado de forma
manual, dificultando o acompanhamento das cobranças, dos
pagamentos realizados e dos apartamentos que ainda possuem
pendências.

A proposta é desenvolver um sistema simples e intuitivo que
permita aos moradores consultar suas cobranças e aos
responsáveis pela administração acompanhar os pagamentos.

---

## 👤 Área do morador

O protótipo possui uma área destinada aos moradores, onde
será possível:

- Realizar login;
- Identificar o apartamento;
- Visualizar a cobrança do condomínio;
- Consultar o status do pagamento;
- Acessar a opção de pagamento;
- Entrar em contato com o síndico através do WhatsApp;
- Consultar o histórico de pagamentos.

---

## 👨‍💼 Área administrativa

O sistema também possui uma área destinada ao síndico e à
administração do condomínio.

Funcionalidades presentes no protótipo:

- Login administrativo;
- Painel de administração;
- Visualização dos apartamentos;
- Visualização dos responsáveis;
- Visualização das cobranças;
- Visualização dos detalhes de cada apartamento;
- Confirmação de pagamentos;
- Consulta do histórico de pagamentos.

---

## 💰 Fluxo de pagamento

A ideia inicial do sistema é não receber o dinheiro
diretamente pela aplicação.

O fluxo planejado é:

1. O morador acessa o sistema;
2. Visualiza a cobrança do condomínio;
3. Escolhe a opção de pagamento;
4. É direcionado para o WhatsApp do síndico;
5. Realiza o pagamento através do método combinado;
6. Envia o comprovante ao síndico;
7. O síndico confirma o pagamento no sistema;
8. O status da cobrança passa para "Pago";
9. O morador pode consultar a confirmação no sistema.

---

## 🏢 Identificação dos apartamentos

Cada morador será relacionado ao seu apartamento.

A ideia é utilizar o apartamento como uma das principais
referências para localizar os pagamentos e o histórico.

Exemplo:

```text
Apartamento 101
        ↓
Responsável
        ↓
Cobranças
        ↓
Pagamentos
        ↓
Histórico
