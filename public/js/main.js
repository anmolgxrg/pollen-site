/**
 * pollen - Main JavaScript file
 */

document.addEventListener('DOMContentLoaded', function() {
    // Create particle elements
    createParticles();
    
    // Check for success parameter in URL (for form submission return)
    if (window.location.search.includes('success') || window.location.hash === '#success') {
        showThankYouMessage();
    }
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

/**
 * Shows a thank you message after form submission
 */
function showThankYouMessage() {
    // Create the message element
    const messageContainer = document.createElement('div');
    messageContainer.className = 'thank-you-message';
    messageContainer.innerHTML = `
        <div class="message-content">
            <h3>Thank you!</h3>
            <p>We've received your submission and will keep you updated.</p>
            <button class="close-btn">Close</button>
        </div>
    `;
    
    // Style the message
    messageContainer.style.position = 'fixed';
    messageContainer.style.top = '0';
    messageContainer.style.left = '0';
    messageContainer.style.width = '100%';
    messageContainer.style.height = '100%';
    messageContainer.style.display = 'flex';
    messageContainer.style.alignItems = 'center';
    messageContainer.style.justifyContent = 'center';
    messageContainer.style.backgroundColor = 'rgba(11, 11, 25, 0.9)';
    messageContainer.style.zIndex = '2000';
    messageContainer.style.opacity = '0';
    messageContainer.style.transition = 'opacity 0.5s ease';
    
    const content = messageContainer.querySelector('.message-content');
    content.style.background = 'rgba(20, 20, 40, 0.95)';
    content.style.padding = '3rem';
    content.style.borderRadius = '12px';
    content.style.textAlign = 'center';
    content.style.maxWidth = '40rem';
    content.style.transform = 'translateY(20px)';
    content.style.transition = 'transform 0.5s ease';
    
    const closeBtn = messageContainer.querySelector('.close-btn');
    closeBtn.style.background = 'linear-gradient(135deg, #5B8AF9, #00E7C7)';
    closeBtn.style.border = 'none';
    closeBtn.style.padding = '1rem 2rem';
    closeBtn.style.borderRadius = '5rem';
    closeBtn.style.color = '#FFFFFF';
    closeBtn.style.marginTop = '2rem';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.fontWeight = 'bold';
    
    // Add to the DOM
    document.body.appendChild(messageContainer);
    
    // Add close functionality
    closeBtn.addEventListener('click', function() {
        messageContainer.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(messageContainer);
            // Clean up the URL
            const cleanURL = window.location.protocol + '//' + window.location.host + window.location.pathname;
            window.history.replaceState({}, document.title, cleanURL);
        }, 500);
    });
    
    // Show with animation
    setTimeout(() => {
        messageContainer.style.opacity = '1';
        content.style.transform = 'translateY(0)';
    }, 10);
    
    // Auto-close after 5 seconds
    setTimeout(() => {
        if (document.body.contains(messageContainer)) {
            messageContainer.style.opacity = '0';
            setTimeout(() => {
                if (document.body.contains(messageContainer)) {
                    document.body.removeChild(messageContainer);
                    // Clean up the URL
                    const cleanURL = window.location.protocol + '//' + window.location.host + window.location.pathname;
                    window.history.replaceState({}, document.title, cleanURL);
                }
            }, 500);
        }
    }, 5000);
}