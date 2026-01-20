
script.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('Site "A hora é Agora, comigo Cauê Serra" carregado com sucesso!');

    // Exemplo de interatividade: Efeito de scroll suave nos links de navegação
    const navLinks = document.querySelectorAll('header nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Aqui você poderia adicionar lógica para navegação interna se houver IDs
            // Por enquanto, apenas um log para demonstrar funcionalidade
            console.log(`Navegando para: ${link.textContent}`);
        });
    });

    // Você pode adicionar aqui uma função para buscar notícias de uma API no futuro
});
