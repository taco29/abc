function showContinent(continent) {
    hideAllContinents();
    
    setTimeout(() => {
        const card = document.getElementById(continent);
        card.classList.remove('hidden');
        setTimeout(() => {
            card.classList.add('show');
        }, 50);
        
        card.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
}

function hideAllContinents() {
    const continents = ['asia', 'europe', 'africa', 'northamerica', 'southamerica', 'oceania'];
    continents.forEach(continent => {
        const card = document.getElementById(continent);
        card.classList.remove('show');
        setTimeout(() => {
            card.classList.add('hidden');
        }, 300);
    });
    
    document.querySelector('.floating').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.position = 'fixed';
    sparkle.style.left = Math.random() * window.innerWidth + 'px';
    sparkle.style.top = Math.random() * window.innerHeight + 'px';
    sparkle.style.fontSize = '20px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '1000';
    sparkle.style.animation = 'sparkleFloat 3s ease-out forwards';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 3000);
}

setInterval(createSparkle, 2000);
