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
   6. TESTIMONIAL CAROUSEL
   ======================================== */

const carousel = document.querySelector('.testimonials__carousel');
const slides = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.carousel__dot');

if (carousel && slides.length > 0) {
  let currentSlide = 0;
  let autoplayInterval;

  // Ir para slide específico
  function goToSlide(index) {
    currentSlide = index;
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Atualizar dots
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
    });
  }

  // Próximo slide
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    goToSlide(currentSlide);
  }

  // Slide anterior
  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(currentSlide);
  }

  // Iniciar autoplay
  function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 5000);
  }

  // Parar autoplay
  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }

  // Dots navigation
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      goToSlide(index);
      stopAutoplay();
      startAutoplay(); // Reiniciar autoplay
    });
  });

  // Pause on hover
  const testimonialsWrapper = document.querySelector('.testimonials__wrapper');
  if (testimonialsWrapper) {
    testimonialsWrapper.addEventListener('mouseenter', stopAutoplay);
    testimonialsWrapper.addEventListener('mouseleave', startAutoplay);
  }

  // Swipe gestures para mobile
  let touchStartX = 0;
  let touchEndX = 0;

  carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  carousel.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swipe left - próximo
        nextSlide();
      } else {
        // Swipe right - anterior
        prevSlide();
      }
      stopAutoplay();
      startAutoplay();
    }
  }

  // Iniciar autoplay
  startAutoplay();
}

/* ========================================
   7. COUNTER ANIMATION (STATS)
   ======================================== */

const counters = document.querySelectorAll('.stat__number');

function animateCounter(counter) {
  const target = parseInt(counter.getAttribute('data-target'));
  const duration = 2000; // 2 segundos
  const increment = target / (duration / 16); // 60fps
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

// Intersection Observer para animar quando visível
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
   8. FORM VALIDATION & SUBMIT
   ======================================== */

const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = contactForm.querySelector('.form__submit');
    const originalText = submitBtn.textContent;

    // Validação HTML5 nativa
    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    // Obter dados do formulário
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());

    // Desabilitar botão e mostrar loading
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span style="display:inline-block;width:16px;height:16px;border:2px solid currentColor;border-top-color:transparent;border-radius:50%;animation:spin 0.6s linear infinite;"></span> A enviar...';

    try {
      // Simular API call (substituir por endpoint real)
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Simular sucesso
      console.log('Dados do formulário:', data);

      // Mostrar mensagem de sucesso
      showMessage('Mensagem enviada com sucesso! Entraremos em contacto em breve.', 'success');

      // Limpar formulário
      contactForm.reset();

    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      showMessage('Erro ao enviar mensagem. Por favor, tente novamente.', 'error');

    } finally {
      // Restaurar botão
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
  });
}

// Função para mostrar mensagens
function showMessage(text, type) {
  // Remover mensagem anterior se existir
  const existingMessage = document.querySelector('.form-message');
  if (existingMessage) {
    existingMessage.remove();
  }

  // Criar nova mensagem
  const message = document.createElement('div');
  message.className = `form-message form-message--${type}`;
  message.textContent = text;
  message.style.cssText = `
    padding: 1rem;
    margin-top: 1rem;
    border-radius: 8px;
    font-weight: 500;
    animation: slideIn 0.3s ease-out;
    ${type === 'success'
      ? 'background: #d4edda; color: #155724; border: 1px solid #c3e6cb;'
      : 'background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb;'
    }
  `;

  contactForm.appendChild(message);

  // Remover após 5 segundos
  setTimeout(() => {
    message.style.animation = 'slideOut 0.3s ease-out';
    setTimeout(() => message.remove(), 300);
  }, 5000);
}

// Adicionar animações CSS
const style = document.createElement('style');
style.textContent = `
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes slideOut {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-10px);
    }
  }
`;
document.head.appendChild(style);

/* ========================================
   9. PERFORMANCE OPTIMIZATIONS
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
   10. INICIALIZAÇÃO
   ======================================== */

// Executar quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  console.log('INNOVA - Landing Page carregada com sucesso! =›');

  // Verificar scroll inicial
  scrollHeader();
  scrollActive();
});

// Executar quando página estiver completamente carregada
window.addEventListener('load', () => {
  console.log('INNOVA - Todos os recursos carregados!');
});
