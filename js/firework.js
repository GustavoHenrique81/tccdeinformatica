// Função para criar um fogo de artifício
function createFirework() {
    const firework = document.createElement('div');
    firework.classList.add('firework');

    // Posicionamento aleatório na tela
    const xPos = Math.random() * window.innerWidth;
    const yPos = Math.random() * window.innerHeight;

    firework.style.left = `${xPos}px`;
    firework.style.top = `${yPos}px`;

    document.getElementById('fireworksContainer').appendChild(firework);

    // Explodir após um curto período de tempo
    setTimeout(() => {
        firework.remove();
        explode(xPos, yPos);
    }, Math.random() * 2000 + 1000);
}

// Função para criar partículas ao explodir o fogo de artifício
function explode(xPos, yPos) {
    const numParticles = Math.random() * 80 + 20; // Número aleatório de partículas
    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Posição inicial na posição do fogo de artifício
        particle.style.left = `${xPos}px`;
        particle.style.top = `${yPos}px`;

        document.getElementById('fireworksContainer').appendChild(particle);

        // Movimento aleatório das partículas
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 5 + 2;
        const xVel = Math.cos(angle) * speed;
        const yVel = Math.sin(angle) * speed;

        // Animação das partículas
        animateParticle(particle, xVel, yVel);
    }
}

// Função para animar as partículas
function animateParticle(particle, xVel, yVel) {
    const updateInterval = setInterval(() => {
        const xPos = parseFloat(particle.style.left);
        const yPos = parseFloat(particle.style.top);

        // Atualizar posição da partícula
        particle.style.left = `${xPos + xVel}px`;
        particle.style.top = `${yPos + yVel}px`;

        // Remover a partícula quando estiver fora da tela
        if (xPos < 0 || xPos > window.innerWidth || yPos < 0 || yPos > window.innerHeight) {
            clearInterval(updateInterval);
            particle.remove();
        }
    }, 20);
}

// Chamada da função createFirework a cada intervalo de tempo
setInterval(createFirework, 1000);
// Matriz de cores das partículas
const particleColors = ['#007bff', '#ffcc00', '#ff6600', '#ccff00', '#cc33ff','#007bff'];

// Função para criar partículas ao explodir o fogo de artifício
function explode(xPos, yPos) {
    const numParticles = Math.random() * 80 + 20; // Número aleatório de partículas
    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Escolha aleatória de uma cor da matriz de cores
        const colorIndex = Math.floor(Math.random() * particleColors.length);
        const color = particleColors[colorIndex];
        particle.style.backgroundColor = color;

        // Posição inicial na posição do fogo de artifício
        particle.style.left = `${xPos}px`;
        particle.style.top = `${yPos}px`;

        document.getElementById('fireworksContainer').appendChild(particle);

        // Movimento aleatório das partículas
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 5 + 2;
        const xVel = Math.cos(angle) * speed;
        const yVel = Math.sin(angle) * speed;

        // Animação das partículas
        animateParticle(particle, xVel, yVel);
    }
}