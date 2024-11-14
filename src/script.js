function submitForm() {
    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const data = document.getElementById("data").value;
    const hora = document.getElementById("hora").value;
    const servico = document.getElementById("servico").value;


    
    if (nome && cpf && data && hora && servico) {
            alert(`Agendamento realizado com sucesso para ${nome} no serviço ${servico}!`);
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}
