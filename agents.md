# 🎯 INNOVA Landing – Agent Handbook (V2.0 Refined Edition)

> Documento mestre para agentes humanos ou IA retomarem o projeto sem perda de contexto. Leia integralmente antes de atuar.

---

## 1. Panorâmica do Projeto

| Item | Detalhes |
| --- | --- |
| **Cliente** | INNOVA – Medicina Estética Premium (B2B) |
| **Objetivo** | Landing page editorial, luxuosa e rápida, convertendo profissionais de estética em leads qualificados |
| **Lema** | "PRECISION. HARMONY. BEAUTY." |
| **Mercado** | Portugal (content em PT-PT) |
| **Entrega final** | Landing completa + hubs por categoria + fichas individuais de produto + documentação e QA |

### Missão da experiência digital
- Evidenciar curadoria científica, suporte consultivo e luxo discreto.
- Conectar portefólio extenso (injectáveis, fios, aparatologia, cosméticos) à jornada de clínicas/parceiros.
- Garantir performance (CWV), acessibilidade AA e SEO corporativo.

### ⚠️ REBUILD V2.0 – Janeiro 2025

**IMPORTANTE**: O projeto foi completamente reconstruído do zero devido a problemas com a paleta de cores original (excesso de fundos escuros e dourados). A nova versão segue rigorosamente o esquema **branco/preto/cinza** sem acentos coloridos.

**Arquivos ativos (V2.0 Refined)**:
- `index.html` – Landing completa com 10 seções (973 linhas, atualizado com carousels)
- `assets/css/style-refined.css` – Design system puro white/black/gray (1400+ linhas)
- `assets/js/main-refined.js` – Funcionalidades interativas (442 linhas)

**Backups preservados**:
- `index_backup_dark.html` + `main_backup_dark.css` – Versão original dark theme
- `index_v1_basic.html` – Primeira versão limpa (básica)
- `main-clean.js` – Versão básica do JavaScript

**Roadmap de melhorias**: Consultar `ROADMAP-REFINAMENTO.md` para plano detalhado de implementação em 5 fases baseado em análise do mesoestetic.pt.

### Stack & Estrutura (V2.0)
```
innova-landing/
├── index.html                          # landing V2.0 refined (ATIVO)
├── formacao.html                       # página de formações
├── index_backup_dark.html              # backup versão dark theme
├── index_v1_basic.html                 # backup versão básica
├── ROADMAP-REFINAMENTO.md              # plano de melhorias detalhado
├── ANALISE-IMAGENS-COMPLETA.md         # análise de imagens do projeto
├── PLANO-RENOMEACAO-IMAGENS.md         # convenção de nomenclatura de imagens
├── RELATORIO-IMAGENS.md                # relatório de organização de assets
├── assets/
│   ├── css/
│   │   ├── style-refined.css           # ATIVO - design system V2.0
│   │   └── main_backup_dark.css        # backup dark theme
│   ├── js/
│   │   ├── main-refined.js             # ATIVO - funcionalidades V2.0
│   │   └── main-clean.js               # versão básica
│   ├── images/                         # imagens organizadas por categoria
│   │   ├── acido-hialuronico/
│   │   ├── bioestimuladores/
│   │   ├── skinboosters/
│   │   ├── fios/
│   │   ├── mesoterapia/
│   │   ├── peeling/
│   │   ├── aparatologia/
│   │   └── cosmeticos/
│   ├── docs/                           # PDFs de produtos e certificações
│   └── icons/
├── checklist.md                        # checklist QA
├── innova.md                           # inventário comercial
├── README.md                           # instruções gerais
└── agents.md                           # ESTE DOCUMENTO
```

### Dependências Externas (V2.0)
- **Font**: Inter (Google Fonts) – família única para todo o projeto
- **Swiper.js 11**: Biblioteca de carousel via CDN (`https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js`) - ✅ **IMPLEMENTADO**
- **Vanilla JavaScript**: Tudo nativo, sem outras dependências
- **Intersection Observer API**: Para animações on scroll

---

## 2. Diretrizes de Design V2.0 (White & Black Edition)

> **⚠️ MUDANÇA IMPORTANTE V2.0**: Paleta de cores foi completamente reformulada. Versão anterior (Lumen Edition) usava dourados/champagne/emerald - **DESCONTINUADA**. Nova versão usa exclusivamente branco/preto/cinza. Para tokens atualizados, consultar `assets/css/style-refined.css`.

### Inspiração & Referências
- **Mesoestetic.pt**: Design clean, minimalista, com hierarquia clara usando apenas escala de cinza
- **Screenshots analisados** (4 imagens fornecidas em 2025-01):
  1. Hero com carousel de produtos e imagens lifestyle ✅ **IMPLEMENTADO**
  2. Seção magazine/blog editorial
  3. Best sellers com sistema de tabs ✅ **IMPLEMENTADO**
  4. Barra de categorias com ícones ✅ **IMPLEMENTADO**
