/* ========================================
   GSAP ANIMATIONS - INNOVA (MINIMAL VERSION)
   Most animations disabled to reduce distraction
   ======================================== */

if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ overwrite: 'auto', duration: 0.3 });

    document.addEventListener('DOMContentLoaded', () => {
    console.log('🎬 GSAP Animations Initialized (Minimal Mode)');

    // Only essential counter animation for numbers
    const statNumbers = document.querySelectorAll('.stat-inline__number, .metric-card__number');
    statNumbers.forEach(stat => {
        const target = stat.getAttribute('data-target');
        if (target && !isNaN(target)) {
            gsap.to(stat, {
                scrollTrigger: {
                    trigger: stat,
                    start: 'top 85%',
                },
                innerText: target,
                duration: 1.5,
                snap: { innerText: 1 },
                ease: 'power1.out'
            });
        }
    });

    console.log('✅ Minimal animations loaded successfully');
    });
}
