// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header background change on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(220, 20, 60, 0.98)';
    } else {
        header.style.background = 'rgba(220, 20, 60, 0.95)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all animated elements
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.fact-item, .tradition-card, .gallery-item, .section-header');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
    
    // Add stagger animation delays
    document.querySelectorAll('.fact-item').forEach((item, index) => {
        item.style.animationDelay = `${index * 0.2}s`;
    });
    
    document.querySelectorAll('.tradition-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.3}s`;
    });
    
    document.querySelectorAll('.gallery-item').forEach((item, index) => {
        item.style.animationDelay = `${index * 0.2}s`;
    });
});

// CTA Button scroll to traditions section
document.querySelector('.cta-button').addEventListener('click', function() {
    document.querySelector('#traditions').scrollIntoView({
        behavior: 'smooth'
    });
});

// Dynamic floating elements
function createFloatingElement() {
    const elements = ['🌼', '🏵️', '🌺', '🪔', '✨'];
    const element = document.createElement('div');
    element.innerHTML = elements[Math.floor(Math.random() * elements.length)];
    element.style.position = 'fixed';
    element.style.fontSize = '2rem';
    element.style.pointerEvents = 'none';
    element.style.zIndex = '999';
    element.style.left = Math.random() * window.innerWidth + 'px';
    element.style.top = window.innerHeight + 'px';
    element.style.opacity = '0.7';
    
    document.body.appendChild(element);
    
    // Animate upward
    let position = window.innerHeight;
    const speed = 1 + Math.random() * 2;
    
    function animate() {
        position -= speed;
        element.style.top = position + 'px';
        element.style.transform = `rotate(${position * 0.5}deg)`;
        
        if (position < -100) {
            element.remove();
        } else {
            requestAnimationFrame(animate);
        }
    }
    
    animate();
}

// Create floating elements periodically
setInterval(createFloatingElement, 3000);

// Gallery image lazy loading effect
document.querySelectorAll('.gallery-image').forEach(img => {
    img.addEventListener('load', function() {
        this.style.opacity = '1';
    });
});

// Add subtle parallax effect to hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Tika pattern interactive effect
document.querySelector('.tika-pattern')?.addEventListener('click', function() {
    this.style.animation = 'pulse 0.5s ease-in-out';
    setTimeout(() => {
        this.style.animation = 'pulse 2s infinite';
    }, 500);
});

// Add click effect to tradition cards
document.querySelectorAll('.tradition-card').forEach(card => {
    card.addEventListener('click', function() {
        this.style.transform = 'translateY(-15px) scale(1.05)';
        setTimeout(() => {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        }, 200);
    });
});

// Blessing text typing effect
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when wishes section is visible
const wishesObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const blessingElement = document.querySelector('.blessing-text');
            if (blessingElement && !blessingElement.classList.contains('typed')) {
                blessingElement.classList.add('typed');
                const originalText = blessingElement.textContent;
                typeWriter(blessingElement, originalText, 150);
            }
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', function() {
    const wishesSection = document.querySelector('.wishes');
    if (wishesSection) {
        wishesObserver.observe(wishesSection);
    }
});

// Add hover sound effect simulation (visual feedback)
document.querySelectorAll('.nav-link, .cta-button, .tradition-card, .gallery-item').forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.2s ease';
    });
});

// Mobile menu toggle (basic implementation)
function createMobileMenu() {
    const navContainer = document.querySelector('.nav-container');
    const menuToggle = document.createElement('div');
    menuToggle.className = 'mobile-menu-toggle';
    menuToggle.innerHTML = '☰';
    menuToggle.style.display = 'none';
    menuToggle.style.fontSize = '1.5rem';
    menuToggle.style.color = 'white';
    menuToggle.style.cursor = 'pointer';
    
    navContainer.appendChild(menuToggle);
    
    // Show/hide mobile menu button based on screen size
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            menuToggle.style.display = 'block';
        } else {
            menuToggle.style.display = 'none';
        }
    }
    
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
}

