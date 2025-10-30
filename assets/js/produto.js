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

    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', () => {
            // Remove active from all
            thumbnails.forEach(t => t.classList.remove('active'));

            // Add active to clicked
            thumb.classList.add('active');

            // Change main image
            mainImage.src = thumb.src;
        });
    });
});

// Buy Modal
function openBuyModal() {
    alert('Funcionalidade de compra será implementada em breve!\n\nPor favor, entre em contacto através do formulário para solicitar orçamento.');
    // TODO: Implementar modal de compra com quantidade
    window.location.href = 'index.html#contacto';
}

// Wishlist
function addToWishlist() {
    alert('Produto adicionado à lista de interesse!\n\nEntraremos em contacto em breve.');
    // TODO: Implementar sistema de wishlist
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

// Add to cart animation (placeholder)
const buyButton = document.querySelector('.produto-hero__actions .btn--primary');
if (buyButton) {
    buyButton.addEventListener('click', function() {
        this.innerHTML = '<i class="devicon-checkmark-plain"></i> Solicitado!';
        this.style.background = '#10b981';
        setTimeout(() => {
            this.innerHTML = '<i class="devicon-gitlab-plain"></i> Solicitar Orçamento';
            this.style.background = '';
        }, 2000);
    });
}