- **Ver detalhes**: `ROADMAP-REFINAMENTO.md` contém análise completa e plano de implementação em 5 fases

### Princípios gerais
1. **Paleta base branco & preto** – fundo predominantemente claro com tipografia preta/cinza profundo
2. **Contraste e luxo** – contraste mínimo 4.5:1; hierarquia através de peso de fonte, tamanho, espaçamento
3. **Tipografia elegante & legível** – Inter como família única, variações de peso para hierarquia
4. **Animações suaves** – delays escalonados 120 ms / 220 ms / 320 ms; transições lentas, sofisticadas
5. **Carousels modernos** – Swiper.js para experiências fluidas, navigation arrows + pagination dots

### Tokens V2.0 (`style-refined.css`) - ATIVOS
```css
:root {
  /* Colors - APENAS PRETO, BRANCO E CINZA */
  --white: #ffffff;
  --white-warm: #fafafa;
  --black: #0a0a0a;
  --gray-50: #f9f9f9;
  --gray-100: #f4f4f4;
  --gray-200: #e5e5e5;
  --gray-300: #d4d4d4;
  --gray-400: #a3a3a3;
  --gray-500: #737373;
  --gray-600: #525252;
  --gray-700: #404040;
  --gray-800: #262626;
  --gray-900: #171717;

  /* Typography */
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

  /* Spacing (8px base) */
  --spacing-xs: 0.5rem;   /* 8px */
  --spacing-sm: 1rem;     /* 16px */
  --spacing-md: 1.5rem;   /* 24px */
  --spacing-lg: 2rem;     /* 32px */
  --spacing-xl: 3rem;     /* 48px */
  --spacing-2xl: 4rem;    /* 64px */
  --spacing-3xl: 6rem;    /* 96px */
  --spacing-4xl: 8rem;    /* 128px */
  --spacing-5xl: 10rem;   /* 160px */

  /* Transitions */
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

> **REGRA CRÍTICA V2.0**: Hierarquia visual através de peso de fonte, tamanho, espaçamento, opacidade e sombras sutis. Sem cores além de white/black/gray.

### Layout & Grid (V2.0)
- Container máx. 1280 px (90 vw)
- Grid 12 colunas (`display: grid / repeat(12, 1fr)`)
- Espaçamentos escalonados (8px → 128px)
- Breakpoints: 640, 768, 1024, 1280, 1536 px (mobile first)

### Componentes V2.0 (Refined)
| Componente | Descrição | Status |
| --- | --- | --- |
| **Top Bar** | Barra preta no topo com mensagens de portes grátis e apoio especializado | ✅ Implementado |
| **Header** | Nav sticky com backdrop-filter blur, logo INNOVA by Exaktus, mobile menu com hamburger animado | ✅ Implementado |
| **Hero Carousel** | Swiper.js com 3 slides (RENNOVA Fill, ELLEVA, Profhilo), fade effect, autoplay 6s, navigation + pagination | ✅ Implementado |
| **Categorias** | Barra horizontal com 8 categorias + ícones SVG, scroll horizontal em mobile | ✅ Implementado |
| **Features** | Grid 4 colunas com SVG icons: Garantia, Envio, Suporte, Certificações | ✅ Implementado |
| **Produtos Carousel** | Swiper.js com 12 produtos, tabs filter (Todos/Best Sellers/Novidades), responsive 1-4 cols | ✅ Implementado |
| **Marcas** | Grid 6 logos em grayscale com hover | ✅ Implementado |
| **Sobre** | Conteúdo + 4 estatísticas animadas (anos, produtos, profissionais, países) | ✅ Implementado |
| **Certificações** | 3 cards ISO + trust badges (origem, pagamento, privacidade) | ✅ Implementado |
| **Contacto** | Grid 2 colunas: info + mapa / formulário completo com validação | ✅ Implementado |
| **Footer** | 4 colunas (navegação, categorias, formação, legal) + social icons + copyright | ✅ Implementado |

---

## 3. Implementações Recentes (Janeiro 2025)

### 🎨 Hero Carousel com Swiper.js (✅ COMPLETO)
**Commit**: `c931cae` - "Atualização do carrosel"
**Data**: 2025-01-04

**Características**:
- 3 slides principais: RENNOVA Fill, ELLEVA, Profhilo
- Efeito fade com crossFade para transições suaves
- Autoplay 6 segundos com `disableOnInteraction: false`
- Navigation arrows customizadas (`.hero-swiper-button-next/prev`)
- Pagination dots clicáveis (`.hero-swiper-pagination`)
- Speed 800ms para transições elegantes
- Loop infinito habilitado

**Estrutura HTML**:
```html
<section class="hero">
    <div class="swiper hero-swiper">
        <div class="swiper-wrapper">
            <!-- Slide 1: RENNOVA Fill -->
            <div class="swiper-slide">
                <div class="hero-content">
                    <div class="hero-badges">...</div>
                    <h1 class="hero-title">...</h1>
                    <p class="hero-subtitle">...</p>
                    <div class="hero-features">...</div>
                    <div class="hero-cta">...</div>
                </div>
            </div>
            <!-- Slides 2 e 3 seguem mesmo padrão -->
        </div>

        <!-- Navigation -->
        <div class="hero-swiper-button-next"></div>
        <div class="hero-swiper-button-prev"></div>

        <!-- Pagination -->
        <div class="hero-swiper-pagination"></div>
    </div>
