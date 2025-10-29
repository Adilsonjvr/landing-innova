/* ========================================
   INNOVA - Lazy Loading Images
   Intersection Observer API
   ======================================== */

'use strict';

/* ========================================
   1. LAZY LOADING COM INTERSECTION OBSERVER
   ======================================== */

// Configuração do Intersection Observer
const imageObserverConfig = {
  root: null, // viewport
  rootMargin: '50px', // Carregar 50px antes de entrar no viewport
  threshold: 0.01
};

// Função para carregar imagem
function loadImage(img) {
  // Se tiver data-src, usa ele; senão, já está carregada
  const src = img.getAttribute('data-src');

  if (src) {
    // Criar nova imagem para pré-carregar
    const tempImg = new Image();

    tempImg.onload = () => {
      // Quando carregar, substituir src
      img.src = src;
      img.classList.add('loaded');
      img.classList.remove('loading');

      // Remover data-src
      img.removeAttribute('data-src');

      // Dispatch custom event
      img.dispatchEvent(new CustomEvent('imageLoaded', {
        detail: { src }
      }));
    };

    tempImg.onerror = () => {
      console.error('Erro ao carregar imagem:', src);
      img.classList.add('error');
      img.classList.remove('loading');
    };

    // Adicionar classe loading
    img.classList.add('loading');

    // Iniciar carregamento
    tempImg.src = src;
  }
}

// Criar Intersection Observer
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;

      // Carregar imagem
      loadImage(img);

      // Para de observar esta imagem
      observer.unobserve(img);
    }
  });
}, imageObserverConfig);

// Selecionar todas as imagens lazy
const lazyImages = document.querySelectorAll('img[loading="lazy"]');

// Observar cada imagem
lazyImages.forEach(img => {
  // Adicionar classe inicial
  img.classList.add('lazy-img');

  // Se o browser não suportar loading="lazy" nativamente, usar observer
  if ('loading' in HTMLImageElement.prototype) {
    // Browser suporta lazy loading nativo, só adicionar classe loaded quando carregar
    if (img.complete) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', () => {
        img.classList.add('loaded');
      });
    }
  } else {
    // Browser não suporta, usar Intersection Observer
    imageObserver.observe(img);
  }
});

/* ========================================
   2. LAZY LOADING DE BACKGROUND IMAGES
   ======================================== */

const lazyBackgrounds = document.querySelectorAll('[data-bg]');

const bgObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const element = entry.target;
      const bg = element.getAttribute('data-bg');

      if (bg) {
        // Pré-carregar imagem
        const tempImg = new Image();
        tempImg.onload = () => {
          element.style.backgroundImage = `url(${bg})`;
          element.classList.add('bg-loaded');
          element.removeAttribute('data-bg');
        };
        tempImg.src = bg;
      }

      observer.unobserve(element);
    }
  });
}, imageObserverConfig);

lazyBackgrounds.forEach(bg => bgObserver.observe(bg));

/* ========================================
   3. BLUR-UP EFFECT (PLACEHOLDER)
   ======================================== */

// Adicionar estilos para blur-up effect
const blurStyles = document.createElement('style');
blurStyles.textContent = `
  .lazy-img {
    opacity: 0;
    transition: opacity 0.4s ease-in-out, filter 0.4s ease-in-out;
  }

  .lazy-img.loading {
    opacity: 0.5;
    filter: blur(10px);
  }

  .lazy-img.loaded {
    opacity: 1;
    filter: blur(0);
  }

  .lazy-img.error {
    opacity: 0.5;
    background: #f0f0f0;
  }

  .bg-loaded {
    animation: bgFadeIn 0.5s ease-in-out;
  }

  @keyframes bgFadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Loading skeleton */
  .lazy-img.loading::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      #f0f0f0 25%,
      #e0e0e0 50%,
      #f0f0f0 75%
    );
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
  }

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }

  .lazy-img.loaded::before {
    display: none;
  }
`;
document.head.appendChild(blurStyles);

/* ========================================
   4. PRELOAD IMAGENS CRÍTICAS
   ======================================== */

