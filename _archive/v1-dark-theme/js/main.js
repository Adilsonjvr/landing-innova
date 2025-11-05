/* ========================================
   INNOVA - Main JavaScript
   Vanilla JS - No dependencies
   ======================================== */

'use strict';

/* ========================================
   1. MOBILE NAVIGATION TOGGLE
   ======================================== */

const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav__link');

// Abrir menu mobile
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
    navToggle.setAttribute('aria-expanded', 'true');
  });
}

// Fechar menu mobile
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
    navToggle.setAttribute('aria-expanded', 'false');
  });
}

// Fechar menu ao clicar em link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
    if (navToggle) {
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

/* ========================================
   2. STICKY HEADER ON SCROLL
   ======================================== */

const header = document.getElementById('header');
const scrollThreshold = 100;

function scrollHeader() {
  if (window.scrollY >= scrollThreshold) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}

// Throttle para performance
let scrollTimeout;
window.addEventListener('scroll', () => {
  if (!scrollTimeout) {
    scrollTimeout = setTimeout(() => {
      scrollHeader();
      scrollTimeout = null;
    }, 50);
  }
});

/* ========================================
   3. SMOOTH SCROLL PARA LINKS ÂNCORA
   ======================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');

    // Ignora links vazios ou só com #
    if (href === '#' || href === '') return;

    e.preventDefault();

    const target = document.querySelector(href);
    if (target) {
      const headerHeight = header.offsetHeight;
      const targetPosition = target.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

/* ========================================
   4. ACTIVE SECTION HIGHLIGHTING
   ======================================== */

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 150;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.nav__link[href*="${sectionId}"]`);

    if (navLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink.classList.add('active-link');
      } else {
        navLink.classList.remove('active-link');
      }
    }
  });
}

// Throttle para performance
let activeTimeout;
window.addEventListener('scroll', () => {
  if (!activeTimeout) {
    activeTimeout = setTimeout(() => {
      scrollActive();
      activeTimeout = null;
    }, 100);
  }
});

/* ========================================
   5. FAQ ACCORDION
   ======================================== */

const accordionItems = document.querySelectorAll('.faq__item');

accordionItems.forEach(item => {
  const question = item.querySelector('.faq__question');

  if (question) {
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      // Fechar todos os items
      accordionItems.forEach(i => {
        i.classList.remove('active');
        const q = i.querySelector('.faq__question');
        if (q) q.setAttribute('aria-expanded', 'false');
      });

      // Abrir o item clicado se estava fechado
      if (!isOpen) {
        item.classList.add('active');
        question.setAttribute('aria-expanded', 'true');
      }
    });
  }
});

/* ========================================
   6. VOICES CAROUSEL (Swiper)
   ======================================== */

const voicesSwiperElement = document.querySelector('.voices-swiper');

if (voicesSwiperElement) {
  if (window.Swiper) {
    const progressSegments = document.querySelectorAll('.voices__progress-segment');

    const voicesSwiper = new Swiper('.voices-swiper', {
      slidesPerView: 1.1,
      spaceBetween: 18,
      loop: true,
      speed: 750,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      },
      navigation: {
        prevEl: '.voices__control--prev',
        nextEl: '.voices__control--next'
      },
      breakpoints: {
        640: {
          slidesPerView: 1.4,
          spaceBetween: 22
        },
        768: {
          slidesPerView: 2.1,
          spaceBetween: 26
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 32
        }
      }
    });

    const updateVoicesProgress = (index) => {
      if (!progressSegments.length) return;
      const activeIndex = ((index % progressSegments.length) + progressSegments.length) % progressSegments.length;
      progressSegments.forEach((segment, segmentIndex) => {
        segment.classList.toggle('is-active', segmentIndex === activeIndex);
      });
    };

    voicesSwiper.on('slideChange', () => updateVoicesProgress(voicesSwiper.realIndex));
    updateVoicesProgress(voicesSwiper.realIndex || 0);
  } else {
    console.warn('Swiper nao encontrado. Carregue o CDN antes de main.js.');
  }
}

/* ========================================
   7. COUNTER ANIMATION (STATS)
   ======================================== */

const counters = document.querySelectorAll('.stat__number');

function animateCounter(counter) {
  const target = parseInt(counter.getAttribute('data-target'), 10);
  const duration = 2000;
  const increment = target / (duration / 16);
  let current = 0;

  const updateCounter = () => {
    current += increment;
    if (current < target) {
      counter.textContent = Math.floor(current);
      requestAnimationFrame(updateCounter);
    } else {
      counter.textContent = target;
    }
  };

  updateCounter();
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
      animateCounter(entry.target);
      entry.target.classList.add('animated');
    }
  });
}, {
  threshold: 0.5
});

counters.forEach(counter => counterObserver.observe(counter));

/* ========================================
   8. SCROLL REVEAL OBSERVER
   ======================================== */

const revealElements = document.querySelectorAll('[data-io]');

if (revealElements.length) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      if (entry.target.dataset.ioAnimated === 'true') {
        observer.unobserve(entry.target);
        return;
      }

      const delay = Number.parseInt(entry.target.dataset.ioDelay, 10) || 0;
      entry.target.dataset.ioAnimated = 'true';

      setTimeout(() => {
        entry.target.classList.add('is-visible');
      }, delay);

      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.24,
    rootMargin: '0px 0px -10% 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));
}

/* ========================================
   9. FORM VALIDATION & SUBMIT
   ======================================== */

const contactForm = document.getElementById('contact-form');
const formFeedback = contactForm ? contactForm.querySelector('.form__feedback') : null;

if (contactForm) {
  const floatFields = contactForm.querySelectorAll('.form__input, .form__select, .form__textarea');

  floatFields.forEach(field => {
    const group = field.closest('.form__group');
    if (!group) return;

    const syncState = () => {
      const hasValue = field.value && field.value.trim() !== '';
      group.classList.toggle('is-filled', hasValue);
    };

    field.addEventListener('input', syncState);
    field.addEventListener('change', syncState);
    field.addEventListener('blur', syncState);
    syncState();
  });

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = contactForm.querySelector('.form__submit');
    const originalText = submitBtn.textContent;

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());

    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span style="display:inline-block;width:16px;height:16px;border:2px solid currentColor;border-top-color:transparent;border-radius:50%;animation:spin 0.6s linear infinite;"></span> A enviar...';

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));

      console.log('Dados do formulario:', data);

      showFormMessage('Mensagem enviada com sucesso! Entraremos em contacto em breve.', 'success');
      contactForm.reset();
      floatFields.forEach(field => {
        const group = field.closest('.form__group');
        if (group) group.classList.remove('is-filled');
      });

    } catch (error) {
      console.error('Erro ao enviar formulario:', error);
      showFormMessage('Erro ao enviar mensagem. Por favor, tente novamente.', 'error');

    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
  });
}

function showFormMessage(text, type) {
  if (!formFeedback) return;

  formFeedback.innerHTML = '';

  const message = document.createElement('div');
  message.className = `form__feedback-message form__feedback-message--${type}`;

  const iconMarkup = type === 'success'
    ? '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    : '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 9v4m0 4h.01M5.64 5.64l12.72 12.72M18.36 5.64L5.64 18.36" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  message.innerHTML = `${iconMarkup}<span>${text}</span>`;
  formFeedback.appendChild(message);

  setTimeout(() => {
    if (message.parentElement === formFeedback) {
      message.remove();
    }
  }, 6000);
}

const style = document.createElement('style');
style.textContent = `
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;
document.head.appendChild(style);

/* ========================================
   10. PERFORMANCE OPTIMIZATIONS
   ======================================== */

// Debounce helper function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle helper function
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/* ========================================
   11. INICIALIZACAO
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
  console.log('INNOVA - Landing Page carregada com sucesso!');

  if (window.AOS) {
    AOS.init({
      duration: 720,
      easing: 'ease-out-cubic',
      once: true,
      offset: 120
    });
    document.body.classList.add('aos-ready');
  }

  scrollHeader();
  scrollActive();
});

window.addEventListener('load', () => {
  console.log('INNOVA - Todos os recursos carregados!');
  if (window.AOS) {
    AOS.refresh();
  }
});
