document.addEventListener('DOMContentLoaded', () => {
    const gerarCartasBtn = document.getElementById('gerarcartas');
    const shotsAleatoriosBtn = document.getElementById('shotsAleatorios');
    const cartaImagem = document.getElementById('cartaImagem');
    const cartaImagem2 = document.getElementById('cartaImagem2');
    const numeroAleatorioDiv = document.getElementById('numeroAleatorio');

    const cartas = [
        "dados/dado_1-removebg-preview.png",
        "dados/dado_2-removebg-preview.png",
        "dados/dado_3-removebg-preview.png",
        "dados/dado_4-removebg-preview.png",
        "dados/dado_5-removebg-preview.png",
        "dados/dado_6-removebg-preview.png",
    ];

    if (gerarCartasBtn && cartaImagem && cartaImagem2 && shotsAleatoriosBtn && numeroAleatorioDiv) {
        // Função para gerar dados (mantida igual)
        const gerarDados = () => {
            let indiceAleatorio1 = Math.floor(Math.random() * cartas.length);
            let indiceAleatorio2;
            do {
                indiceAleatorio2 = Math.floor(Math.random() * cartas.length);
            } while (indiceAleatorio2 === indiceAleatorio1);

            cartaImagem.src = cartas[indiceAleatorio1];
            cartaImagem2.src = cartas[indiceAleatorio2];
            cartaImagem.style.display = "block";
            cartaImagem2.style.display = "block";
            numeroAleatorioDiv.textContent = "";
        };

        gerarCartasBtn.addEventListener('click', gerarDados);

        shotsAleatoriosBtn.addEventListener('click', () => {
            cartaImagem.src = "";
            cartaImagem2.src = "";
            cartaImagem.style.display = "none";
            cartaImagem2.style.display = "none";

            const numeroAleatorio = Math.floor(Math.random() * 16);
            numeroAleatorioDiv.textContent = numeroAleatorio;
        });

        // Chamar a função gerarDados() ao carregar a página
        gerarDados(); 
    } else {
        console.error('Elementos não encontrados!');
    }
});