</section>
```

**CSS Específico** (`style-refined.css:600-750`):
```css
.hero-swiper {
    width: 100%;
    height: 100%;
}

.hero-swiper .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Custom navigation arrows */
.hero-swiper-button-next,
.hero-swiper-button-prev {
    width: 48px;
    height: 48px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    backdrop-filter: blur(10px);
}

/* Custom pagination */
.hero-swiper-pagination {
    bottom: var(--spacing-lg);
}

.hero-swiper-pagination .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background: var(--white);
    opacity: 0.4;
}

.hero-swiper-pagination .swiper-pagination-bullet-active {
    opacity: 1;
    width: 32px;
    border-radius: 6px;
}
```

**JavaScript** (`main-refined.js:340-354`):
```javascript
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
```

---

### 🛒 Products Carousel com Tabs Filter (✅ COMPLETO)
**Commits**:
- `6f01106` - "fix: correct carousel functionality with proper overflow"
- `2337e4a` - "fix: resolve product carousel visibility and layout issues"

**Data**: 2025-01-04

**Características**:
- 12 produtos em slides individuais
- Sistema de tabs: Todos / Best Sellers / Novidades
- Responsive breakpoints: 1 col (mobile) → 2 cols (480px) → 3 cols (768px) → 4 cols (1024px)
- Navigation arrows específicas (`.products-swiper .swiper-button-next/prev`)
- Pagination com dynamicBullets
- Cards com altura fixa 320px para overlay completo
- Hover overlay com título, descrição, badges e CTA
- GrabCursor para melhor UX de arrasto
- Speed 600ms

**Estrutura HTML** (`index.html:330-606`):
```html
<section class="produtos" id="produtos">
    <div class="container">
        <!-- Product Tabs -->
        <div class="product-tabs">
            <button class="tab-btn active" data-tab="all">Todos</button>
            <button class="tab-btn" data-tab="best-sellers">Best Sellers</button>
            <button class="tab-btn" data-tab="novidades">Novidades</button>
        </div>

        <!-- Products Carousel -->
        <div class="products-carousel-wrapper">
            <div class="swiper products-swiper">
                <div class="swiper-wrapper">
                    <!-- Produto 1 -->
                    <div class="swiper-slide">
                        <article class="product-card-carousel" data-category="best-sellers">
                            <span class="product-badge">Best Seller</span>
                            <div class="product-image-carousel">
                                <img src="..." alt="..." loading="lazy">
                            </div>
                            <div class="product-overlay">
                                <div class="overlay-content">
                                    <h3 class="overlay-title">...</h3>
                                    <p class="overlay-description">...</p>
                                    <div class="overlay-brands">...</div>
                                    <a href="..." class="overlay-btn">Ver produto</a>
                                </div>
                            </div>
                        </article>
                    </div>
                    <!-- ... 11 produtos mais -->
                </div>

                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </div>
</section>
```

**CSS Específico** (`style-refined.css:1065-1250`):
```css
/* Carousel wrapper */
.products-carousel-wrapper {
    position: relative;
    margin-bottom: var(--spacing-2xl);
    padding: var(--spacing-md) 0;
    width: 100%;
    max-width: 100%;
    overflow: hidden; /* CRÍTICO: sem isso o carousel não funciona */
}

.products-swiper {
    padding: var(--spacing-md) 0 var(--spacing-2xl) 0;
    overflow: hidden;
    width: 100%;
}

/* Product cards */
.product-card-carousel {
    position: relative;
    background: var(--white);
    border-radius: 12px;
    overflow: hidden;
    height: 320px; /* Aumentado de 240px para overlay completo */
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
}

.product-image-carousel {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-lg);
    background: var(--gray-50);
}

.product-image-carousel img {
    width: 100%;
    max-width: 180px; /* Aumentado de 140px */
    height: 180px;
    object-fit: contain;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Hover overlay */
.product-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        to bottom,
        rgba(10, 10, 10, 0.85),
        rgba(10, 10, 10, 0.95)
    );
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.product-card-carousel:hover .product-overlay {
    opacity: 1;
}

.product-card-carousel:hover .product-image-carousel img {
    transform: scale(1.05);
}

/* Overlay content */
.overlay-content {
    text-align: center;
    padding: var(--spacing-md); /* Reduzido para caber conteúdo */
    max-width: 90%; /* Aumentado de 85% */
    transform: translateY(20px);
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0.1s;
}

.product-card-carousel:hover .overlay-content {
    transform: translateY(0);
}

