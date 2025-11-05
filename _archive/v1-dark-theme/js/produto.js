/**
 * INNOVA - Produto Individual Page JavaScript
 * Funcionalidades para páginas de produtos individuais
 */

(function() {
    'use strict';

    // ========================================
    // 1. GALERIA DE IMAGENS - THUMBNAILS
    // ========================================

    const thumbButtons = document.querySelectorAll('.galeria-thumbnails .thumb');
    const mainImage = document.querySelector('.galeria-main-img');

    if (thumbButtons.length > 0 && mainImage) {
        thumbButtons.forEach((thumb, index) => {
            thumb.addEventListener('click', function() {
                // Remove active class from all thumbnails
                thumbButtons.forEach(t => t.classList.remove('active'));

                // Add active class to clicked thumbnail
                this.classList.add('active');

                // Get the image source from the clicked thumbnail
                const thumbImg = this.querySelector('img');
                if (thumbImg) {
                    // Fade out
                    mainImage.style.opacity = '0';

                    // Change image after fade
                    setTimeout(() => {
                        mainImage.src = thumbImg.src;
                        mainImage.alt = thumbImg.alt;
                        // Fade in
                        mainImage.style.opacity = '1';
                    }, 200);
                }
            });
        });
    }

    // ========================================
    // 2. PRODUTO TABS NAVIGATION
    // ========================================

    const tabButtons = document.querySelectorAll('.produto-tab-btn');
    const tabPanels = document.querySelectorAll('.produto-tab-panel');

    if (tabButtons.length > 0 && tabPanels.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                const targetTab = this.getAttribute('data-tab');

                // Remove active class from all buttons
                tabButtons.forEach(btn => btn.classList.remove('active'));

                // Add active class to clicked button
                this.classList.add('active');

                // Hide all panels
                tabPanels.forEach(panel => panel.classList.remove('active'));

                // Show target panel
                const targetPanel = document.getElementById(targetTab);
                if (targetPanel) {
                    targetPanel.classList.add('active');
                }
            });
        });
    }

    // ========================================
    // 3. SMOOTH SCROLL TO TABS (from external links)
    // ========================================

    // Check if there's a hash in the URL
    const urlHash = window.location.hash;
    if (urlHash) {
        // Remove the # from the hash
        const tabId = urlHash.substring(1);

        // Find the button that corresponds to this tab
        const targetButton = document.querySelector(`[data-tab="${tabId}"]`);
        const targetPanel = document.getElementById(tabId);

        if (targetButton && targetPanel) {
            // Wait for page to load
            setTimeout(() => {
                // Activate the tab
                tabButtons.forEach(btn => btn.classList.remove('active'));
                targetButton.classList.add('active');

                tabPanels.forEach(panel => panel.classList.remove('active'));
                targetPanel.classList.add('active');

                // Scroll to tabs section
                const tabsSection = document.querySelector('.produto-tabs-section');
                if (tabsSection) {
                    const headerHeight = 80;
                    const targetPosition = tabsSection.offsetTop - headerHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 100);
        }
    }

    // ========================================
    // 4. IMAGE LAZY LOAD with fade
    // ========================================

    const images = document.querySelectorAll('.tab-visual img, .galeria-main-img');

    images.forEach(img => {
        // Add transition
        img.style.transition = 'opacity 0.3s ease';

        if (img.complete) {
            img.style.opacity = '1';
        } else {
            img.style.opacity = '0';
            img.addEventListener('load', function() {
                this.style.opacity = '1';
            });
        }
    });

    // ========================================
    // 5. SCROLL ANIMATIONS for Tab Content
    // ========================================

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe cards and elements
    const animateElements = document.querySelectorAll(
        '.aplicacao-card, .protocolo-step, .spec-row'
    );

    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s`;
        observer.observe(el);
    });

    // ========================================
    // 6. PRINT INFORMATION (Optional utility)
    // ========================================

    // Log product info for debugging
    const productTitle = document.querySelector('.produto-title');
    if (productTitle) {
        console.log('%cProduto INNOVA', 'font-size: 16px; font-weight: bold; color: #0a0a0a;');
        console.log('%c' + productTitle.textContent, 'font-size: 14px; color: #737373;');
    }

})();
