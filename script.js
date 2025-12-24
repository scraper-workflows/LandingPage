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

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for fade-in animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Interactive demo for crawler progress
const crawlerProgress = document.querySelector('.crawler-progress');
if (crawlerProgress) {
    // Simulate crawler animation
    setInterval(() => {
        const items = crawlerProgress.querySelectorAll('.progress-item');
        items.forEach((item, index) => {
            setTimeout(() => {
                if (item.classList.contains('loading')) {
                    item.classList.remove('loading');
                    item.classList.add('active');
                    if (items[index + 1]) {
                        items[index + 1].classList.add('loading');
                    }
                }
            }, index * 1000);
        });
    }, 5000);
}

// Tab switching in dashboard
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});

// Search bar interaction
const searchInput = document.querySelector('.search-input');
if (searchInput) {
    searchInput.addEventListener('focus', () => {
        searchInput.parentElement.style.transform = 'scale(1.02)';
        searchInput.parentElement.style.transition = 'transform 0.3s ease';
    });
    
    searchInput.addEventListener('blur', () => {
        searchInput.parentElement.style.transform = 'scale(1)';
    });
}

// Filter tag interactions
const filterTags = document.querySelectorAll('.filter-tag');
filterTags.forEach(tag => {
    tag.addEventListener('click', () => {
        filterTags.forEach(t => t.classList.remove('active'));
        tag.classList.add('active');
    });
});

// Add hover effects to cards
const cards = document.querySelectorAll('.dashboard-card, .rec-card, .result-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-4px)';
        card.style.transition = 'transform 0.3s ease';
        card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.1)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '';
    });
});

// Simulate new alerts appearing
const monitoringDemo = document.querySelector('.monitoring-demo');
if (monitoringDemo) {
    setInterval(() => {
        const alerts = monitoringDemo.querySelectorAll('.alert-item');
        alerts.forEach(alert => {
            alert.classList.remove('new');
        });
        if (alerts[0]) {
            alerts[0].classList.add('new');
        }
    }, 8000);
}

// CTA button pulse effect
const ctaButtons = document.querySelectorAll('.primary-button');
ctaButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.animation = 'pulse 0.5s ease';
    });
});

// Add pulse animation
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }
`;
document.head.appendChild(style);

console.log('🚀 Intelligence Platform landing page loaded successfully!');
