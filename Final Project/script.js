// Simple JavaScript for R&B page interactivity

// Wait for the document to fully load before running scripts
document.addEventListener('DOMContentLoaded', function() {
    // Add "Read More" functionality to artist cards
    setupReadMoreButtons();
    
    // Fix YouTube iframes
    fixYoutubeLinks();
    
    // Add hover effect to images
    addImageHoverEffects();
    
    // Add smooth scrolling to links
    addSmoothScrolling();
});

// Function to set up "Read More" buttons for artist cards
function setupReadMoreButtons() {
    // Get all artist cards
    const artistCards = document.querySelectorAll('.artist-card');
    
    // Process each card
    artistCards.forEach(card => {
        const paragraph = card.querySelector('p');
        
        // Only add read more if paragraph is long enough
        if (paragraph && paragraph.textContent.length > 100) {
            // Save the full content
            const fullText = paragraph.textContent;
            
            // Shorten the text
            const shortText = fullText.substring(0, 100) + '...';
            
            // Create Read More button
            const readMoreBtn = document.createElement('span');
            readMoreBtn.className = 'read-more-btn';
            readMoreBtn.textContent = 'Read More';
            
            // Replace paragraph text with shortened version
            paragraph.textContent = shortText;
            
            // Add button after paragraph
            paragraph.parentNode.insertBefore(readMoreBtn, paragraph.nextSibling);
            
            // Setup click event for the button
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

// Function to fix YouTube links in iframes
function fixYoutubeLinks() {
    const iframes = document.querySelectorAll('iframe');
    
    iframes.forEach(iframe => {
        const src = iframe.getAttribute('src');
        
        // Check if it's a YouTube link that needs fixing
        if (src && src.includes('youtube.com/watch?v=')) {
            // Convert watch URL to embed URL
            const videoId = src.split('watch?v=')[1];
            const embedUrl = `https://www.youtube.com/embed/${videoId}`;
            iframe.setAttribute('src', embedUrl);
        }
    });
}

// Function to add hover effects to images
function addImageHoverEffects() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        // Add event listeners for mouse enter/leave
        img.addEventListener('mouseenter', function() {
            // Add subtle animation or effect
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 8px 20px rgba(0,0,0,0.3)';
        });
        
        img.addEventListener('mouseleave', function() {
            // Reset to original state
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
}

// Function to add smooth scrolling to links
function addSmoothScrolling() {
    // Get all internal links (those that start with #)
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default link behavior
            e.preventDefault();
            
            // Get the target element
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            // Scroll smoothly to the target
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}