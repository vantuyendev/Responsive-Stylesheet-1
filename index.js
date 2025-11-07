// Pokemon Interactive Features
document.addEventListener('DOMContentLoaded', function() {
    // Add click event to all Pokemon cards
    const pokemonCards = document.querySelectorAll('.box');
    
    pokemonCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add a pulse animation
            this.style.animation = 'pulse 0.5s';
            setTimeout(() => {
                this.style.animation = '';
            }, 500);
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetClass = href.substring(1);
                const targetElement = document.querySelector(`.${targetClass}`);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    // Highlight the target card
                    targetElement.style.transform = 'scale(1.05)';
                    setTimeout(() => {
                        targetElement.style.transform = '';
                    }, 1000);
                }
            }
        });
    });
    
    // Add animation on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    // Initially hide cards for animation
    pokemonCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
    
    console.log('Pokemon Collection loaded! 🔴🔵');
});

// Add CSS animation for pulse effect
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }
`;
document.head.appendChild(style);