.overlay-title {
    font-size: 1.125rem; /* Reduzido de 1.375rem */
    font-weight: 700;
    color: var(--white);
    margin-bottom: 0.5rem;
    line-height: 1.3;
    letter-spacing: -0.01em;
}

.overlay-description {
    font-size: 0.8125rem; /* Reduzido de 0.875rem */
    line-height: 1.4;
    color: var(--gray-300);
    margin-bottom: 0.75rem;
}

.overlay-brands {
    display: flex;
    flex-wrap: wrap;
    gap: 0.375rem;
    justify-content: center;
    margin-bottom: 0.75rem;
}

.overlay-brands span {
    display: inline-block;
    padding: 0.25rem 0.625rem;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    font-size: 0.6875rem;
    font-weight: 500;
    color: var(--white);
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.overlay-btn {
    display: inline-block;
    padding: 0.625rem 1.25rem;
    background: var(--white);
    color: var(--black);
    font-size: 0.875rem;
    font-weight: 600;
    text-decoration: none;
    border-radius: 6px;
    transition: all 0.3s ease;
}

.overlay-btn:hover {
    background: var(--gray-100);
    transform: translateY(-2px);
}
```

**JavaScript** (`main-refined.js:362-428`):
```javascript
const productsSwiper = new Swiper('.products-swiper', {
    slidesPerView: 1,
    spaceBetween: 32,
    loop: false,
    speed: 600,
    grabCursor: true,
    navigation: {
        nextEl: '.products-swiper .swiper-button-next', // Específico para evitar conflito
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

// Product tabs filter
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
```

---

## 4. Problemas Resolvidos e Lições Aprendidas

### 🐛 Problema 1: Carousel não funcionava (produtos em largura total)
**Sintomas**: Todos os 12 produtos visíveis ao mesmo tempo, largura 100%, navigation buttons sem resposta

**Causa Raiz**:
1. `.product-card-carousel` tinha `width: 100%` forçando largura total
2. Falta de `overflow: hidden` no container `.products-carousel-wrapper`
3. Seletores de navigation genéricos conflitando com hero carousel

**Solução Aplicada**:
```css
/* Remover width: 100% do .product-card-carousel */
.products-carousel-wrapper {
    overflow: hidden; /* CRÍTICO */
}
```

```javascript
// Seletores específicos
navigation: {
    nextEl: '.products-swiper .swiper-button-next', // Não .swiper-button-next genérico
    prevEl: '.products-swiper .swiper-button-prev',
}
```

**Lição**: Sempre usar `overflow: hidden` no wrapper do Swiper e seletores específicos para múltiplos carousels.

---

### 🐛 Problema 2: JavaScript Syntax Error (CRÍTICO)
**Sintoma**: `Uncaught SyntaxError: Identifier 'productCards' has already been declared`

**Causa Raiz**: Variável `productCards` declarada 2x:
- Linha 399: `const carouselCards = document.querySelectorAll('.product-card-carousel');` (mas antes era `productCards`)
- Linha 458: `const productCards = document.querySelectorAll('.product-card');` (código legacy duplicado)

**Solução Aplicada**: Deletar completamente a seção duplicada "Product Tabs Filter" (linhas 453-483)

**Lição**: Antes de adicionar novo código, verificar se já existe funcionalidade similar. Usar nomes descritivos de variáveis (`carouselCards` vs `productCards`).

---

### 🐛 Problema 3: Imagens desaparecendo ao rolar
**Sintoma**: Imagens do carousel ficavam invisíveis quando usuário rolava até a seção de produtos

**Causa Raiz**: Intersection Observer com seletor genérico `.product-card` que também estava matching `.product-card-carousel`

```javascript
// ANTES (PROBLEMA):
const animateElements = document.querySelectorAll(
    '.product-card, .feature-item, .marca-item, ...'
);
// Isto setava opacity: 0 em TODOS os .product-card, incluindo carousel cards
```

**Solução Aplicada** (`main-refined.js:191-192`):
```javascript
// DEPOIS (CORRETO):
const animateElements = document.querySelectorAll(
    '.product-card:not(.product-card-carousel), .feature-item, .marca-item, ...'
);
```

**Lição**: Usar `:not()` pseudo-class para excluir elementos específicos de seletores genéricos. Ser específico em animações para evitar side effects.

---

### 🐛 Problema 4: Imagens ocultas na inicialização do Swiper
**Sintoma**: Após corrigir Intersection Observer, imagens ainda não apareciam inicialmente

**Causa Raiz**: Callback `on: { init: function() {...} }` do Swiper estava setando `opacity: 0` propositalmente como animação de entrada

```javascript
// ANTES (PROBLEMA):
on: {
    init: function () {
        const slides = document.querySelectorAll('.product-card-carousel');
        slides.forEach((slide, index) => {
            slide.style.opacity = '0'; // Escondendo de propósito
            slide.style.transform = 'translateY(30px)';
            setTimeout(() => {
                slide.style.opacity = '1';
                slide.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }
}
```

**Solução Aplicada**: Remover completamente o callback e deixar cards visíveis por padrão
```javascript
// DEPOIS (CORRETO):
// Cards são visíveis por padrão (animação removida para evitar conflitos)
```

**Lição**: Animações customizadas do Swiper podem causar conflitos. Usar animações CSS padrão ou garantir que não interferem com visibilidade inicial.

---

### 🐛 Problema 5: Overlay text cortado
**Sintoma**: Texto do hover overlay não cabia completamente no card

**Solução Aplicada**:
1. Aumentar altura dos cards: `240px` → `320px`
2. Aumentar imagens: `140px` → `180px`
3. Reduzir font-sizes do overlay:
   - `overlay-title`: `1.375rem` → `1.125rem`
   - `overlay-description`: `0.875rem` → `0.8125rem`
4. Otimizar padding e margens do `.overlay-content`

**Lição**: Cards devem ter altura suficiente para acomodar overlay completo. Testar com conteúdo real, não lorem ipsum.

---

## 5. Estado Atual V2.0 (Janeiro 2025)

### 🔄 STATUS GERAL
**Landing principal**: 85% completa - **PRONTA PARA MOSTRAR A CLIENTE**
**Versão ativa**: V2.0 Refined (rebuild completo em Janeiro 2025)
**Última atualização**: 2025-01-04
**Commits recentes**:
- `2337e4a` - fix: resolve product carousel visibility and layout issues
- `c931cae` - Atualização do carrosel
- `6f01106` - fix: correct carousel functionality with proper overflow

**Roadmap de melhorias**: Consultar `ROADMAP-REFINAMENTO.md` para próximos passos

### ✅ V2.0 REFINED — Implementação Completa

**Arquivos principais**:
- `index.html` (973 linhas) - Landing completa com carousels
- `assets/css/style-refined.css` (1400+ linhas) - Design system white/black/gray
- `assets/js/main-refined.js` (442 linhas) - Funcionalidades interativas + Swiper.js

**11 Seções implementadas**:
1. ✅ Top Bar - Mensagens de benefícios (portes grátis, apoio especializado)
2. ✅ Header - Navegação sticky com backdrop-filter blur + mobile menu animado
3. ✅ **Hero Carousel** - Swiper.js 3 slides (RENNOVA, ELLEVA, Profhilo) com fade effect
4. ✅ **Categorias** - Barra horizontal com 8 categorias + ícones SVG
5. ✅ Features - Grid 4 colunas com SVG icons (garantia, envio, suporte, certificações)
6. ✅ **Produtos Carousel** - Swiper.js 12 produtos + tabs filter responsive
7. ✅ Marcas - Grid 6 logos com grayscale hover effect
8. ✅ Sobre - Conteúdo institucional + 4 estatísticas animadas
9. ✅ Certificações - 3 ISO cards + trust badges (origem, pagamento, privacidade)
10. ✅ Contacto - Grid 2 colunas: info + mapa / formulário com validação
11. ✅ Footer - 4 colunas (navegação, categorias, formação, legal) + social icons

**Funcionalidades JavaScript ativas**:
- ✅ **Hero Swiper carousel** - 3 slides, fade effect, autoplay, navigation
- ✅ **Products Swiper carousel** - 12 produtos, responsive, tabs filter
- ✅ Mobile menu toggle com hamburger animado (X quando aberto)
- ✅ Smooth scroll para âncoras internas
- ✅ Header shadow on scroll (aparece após 50px)
- ✅ Form validation completa (email regex, telefone, campos obrigatórios)
- ✅ **Intersection Observer para animações on-scroll** - com exclusão de carousel cards
- ✅ Counter animations para estatísticas (5000+, 15+, 48h+)
- ✅ Active navigation link tracking baseado em scroll position
- ✅ Lazy load para imagens com fade-in
- ✅ Click outside para fechar menu mobile
- ✅ Update automático do ano no footer

**Responsividade**:
- Mobile-first design
- Breakpoints: 480px, 640px, 768px, 968px, 1024px, 1280px
- Grid adaptativo (1 col mobile → 2-4 cols desktop)
- Mobile menu overlay funcional
- Hero carousel: 100% width em todas as resoluções
- Products carousel: 1→2→3→4 colunas conforme viewport

### 🎨 Imagens e Assets
**Estrutura organizada**: Ver `ANALISE-IMAGENS-COMPLETA.md` para mapeamento completo

**Categorias organizadas**:
- ✅ Ácido Hialurónico: 12 imagens renomeadas (RENNOVA Fill, Lift)
- ✅ Skinboosters: 4 imagens principais renomeadas (Profhilo)
- ✅ Bioestimuladores: 4 imagens principais renomeadas (ELLEVA)
- ⏳ Outras categorias: fios, mesoterapia, peeling, aparatologia pendentes

**Convenção de nomenclatura** (ver `PLANO-RENOMEACAO-IMAGENS.md`):
```
{marca}_{produto}_{tipo}_{numero}.{extensao}

Exemplos:
rennova_fill_1ml_01.webp
profhilo_main_01.webp
elleva_main_01.webp
```

---

## 6. Próximas Melhorias (ROADMAP)

### 🔄 Fase 1 - Melhorias Rápidas (Restantes)
Status: **70% completo**

✅ **CONCLUÍDO**:
- Hero carousel com Swiper.js
- Products carousel com Swiper.js
- Sistema de tabs (Best Sellers / Novidades)
- Barra de categorias com ícones

⏳ **PENDENTE**:
1. **Melhorar imagens de produtos** (30min)
   - Substituir placeholders SVG por imagens reais
   - Usar convenção: `{categoria}/{produto}_main_01.webp`
   - Produtos com placeholder: Fios, Mesoterapia, Aparatologia, Peelings, Agulhas, Cosméticos, RENNOVA Lift, Calhydra

2. **Adicionar preços nos cards** (20min)
   - Estrutura: `<span class="product-price">Desde 60€ + IVA</span>`
   - Posicionar abaixo da imagem, antes do overlay

3. **Active states mais evidentes** (20min)
   - Melhorar hover states de buttons
   - Adicionar underline animation em links

### 🔄 Fase 2 - Features Avançadas (3-4h)
1. Grid de categorias lifestyle com imagens
2. Seção magazine/blog editorial
3. Seção "What's New" com últimas notícias
4. Optimizar hero carousel com imagens de lifestyle

### 🔄 Fase 3 - Performance & Polish (2-3h)
1. Minificação CSS/JS
2. Lazy load avançado (blur placeholder)
3. Otimização de imagens (WebP/AVIF)
4. Critical CSS inline
5. Preload de fontes

### 🔄 Fase 4 - Páginas Secundárias (4-5h)
1. Página "Sobre" completa
2. Página "Formações" (estrutura existente em `formacao.html`)
3. Páginas de produto individuais (template)
4. Hubs por categoria

### 🔄 Fase 5 - Integração Backend (2-3h)
1. Integração formulário com API/email
2. Sistema de newsletter
3. Analytics (Google Analytics 4)
4. Pixels de conversão

---

## 7. Guia Técnico de Implementação

### 📁 Estrutura de Arquivos

**HTML** (`index.html`):
- Linhas 1-50: Head, meta tags, Google Fonts
- Linhas 51-100: Top bar + Header
- Linhas 101-200: Hero Carousel (Swiper)
- Linhas 201-294: Barra de Categorias
- Linhas 295-322: Features Grid
- Linhas 323-613: Produtos Carousel (Swiper) + Tabs
- Linhas 614-700: Marcas
- Linhas 701-800: Sobre + Stats
- Linhas 801-900: Certificações
- Linhas 901-966: Contacto + Formulário
- Linhas 967-973: Footer + Scripts

**CSS** (`assets/css/style-refined.css`):
- Linhas 1-150: CSS Reset + Variables
- Linhas 151-300: Typography + Utilities
- Linhas 301-400: Top Bar + Header
- Linhas 401-450: Mobile Menu
- Linhas 451-750: Hero + Hero Carousel (Swiper)
- Linhas 751-850: Categorias
- Linhas 851-1000: Features
- Linhas 1001-1250: Produtos Carousel (Swiper)
- Linhas 1251-1350: Marcas
- Linhas 1351-1400+: Sobre, Certificações, Contacto, Footer

**JavaScript** (`assets/js/main-refined.js`):
1. Mobile Menu Toggle (linhas 13-55)
2. Smooth Scroll (linhas 57-83)
3. Header Scroll Effect (linhas 85-102)
4. Form Validation (linhas 104-169)
5. Animate on Scroll - Intersection Observer (linhas 171-200)
6. Stats Counter Animation (linhas 202-255)
7. Active Navigation Link (linhas 257-279)
8. Product Card Hover (linhas 281-291)
9. Update Year in Footer (linhas 293-301)
10. Lazy Load Images (linhas 303-328)
11. **Hero Swiper Carousel** (linhas 330-354)
12. **Products Swiper Carousel + Tabs** (linhas 356-428)
13. Console Message (linhas 430-442)

### 🎯 Convenções de Código

**HTML**:
- Semântica rigorosa (`section`, `header`, `nav`, `main`, `article`)
- IDs únicos para âncoras e Swiper containers
- Classes descritivas BEM-like
- Atributos `data-*` para JavaScript hooks

**CSS**:
- BEM-like naming: `.block__element--modifier`
- Mobile-first media queries
- Variables CSS para spacing, colors, transitions
- Comentários numerados para seções
- `overflow: hidden` obrigatório em Swiper wrappers

**JavaScript**:
- ES6+ syntax
- `const`/`let` ao invés de `var`
- Verificação de existência antes de manipular DOM
- Seletores específicos para múltiplos Swipers
- Comentários descritivos para cada seção

### 🔧 Swiper.js - Boas Práticas

**1. Múltiplos Carousels**: Usar seletores específicos
```javascript
// ❌ ERRADO: Conflito entre carousels
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
}

// ✅ CORRETO: Específico para cada carousel
navigation: {
    nextEl: '.products-swiper .swiper-button-next',
    prevEl: '.products-swiper .swiper-button-prev',
}
```

**2. Overflow Hidden**: Sempre obrigatório
```css
.carousel-wrapper {
    overflow: hidden; /* CRÍTICO */
}
```

**3. Animações Customizadas**: Evitar conflitos
```javascript
// ❌ EVITAR: Animações que afetam visibilidade inicial
on: {
    init: function() {
        slides.forEach(slide => {
            slide.style.opacity = '0'; // Problemas!
        });
    }
}

// ✅ PREFERIR: Usar animações CSS ou Swiper built-in
```

**4. Intersection Observer**: Excluir carousel cards
```javascript
// ✅ CORRETO: Usar :not() para excluir
const animateElements = document.querySelectorAll(
    '.product-card:not(.product-card-carousel), .feature-item, ...'
);
```

### 🎨 CSS - Padrões de Carousel

**Estrutura básica**:
```css
/* Wrapper com overflow hidden */
.carousel-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden; /* OBRIGATÓRIO */
}

/* Swiper container */
.swiper-container {
    width: 100%;
    height: auto;
}

/* Cards com altura fixa */
.carousel-card {
    height: 320px; /* Fixo para consistência */
    overflow: hidden;
}

/* Navigation customizada */
.swiper-button-next,
.swiper-button-prev {
    width: 48px;
    height: 48px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
}
```

---

## 8. Conteúdo & Voz

### Tom editorial
- Consultivo, científico, confiante
- Headlines curtas (máx. 3 palavras/linha)
- Microcopy com verbos ativos ("Explorar", "Descobrir", "Solicitar")
- Destacar diferenciais reais (certificações ISO, logística, suporte)

### Fontes de verdade
- `innova.md`: inventário completo de produtos (usar para copy)
- `ANALISE-IMAGENS-COMPLETA.md`: mapeamento de imagens disponíveis
- `assets/images/`: imagens organizadas por categoria

### SEO & dados estruturados
- Schema MedicalBusiness + Product já implementados
- Meta tags e OG tags presentes
- Sitemap e robots.txt pendentes

---

## 9. Conteúdo Comercial (Resumo por Categoria)

| Categoria | Principais linhas | Imagens disponíveis | Status |
| --- | --- | --- | --- |
| **Ácido Hialurónico** | Rennova® (Fill, Lift, Lift Plus Lido), Reyoungel® | ✅ 12 imagens organizadas | Completo |
| **Bioestimuladores** | ELLEVA (PLLA), Calhydra (CaHA), Novuma, Radiesse, Gouri | ✅ 4 principais organizadas | Parcial |
| **Skinboosters** | Profhilo® (2mL, Body 6mL), Elastica Hydroboost | ✅ 4 imagens organizadas | Completo |
| **Fios PDO & COG** | VliftPro® (Mono, Screw, Cones, COG 6D), Magicalift | ⏳ Não analisado | Pendente |
| **Mesoterapia** | Skinderma® (Lipase, Hyaluronidase), PDRN, HA+DMAE | ⏳ Não analisado | Pendente |
| **Peelings** | Skinderma® (Azelaic, Tranexamic, Lactic, Jessner) | ⏳ Não analisado | Pendente |
| **Cosméticos** | Skinderma® (limpeza, tónicos, SPF 50+, antiaging) | ⏳ Grande volume (1.1 MB) | Pendente |
| **Agulhas & Cânulas** | Magicalift® (18G–30G), kits flexíveis | ⏳ Não analisado | Pendente |
| **Aparatologia** | Hilotherm®, dermarollers, centrífugas, Rennova® Mixer | ⏳ Não analisado | Pendente |

**Próxima ação**: Renomear imagens das categorias pendentes seguindo convenção `{marca}_{produto}_{tipo}_{numero}.{ext}`

---

## 10. QA & Performance Targets

### Lighthouse Targets
- **Performance**: 95+ (desktop), 90+ (mobile)
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

### Web Vitals
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1
- **TTI** (Time to Interactive): < 3.5s

### Assets
- Total page weight: ≤ 2.5 MB (com imagens otimizadas)
- JavaScript: ≤ 150 KB (minified)
- CSS: ≤ 100 KB (minified)
- Requests: ≤ 30

### Navegadores Alvo
- Chrome 100+ ✅
- Safari 15+ ✅
- Firefox 100+ ✅
- Edge 100+ ✅
- Mobile Safari (iOS 14+) ✅
- Chrome Mobile ✅

### Checklist QA
1. ✅ Lighthouse desktop + mobile
2. ✅ Swiper.js funcionando em todos os viewports
3. ✅ Navigation arrows clicáveis
4. ✅ Tabs filter funcionando corretamente
5. ✅ Mobile menu toggle
6. ✅ Form validation
7. ✅ Intersection Observer animações
8. ⏳ Axe DevTools accessibility scan
9. ⏳ PageSpeed Insights real-world metrics
10. ⏳ Cross-browser testing

---

## 11. Convenções & Boas Práticas

### HTML
- Semântica rigorosa (`section`, `header`, `nav`, `main`, `article`)
- IDs únicos para âncoras e containers Swiper
- Classes descritivas BEM-like
- Atributos `data-*` para JavaScript hooks
- `loading="lazy"` em imagens below the fold

### CSS
- BEM-like naming: `.block__element--modifier`
- Mobile-first media queries
- Variables CSS para consistency
- Comentários numerados para seções principais
- **CRÍTICO**: `overflow: hidden` em wrappers de Swiper

### JavaScript
- ES6+ syntax (const, let, arrow functions)
- Verificar existência antes de manipular DOM
- Seletores específicos para múltiplos Swipers
- Evitar animações que conflitam com Swiper
- Comentários descritivos para cada funcionalidade

### Commits Git
- Formato: `type: description`
- Types: `feat`, `fix`, `refactor`, `docs`, `style`, `chore`
- Incluir contexto de arquivos modificados
- Footer com co-autoria do Claude

Exemplo:
```
fix: resolve product carousel visibility and layout issues

Correções no carousel de produtos:
- Excluir .product-card-carousel do Intersection Observer
- Remover animação de inicialização do Swiper
- Aumentar altura dos cards: 240px → 320px

🤖 Generated with Claude Code
Co-Authored-By: Claude <noreply@anthropic.com>
```

---

## 12. Apêndice – Recursos e Referências

### Documentos do Projeto
- `ROADMAP-REFINAMENTO.md` - Plano detalhado de melhorias em 5 fases
- `ANALISE-IMAGENS-COMPLETA.md` - Mapeamento completo de imagens
- `PLANO-RENOMEACAO-IMAGENS.md` - Convenção de nomenclatura
- `RELATORIO-IMAGENS.md` - Relatório de organização de assets
- `innova.md` - Inventário comercial completo
- `checklist.md` - QA e testes
- `README.md` - Instruções gerais

### Referências de Design
- **Mesoestetic.pt** (PRINCIPAL): Design minimalista white/black/gray
- **Screenshots analisados** (4 imagens, Janeiro 2025)
- **Moodboard**: Minimalismo editorial, contraste alto
- **Acessibilidade**: WCAG 2.1 AA

### Tecnologias
- **Swiper.js 11**: https://swiperjs.com/
- **Google Fonts**: https://fonts.google.com/
- **Intersection Observer API**: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

### Links Úteis
- Swiper.js Demos: https://swiperjs.com/demos
- Swiper.js API: https://swiperjs.com/swiper-api
- CSS Custom Properties: https://developer.mozilla.org/en-US/docs/Web/CSS/--*
- BEM Methodology: http://getbem.com/

---

## 13. Histórico de Commits Relevantes

### Janeiro 2025 - Week 1

**2025-01-04**:
- `2337e4a` - fix: resolve product carousel visibility and layout issues
  - Corrigido Intersection Observer para excluir carousel cards
  - Removida animação de inicialização do Swiper
  - Aumentada altura dos cards e otimizado overlay

- `c931cae` - Atualização do carrosel
  - Implementação do Hero Carousel com 3 slides
  - Implementação do Products Carousel com 12 produtos

- `6f01106` - fix: correct carousel functionality with proper overflow
  - Adicionado `overflow: hidden` crítico
  - Seletores específicos para navigation

**2025-01-03**:
- Rebuild V2.0 completo
- Conversão de paleta dark para white/black/gray
- Criação de `ROADMAP-REFINAMENTO.md`

---

### Última atualização
- **Data**: 2025-01-04
- **Responsável**: Claude (Sonnet 4.5) – sessão V2.0 com Swiper.js
- **Versão**: V2.0 Refined - Com Hero e Products Carousels implementados
- **Status**: Landing 85% completa, funcional, pronta para apresentar a cliente
- **Próximos passos**:
  1. Substituir placeholders SVG por imagens reais dos produtos
  2. Adicionar preços nos cards de produtos
  3. Implementar grid lifestyle (Fase 2)

---

> **IMPORTANTE PARA PRÓXIMAS SESSÕES**:
> - Sempre ler este documento integralmente antes de fazer mudanças
> - Consultar `ROADMAP-REFINAMENTO.md` para prioridades
> - Verificar `ANALISE-IMAGENS-COMPLETA.md` para assets disponíveis
> - **CRÍTICO**: Ao trabalhar com Swiper.js, usar seletores específicos e `overflow: hidden`
> - Testar em múltiplos viewports (mobile, tablet, desktop)
> - Manter este handbook atualizado após mudanças significativas

**Boa sorte na próxima iteração! 🚀**
