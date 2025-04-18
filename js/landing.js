// Seleciona os elementos do modal
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const captionText = document.getElementById('caption');
const closeModal = document.querySelector('.close');

document.querySelectorAll('.gallery-item').forEach((item) => {
    item.addEventListener('click', (e) => {
        const img = item.querySelector('img');
        if (img) {
            modal.style.display = 'block';
            modalImage.src = img.src;
            captionText.innerHTML = img.alt;
            document.body.classList.add('modal-open'); // Adiciona a classe
            console.log('Classe modal-open adicionada ao body');
        }
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open'); // Remove a classe
    console.log('Classe modal-open removida do body');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open'); // Remove a classe
        console.log('Classe modal-open removida do body ao clicar fora');
    }
});

const images = Array.from(document.querySelectorAll('.gallery-item img'));
let currentIndex = 0;

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateModalContent();
});

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateModalContent();
});

function updateModalContent() {
    const img = images[currentIndex];
    modalImage.src = img.src;
    captionText.innerHTML = img.alt;
}

const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const starryBackground = document.querySelector('.starry-background');

// Função para criar estrelas
function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');

    // Define uma posição aleatória
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = Math.random() * 100 + 'vh';

    // Define um tamanho aleatório
    const size = Math.random() * 3 + 1; // Entre 1px e 4px
    star.style.width = size + 'px';
    star.style.height = size + 'px';

    // Adiciona a estrela ao contêiner
    starryBackground.appendChild(star);

    // Remove a estrela após um tempo
    setTimeout(() => {
        star.remove();
    }, 5000); // Duração de 5 segundos
}

// Gera estrelas continuamente
setInterval(createStar, 100); // Cria uma estrela a cada 100ms

