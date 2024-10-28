// Função para exibir detalhes de um filhote
function showDetails(name, age, gender) {
    alert(`Detalhes do Filhote:\n\nNome: ${name}\nIdade: ${age}\nGênero: ${gender}`);
}

// Função para enviar o formulário
function submitForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`);
        document.getElementById("contactForm").reset();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

function sendWhatsAppMessage() {
    // Captura os valores dos campos do formulário
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        // Número do WhatsApp do canil
        const phoneNumber = "5583991387015"; // Substitua com o número do canil, incluindo o código do país (ex: "55" para o Brasil)
        
        // Cria a mensagem formatada para envio
        const textMessage = `Olá, meu nome é ${name} \n\n%0AEmail: ${email} %0A%0A${message}`;

        // URL da API do WhatsApp com a mensagem e o número de telefone
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${textMessage}`;

        // Abre a URL do WhatsApp em uma nova aba
        window.open(whatsappUrl, '_blank');
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}
