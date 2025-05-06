/**
 * pollen - Main JavaScript file
 */

document.addEventListener('DOMContentLoaded', function() {
    // Create particle elements
    createParticles();
});

/**
 * Creates particle elements and adds them to the body
 */
function createParticles() {
    const body = document.querySelector('body');
    const particleCount = Math.min(window.innerWidth / 10, 50); // Responsive particle count
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        
        // Random size
        const size = Math.random() * 3 + 1;
        
        // Random animation delay
        const delay = Math.random() * 5;
        
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.animationDelay = `${delay}s`;
        
        body.appendChild(particle);
    }
}