// Imagens com loading="eager" são críticas e devem carregar imediatamente
const eagerImages = document.querySelectorAll('img[loading="eager"]');

eagerImages.forEach(img => {
  // Adicionar classe loaded quando carregar
  if (img.complete) {
    img.classList.add('loaded');
  } else {
    img.addEventListener('load', () => {
      img.classList.add('loaded');
    });
  }
});

/* ========================================
   5. FALLBACK PARA BROWSERS ANTIGOS
   ======================================== */

// Verificar suporte a Intersection Observer
if (!('IntersectionObserver' in window)) {
  console.warn('IntersectionObserver não suportado. Carregando todas as imagens...');

  // Carregar todas as imagens imediatamente
  lazyImages.forEach(img => {
    loadImage(img);
  });

  lazyBackgrounds.forEach(element => {
    const bg = element.getAttribute('data-bg');
    if (bg) {
      element.style.backgroundImage = `url(${bg})`;
      element.classList.add('bg-loaded');
    }
  });
}

/* ========================================
   6. PERFORMANCE MONITORING
   ======================================== */

// Contar imagens carregadas
let imagesLoaded = 0;
const totalImages = lazyImages.length;

document.addEventListener('imageLoaded', () => {
  imagesLoaded++;

  // Log de progresso (remover em produção)
  if (process.env.NODE_ENV === 'development') {
    console.log(`Imagens carregadas: ${imagesLoaded}/${totalImages}`);
  }

  // Quando todas carregarem
  if (imagesLoaded === totalImages) {
    console.log('Todas as imagens lazy foram carregadas! ');

    // Dispatch evento global
    window.dispatchEvent(new CustomEvent('allImagesLoaded'));
  }
});

/* ========================================
   7. RETRY LOGIC PARA FALHAS
   ======================================== */

function retryLoadImage(img, retries = 3) {
  if (retries <= 0) {
    console.error('Falha ao carregar imagem após múltiplas tentativas:', img.getAttribute('data-src'));
    return;
  }

  const src = img.getAttribute('data-src');
  if (!src) return;

  const tempImg = new Image();

  tempImg.onload = () => {
    img.src = src;
    img.classList.add('loaded');
    img.classList.remove('loading', 'error');
    img.removeAttribute('data-src');
  };

  tempImg.onerror = () => {
    console.warn(`Tentativa ${4 - retries} falhou para: ${src}. Tentando novamente...`);
    setTimeout(() => {
      retryLoadImage(img, retries - 1);
    }, 1000 * (4 - retries)); // Backoff exponencial
  };

  tempImg.src = src;
}

// Adicionar retry para imagens com erro
document.addEventListener('imageLoaded', (e) => {
  const img = e.target;
  if (img.classList.contains('error')) {
    retryLoadImage(img);
  }
});

/* ========================================
   8. PRELOAD NEXT SECTION IMAGES
   ======================================== */

// Quando uma seção entra no viewport, pré-carregar imagens da próxima seção
const sections = document.querySelectorAll('section');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const currentSection = entry.target;
      const nextSection = currentSection.nextElementSibling;

      if (nextSection && nextSection.tagName === 'SECTION') {
        // Pré-carregar imagens da próxima seção
        const nextImages = nextSection.querySelectorAll('img[data-src]');
        nextImages.forEach(img => {
          if (!img.classList.contains('loaded') && !img.classList.contains('loading')) {
            loadImage(img);
          }
        });
      }
    }
  });
}, {
  rootMargin: '200px' // Começar a carregar 200px antes
});

sections.forEach(section => sectionObserver.observe(section));

/* ========================================
   9. INICIALIZAÇÃO
   ======================================== */

console.log('Lazy loading inicializado:', {
  totalImages: lazyImages.length,
  totalBackgrounds: lazyBackgrounds.length,
  nativeSupport: 'loading' in HTMLImageElement.prototype,
  observerSupport: 'IntersectionObserver' in window
});

// Export para uso em outros scripts (se necessário)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    loadImage,
    retryLoadImage
  };
}
