# 🎯 INNOVA - Landing Page Premium | Agents Guide

> Atualizado após o commit `48e91a6` (logo com fallback dourado, fotos no processo e nova grelha premium de Formações).

### Status rápido para retomar amanhã
- ✅ Logo `INNOVA` com fallback sólido + gradient condicionado (`assets/css/main.css:1788`).
- ✅ Linha do tempo “Como Funciona” usa imagens (`assets/images/curso-*.jpg`) com dimensões fixas.
- ✅ Seção de Formações reprojetada com cards `curso-card--hero`, `--atelier`, `--intensive`.
- ✅ Footer inclui ícone de WhatsApp personalizado.
- 🚧 Próximas prioridades:
  1. Extrair estilos críticos para `critical.css` e inline no `<head>`.
  2. Otimizar imagens (gerar WebP/AVIF e configurar `<picture>` no hero/processo/cursos).
  3. Revisar delays/efeitos AOS após nova hierarquia.
  4. Criar `checklist.md` com validações (responsividade, Lighthouse, a11y, SEO) e iniciar marcações.

## 📋 Visão Geral do Projeto

**Cliente:** INNOVA  
**Nicho:** Produtos Estéticos Premium (Botox, Ácido Hialurónico)  
**Localização:** Portugal  
**Slogan:** "PRECISION. HARMONY. BEAUTY."

**Objetivo:** Landing page ultra-otimizada, design premium, focada em conversão para profissionais de estética.

---

## 🗂️ Estrutura de Pastas

```
innova-landing/
├── index.html
├── assets/
│   ├── css/
│   │   ├── main.css
│   │   └── critical.css
│   ├── js/
│   │   ├── main.js
│   │   └── lazy-load.js
│   ├── images/
│   │   ├── logo_innova_vector_Ft.png (já fornecida)
│   │   ├── hero-bg.png (já fornecida - Gemini_Generated_Image)
│   │   └── optimized/ (versões WebP/AVIF)
│   └── icons/ (Devicon via CDN - nenhum arquivo local)
├── .htaccess (otimização Apache - opcional)
└── README.md
```

---

## 🎨 Design System

### Paleta de Cores

```css
:root {
  /* Cores Principais */
  --primary-black: #1a1a1a;
  --primary-dark: #0f0f0f;
  --secondary-white: #ffffff;
  --background-light: #f8f8f8;
  
  /* Accent Gold (Luxo/Premium) */
  --accent-gold: #d4af37;
  --accent-gold-light: #e8d4a0;
  --accent-gold-dark: #b8941f;
  
  /* Gradientes */
  --gradient-dark: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  --gradient-gold: linear-gradient(135deg, #d4af37 0%, #f4e4b8 100%);
  --gradient-hero: linear-gradient(135deg, rgba(26,26,26,0.95) 0%, rgba(45,45,45,0.9) 100%);
  
  /* Tons de Cinza */
  --gray-100: #f5f5f5;
  --gray-200: #e5e5e5;
  --gray-300: #d4d4d4;
  --gray-700: #404040;
  --gray-900: #171717;
  
  /* Sombras */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.12);
  --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.16);
  --shadow-xl: 0 12px 48px rgba(0, 0, 0, 0.24);
  
  /* Transições */
  --transition-fast: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Tipografia

```css
/* Fontes */
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-display: 'Playfair Display', Georgia, serif;

/* Tamanhos */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
--text-6xl: 3.75rem;   /* 60px */
--text-7xl: 4.5rem;    /* 72px */

/* Pesos */
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

### Espaçamento

```css
--spacing-xs: 0.5rem;   /* 8px */
--spacing-sm: 1rem;     /* 16px */
--spacing-md: 1.5rem;   /* 24px */
--spacing-lg: 2rem;     /* 32px */
--spacing-xl: 3rem;     /* 48px */
--spacing-2xl: 4rem;    /* 64px */
--spacing-3xl: 6rem;    /* 96px */
--spacing-4xl: 8rem;    /* 128px */
```

---

## 📱 Estrutura de Seções

### 1. Header/Navigation

**Requisitos:**
- Sticky header com backdrop blur
- Logo INNOVA (versão branca para fundo escuro)
- Menu responsivo (hamburger no mobile)
- CTA button destacado: "Solicitar Orçamento"
- Scroll trigger: header muda de estilo após 100px

**Menu Items:**
- Início
- Produtos
- Benefícios
- Testemunhos
- Contacto

---

### 2. Hero Section (Above the Fold)

**Layout:**
- Split screen: 50% texto / 50% imagem (desktop)
- Stack vertical no mobile

**Conteúdo Esquerdo:**
- Eyebrow text: "Excelência em Estética"
- H1 Principal: 
  ```
  Precision.
  Harmony.
  Beauty.
  ```
  (Usar tipografia display, "Beauty" com gradient gold)
  
- Subheadline: "Produtos estéticos premium que unem ciência e arte. Transforme a beleza natural dos seus pacientes com a qualidade INNOVA."

