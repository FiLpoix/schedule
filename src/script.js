function submitForm() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const data = document.getElementById("data").value;
    const hora = document.getElementById("hora").value;
    const servico = document.getElementById("servico").value;
    const mensagemDiv = document.getElementById("mensagem");

    
    if (nome && email && data && hora && servico) {
        mensagemDiv.innerText = `Agendamento realizado com sucesso para ${nome} no serviço ${servico}!`;
    } else {
        mensagemDiv.innerText = "Por favor, preencha todos os campos.";
    }
}
