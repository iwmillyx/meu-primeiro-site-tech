document.getElementById("botaoEnviar").addEventListener("click", validaFormulario);

function validaFormulario(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;

    if (nome !== "" && email !== "" && telefone !== "") {
        alert("Prontinho! Você receberá as novidades por email.");
    } else {
        alert("Por favor, preencha os campos nome, email e telefone!");
    }
}