- Dois CTAs:
  1. Primary: "Explorar Produtos" (scroll para #produtos)
  2. Secondary: "Falar com Especialista" (scroll para #contacto)

- Stats Row (3 colunas):
  - **15+** Anos de Experiência
  - **5000+** Profissionais Satisfeitos  
  - **100%** Qualidade Garantida

**Conteúdo Direito:**
- Imagem hero (Gemini_Generated_Image_bq0npkbq0npkbq0n.png)
- Efeito parallax sutil
- Decoração: círculo dourado blur no fundo

**Animações:**
- Fade up no texto (escalonado)
- Fade left na imagem
- Counter animado nos números

---

### 3. Produtos Section

**Header:**
- Eyebrow: "Nossa Linha Premium"
- H2: "Produtos de Excelência" (Excelência com gradient)
- Descrição: "Seleção cuidadosa de produtos que proporcionam resultados extraordinários e duradouros."

**Grid de Produtos (3 colunas desktop, 1 mobile):**

#### Card 1: Toxina Botulínica
- **Ícone Devicon:** `devicon-chrome-original` (representa precisão)
- **Título:** Toxina Botulínica
- **Descrição:** Resultados naturais e precisos para suavização de linhas de expressão. Qualidade farmacêutica premium.
- **Features:**
  - ✓ Efeito prolongado
  - ✓ Aplicação precisa
  - ✓ Resultados naturais
  - ✓ Segurança comprovada
- **CTA:** "Saiba Mais →"

#### Card 2: Ácido Hialurónico (DESTAQUE)
- **Badge:** "Mais Popular"
- **Ícone Devicon:** `devicon-dropbox-original` (representa volume/preenchimento)
- **Título:** Ácido Hialurónico
- **Descrição:** Preenchimento dérmico de alta densidade. Hidratação profunda e restauração de volume facial.
- **Features:**
  - ✓ Múltiplas densidades
  - ✓ Biocompatível
  - ✓ Efeito volumizador
  - ✓ Hidratação intensa
- **CTA:** "Saiba Mais →"
- **Estilo:** Borda dourada, shadow maior, scale no hover

#### Card 3: Bioestimuladores
- **Ícone Devicon:** `devicon-slack-original` (representa renovação/rede)
- **Título:** Bioestimuladores
- **Descrição:** Estimulação natural de colágeno. Rejuvenescimento progressivo e duradouro da pele.
- **Features:**
  - ✓ Estímulo de colágeno
  - ✓ Efeito progressivo
  - ✓ Resultados duradouros
  - ✓ Rejuvenescimento global
- **CTA:** "Saiba Mais →"

**Estilo dos Cards:**
- Background branco
- Border radius: 16px
- Shadow elevado no hover
- Transição suave (scale 1.02)
- Ícone com gradiente dourado

---

### 4. Benefícios Section

**Background:** Gradiente escuro (#1a1a1a → #2d2d2d)
**Texto:** Branco

**Layout:** Grid 2x2 (desktop) / Stack (mobile)

**Benefícios:**

1. **Qualidade Certificada**
   - Ícone: `devicon-denojs-original` (certificado/selo)
   - Descrição: Produtos aprovados e testados segundo normas internacionais de segurança.

2. **Suporte Técnico**
   - Ícone: `devicon-confluence-original` (suporte/comunicação)
   - Descrição: Equipa especializada disponível para consultoria e esclarecimento de dúvidas.

3. **Formação Contínua**
   - Ícone: `devicon-embeddedc-plain` (educação/crescimento)
   - Descrição: Acesso a workshops e formações sobre técnicas de aplicação avançadas.

4. **Entrega Rápida**
   - Ícone: `devicon-fastapi-plain` (velocidade)
   - Descrição: Logística eficiente com entrega em todo território português.

**Estilo:**
- Cards com glassmorphism
- Backdrop filter: blur
- Border sutil branco/opacity

---

### 5. Processo Section

**Título:** "Como Funciona"

**Timeline Vertical (3 steps):**

**Step 1: Consulta**
- Foto na moldura circular (80x80) usando `assets/images/curso-avancado.jpg`
- Texto: Entre em contacto com nossa equipa para avaliação das suas necessidades.

**Step 2: Seleção**
- Foto na moldura circular (80x80) usando `assets/images/curso-tecnicas.jpg`
- Texto: Receba recomendações personalizadas de produtos para o seu perfil profissional.

**Step 3: Acompanhamento**
- Foto na moldura circular (80x80) usando `assets/images/curso-certificacao.jpg`
- Texto: Suporte contínuo e formação para maximizar os resultados dos seus tratamentos.

**Estilo:**
- Linha vertical conectando os steps
- Números grandes ao lado das fotos
- Animação de reveal ao scroll

---

### 6. Formações Section (Layout 2025)

**Visão Geral:** Seção transformada em vitrine premium com grelha assimétrica (12 colunas) e três programas-chave.

1. **Curso-card Hero (`curso-card--hero`):**
   - Conteúdo textual à esquerda (eyebrow + título + descrição + highlights + CTA/metadata).
   - Imagem full-height à direita (`curso-avancado.jpg`) com badges de vidro (hands-on, suporte, planeamento).
   - Fundo `var(--gradient-dark)` e copy branca.

2. **Programa Signature (`curso-card--atelier`):**
   - Card vertical com ribbon “Mais procurado”.
   - Métricas em duas colunas (módulos / hands-on).
   - CTA `btn--outline` para inscrição.

3. **Programa Imersivo (`curso-card--intensive`):**
   - Gradiente dourado + cartão glass interno com agenda em bullet list.
   - CTA primário “Agendar mentoria”.

**Notas de Implementação:**
- Grid: `grid-template-columns: repeat(12, minmax(0, 1fr))`.
- Breakpoints: reorganizar para 1 coluna ≤ 1024px, ajustar ordens e espaçamentos.
- Garantir imagens em `assets/images/curso-*.jpg` otimizadas e com `width`/`height`.
- Atualizar delays AOS: hero (120ms), atelier (220ms), intensive (320ms).

---

### 7. Testemunhos Section

**Título:** "O Que Dizem os Profissionais"

**Carousel de 3 Testemunhos:**

**Testemunho 1:**
- Nome: Dra. Sofia Mendes
- Função: Médica Dermatologista, Lisboa
- Foto: Avatar placeholder (ou iniciais em círculo)
- Texto: "A qualidade dos produtos INNOVA é incomparável. Os meus pacientes notam resultados naturais e duradouros. A equipa de suporte é excecional."
- Rating: 5 estrelas

**Testemunho 2:**
- Nome: Dr. Ricardo Alves
- Função: Cirurgião Plástico, Porto
- Texto: "Trabalho com INNOVA há 5 anos. A consistência dos produtos e a entrega rápida fazem toda a diferença na minha clínica."
- Rating: 5 estrelas

**Testemunho 3:**
- Nome: Dra. Ana Costa
- Função: Esteticista, Braga
- Texto: "Formação de qualidade e produtos premium. INNOVA elevou o padrão dos tratamentos que ofereço. Recomendo sem reservas."
- Rating: 5 estrelas

**Estilo:**
- Cards brancos com shadow
- Aspas decorativas em dourado
- Carousel com dots navigation
- Auto-play (pausável)

---

### 8. FAQ Section

**Título:** "Perguntas Frequentes"

**Accordion com 6 perguntas:**

1. **Os produtos INNOVA são certificados?**
   - Sim, todos os nossos produtos possuem certificações internacionais e cumprem rigorosamente as normas de segurança europeias.

2. **Fornecem formação para aplicação dos produtos?**
   - Oferecemos workshops regulares e consultoria técnica para profissionais que adquirem os nossos produtos.

3. **Qual o prazo de entrega em Portugal?**
   - Entregamos em 24-48h em Portugal Continental. Ilhas entre 3-5 dias úteis.

4. **É necessário ser profissional de saúde para adquirir?**
   - Sim, os nossos produtos são exclusivos para médicos, enfermeiros e profissionais certificados em estética.

5. **Oferecem garantia nos produtos?**
   - Todos os produtos têm garantia de qualidade. Em caso de defeito de fábrica, substituição imediata.

6. **Como posso fazer uma encomenda?**
   - Entre em contacto através do formulário, email ou telefone. Nossa equipa processará o seu pedido rapidamente.

**Estilo:**
- Accordion animado (smooth expand/collapse)
- Ícone + / - rotativo
- Borda dourada no item ativo

---

### 9. CTA Final Section

**Background:** Gradiente dourado
**Texto:** Escuro

**Conteúdo Centralizado:**
- H2: "Pronto para Elevar os Seus Tratamentos?"
- Descrição: "Junte-se a milhares de profissionais que confiam na INNOVA."
- CTA Grande: "Solicitar Orçamento Agora"
- Texto secundário: "Resposta em menos de 24 horas"

**Decoração:**
- Ícones Devicon flutuantes ao fundo (subtle)

---

### 10. Contacto Section

**Layout:** 2 colunas (desktop)

**Coluna Esquerda - Informações:**
- **Morada:**  
  INNOVA Estética  
  Rua Exemplo, 123  
  4800-000 Guimarães, Portugal

- **Email:**  
  contacto@innova.pt  
  vendas@innova.pt

- **Telefone:**  
  +351 253 XXX XXX  
  +351 91X XXX XXX

- **Horário:**  
  Segunda a Sexta: 9h - 18h  
  Sábado: 9h - 13h

**Coluna Direita - Formulário:**

Campos:
- Nome Completo *
- Email *
- Telefone *
- Profissão (select):
  - Médico/a Dermatologista
  - Cirurgião/ã Plástico/a
  - Enfermeiro/a
  - Esteticista
  - Outro
- Mensagem (textarea) *
- Checkbox: "Aceito a Política de Privacidade" *
- Button: "Enviar Mensagem"

**Validação:**
- HTML5 validation
- Campos obrigatórios destacados
- Mensagem de sucesso após envio (simulado)

---

### 11. Footer

**Background:** Preto (#0f0f0f)
**Texto:** Cinza claro

**Layout:** 4 colunas (desktop) / Stack (mobile)

**Coluna 1 - Logo & Slogan:**
- Logo INNOVA (versão branca)
- Tagline: "Precision. Harmony. Beauty."
- Texto: "Produtos estéticos premium para profissionais exigentes."

**Coluna 2 - Links Rápidos:**
- Início
- Produtos
- Sobre Nós
- Contacto
- Política de Privacidade

**Coluna 3 - Produtos:**
- Toxina Botulínica
- Ácido Hialurónico
- Bioestimuladores
- Catálogo Completo

**Coluna 4 - Redes Sociais:**
- Instagram (ícone Devicon: `devicon-instagram-original`)
- Facebook (ícone Devicon: `devicon-facebook-plain`)
- LinkedIn (ícone Devicon: `devicon-linkedin-plain`)
- WhatsApp (ícone Devicon: `devicon-slack-plain` como placeholder)

**Copyright Bar:**
- "© 2025 INNOVA. Todos os direitos reservados."
- "Desenvolvido com 💛 em Portugal"

---

## ⚡ Otimizações de Performance

### 1. Lazy Loading

**Implementar em:**
- Todas as imagens abaixo do fold
- Iframes (se houver)
- Background images via Intersection Observer

**Exemplo:**
```html
<img 
  src="placeholder.jpg" 
  data-src="real-image.jpg" 
  alt="Descrição" 
  loading="lazy"
  class="lazy-img"
>
```

**JavaScript:**
```javascript
const lazyImages = document.querySelectorAll('.lazy-img');

const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.add('loaded');
      observer.unobserve(img);
    }
  });
});

lazyImages.forEach(img => imageObserver.observe(img));
```

---

### 2. Otimização de Imagens

**Logo:**
- Formato: PNG com transparência OU SVG
- Tamanhos: 180x50px (header), 240x67px (footer)
- Peso máximo: 20KB

**Hero Image:**
- Formato: WebP (com fallback JPG)
- Tamanhos responsivos:
  - Mobile: 768px width
  - Tablet: 1024px width
  - Desktop: 1920px width
- Peso máximo: 150KB (WebP), 250KB (JPG)
- Usar `<picture>` element

**Exemplo:**
```html
<picture>
  <source srcset="hero-mobile.webp" media="(max-width: 768px)" type="image/webp">
  <source srcset="hero-tablet.webp" media="(max-width: 1024px)" type="image/webp">
  <source srcset="hero-desktop.webp" media="(min-width: 1025px)" type="image/webp">
  <img src="hero-fallback.jpg" alt="INNOVA Hero" loading="eager" width="1920" height="1080">
</picture>
```

---

### 3. Critical CSS

**Extrair e inlinear CSS crítico:**
- Above the fold styles
- Header/Navigation
- Hero section
- Fontes (font-display: swap)

**Restante CSS:**
- Carregar de forma assíncrona
- Minificar e comprimir

```html
<style>
  /* Critical CSS inline aqui */
</style>
<link rel="preload" href="assets/css/main.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="assets/css/main.css"></noscript>
```

---

### 4. Minificação

**HTML:**
- Remover comentários
- Remover espaços desnecessários
- Manter legibilidade do código-fonte

**CSS:**
- Minificar com cssnano
- Remover CSS não utilizado (PurgeCSS)
- Combinar media queries

**JavaScript:**
- Minificar com Terser
- Tree shaking
- Code splitting se necessário

---

### 5. Compressão

**.htaccess (Apache):**
```apache
# Gzip compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Browser caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

---

### 6. Preload/Prefetch

**Preload recursos críticos:**
```html
<link rel="preload" href="assets/css/critical.css" as="style">
<link rel="preload" href="assets/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="logo_innova_vector_Ft.png" as="image">
```

**Preconnect para CDNs:**
```html
<link rel="preconnect" href="https://cdn.jsdelivr.net">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

---

## 🎭 Animações e Interações

### 1. Scroll Animations

**Biblioteca:** AOS (Animate On Scroll) OU CSS puro com Intersection Observer

**Animações recomendadas:**
- `fade-up`: Títulos e cards
- `fade-left`: Imagens da direita
- `fade-right`: Imagens da esquerda
- `zoom-in`: Ícones e badges
- `flip-up`: Stats e números

**Delays escalonados:**
- Primeiro elemento: 0ms
- Segundo elemento: 100ms
- Terceiro elemento: 200ms
- etc.

**Configuração AOS:**
```javascript
AOS.init({
  duration: 800,
  easing: 'ease-out-cubic',
  once: true,
  offset: 100
});
```

---

### 2. Hover Effects

**Buttons:**
- Scale: 1.05
- Shadow increase
- Gradient shift

**Cards:**
- Translate Y: -8px
- Shadow elevation
- Border color change

**Links:**
- Underline animation (left to right)
- Color transition

---

### 3. Micro-interações

**Nav Menu:**
- Smooth scroll to sections
- Active link highlight
- Mobile menu slide-in (right to left)

**Form:**
- Input focus: border color + shadow
- Checkbox/radio: custom styles
- Submit button: loading spinner

**Testimonial Carousel:**
- Swipe gestures (mobile)
- Auto-play com pause no hover
- Smooth transitions (fade)

---

## 📐 Responsividade

### Breakpoints

```css
/* Mobile First */
:root {
  --breakpoint-sm: 640px;   /* Mobile landscape */
  --breakpoint-md: 768px;   /* Tablet portrait */
  --breakpoint-lg: 1024px;  /* Tablet landscape */
  --breakpoint-xl: 1280px;  /* Desktop */
  --breakpoint-2xl: 1536px; /* Large desktop */
}
```

### Layout Ajustes

**Mobile (<768px):**
- Hero: Stack vertical
- Grid produtos: 1 coluna
- Grid benefícios: 1 coluna
- Testemunhos: 1 card visível
- Footer: Stack vertical
- Font sizes reduzidos (-20%)

**Tablet (768px - 1024px):**
- Hero: Stack ou 60/40
- Grid produtos: 2 colunas
- Grid benefícios: 2 colunas
- Testemunhos: 2 cards visíveis

**Desktop (>1024px):**
- Hero: 50/50 split
- Grid produtos: 3 colunas
- Grid benefícios: 2x2 grid
- Testemunhos: 3 cards visíveis

---

## 🔍 SEO On-Page

### Meta Tags

```html
<!-- Basic Meta -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="INNOVA - Produtos estéticos premium em Portugal. Botox, Ácido Hialurónico, Bioestimuladores. Qualidade certificada para profissionais.">
<meta name="keywords" content="botox portugal, acido hialuronico, produtos esteticos, toxina botulinica, preenchimento facial, innova, estetica portugal">
<meta name="author" content="INNOVA">
<meta name="robots" content="index, follow">

<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:title" content="INNOVA - Precision. Harmony. Beauty.">
<meta property="og:description" content="Produtos estéticos premium para profissionais em Portugal.">
<meta property="og:image" content="https://innova.pt/og-image.jpg">
<meta property="og:url" content="https://innova.pt">
<meta property="og:site_name" content="INNOVA">
<meta property="og:locale" content="pt_PT">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="INNOVA - Precision. Harmony. Beauty.">
<meta name="twitter:description" content="Produtos estéticos premium em Portugal.">
<meta name="twitter:image" content="https://innova.pt/twitter-image.jpg">

<!-- Canonical -->
<link rel="canonical" href="https://innova.pt">

<!-- Favicon -->
<link rel="icon" type="image/png" href="favicon.png">
<link rel="apple-touch-icon" href="apple-touch-icon.png">
```

---

### Structured Data (JSON-LD)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "INNOVA",
  "description": "Produtos estéticos premium - Botox, Ácido Hialurónico, Bioestimuladores",
  "url": "https://innova.pt",
  "logo": "https://innova.pt/logo.png",
  "image": "https://innova.pt/og-image.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua Exemplo, 123",
    "addressLocality": "Guimarães",
    "addressRegion": "Braga",
    "postalCode": "4800-000",
    "addressCountry": "PT"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+351-253-XXX-XXX",
    "contactType": "Sales",
    "availableLanguage": ["Portuguese"]
  },
  "sameAs": [
    "https://www.instagram.com/innova",
    "https://www.facebook.com/innova",
    "https://www.linkedin.com/company/innova"
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Ácido Hialurónico INNOVA",
  "description": "Preenchimento dérmico premium de alta densidade",
  "brand": {
    "@type": "Brand",
    "name": "INNOVA"
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "EUR"
  }
}
</script>
```

---

### Headings Hierarchy

```
H1: "Precision. Harmony. Beauty." (único na página)
  H2: "Produtos de Excelência"
    H3: "Toxina Botulínica"
    H3: "Ácido Hialurónico"
    H3: "Bioestimuladores"
  H2: "Por Que Escolher INNOVA"
    H3: "Qualidade Certificada"
    H3: "Suporte Técnico"
    H3: "Formação Contínua"
    H3: "Entrega Rápida"
  H2: "Como Funciona"
  H2: "Formações e Cursos"
  H2: "O Que Dizem os Profissionais"
  H2: "Perguntas Frequentes"
  H2: "Entre em Contacto"
```

---

## 🎯 Ícones Devicon (Via CDN)

**CDN Link:**
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicon/devicon@latest/devicon.min.css">
```

**Mapeamento de Ícones:**

| Seção | Uso | Classe Devicon | Cor/Estilo |
|-------|-----|----------------|------------|
| Produtos - Botox | Precisão | `devicon-chrome-original` | Gradient gold |
| Produtos - Ácido Hialurónico | Volume/Preenchimento | `devicon-dropbox-original` | Gradient gold |
| Produtos - Bioestimuladores | Renovação | `devicon-slack-original` | Gradient gold |
| Benefícios - Qualidade | Certificação | `devicon-denojs-original` | White |
| Benefícios - Suporte | Comunicação | `devicon-confluence-original` | White |
| Benefícios - Formação | Educação | `devicon-embeddedc-plain` | White |
| Benefícios - Entrega | Velocidade | `devicon-fastapi-plain` | White |
| Processo - Steps | Fotografia dedicada (`curso-avancado.jpg`, `curso-tecnicas.jpg`, `curso-certificacao.jpg`) | — | Moldura circular 80x80 |
| Footer - Instagram | Social | `devicon-instagram-original` | White |
| Footer - Facebook | Social | `devicon-facebook-plain` | White |
| Footer - LinkedIn | Social | `devicon-linkedin-plain` | White |
| Footer - WhatsApp | Social | SVG inline custom (path fill `currentColor`) | Hover #25D366 |

**Sintaxe:**
```html
<i class="devicon-chrome-original"></i>
<!-- OU -->
<img src="https://cdn.jsdelivr.net/gh/devicon/devicon/icons/chrome/chrome-original.svg" alt="Ícone" width="64" height="64">
```

---

## 📊 Performance Budget

### Lighthouse Targets

- **Performance:** 95+
- **Accessibility:** 100
- **Best Practices:** 100
- **SEO:** 100

### Core Web Vitals

- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1

### Métricas Adicionais

- **FCP (First Contentful Paint):** < 1.8s
- **TTI (Time to Interactive):** < 3.8s
- **Speed Index:** < 3.4s
- **Total Blocking Time:** < 200ms

### Limites de Peso

- **HTML:** < 50KB (minified)
- **CSS:** < 100KB (minified, sem unused)
- **JavaScript:** < 150KB (minified + gzipped)
- **Imagens (total):** < 1MB
- **Total da página:** < 2MB

---

## 🛠️ JavaScript Funcionalidades

### 1. Mobile Navigation Toggle

```javascript
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show-menu');
  navToggle.classList.toggle('active');
});

// Close menu when clicking on nav link
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
    navToggle.classList.remove('active');
  });
});
```

---

### 2. Sticky Header on Scroll

```javascript
const header = document.getElementById('header');
const scrollThreshold = 100;

window.addEventListener('scroll', () => {
  if (window.scrollY >= scrollThreshold) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
});
```

---

### 3. Smooth Scroll

```javascript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
```

---

### 4. Active Section Highlighting

```javascript
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.nav__link[href*="${sectionId}"]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink?.classList.add('active-link');
    } else {
      navLink?.classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll', scrollActive);
```

---

### 5. FAQ Accordion

```javascript
const accordionItems = document.querySelectorAll('.faq__item');

accordionItems.forEach(item => {
  const question = item.querySelector('.faq__question');
  
  question.addEventListener('click', () => {
    const isOpen = item.classList.contains('active');
    
    // Close all items
    accordionItems.forEach(i => i.classList.remove('active'));
    
    // Open clicked item if it was closed
    if (!isOpen) {
      item.classList.add('active');
    }
  });
});
```

---

### 6. Testimonial Carousel

```javascript
const carousel = document.querySelector('.testimonials__carousel');
const slides = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.carousel__dot');
let currentSlide = 0;
let autoplayInterval;

function goToSlide(index) {
  currentSlide = index;
  carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
  
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  goToSlide(currentSlide);
}

function startAutoplay() {
  autoplayInterval = setInterval(nextSlide, 5000);
}

function stopAutoplay() {
  clearInterval(autoplayInterval);
}

// Dots navigation
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    goToSlide(index);
    stopAutoplay();
    startAutoplay();
  });
});

// Pause on hover
carousel.addEventListener('mouseenter', stopAutoplay);
carousel.addEventListener('mouseleave', startAutoplay);

// Start autoplay
startAutoplay();
```

---

### 7. Counter Animation

```javascript
const counters = document.querySelectorAll('.stat__number');

const animateCounter = (counter) => {
  const target = parseInt(counter.getAttribute('data-target'));
  const duration = 2000;
  const increment = target / (duration / 16);
  let current = 0;

  const updateCounter = () => {
    current += increment;
    if (current < target) {
      counter.textContent = Math.floor(current) + '+';
      requestAnimationFrame(updateCounter);
    } else {
      counter.textContent = target + '+';
    }
  };

  updateCounter();
};

// Trigger on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
      animateCounter(entry.target);
      entry.target.classList.add('animated');
    }
  });
});

counters.forEach(counter => observer.observe(counter));
```

---

### 8. Form Validation & Submit

```javascript
const form = document.getElementById('contact-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = new FormData(form);
  const submitBtn = form.querySelector('button[type="submit"]');
  
  // Disable button and show loading
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<span class="spinner"></span> A enviar...';
  
  // Simulate API call (substituir por endpoint real)
  try {
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Success message
    showMessage('Mensagem enviada com sucesso! Entraremos em contacto em breve.', 'success');
    form.reset();
  } catch (error) {
    showMessage('Erro ao enviar mensagem. Por favor, tente novamente.', 'error');
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = 'Enviar Mensagem';
  }
});

function showMessage(text, type) {
  const message = document.createElement('div');
  message.className = `form-message form-message--${type}`;
  message.textContent = text;
  form.appendChild(message);
  
  setTimeout(() => message.remove(), 5000);
}
```

---

## 🎨 Estilos Específicos

### Glassmorphism Effect

```css
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}
```

---

### Gradient Text

```css
.gradient-text {
  background: var(--gradient-gold);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

### Button Styles

```css
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  font-weight: var(--font-semibold);
  border-radius: 8px;
  transition: var(--transition-smooth);
  cursor: pointer;
  border: 2px solid transparent;
  text-decoration: none;
}

.btn--primary {
  background: var(--gradient-gold);
  color: var(--primary-black);
  box-shadow: var(--shadow-md);
}

.btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn--outline {
  background: transparent;
  border-color: var(--accent-gold);
  color: var(--accent-gold);
}

.btn--outline:hover {
  background: var(--accent-gold);
  color: var(--primary-black);
}

.btn--large {
  padding: 1.125rem 2.25rem;
  font-size: var(--text-lg);
}
```

---

### Card Hover Effect

```css
.card {
  transition: var(--transition-smooth);
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.card:hover .card__icon {
  transform: scale(1.1) rotate(5deg);
}
```

---

## 📝 Acessibilidade (a11y)

### Checklist

- ✅ Contraste mínimo 4.5:1 (WCAG AA)
- ✅ Todos os ícones com `aria-label` ou `alt`
- ✅ Foco visível em elementos interativos
- ✅ Navegação por teclado (Tab, Enter, Esc)
- ✅ Skip to content link
- ✅ ARIA roles em elementos dinâmicos
- ✅ Labels em inputs de formulário
- ✅ Estados de erro descritivos
- ✅ Textos descritivos em links ("Saiba Mais sobre Botox" vs. "Clique Aqui")

---

### Skip to Content

```html
<a href="#main-content" class="skip-to-content">Saltar para o conteúdo principal</a>

<style>
.skip-to-content {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--accent-gold);
  color: var(--primary-black);
  padding: 8px 16px;
  z-index: 100;
  transition: top 0.3s;
}

.skip-to-content:focus {
  top: 0;
}
</style>
```

---

### ARIA Attributes

```html
<!-- Mobile Menu Toggle -->
<button 
  class="nav__toggle" 
  id="nav-toggle"
  aria-label="Abrir menu de navegação"
  aria-expanded="false"
  aria-controls="nav-menu"
>

<!-- Accordion -->
<button 
  class="faq__question"
  aria-expanded="false"
  aria-controls="faq-answer-1"
>

<!-- Carousel -->
<div 
  class="testimonials__carousel"
  role="region"
  aria-label="Testemunhos de clientes"
>
```

---

## 🚀 Deployment Checklist

### Antes de Publicar

- [ ] Testar em Chrome, Firefox, Safari, Edge
- [ ] Testar em dispositivos móveis (iOS + Android)
- [ ] Validar HTML (W3C Validator)
- [ ] Validar CSS
- [ ] Testar todos os links
- [ ] Testar formulário de contacto
- [ ] Verificar velocidade (Lighthouse)
- [ ] Verificar SEO (Lighthouse)
- [ ] Verificar acessibilidade (Lighthouse + axe DevTools)
- [ ] Comprimir todas as imagens
- [ ] Minificar CSS e JS
- [ ] Configurar .htaccess ou nginx.conf
- [ ] Configurar SSL (HTTPS)
- [ ] Adicionar robots.txt
- [ ] Adicionar sitemap.xml
- [ ] Configurar Google Analytics (se aplicável)
- [ ] Configurar Google Search Console
- [ ] Testar Open Graph (Facebook Debugger)
- [ ] Testar Twitter Cards (Card Validator)

---

### robots.txt

```
User-agent: *
Allow: /
Sitemap: https://innova.pt/sitemap.xml
```

---

### sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://innova.pt/</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

---

## 📋 Prompts para Claude Code (VSCode)

### Prompt 1: Estrutura Inicial

```
Cria a estrutura completa de pastas para o projeto INNOVA conforme especificado no agents.md. 

Cria o arquivo index.html com:
- Estrutura HTML5 semântica completa
- Todas as meta tags SEO
- Links para Devicon CDN
- Structured Data (JSON-LD)
- Todas as seções conforme especificado (Hero, Produtos, Benefícios, Processo, Testemunhos, FAQ, CTA Final, Contacto, Footer)
- Utiliza os ícones Devicon conforme o mapeamento fornecido
- Adiciona atributos data-aos para animações
- Implementa lazy loading nas imagens abaixo do fold

Garante acessibilidade (ARIA labels, alt texts descritivos, skip to content).
```

---

### Prompt 2: CSS Principal

```
Cria o arquivo assets/css/main.css com todos os estilos da landing page INNOVA.

Inclui:
- Design System completo (variáveis CSS conforme especificado)
- Estilos mobile-first responsivos (breakpoints: 640px, 768px, 1024px, 1280px)
- Estilização de todas as seções (Hero, Produtos, Benefícios, etc.)
- Glassmorphism effects
- Gradient text utilities
- Button styles (primary, outline, large)
- Card hover effects
- Form styling
- Footer styling
- Smooth transitions em todos os elementos interativos
- Otimizações de performance (will-change, contain, etc.)

Usa nomenclatura BEM para classes CSS.
Garante contraste acessível (WCAG AA).
```

---

### Prompt 3: CSS Crítico

```
Extrai o CSS crítico (above-the-fold) do main.css e cria o arquivo assets/css/critical.css.

Deve incluir apenas:
- Reset/normalize
- Variáveis CSS essenciais
- Header/Navigation styles
- Hero section styles
- Fontes (font-display: swap)
- Loading skeleton
- Utilities críticos

Minifica o CSS crítico para inline no HTML.
```

---

### Prompt 4: JavaScript Principal

```
Cria o arquivo assets/js/main.js com todas as funcionalidades JavaScript.

Implementa:
1. Mobile navigation toggle (hamburger menu)
2. Sticky header on scroll
3. Smooth scroll para links âncora
4. Active section highlighting na navegação
5. FAQ accordion
6. Testimonial carousel (com autoplay, pause on hover, dots navigation)
7. Counter animation para stats do hero
8. Form validation e submit handler

Usa JavaScript vanilla (sem dependências).
Garante performance (debounce/throttle onde necessário).
Adiciona comentários explicativos.
```

---

### Prompt 5: Lazy Loading

```
Cria o arquivo assets/js/lazy-load.js para implementar lazy loading otimizado.

Implementa:
1. Lazy loading de imagens com Intersection Observer
2. Blur-up effect (transição suave de placeholder para imagem real)
3. Loading skeleton enquanto imagem carrega
4. Fallback para browsers sem suporte a Intersection Observer
5. Preload de imagens críticas (hero)

Adiciona classes CSS necessárias (lazy-img, loaded, loading).
```

---

### Prompt 6: Otimização de Imagens

```
Cria um script Node.js (optimize-images.js) que:
1. Converte imagens JPG/PNG para WebP
2. Cria versões responsivas (mobile: 768px, tablet: 1024px, desktop: 1920px)
3. Comprime imagens mantendo qualidade (80-85%)
4. Salva versões otimizadas em assets/images/optimized/

Usa a biblioteca sharp.
Inclui instruções de uso no README.md.
```

---

### Prompt 7: .htaccess

```
Cria o arquivo .htaccess para servidor Apache com:
1. Gzip compression para HTML, CSS, JS, SVG
2. Browser caching (imagens: 1 ano, CSS/JS: 1 mês)
3. Redirect HTTP para HTTPS
4. Proteção contra hotlinking de imagens
5. Otimizações de performance

Adiciona comentários explicativos.
```

---

### Prompt 8: README.md

```
Cria um README.md profissional com:
1. Descrição do projeto INNOVA
2. Features principais
3. Estrutura de pastas
4. Como instalar e rodar localmente
5. Como otimizar imagens (instruções do script)
6. Deployment checklist
7. Performance metrics alcançadas
8. Tecnologias utilizadas
9. Browser support
10. Créditos

Usa Markdown com badges (Lighthouse scores, etc.).
```

---

### Prompt 9: Testes e Validação

```
Cria um arquivo de testes checklist.md que inclui:
1. Testes de responsividade (breakpoints)
2. Testes de performance (Lighthouse targets)
3. Testes de acessibilidade (WCAG AA)
4. Testes de SEO (meta tags, structured data)
5. Testes de funcionalidades (formulário, carousel, etc.)
6. Testes cross-browser
7. Validação HTML/CSS (W3C)

Para cada item, inclui:
- [ ] Checkbox para marcar
- Ferramenta recomendada
- Target/esperado
```

---

### Prompt 10: Ajustes Finais

```
Revisa todo o código do projeto INNOVA e:
1. Minifica HTML, CSS, JS (cria versões .min)
2. Remove console.logs de debug
3. Verifica todos os links e imagens
4. Garante que todos os ícones Devicon estão corretos
5. Valida HTML/CSS (corrige erros)
6. Otimiza ordem de carregamento de recursos
7. Adiciona comentários onde necessário
8. Garante compatibilidade com IE11+ (se solicitado)

Cria um arquivo CHANGELOG.md documentando versões.
```

---

## 🎯 Notas Finais

### Filosofia do Projeto

**Premium & Minimalista:**
- Espaços amplos (breathing room)
- Tipografia elegante
- Paleta restrita (preto, branco, dourado)
- Animações sutis (não exageradas)
- Foco na mensagem e conversão

**Performance-First:**
- Cada byte conta
- Lazy loading agressivo
- CSS crítico inline
- JavaScript mínimo
- Imagens ultra-otimizadas

**Conversão-Driven:**
- CTAs claros e destacados
- Social proof estrategicamente posicionado
- FAQ para eliminar objeções
- Formulário simples (baixo atrito)
- Mobile-first (maioria do tráfego)

---

### Extensões VSCode Recomendadas

- **Claude Dev** (para usar este agents.md)
- **Prettier** (formatação de código)
- **ESLint** (linting JavaScript)
- **Live Server** (preview local)
- **Image Optimizer** (comprimir imagens)
- **Auto Rename Tag** (produtividade HTML)
- **CSS Peek** (navegar entre CSS/HTML)

---

### Referências de Design

**Inspiração:**
- Apple.com (minimalismo premium)
- Stripe.com (clareza e conversão)
- Linear.app (animações sutis)
- Vercel.com (performance e elegância)

**Cores Gold Luxury:**
- #d4af37 (Classic Gold)
- #f4e4b8 (Champagne)
- #b8941f (Dark Gold)

---

## ✅ Lighthouse Target Breakdown

### Performance (95+)
- FCP < 1.8s
- LCP < 2.5s
- CLS < 0.1
- Speed Index < 3.4s

### Accessibility (100)
- Contraste adequado
- ARIA labels
- Foco visível
- Alt texts

### Best Practices (100)
- HTTPS
- Sem erros no console
- Imagens com dimensões
- Recursos de terceiros otimizados

### SEO (100)
- Meta description
- Headings hierarchy
- Links crawláveis
- Mobile-friendly

---

**Este agents.md está pronto para uso com Claude Code no VSCode!**

Copie este arquivo para a raiz do seu projeto e use os prompts sequenciais para construir a landing page INNOVA completa. 🚀

**Boa sorte com o projeto! 💛**
