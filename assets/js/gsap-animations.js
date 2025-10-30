/* ========================================
   GSAP ANIMATIONS - INNOVA
   ======================================== */

if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ overwrite: 'auto' });

    document.addEventListener('DOMContentLoaded', () => {
    console.log('🎬 GSAP Animations Initialized');

    // ========================================
    // 1. HERO SECTION - Entrance Animation
    // ========================================

    const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

    heroTimeline
        .from('.hero__eyebrow', {
            opacity: 0,
            y: 30,
            duration: 0.8,
            clearProps: 'opacity, transform'
        })
        .from('.hero__title', {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.2,
            clearProps: 'opacity, transform'
        }, '-=0.4')
        .from('.hero__description', {
            opacity: 0,
            y: 30,
            duration: 0.8,
            clearProps: 'opacity, transform'
        }, '-=0.6')
        .from('.hero__cta .btn', {
            opacity: 0,
            y: 30,
            scale: 0.9,
            duration: 0.6,
            stagger: 0.15,
            clearProps: 'opacity, transform'
        }, '-=0.4')
        .from('.hero__stats-inline', {
            opacity: 0,
            y: 40,
            duration: 0.8,
            clearProps: 'opacity, transform'
        }, '-=0.3');

    // Animate individual stats with counter
    gsap.from('.stat-inline', {
        scrollTrigger: {
            trigger: '.hero__stats-inline',
            start: 'top 80%',
        },
        opacity: 0,
        x: -30,
        duration: 0.6,
        stagger: 0.2,
        ease: 'back.out(1.4)',
        immediateRender: false,
        clearProps: 'opacity, transform'
    });

    // Counter animation for numbers
    const statNumbers = document.querySelectorAll('.stat-inline__number');
    statNumbers.forEach(stat => {
        const target = stat.getAttribute('data-target');
        if (target && !isNaN(target)) {
            gsap.to(stat, {
                scrollTrigger: {
                    trigger: stat,
                    start: 'top 85%',
                },
                innerText: target,
                duration: 2,
                snap: { innerText: 1 },
                ease: 'power1.out'
            });
        }
    });

    // ========================================
    // 2. PRODUCT CARDS - Staggered Reveal
    // ========================================

    gsap.from('.produto-card', {
        scrollTrigger: {
            trigger: '.produtos__grid',
            start: 'top 75%',
        },
        opacity: 0,
        y: 30,
        duration: 0.5,
        stagger: 0.12,
        ease: 'power2.out',
        immediateRender: false,
        clearProps: 'opacity, transform'
    });

    // Product card hover effects with GSAP
    const productCards = document.querySelectorAll('.produto-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -4,
                scale: 1.01,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // ========================================
    // 3. BENEFIT CARDS - Floating Animation
    // ========================================

    gsap.from('.beneficio-card', {
        scrollTrigger: {
            trigger: '.beneficios__grid',
            start: 'top 70%',
        },
        opacity: 0,
        y: 25,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power2.out',
        immediateRender: false,
        clearProps: 'opacity, transform'
    });

    // ========================================
    // 4. BENTO GRID - Reveal with Scale
    // ========================================

    gsap.from('.curso-bento--featured', {
        scrollTrigger: {
            trigger: '.cursos-bento',
            start: 'top 70%',
        },
        opacity: 0,
        scale: 0.97,
        duration: 0.7,
        ease: 'power2.out',
        immediateRender: false,
        clearProps: 'opacity, transform'
    });

    gsap.from('.curso-bento--medium', {
        scrollTrigger: {
            trigger: '.cursos-bento',
            start: 'top 65%',
        },
        opacity: 0,
        y: 35,
        duration: 0.6,
        stagger: 0.16,
        ease: 'power2.out',
        immediateRender: false,
        clearProps: 'opacity, transform'
    });

    gsap.from('.curso-bento--info', {
        scrollTrigger: {
            trigger: '.curso-bento--info',
            start: 'top 75%',
        },
        opacity: 0,
        y: 35,
        duration: 0.6,
        ease: 'power2.out',
        immediateRender: false,
        clearProps: 'opacity, transform'
    });

    // ========================================
    // 5. METRIC CARDS - Counter Animation
    // ========================================

    const metricCards = document.querySelectorAll('.metric-card');

    metricCards.forEach((card, index) => {
        // Card entrance
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
            },
            opacity: 0,
            y: 30,
            duration: 0.6,
            delay: index * 0.1,
            ease: 'power2.out',
            immediateRender: false,
            clearProps: 'opacity, transform'
        });

        // Number counter
        const number = card.querySelector('.metric-card__number');
        const target = number.getAttribute('data-target');

        if (target && !isNaN(target)) {
            gsap.to(number, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 75%',
                },
                innerText: target,
                duration: 2.5,
                snap: { innerText: 1 },
                ease: 'power1.out',
                delay: index * 0.15
            });
        }

        // Progress bar animation
        const progressBar = card.querySelector('.metric-card__progress-bar');
        if (progressBar) {
            const width = progressBar.style.width;
            gsap.from(progressBar, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 75%',
                },
                width: '0%',
                duration: 1.5,
                ease: 'power2.out',
                delay: 0.5 + (index * 0.1),
                onComplete: () => {
                    progressBar.style.width = width;
                }
            });
        }
    });

    // ========================================
    // 6. SECTION TITLES - Reveal Animation
    // ========================================

    gsap.utils.toArray('.section__title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 85%',
            },
            opacity: 0,
            y: 25,
            duration: 0.6,
            ease: 'power2.out',
            immediateRender: false,
            clearProps: 'opacity, transform'
        });

        // Animate gradient text separately
        const gradientText = title.querySelector('.gradient-text');
        if (gradientText) {
            gsap.from(gradientText, {
                scrollTrigger: {
                    trigger: title,
                    start: 'top 85%',
                },
                opacity: 0,
                scale: 0.9,
                duration: 0.6,
                delay: 0.2,
                ease: 'power2.out',
                immediateRender: false,
                clearProps: 'opacity, transform'
            });
        }
    });

    // ========================================
    // 7. CTA FINAL - Magnetic Effect
    // ========================================

    const ctaFinal = document.querySelector('.cta-final');
    if (ctaFinal) {
        gsap.from(ctaFinal, {
            scrollTrigger: {
                trigger: ctaFinal,
                start: 'top 70%',
            },
            opacity: 0,
            scale: 0.98,
            duration: 0.6,
            ease: 'power2.out',
            immediateRender: false,
            clearProps: 'opacity, transform'
        });

        // Decoration icons rotation
        const decorationIcons = ctaFinal.querySelectorAll('.cta-final__decoration svg');
        decorationIcons.forEach((icon, index) => {
            gsap.to(icon, {
                rotation: 360,
                duration: 20 + (index * 5),
                repeat: -1,
                ease: 'none'
            });
        });
    }

    // ========================================
    // 8. BUTTON HOVER EFFECTS
    // ========================================

    document.querySelectorAll('.btn--primary').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            gsap.to(btn, {
                scale: 1.05,
                boxShadow: '0 10px 30px rgba(212, 175, 55, 0.4)',
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
                scale: 1,
                boxShadow: '0 4px 12px rgba(212, 175, 55, 0.2)',
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // ========================================
    // 9. SCROLL PROGRESS INDICATOR
    // ========================================

    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, var(--accent-gold), var(--accent-gold-light));
        width: 0%;
        z-index: 9999;
        box-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
    `;
    document.body.appendChild(progressBar);

    gsap.to(progressBar, {
        width: '100%',
        ease: 'none',
        scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.3
        }
    });

    // ========================================
    // 10. PARALLAX EFFECTS
    // ========================================

    // Hero background parallax
    gsap.to('.hero', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        backgroundPosition: '50% 100%',
        ease: 'none'
    });

    // Floating elements
    gsap.utils.toArray('.produto-card__icon, .beneficio-card__icon').forEach((icon, index) => {
        gsap.to(icon, {
            scrollTrigger: {
                trigger: icon,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 2
            },
            y: -30,
            ease: 'none'
        });
    });

    console.log('✨ All GSAP animations loaded successfully!');
    });

    window.addEventListener('load', () => {
        if (window.ScrollTrigger) {
            ScrollTrigger.refresh();
        }
    });
} else {
    console.warn('GSAP Animations: GSAP or ScrollTrigger not found. Animations skipped.');
}
