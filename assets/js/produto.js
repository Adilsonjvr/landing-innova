/* ========================================
   PRODUTO PAGE SCRIPTS
   ======================================== */

// Tabs Functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tabs__btn');
    const tabPanels = document.querySelectorAll('.tabs__panel');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.dataset.tab;

            // Remove active from all
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanels.forEach(p => p.classList.remove('active'));

            // Add active to clicked
            btn.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // Thumbnail Gallery
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('mainImage');

    if (mainImage && mainImage.tagName === 'IMG') {
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', () => {
                thumbnails.forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
                if (thumb instanceof HTMLImageElement) {
                    mainImage.src = thumb.src;
                }
            });
        });
    }
});

// Buy Modal
function openBuyModal() {
    window.location.href = 'checkout.html';
}

// Wishlist
function addToWishlist() {
    window.location.href = 'carrinho.html';
}

// Smooth scroll for breadcrumb links
document.querySelectorAll('.breadcrumb a').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.getAttribute('href').includes('#')) {
            e.preventDefault();
            const target = this.getAttribute('href').split('#')[1];
            if (target) {
                window.location.href = this.getAttribute('href');
            }
        }
    });
});

// Add animation placeholder removed in favor of dedicated pages
