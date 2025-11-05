/* ========================================
   PURCHASE MODAL WITH GSAP ANIMATIONS
   ======================================== */

const modal = document.getElementById('purchaseModal');
const modalContainer = modal.querySelector('.modal__container');
const modalOverlay = modal.querySelector('.modal__overlay');
const modalClose = modal.querySelector('.modal__close');
const purchaseForm = document.getElementById('purchaseForm');

// Function to open modal
function openPurchaseModal(productName = '') {
    // Set initial state
    gsap.set(modalContainer, {
        scale: 0.8,
        opacity: 0,
        y: 50
    });
    gsap.set(modalOverlay, { opacity: 0 });

    // Show modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // Animate overlay
    gsap.to(modalOverlay, {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out'
    });

    // Animate container
    gsap.to(modalContainer, {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'back.out(1.4)',
        delay: 0.1
    });

    // Animate form elements sequentially
    const formElements = modal.querySelectorAll('.form-group, .form-actions');
    gsap.from(formElements, {
        opacity: 0,
        y: 20,
        duration: 0.4,
        stagger: 0.05,
        ease: 'power2.out',
        delay: 0.3
    });

    // Pre-fill product if provided
    if (productName) {
        const productSelect = document.getElementById('produto');
        const productMap = {
            'Toxina Botulínica': 'botox',
            'Ácido Hialurónico': 'acido',
            'Bioestimuladores': 'bio'
        };
        productSelect.value = productMap[productName] || '';
    }
}

// Function to close modal
function closePurchaseModal() {
    // Animate out
    gsap.to(modalContainer, {
        scale: 0.8,
        opacity: 0,
        y: 50,
        duration: 0.3,
        ease: 'power2.in'
    });

    gsap.to(modalOverlay, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            purchaseForm.reset();
        }
    });
}

// Event Listeners
modalClose.addEventListener('click', closePurchaseModal);

modalOverlay.addEventListener('click', closePurchaseModal);

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
        closePurchaseModal();
    }
});

// Form submission
purchaseForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(purchaseForm);
    const data = Object.fromEntries(formData);

    // Animate button
    const submitBtn = purchaseForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    submitBtn.disabled = true;
    submitBtn.innerHTML = `
        <svg class="spinner" viewBox="0 0 24 24" style="width: 20px; height: 20px; animation: spin 1s linear infinite;">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" fill="none" opacity="0.3"/>
            <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round"/>
        </svg>
        Enviando...
    `;

    // Simulate API call
    setTimeout(() => {
        // Show success message
        submitBtn.innerHTML = `
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width: 20px; height: 20px;">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Enviado com Sucesso!
        `;
        submitBtn.style.background = '#10b981';

        // Log data (in production, send to backend)
        console.log('Solicitação de orçamento:', data);

        // Close modal after delay
        setTimeout(() => {
            closePurchaseModal();
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
            submitBtn.style.background = '';

            // Show success notification (you can enhance this)
            alert('Obrigado! Entraremos em contacto em breve.');
        }, 2000);
    }, 1500);
});

// Add click handlers to all "Ver Detalhes" and purchase CTAs
document.addEventListener('DOMContentLoaded', () => {
    // Product cards
    const productCards = document.querySelectorAll('.produto-card');
    productCards.forEach(card => {
        const title = card.querySelector('.produto-card__title')?.textContent;
        const cta = card.querySelector('.produto-card__cta');

        // Add secondary CTA button for purchase
        if (cta && title) {
            const purchaseBtn = document.createElement('button');
            purchaseBtn.className = 'btn btn--outline';
            purchaseBtn.innerHTML = `
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width: 18px; height: 18px;">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                Solicitar
            `;
            purchaseBtn.style.marginTop = '0.5rem';
            purchaseBtn.addEventListener('click', (e) => {
                e.preventDefault();
                openPurchaseModal(title);
            });
            cta.parentNode.appendChild(purchaseBtn);
        }
    });

    // CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-final__btn, .hero__cta-primary');
    ctaButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Only intercept if not going to contact section
            if (btn.getAttribute('href') === '#contacto' || btn.getAttribute('href')?.includes('contacto')) {
                // Let it scroll to contact section
                return;
            }
            e.preventDefault();
            openPurchaseModal();
        });
    });
});

// Add spinner animation CSS
const modalSpinnerStyles = document.createElement('style');
modalSpinnerStyles.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(modalSpinnerStyles);
