# 🎯 INNOVA - Landing Page Premium | Agents Guide · Lumen Edition

> Versão “Lumen Edition” — repaginação autoral inspirada em editoriais de cosmética high-end, mantendo o DNA INNOVA e afastando-se do layout de referência.

### Status rápido
- ✅ Arquitetura de navegação revista (header minimalista + flyout).  
- ✅ Hero “Precision Ritual” com storytelling modular + métricas animadas.  
- ✅ Seção “Signature Range” com cards facetados e badges translúcidas.  
- ✅ “Luxe Academy” alinhada ao novo grid 12 colunas responsivo.  
- 🚧 Prioridades imediatas:
  1. Montar `critical.css` com o novo recorte (header + hero + flyout CTA).
  2. Produzir variações WebP/AVIF nas proporções definidas (hero/processo/cursos).
  3. Ajustar AOS/Intersection Observer segundo os novos delays (120/220/320ms).
  4. Documentar checklist QA em `checklist.md` cobrindo responsividade, a11y e SEO.
  5. Propagar dados de portfólio (HA, bioestimuladores, fios, aparatologia) para copy de produtos e CTAs.

### Progresso por fases
- **Fase 0 — Discovery & Arquitetura:** ✅ inventário completo dos produtos em `innova.md`, definição de slugs/rotas e convenção de pastas (landing, hubs por categoria, páginas individuais).  
- **Fase 1 — Fundamentos visuais (em curso):** ✅ atualização do design system (tokens Lumen), header sticky com flyout consultivo, hero “Precision Ritual” com métricas reais e novas imagens. Próximo na fase: aplicar o mesmo estilo às demais seções da landing e garantir responsividade total.  
- **Fases seguintes:**  
  - **Fase 2:** Landing principal completa (Signature Range, Innova Standard, Partnership Flow, Luxe Academy, Testemunhos, FAQ, CTA final, Contacto) com copy atualizada.  
  - **Fase 3:** Hubs de categoria (`produtos/<categoria>/index.html`) com cards e filtros básicos.  
  - **Fase 4:** Páginas individuais para todos os produtos listados em `innova.md` (estrutura de specs, aplicações, preços, CTAs).  
  - **Fase 5:** Conteúdo suplementar (Sobre, Formações detalhadas, Recursos/Downloads).  
  - **Fase 6:** Otimizações (critical CSS, lazyload, minificação, checklist QA).  
  - **Fase 7:** Documentação final, changelog e preparação de deploy.

---

## 📋 Visão Geral

**Cliente:** INNOVA  
**Segmento:** Medicina Estética Premium (B2B)  
**Localização:** Portugal  
**Slogan:** “PRECISION. HARMONY. BEAUTY.”  
**Meta:** Landing page editorial, luxuosa e veloz, otimizando conversões para profissionais de estética.

### Identidade e posicionamento
- **Missão:** elevar o padrão da medicina estética com produtos exclusivos, técnicas inovadoras e soluções de excelência sustentadas por evidência científica.  
- **Experiência:** mais de 15 anos de atuação através da Exaktus, cultivando relações de confiança com clínicas e especialistas.  
- **Oferta:** representação oficial de marcas internacionais, tecnologias testadas e protocolos completos focados em resultados mensuráveis.  
- **Visão:** consolidar-se como referência em inovação, confiança e crescimento sustentável para profissionais de estética.  
- **Valores-chave:** precisão clínica, harmonia estética, suporte consultivo contínuo e curadoria rigorosa de portfólio.

---

