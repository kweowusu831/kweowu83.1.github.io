
document.addEventListener('DOMContentLoaded', function() {
    setupReadMoreButtons();
    
    fixYoutubeLinks();
    
    addImageHoverEffects();
    
    addSmoothScrolling();
});

function setupReadMoreButtons() {
    const artistCards = document.querySelectorAll('.artist-card');
    
    artistCards.forEach(card => {
        const paragraph = card.querySelector('p');
        
        if (paragraph && paragraph.textContent.length > 100) {
            const fullText = paragraph.textContent;
            
            const shortText = fullText.substring(0, 100) + '...';
            
            const readMoreBtn = document.createElement('span');
            readMoreBtn.className = 'read-more-btn';
            readMoreBtn.textContent = 'Read More';
            
            paragraph.textContent = shortText;
            
            paragraph.parentNode.insertBefore(readMoreBtn, paragraph.nextSibling);
            
            readMoreBtn.addEventListener('click', function() {
                if (readMoreBtn.textContent === 'Read More') {
                    paragraph.textContent = fullText;
                    readMoreBtn.textContent = 'Read Less';
                } else {
                    paragraph.textContent = shortText;
                    readMoreBtn.textContent = 'Read More';
                }
            });
        }
    });
}

function fixYoutubeLinks() {
    const iframes = document.querySelectorAll('iframe');
    
    iframes.forEach(iframe => {
        const src = iframe.getAttribute('src');
        
        if (src && src.includes('youtube.com/watch?v=')) {
            const videoId = src.split('watch?v=')[1];
            const embedUrl = `https://www.youtube.com/embed/${videoId}`;
            iframe.setAttribute('src', embedUrl);
        }
    });
}

function addImageHoverEffects() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 8px 20px rgba(0,0,0,0.3)';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
}

function addSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}