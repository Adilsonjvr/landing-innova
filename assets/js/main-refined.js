/**
 * INNOVA - Refined JavaScript
 * Interações e funcionalidades premium
 */

(function() {
    'use strict';

    // ========================================
    // 1. MOBILE MENU TOGGLE
    // ========================================

    const mobileToggle = document.getElementById('mobile-toggle');
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileToggle && nav) {
        mobileToggle.addEventListener('click', () => {
            nav.classList.toggle('active');

            // Animate hamburger icon
            const spans = mobileToggle.querySelectorAll('span');
            if (nav.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translateY(7px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translateY(-7px)';
            } else {
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            }
        });

        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                const spans = mobileToggle.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && !mobileToggle.contains(e.target)) {
                nav.classList.remove('active');
                const spans = mobileToggle.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            }
        });
    }

    // ========================================
    // 2. SMOOTH SCROLL
    // ========================================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Ignore empty anchors
            if (href === '#' || href === '#politica' || href === '#faq' || href === '#termos' || href === '#privacidade' || href === '#envios' || href === '#formacao') {
                e.preventDefault();
                return;
            }

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerHeight = 80;
                const targetPosition = target.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========================================
    // 3. HEADER SCROLL EFFECT
    // ========================================

    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            header.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.08)';
        } else {
            header.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });

    // ========================================
    // 4. FORM VALIDATION & SUBMIT
    // ========================================

    const form = document.getElementById('contacto-form');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);

            // Basic validation
            if (!data.nome || !data.email || !data.telefone || !data.profissao || !data.interesse) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                alert('Por favor, insira um email válido.');
                return;
            }

            // Phone validation (basic)
            const phoneRegex = /^[+]?[0-9\s()-]{9,}$/;
            if (!phoneRegex.test(data.telefone)) {
                alert('Por favor, insira um telefone válido.');
                return;
            }

            // Show loading state
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'A enviar...';
            submitBtn.disabled = true;

            // Simulate form submission (replace with actual implementation)
            setTimeout(() => {
                alert('Pedido enviado com sucesso! A nossa equipa entrará em contacto em breve.');
                form.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);

            // TODO: Replace with actual form submission
            // Example: send to backend API or email service
            console.log('Form data:', data);
        });

        // Real-time validation for email
        const emailInput = form.querySelector('#email');
        if (emailInput) {
            emailInput.addEventListener('blur', function() {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (this.value && !emailRegex.test(this.value)) {
                    this.style.borderColor = '#dc2626';
                } else {
                    this.style.borderColor = '';
                }
            });
        }
    }

    // ========================================
    // 5. ANIMATE ON SCROLL (Intersection Observer)
    // ========================================

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -80px 0px'
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

    // Observe elements for animation (exclude carousel cards)
    const animateElements = document.querySelectorAll(
        '.product-card:not(.product-card-carousel), .feature-item, .marca-item, .stat-item, .cert-item, .trust-item'
    );

    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });

    // ========================================
    // 6. STATS COUNTER ANIMATION
    // ========================================

    function animateCounter(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + '+';
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + '+';
            }
        }, 16);
    }

    // Animate hero stats
    const heroStatsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const stats = entry.target.querySelectorAll('.stat strong');
                stats.forEach(stat => {
                    const target = parseInt(stat.textContent);
                    animateCounter(stat, target);
                });
                heroStatsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        heroStatsObserver.observe(heroStats);
    }

    // Animate sobre stats
    const sobreStats = document.querySelectorAll('.sobre-stats .stat-number');
    if (sobreStats.length > 0) {
        const sobreObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = parseInt(entry.target.textContent);
                    animateCounter(entry.target, target, 2500);
                    sobreObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        sobreStats.forEach(stat => sobreObserver.observe(stat));
    }

    // ========================================
    // 7. ACTIVE NAVIGATION LINK
    // ========================================

    const sections = document.querySelectorAll('section[id]');

    function setActiveLink() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const link = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(l => l.classList.remove('active'));
                if (link) link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', setActiveLink);

    // ========================================
    // 8. PRODUCT CARD HOVER EFFECT
    // ========================================

    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });

    // ========================================
    // 9. UPDATE YEAR IN FOOTER
    // ========================================

    const yearElement = document.querySelector('.footer-bottom p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = yearElement.innerHTML.replace('2025', currentYear);
    }

    // ========================================
    // 10. LAZY LOAD IMAGES
    // ========================================

    // Excluir imagens do carousel que já estão carregadas
    const images = document.querySelectorAll('img[src]:not(.product-image-carousel img)');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;

                // Apenas aplicar lazy loading se a imagem ainda não estiver carregada
                if (!img.complete) {
                    img.style.opacity = '0';
                    img.style.transition = 'opacity 0.5s ease';

                    img.onload = () => {
                        img.style.opacity = '1';
                    };
                }

                if (img.dataset.src) {
                    img.src = img.dataset.src;
                }

                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // ========================================
    // 11. HERO SWIPER CAROUSEL
    // ========================================

    console.log('Swiper disponível?', typeof Swiper !== 'undefined');
    console.log('Elemento .products-swiper encontrado?', document.querySelector('.products-swiper'));

    if (typeof Swiper !== 'undefined') {
        console.log('✅ Swiper carregado com sucesso');

        const heroSwiper = new Swiper('.hero-swiper', {
            loop: true,
            speed: 800,
            autoplay: {
                delay: 6000,
                disableOnInteraction: false,
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            navigation: {
                nextEl: '.hero-swiper-button-next',
                prevEl: '.hero-swiper-button-prev',
            },
            pagination: {
                el: '.hero-swiper-pagination',
                clickable: true,
            },
        });

        // ========================================
        // 11B. PRODUCTS SWIPER CAROUSEL
        // ========================================

        console.log('🔄 Inicializando Products Swiper...');

        const productsSwiper = new Swiper('.products-swiper', {
            slidesPerView: 1,
            spaceBetween: 32,
            loop: false,
            speed: 600,
            grabCursor: true,
            navigation: {
                nextEl: '.products-swiper .swiper-button-next',
                prevEl: '.products-swiper .swiper-button-prev',
            },
            pagination: {
                el: '.products-swiper .swiper-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            breakpoints: {
                480: {
                    slidesPerView: 2,
                    spaceBetween: 32,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 32,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                }
            },
            // Cards são visíveis por padrão (animação removida para evitar conflitos)
        });

        console.log('✅ Products Swiper inicializado:', productsSwiper);
        console.log('Slides totais:', productsSwiper.slides.length);

        // Update product tabs to work with carousel
        const carouselTabButtons = document.querySelectorAll('.product-tabs .tab-btn');
        const carouselCards = document.querySelectorAll('.product-card-carousel');

        if (carouselTabButtons.length > 0 && carouselCards.length > 0) {
            carouselTabButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const targetCategory = this.getAttribute('data-tab');

                    // Update active button
                    carouselTabButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');

                    // Filter products in carousel
                    carouselCards.forEach(card => {
                        const cardCategory = card.getAttribute('data-category');
                        const slide = card.closest('.swiper-slide');

                        if (targetCategory === 'all') {
                            slide.style.display = 'block';
                        } else if (cardCategory === targetCategory) {
                            slide.style.display = 'block';
                        } else {
                            slide.style.display = 'none';
                        }
                    });

                    // Update swiper after filtering
                    productsSwiper.update();
                });
            });
        }
    } else {
        console.error('❌ ERRO: Swiper.js não foi carregado!');
        console.log('Verifique se o CDN está acessível: https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js');
    }

    // ========================================
    // 12. CONSOLE MESSAGE
    // ========================================

    console.log('%cINNOVA', 'font-size: 48px; font-weight: bold; color: #0a0a0a;');
    console.log('%cMedicina Estética Premium', 'font-size: 16px; color: #737373;');
    console.log('%c\nDesenvolvido com ❤️ para profissionais exigentes', 'font-size: 12px; color: #a3a3a3;');

})();