## 🗂 Estrutura de Pastas

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
│   │   ├── hero/ (hero-desktop.webp, hero-tablet.webp, hero-mobile.webp)
│   │   ├── rituals/ (process-step1.webp …)
│   │   └── academy/
│   └── icons/
├── checklist.md
├── vercel.json
└── README.md
```

---

## 🎨 Design System (Lumen Tokens)

### Paleta cromática

```css
:root {
  /* Base */
  --obsidian-900: #0b0d12;
  --slate-700:   #1c2029;
  --slate-400:   #3f4452;
  --porcelain-50:#f6f4ef;

  /* Lux accents */
  --champagne-300: #d8c49a;
  --champagne-200: #eadcc0;
  --noir-void: #050608;

  /* Modern glow */
  --emerald-300: #3cbcad;
  --lumen-blue:  #5c7ae5;

  /* Feedback */
  --success-500: #3cbf8a;
  --alert-500:   #d2745b;

  /* Gradients */
  --gradient-obsidian: linear-gradient(140deg, #0b0d12 0%, #171b27 100%);
  --gradient-gilded:   linear-gradient(130deg, #d8c49a 0%, #f1e6cd 100%);
  --gradient-emerald:  linear-gradient(135deg, rgba(60,188,173,0.18), rgba(92,122,229,0.14));

  /* Shadows */
  --shadow-soft: 0 22px 60px rgba(5, 7, 13, 0.35);
  --shadow-card: 0 16px 45px rgba(11, 13, 18, 0.22);
  --shadow-float:0 32px 70px rgba(11, 13, 18, 0.45);

  /* Radii */
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 24px;
  --radius-pill: 999px;
}
```

### Tipografia

| Token           | Fonte (com fallback)                                         | Uso                             |
|-----------------|---------------------------------------------------------------|---------------------------------|
| `--font-primary`| `"Manrope", "Inter", -apple-system, BlinkMacSystemFont, sans-serif` | Headlines/Hero (letter-spacing -0.02em) |
| `--font-body`   | `"General Sans", "Inter", "Segoe UI", sans-serif`             | Texto corrido e cards           |
| `--font-display`| `"Playfair Display", "Times New Roman", serif`                | Palavras-chave destacadas       |

**Escala tipográfica**

```css
--fs-12: 0.75rem;
--fs-14: 0.875rem;
--fs-16: 1rem;
--fs-18: 1.125rem;
--fs-20: 1.25rem;
--fs-24: 1.5rem;
--fs-32: 2rem;
--fs-40: 2.5rem;
--fs-56: 3.5rem;
--fs-72: 4.5rem;
--fs-96: 6rem;

--fw-regular: 400;
--fw-medium: 500;
--fw-semibold: 600;
--fw-bold: 700;
```

### Espaçamento & Grid

```css
--space-2: 0.5rem;
--space-4: 1rem;
--space-6: 1.5rem;
--space-8: 2rem;
--space-12: 3rem;
--space-16: 4rem;
--space-20: 5rem;
--space-24: 6rem;

--container-max: 1280px;
--gutter: clamp(1.5rem, 5vw, 3.5rem);
--grid-columns: 12;
--grid-gap: clamp(1.25rem, 2vw, 2.5rem);
```

### Component tokens
- **Card base:** background `rgba(12,15,22,0.72)` sobrelays, blur 24px, bordas 1px `rgba(255,255,255,0.08)` e radius md.  
- **Highlight badge:** píldora `--radius-pill`, gradient `--gradient-emerald`, texto uppercase `--fs-12`.  
- **Button solid:** background `--gradient-gilded`, texto obsidian, letter-spacing `0.08em`, hover → y:-4px + sombra `--shadow-float`.  
- **Button outline:** borda `rgba(216,196,154,0.6)`, texto champagne, background `transparent`; hover → background `rgba(216,196,154,0.15)`.  
- **Icon container:** 64px, radius 18px, background translúcido `rgba(92,122,229,0.08)`.

---

## 🧴 Portfólio Estratégico INNOVA (resumo comercial)

- **Ácido Hialurónico:** linhas Rennova® (Fill, Lift e Lift Plus Lido — 23‑25 mg/mL, 12‑18 meses) e Reyoungel® (Fine Lines, Derm, Derm Deep, Derm Plus, Sub Skin — versões 1 mL, 1,5 mL, 2 mL; lifting de baixo a alto). Posicionamento por indicação (linhas finas, volumização profunda, corporal), com tickets entre 60 € e 85 € + IVA.
- **Bioestimuladores:** PLLA Rennova® Elleva (210 mg) e Elleva X (630 mg) com reconstituição acelerada (1 h) e kits com água bidestilada; CaHA Burgeon® Calhydra (blend HA + CaHA) e Novuma®; Radiesse® 1,5 mL (Merz) e Dexlevo® Gouri (PCL solúvel). Protocolos cobrem face, pescoço e corporal com durabilidade até 24 meses.
- **Skinboosters:** VliftPro® Elastica Hydroboost (HA híbrido + peptídeos), Profhilo® 2 mL e Profhilo® Body 6 mL (tecnologia NAHYCO®). Posições para hidratação estrutural, flacidez corporal e tratamentos combinados.
- **Fios PDO e COG:** VliftPro® (Mono, Genesis, Cones, Nose, Screw, Tensio, Bio Cannula) e Magicalift® (Mono, Double Screw, Cog 6D). Portfolio cobre suportes faciais, lifting nasal e reforço periocular com ranges de 17,50 € a 200 € + IVA por kit.
- **Mesoterapia & Injetáveis funcionais:** cocktails lipolíticos, anti-aging, PDRN + HA, enzimas (Lipase, N-Zymes), eye contour e protocolos corporais com volumes 5×10 mL; preços médios 50 €–150 € + IVA.
- **Peelings Profissionais:** Skinderma® (Azelaic, Tranexamic, Lactic, Jessner, Glutathione) e neutralizador 200 mL. Direcionamento para acne, hiperpigmentação, fotoenvelhecimento.
- **Cosméticos & Homecare:** linha Skinderma® (limpeza, tónicos, SPF 50+ em versões oil‑free e com cor, cremes antiaging). Kits híbridos para pré e pós-procedimento entre 14 € e 39 € + IVA.
- **Agulhas & Cânulas:** kits Magicalift® com 18G–30G, combinações flexíveis para preenchimento; preço único 85 € + IVA por set, além de opções individuais (agulhas 40×0,8 a 34G 4 mm).
- **Aparatologia & Acessórios:** Auto Microneedle System (Magicalift e PBSerum), Rennova® Mixer, dermarollers, Hilotherm® (clinic/homecare), centrífugas Hettich®, kits Vacuette®. Investimentos de 22 € a 5 900 € + IVA para suportar protocolos avançados.

---

## 🧭 Blueprint de Página

### 1. Header · “Floating Capsule”
- Barra utilitária (altura 36px) com mensagem rotativa e link de contacto.  
- Header principal com layout 3 colunas: logotipo à esquerda, nav centrado (5 itens), CTA “Solicitar Portfólio” à direita.  
- No scroll (>96px), reduz altura, aplica blur `backdrop-filter: blur(18px)` e borda inferior `rgba(255,255,255,0.08)`.  
- Menu mobile expande painel lateral (70% viewport) com índices numerados e CTA fixo.

### 2. Hero · “Precision Ritual”
- Grid 12 colunas:  
  - Colunas 1-7 → copy: eyebrow “Excelência científica”, título quebrado em 3 linhas com destaque no gradiente dourado, parágrafo 2 linhas + lista de bullet insights.  
  - Colunas 8-12 → imagem hero (retrato 4:5 com fundo soft light) sobre base translúcida, contornada com linha dourada suave.  
- Dois CTA lado a lado: “Explorar Linha Signature” (primário) + “Agendar Consultoria” (outline).  
- Métricas (Anos, Clínicas, Índice de satisfação) em cápsulas sobrepostas ao rodapé do hero (cards 160x160).  
- Background mistura `--gradient-obsidian` + textura ruído leve (PNG 4kb).

### 3. Seção “Signature Range”
- Título alinhado à esquerda com label “Catálogo Selecionado”.  
- Cards facetados dispostos em grid 3x1 (desktop), 1x deslize (mobile).  
- Cada card:
  - Ícone abstract (SVG linear) dentro de container translúcido.  
  - Nome do produto + subtítulo breve.  
  - Lista de 3 benefícios com ícone chevron.  
  - Footnote com textura micropattern `mask-image`.  
  - CTA texto “Ficha técnica →” com underline animado.
- Card central adota destaque: borda externa gold + brilho suave.

### 4. Seção “Innova Standard” (Diferenciais)
- Fundo `--gradient-emerald` em baixa opacidade.  
- Layout 2 colunas:  
  - Coluna esquerda → manifesto + linha do tempo vertical (4 checkpoints).  
  - Coluna direita → cartões glass com ícones (certificação, suporte, laboratório, logística) formando matriz 2x2.

### 5. Seção “Partnership Flow”
- Timeline horizontal (desktop) / stacked (mobile) com 4 etapas: Discovery → Seleção → Implementação → Evolução.  
- Cada etapa: foto circular 88px, número grande outlined, breve parágrafo e micro CTA “Detalhar processo”.  
- Linha conectando utiliza gradiente dinâmico que se anima quando seção entra no viewport.

### 6. “Luxe Academy” (Formações)
- Grid 12 colunas assimétrico:  
  - **Card Masterclass (col 1-7):** fundo `--gradient-obsidian`, imagem vertical full-height nas colunas 5-7 com máscara diagonal, copy à esquerda com highlights (carga horária, formato, mentoring).  
  - **Card Atelier (col 8-12):** layout vertical com ribbon “Mais procurado”, bloco de dados (Módulos, Hands-on, Vagas).  
  - **Card Immersive (col 8-12 subgrid):** gradient dourado + overlay glass, lista cronológica de agenda, CTA “Reservar mentoria”.  
- Animações AOS escalonadas: masterclass 120ms, atelier 220ms, immersive 320ms.

### 7. “Voices from the Field” (Testemunhos)
- Carousel 3 itens (Swiper) com cards 340px: quote em serif display, foto ou iniciais, rating em linhas minimalistas.  
- Auto-play 6s, pausa on hover, arraste mobile.  
- Dots substituídos por barra de progresso segmentada ao rodapé do slider.

### 8. FAQ · “Perguntas Essenciais”
- Accordion full-width, itens com borda `rgba(216,196,154,0.2)` e ícone “+” rotativo.  
- Item aberto recebe background `rgba(12,13,18,0.6)` e marcador dourado.  
- Conteúdo em texto curto, parágrafos de 2 linhas.

### 9. CTA Final · “Ready to Elevate?”
- Seção com background `--gradient-gilded`, texto em obsidian e micro ícones giratórios (SVG 24px).  
- Título centralizado `--fs-40`, subheadline `--fs-18`.  
- CTA principal (“Solicitar Orçamento Agora”) + link secundário “Ver catálogos PDF”.

### 10. Contacto · “Precision Concierge”
- Grid 2 colunas ≥1024px:  
  - Lado esquerdo: informações de morada, telefones, horários, social proof (ícones devicon estilizados).  
  - Lado direito: formulário com campos flutuantes, select custom e checkbox com copy legal friendly.  
- Feedback inline (verde/vermelho) e mensagem final com transição fade.

### 11. Footer
- Estrutura em 3 níveis:  
  1. **Newsletter strip** com CTA “Entrar no Beauty Circle” (form inline + consent).  
  2. **Footer principal** 4 colunas (Logo + manifesto, Navegação, Produtos, Contactos & Social).  
  3. **Barra legal** com direitos e menção “Desenvolvido com 💛 em Portugal”.  
- Ícones sociais com efeito glow dourado no hover.

---

## 🖼️ Imagens & Iconografia
- **Hero:** fotografia editorial (produto ou profissional) com iluminação lateral, formato 4:5, desaturação leve (-10%).  
- **Produtos:** renders sobre bases escuras, sombras suaves gaussian 24px, export em 1600px (desktop), 1024px (tablet), 768px (mobile).  
- **Processo:** fotos reais 1:1 com máscara circular 88px, borda dupla (porcelain + champagne).  
- **Academy:** capturas 3:4, foco em ambiente premium.  
- **Ícones:** Devicon + SVGs autorais lineares, sempre com `stroke` 1.5px e `stroke-linecap="round"`.

**Uso no HTML** (exemplo hero):

```html
<picture>
  <source srcset="assets/images/hero/hero-desktop.webp" media="(min-width: 1280px)" type="image/webp">
  <source srcset="assets/images/hero/hero-tablet.webp" media="(min-width: 768px)" type="image/webp">
  <img src="assets/images/hero/hero-mobile.jpg" alt="Profissional INNOVA aplicando tratamento" width="960" height="1200" loading="eager">
</picture>
```

---

## 🎛️ Interações & Animações
- **Scroll reveal:** Intersection Observer custom com classes `is-visible`. Sequência: hero copy (0ms), hero métricas (120ms), signature cards (80ms entre si).  
- **Hover states:** cards sobem `translateY(-6px)`, sombra intensifica, ícone rotaciona 6°.  
- **Nav highlight:** indicador dourado flutuante segue item ativo via `clip-path`.  
- **FAQ accordion:** altura animada via `max-height` + `transition: max-height 0.35s ease`.  
- **Counters:** animar com `requestAnimationFrame`, append `+` apenas em final.  
- **Form submit:** botão exibe spinner minimalista (bordas semi-transparentes) com transição `opacity`.

Bibliotecas sugeridas:
- Swiper (carousel testemunhos).
- AOS ou animações próprias (preferível usar custom IO para redução de dependências).
- GSAP opcional para hero se performance mantida.

---

## 📱 Responsividade

| Breakpoint | Variável            | Uso principal                                        |
|------------|--------------------|-------------------------------------------------------|
| ≥1536px    | `--bp-2xl` (extra) | Ajuste hero, grids com máximo 12 colunas preenchidas |
| ≥1280px    | `--bp-xl`          | Layout desktop padrão                                |
| ≥1024px    | `--bp-lg`          | Timeline horizontal, formulário 2 colunas            |
| ≥768px     | `--bp-md`          | Cards 2 colunas, hero 60/40                           |
| ≥640px     | `--bp-sm`          | Ajuste tipografia, nav mobile com 2 colunas           |
| <640px     | base               | Stack vertical, slider full-width                     |

**Mobile-first**: iniciar com colunas 1fr, aplicar `grid-template-columns` nos breakpoints.

---

## ⚙️ Performance & Implementação
1. **Critical CSS**: header + hero + nav + CTA principal inline; restante via `preload` e troca para `rel="stylesheet"` após `onload`.  
2. **Lazy-load**: imagens fora do viewport com `loading="lazy"` + script de fallback para Safari iOS antigo.  
3. **Fontes**: `preconnect` Google Fonts / `font-display: swap`. Considerar self-host (woff2).  
4. **JS**: separar `main.js` (interações) e `lazy-load.js` (IO + imagens).  
5. **Cache**: `.htaccess` ou headers Vercel para caching estático agressivo (fonts 1 ano, imagens 1 ano, CSS/JS 1 mês).  
6. **Minificação**: automatizar via npm scripts (esbuild/Terser + cssnano).  
7. **Core Web Vitals alvo**:
   - LCP < 2.4s  
   - FID < 80ms  
   - CLS < 0.08  
   - TTI < 3.2s

---

## ✍️ Conteúdo & Voz
- **Tom:** consultivo, sofisticado, confiante.  
- **Headlines:** curtas (máx. 3 palavras por linha), com verbo ativo.  
- **Parágrafos:** 2-3 linhas, foco em benefícios tangíveis.  
- **Microcopy:** CTA com verbos “Explorar”, “Agendar”, “Reservar”, “Descobrir”.  
- **Testemunhos:** aspas reais ou inicial do nome quando sem foto, manter credenciais (cidade/posição).  
- **FAQ:** respostas objetivas, evitar jargões técnicos sem explicação.

---

## ♿ Acessibilidade
- Contraste mínimo 4.5:1 (verificar combinações ouro/branco).  
- Focus ring personalizado (`outline: 2px solid rgba(92,122,229,0.8)`).  
- Navegação de teclado priorizada (menu burger, acordeões).  
- `aria-expanded`, `aria-controls` em todos os toggles.  
- Imagens decorativas com `role="presentation"` ou `aria-hidden="true"`.  
- Validar com Lighthouse + axe DevTools.

---

## 🔧 Prompts para agentes & automações

### Prompt 1 – Hero
```
Constrói o hero “Precision Ritual” com:
- Eyebrow + título multiline (destaque dourado na palavra central).
- Parágrafo 2 linhas + bullets (3 itens).
- CTA duplo (solid + outline).
- Métricas em cápsulas sobrepostas no rodapé.
- Coluna direita com picture responsive (webp + fallback).
```

### Prompt 2 – Signature Range
```
Gera grid de 3 cards facetados com classes:
- .signature-card
- .signature-card--featured
Inclui ícone SVG inline, badge “novo”, lista de 3 benefícios, CTA texto com underline animado.
```

### Prompt 3 – Innova Standard
```
Implementa seção com manifesto + timeline vertical à esquerda e 4 stickers glass à direita.
Cada sticker: ícone devicon, título, texto curto.
```

### Prompt 4 – Partnership Flow
```
Cria timeline horizontal com 4 passos:
- Foto circular (picture).
- Número outline, título curto, parágrafo.
- Micro CTA (link seta).
No mobile (≤768px) virar stack.
```

### Prompt 5 – Luxe Academy
```
Monta grid 12 colunas:
- Card masterclass (col 1-7) com imagem mascarada e highlights.
- Card atelier (col 8-12) com ribbon e métricas.
- Card immersive (col 8-12, subgrid) com agenda bullet e CTA primário.
```

### Prompt 6 – Testemunhos
```
Configura Swiper com 3 slides simultâneos (desktop), autoplay 6s, progress bar custom.
Cada card inclui quote serif, rating 5 ícones, nome + cargo.
```

### Prompt 7 – FAQ
```
Cria accordion acessível com 6 perguntas.
Botão com ícone +/− rotativo, conteúdo com transition.
```

### Prompt 8 – CTA Final & Contacto
```
Entrega seções finais:
1. CTA “Ready to Elevate?” com background gradient-gilded e CTA duplo.
2. Contacto 2 colunas: info estática + formulário validado (HTML5 + mensagens inline).
```

### Prompt 9 – Performance pass
```
Otimiza assets:
- Extrai critical CSS (header, hero, nav).
- Implementa preload/preconnect.
- Configura lazy-load via Intersection Observer.
- Atualiza scripts minificados.
```

### Prompt 10 – QA Checklist
```
Gera checklist.md com blocos:
- Responsividade (breakpoints)
- Performance (CWV)
- Acessibilidade
- SEO
- Funcionalidades
- Cross-browser
- Validações W3C
Cada item com checkbox, ferramenta sugerida e meta alvo.
```

---

## ✅ QA Targets (resumo)
- **Lighthouse:** Perf 95+, A11y 100, BP 100, SEO 100.  
- **Peso total página:** < 1.8 MB, imagens < 900 KB, JS < 140 KB.  
- **Requests críticos:** ≤ 18 na primeira dobra.  
- **Tempo build:** considerar pipeline (minify, imagemin, webp).

---

## 🔚 Notas Finais
- Priorizar sensação “lounge premium”: escuro elegante, texturas sutis, animações lentas.  
- Evitar replicar grid/padrões da referência — usar diagonais, cards facetados, badges translúcidas para diferenciação.  
- Toda copy deve reforçar precisão científica + suporte humano.  
- Mantenha documentação sincronizada com `README.md` após alterações relevantes.  
- Utilize este guia como base para tarefas automatizadas (Claude, Copilot, etc.) garantindo consistência visual e técnica.