// Initialize mobile menu
document.addEventListener('DOMContentLoaded', createMobileMenu);

// Hero Photos Interactive Effects
document.addEventListener('DOMContentLoaded', function() {
    const heroPhotos = document.querySelectorAll('.hero-photo');
    
    heroPhotos.forEach((photo, index) => {
        // Add click interaction for hero photos
        photo.addEventListener('click', function() {
            // Create ripple effect
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.width = '50px';
            ripple.style.height = '50px';
            ripple.style.background = 'rgba(255, 215, 0, 0.6)';
            ripple.style.borderRadius = '50%';
            ripple.style.top = '50%';
            ripple.style.left = '50%';
            ripple.style.transform = 'translate(-50%, -50%) scale(0)';
            ripple.style.pointerEvents = 'none';
            ripple.style.zIndex = '15';
            
            this.appendChild(ripple);
            
            // Animate ripple
            ripple.animate([
                { transform: 'translate(-50%, -50%) scale(0)', opacity: 1 },
                { transform: 'translate(-50%, -50%) scale(4)', opacity: 0 }
            ], {
                duration: 600,
                easing: 'ease-out'
            }).onfinish = () => ripple.remove();
            
            // Add special celebration effect
            createCelebrationBurst(this);
        });
        
        // Add hover effect
        photo.addEventListener('mouseenter', function() {
            this.style.animation = 'heroPhotoFloat 2s ease-in-out infinite';
            this.querySelector('.photo-frame').style.animationDuration = '1s';
        });
        
        photo.addEventListener('mouseleave', function() {
            this.style.animation = `heroPhotoFloat 8s ease-in-out infinite`;
            this.style.animationDelay = index === 0 ? '0s' : '4s';
            this.querySelector('.photo-frame').style.animationDuration = '3s';
        });
    });
});

// Create celebration burst effect
function createCelebrationBurst(photoElement) {
    const celebrationElements = ['🎉', '✨', '🌟', '🎊', '💫'];
    const rect = photoElement.getBoundingClientRect();
    
    for (let i = 0; i < 8; i++) {
        const element = document.createElement('div');
        element.innerHTML = celebrationElements[Math.floor(Math.random() * celebrationElements.length)];
        element.style.position = 'fixed';
        element.style.fontSize = '1.5rem';
        element.style.pointerEvents = 'none';
        element.style.zIndex = '1000';
        element.style.left = (rect.left + rect.width / 2) + 'px';
        element.style.top = (rect.top + rect.height / 2) + 'px';
        
        document.body.appendChild(element);
        
        // Random direction and distance
        const angle = (i / 8) * 2 * Math.PI;
        const distance = 100 + Math.random() * 100;
        const finalX = rect.left + rect.width / 2 + Math.cos(angle) * distance;
        const finalY = rect.top + rect.height / 2 + Math.sin(angle) * distance;
        
        element.animate([
            { 
                left: (rect.left + rect.width / 2) + 'px',
                top: (rect.top + rect.height / 2) + 'px',
                opacity: 1,
                transform: 'scale(0) rotate(0deg)'
            },
            { 
                left: finalX + 'px',
                top: finalY + 'px',
                opacity: 0,
                transform: 'scale(1.5) rotate(360deg)'
            }
        ], {
            duration: 1000 + Math.random() * 500,
            easing: 'ease-out'
        }).onfinish = () => element.remove();
    }
}

// Add photo entrance animations
function animateHeroPhotosEntrance() {
    const photos = document.querySelectorAll('.hero-photo');
    
    photos.forEach((photo, index) => {
        photo.style.opacity = '0';
        photo.style.transform = `scale(0.5) rotate(${index === 0 ? '-45deg' : '45deg'})`;
        
        setTimeout(() => {
            photo.style.transition = 'all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            photo.style.opacity = '1';
            photo.style.transform = `scale(1) rotate(${index === 0 ? '-15deg' : '12deg'})`;
        }, 1500 + index * 500);
    });
}

// Initialize photo entrance animation
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(animateHeroPhotosEntrance, 1000);
});
