# 🎯 INNOVA Landing – Agent Handbook (Lumen Edition)

> Documento mestre para agentes humanos ou IA retomarem o projeto sem perda de contexto. Leia integralmente antes de atuar.

---

## 1. Panorâmica do Projeto

| Item | Detalhes |
| --- | --- |
| **Cliente** | INNOVA – Medicina Estética Premium (B2B) |
| **Objetivo** | Landing page editorial, luxuosa e rápida, convertendo profissionais de estética em leads qualificados |
| **Lema** | “PRECISION. HARMONY. BEAUTY.” |
| **Mercado** | Portugal (content em PT-PT) |
| **Entrega final** | Landing completa + hubs por categoria + fichas individuais de produto + documentação e QA |

### Missão da experiência digital
- Evidenciar curadoria científica, suporte consultivo e luxo discreto.
- Conectar portefólio extenso (injectáveis, fios, aparatologia, cosméticos) à jornada de clínicas/parceiros.
- Garantir performance (CWV), acessibilidade AA e SEO corporativo.

### ⚠️ REBUILD V2.0 – Janeiro 2025

**IMPORTANTE**: O projeto foi completamente reconstruído do zero devido a problemas com a paleta de cores original (excesso de fundos escuros e dourados). A nova versão segue rigorosamente o esquema **branco/preto/cinza** sem acentos coloridos.

**Arquivos ativos (V2.0 Refined)**:
- `index.html` – Landing completa com 10 seções (690 linhas)
- `assets/css/style-refined.css` – Design system puro white/black/gray (1100+ linhas)
- `assets/js/main-refined.js` – Funcionalidades interativas (280 linhas)

**Backups preservados**:
- `index_backup_dark.html` + `main_backup_dark.css` – Versão original dark theme
- `index_v1_basic.html` – Primeira versão limpa (básica)
- `main-clean.js` – Versão básica do JavaScript

**Roadmap de melhorias**: Consultar `ROADMAP-REFINAMENTO.md` para plano detalhado de implementação em 5 fases baseado em análise do mesoestetic.pt.

### Stack & Estrutura (V2.0)
```
innova-landing/
├── index.html                          # landing V2.0 refined (ATIVO)
├── index_backup_dark.html              # backup versão dark theme
├── index_v1_basic.html                 # backup versão básica
├── ROADMAP-REFINAMENTO.md              # plano de melhorias detalhado
├── assets/
│   ├── css/
│   │   ├── style-refined.css           # ATIVO - design system V2.0
│   │   └── main_backup_dark.css        # backup dark theme
│   ├── js/
│   │   ├── main-refined.js             # ATIVO - funcionalidades V2.0
│   │   └── main-clean.js               # versão básica
│   ├── images/                         # imagens originais + variações
│   └── icons/
├── checklist.md                        # checklist QA
├── innova.md                           # inventário comercial
├── README.md                           # instruções gerais
└── agents.md                           # ESTE DOCUMENTO
```

Dependências externas (V2.0):
- **Font**: Inter (Google Fonts) – família única para todo o projeto
- **Vanilla JavaScript** – sem dependências externas, tudo nativo
- **Intersection Observer API** – para animações on scroll
- **Future**: Swiper.js será adicionado na Fase 2 para carrosseis

---

## 2. Diretrizes de Design V2.0 (White & Black Edition)

> **⚠️ MUDANÇA IMPORTANTE V2.0**: Paleta de cores foi completamente reformulada. Versão anterior (Lumen Edition) usava dourados/champagne/emerald - **DESCONTINUADA**. Nova versão usa exclusivamente branco/preto/cinza. Para tokens atualizados, consultar `assets/css/style-refined.css`.

### Inspiração & Referências
- **Mesoestetic.pt**: Design clean, minimalista, com hierarquia clara usando apenas escala de cinza
- **Screenshots analisados** (4 imagens fornecidas em 2025-01):
  1. Hero com carousel de produtos e imagens lifestyle
  2. Seção magazine/blog editorial
  3. Best sellers com sistema de tabs
  4. Barra de categorias com ícones + grid lifestyle
- **Ver detalhes**: `ROADMAP-REFINAMENTO.md` contém análise completa e plano de implementação em 5 fases

### Princípios gerais
1. **Paleta base branco & preto** – fundo predominantemente claro (`#f6f4ef` / branco) com tipografia preta/cinza profundo. Usar blocos escuros apenas quando necessário (hero, highlights, glass cards).
2. **Contraste e luxo** – contraste mínimo 4.5:1; dourados/emerald usados apenas como acento. Evitar excesso de cor.
3. **Tipografia elegante & legível** – títulos com Manrope (tight tracking), destaques com Playfair Display, corpo com General Sans/Inter.
4. **Texturas e vidro** – usar glassmorphism leve (rgba escuro com blur) para cápsulas, badges, cards.
5. **Animações suaves** – delays escalonados 120 ms / 220 ms / 320 ms; transições lentas, sofisticadas.

### Tokens principais (`main.css`)
```css
:root {
  /* Neutros */
  --obsidian-900: #0b0d12;
  --slate-700: #1c2029;
  --slate-500: #3f4452;
  --porcelain-100: #f6f4ef;
  --porcelain-50: #f9f7f2;

  /* Acentos */
  --champagne-300: #d8c49a;
  --champagne-200: #eadcc0;
  --emerald-300: #3cbcad;
  --lumen-blue: #5c7ae5;

  /* Gradientes */
  --gradient-obsidian: linear-gradient(140deg, #0b0d12 0%, #171b27 100%);
  --gradient-gilded: linear-gradient(130deg, #d8c49a 0%, #f1e6cd 100%);
  --gradient-emerald: linear-gradient(135deg, rgba(60,188,173,0.18), rgba(92,122,229,0.14));
}
```

> ⚠️ **DESCONTINUADO**: Tokens acima são da versão Lumen Edition (dark theme com dourado/emerald). NÃO USAR.

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
- Container máx. 1280 px (90 vw).
- Grid 12 colunas (`display: grid / repeat(12, 1fr)`).
- Espaçamentos escalonados (8px → 128px).
- Breakpoints: 640, 768, 1024, 1280, 1536 px (mobile first).

### Componentes V2.0 (Refined)
| Componente | Descrição | Status |
| --- | --- | --- |
| **Top Bar** | Barra preta no topo com mensagens de portes grátis e apoio especializado | ✅ Implementado |
| **Header** | Nav sticky com backdrop-filter blur, logo INNOVA by Exaktus, mobile menu com hamburger animado | ✅ Implementado |
| **Hero** | Badges horizontais + título modular (Precision. Harmony. Beauty.) + estatísticas (5000+, 15, 48h) | ✅ Implementado |
| **Features** | Grid 4 colunas com SVG icons: Garantia, Envio, Suporte, Certificações | ✅ Implementado |
| **Produtos** | 6 cards com imagens, badges (Novo, Mais Vendido), descrições e CTAs | ✅ Implementado |
| **Marcas** | Grid 6 logos em grayscale com hover | ✅ Implementado |
| **Sobre** | Conteúdo + 4 estatísticas animadas (anos, produtos, profissionais, países) | ✅ Implementado |
| **Certificações** | 3 cards ISO + trust badges (origem, pagamento, privacidade) | ✅ Implementado |
| **Contacto** | Grid 2 colunas: info + mapa / formulário completo com validação | ✅ Implementado |
| **Footer** | 4 colunas (navegação, categorias, formação, legal) + social icons + copyright | ✅ Implementado |

---

## 3. Conteúdo & Voz

### Tom editorial
- Consultivo, científico, confiante; evitar jargões não explicados.
- Headlines curtas (máx. 3 palavras/linha). Microcopy com verbos ativos (“Explorar”, “Agendar”, “Reservar”).
- Destacar diferenciais reais (certificações ISO, logística refrigerada, mentoring).

### Fontes de verdade
- `innova.md`: inventário completo com portefólio (HA, bioestimuladores, fios, aparato, etc.) – usar para alimentar copy de seções, categorias e fichas.
- `assets/images/` + subpastas: imagens oficiais (render, editoriais, certificados). Já há versões alternativas para substituição do hero/section (ver novas subpastas).

### SEO & dados estruturados
- `index.html` já possui **schema MedicalBusiness** + **Product**; ajustar conforme novos conteúdos.
- Metas e OG devem seguir narrativa premium (descrições curtas, keywords relevantes para B2B estética).

---

## 4. Estado Atual V2.0 (Janeiro 2025)

### 🔄 STATUS GERAL
**Landing principal**: 80% completa - **PRONTA PARA MOSTRAR A CLIENTE**
**Versão ativa**: V2.0 Refined (rebuild completo em Janeiro 2025)
**Motivo do rebuild**: Paleta de cores incorreta (dark theme com dourado/emerald)
**Roadmap de melhorias**: Consultar `ROADMAP-REFINAMENTO.md` para próximos passos

### ✅ V2.0 REFINED — Implementação Completa

**Arquivos principais**:
- `index.html` (690 linhas) - Landing completa com 10 seções
- `assets/css/style-refined.css` (1100+ linhas) - Design system white/black/gray
- `assets/js/main-refined.js` (280 linhas) - Funcionalidades interativas

**10 Seções implementadas**:
1. ✅ Top Bar - Mensagens de benefícios (portes grátis, apoio especializado)
2. ✅ Header - Navegação sticky com backdrop-filter blur + mobile menu animado
3. ✅ Hero - Badges horizontais + título modular + 3 estatísticas com counter animation
4. ✅ Features - Grid 4 colunas com SVG icons (garantia, envio, suporte, certificações)
5. ✅ Produtos - 6 cards com imagens, badges (Novo/Mais Vendido), descrições e CTAs
6. ✅ Marcas - Grid 6 logos com grayscale hover effect
7. ✅ Sobre - Conteúdo institucional + 4 estatísticas animadas
8. ✅ Certificações - 3 ISO cards + trust badges (origem, pagamento, privacidade)
9. ✅ Contacto - Grid 2 colunas: info + mapa / formulário com validação
10. ✅ Footer - 4 colunas (navegação, categorias, formação, legal) + social icons

**Funcionalidades JavaScript ativas**:
- Mobile menu toggle com hamburger animado (X quando aberto)
- Smooth scroll para âncoras internas
- Header shadow on scroll (aparece após 50px)
- Form validation completa (email regex, telefone, campos obrigatórios)
- Intersection Observer para animações on-scroll com delays escalonados
- Counter animations para estatísticas (5000+, 15+, 48h+)
- Active navigation link tracking baseado em scroll position
- Lazy load para imagens com fade-in
- Click outside para fechar menu mobile
- Update automático do ano no footer

**Responsividade**:
- Mobile-first design
- Breakpoints: 640px, 768px, 968px, 1280px
- Grid adaptativo (1 col mobile → 2-4 cols desktop)
- Mobile menu overlay funcional

### 🔄 Próximas Melhorias (ROADMAP-REFINAMENTO.md)

> **IMPORTANTE**: Consultar `ROADMAP-REFINAMENTO.md` para plano detalhado em 5 fases baseado em análise do mesoestetic.pt

**Fase 1 - Quick improvements** (2-3h estimadas):
- Barra de categorias com ícones
- Sistema de tabs (Best Sellers / Novidades)
- Melhorar cards de produtos (layout grid, preços)
- Hover zoom em imagens de produtos

**Fase 2 - Advanced features** (3-4h estimadas):
- Hero carousel com Swiper.js (produtos em destaque)
- Grid de categorias lifestyle com imagens
- Seção magazine/blog editorial
- Seção "What's New" com últimas notícias

**Fases seguintes**: Performance, páginas secundárias, integrações backend

---

### 📦 Histórico de Versões (Referência)

#### V1.0 Lumen Edition (DESCONTINUADA)
**Problema**: Excesso de fundos escuros, cores douradas/champagne/emerald não solicitadas
**Backup preservado**: `index_backup_dark.html` + `main_backup_dark.css`

#### V1.5 Basic (DESCONTINUADA)
**Problema**: Muito minimalista, faltava conteúdo profissional
**Backup preservado**: `index_v1_basic.html` + `main-clean.js`

#### V2.0 Refined (ATIVA)
**Solução**: Rebuild completo do zero com paleta white/black/gray, 10 seções completas, funcionalidades essenciais

---

### 🗂️ Fases Históricas (Contexto de desenvolvimento antigo)

### ✅ Fase 0 — Discovery & Arquitetura (Concluída)
- Arquitetura de pastas definida.
- Inventário comercial completo (`innova.md`).
- Convenções de slugs (landing, hubs por categoria, produto individual).

### ✅ Fase 1 — Fundamentos Visuais
- Base HTML/CSS atualizada com tokens Lumen.
- Header + hero finalizados.
- Componentes base (cards, badges, timeline, FAQ) prontos.

### ✅ Fase 2 — Landing Principal
- Seções concluídas e responsivas:
  - Signature Range, Innova Standard, Partnership Flow, Luxe Academy.
  - Voices from the Field (Swiper), FAQ “Perguntas Essenciais”, CTA final “Ready to Elevate?”, Contacto “Precision Concierge”.
- Performance:
  - `critical.css` criado (header + hero).
  - `main.css` carregado via preload + onload (media swap).
  - Delays AOS/IO padronizados (120/220/320 ms).
  - `main.js` controla nav sticky, anchors, Swiper, IntersectionObserver custom, formulário com feedback.

### 🔄 Próximas fases
- **Fase 3 – Hubs de categoria**: `produtos/<categoria>/index.html` com cards filtráveis (tags por indicação/duração). Estrutura base a ser criada.
- **Fase 4 – Fichas de produto**: template padrão (galeria, specs, aplicações, protocolo, CTA). Conteúdo vem de `innova.md`.
- **Fase 5 – Conteúdo suplementar**: página “Sobre”, Formações detalhadas, Recursos/Downloads.
- **Fase 6 – Performance & QA**: minificação, lazy-load, otimização imagens (WebP/AVIF), checklist QA completo.
- **Fase 7 – Documentação & Hand-off**: sincronizar README, agents.md, gerar changelog e preparar deploy.

---

## 5. Tarefas Imediatas V2.0 (Próximos Passos)

> **📋 CONSULTAR `ROADMAP-REFINAMENTO.md` PARA PLANO DETALHADO**

### 🎯 TOP 3 PRIORIDADES (Baseado em mesoestetic.pt)

1. **⭐⭐⭐ Barra de Categorias com Ícones** (45min)
   - Criar barra horizontal com 6 categorias principais
   - Adicionar ícones SVG para cada categoria
   - Implementar scroll horizontal em mobile
   - Arquivo: Adicionar seção em `index.html` após hero

2. **⭐⭐⭐ Sistema de Tabs (Best Sellers / Novidades)** (40min)
   - Adicionar tabs na seção de produtos
   - JavaScript para alternar entre tabs
   - Manter mesmos cards, apenas filtrar visualização
   - Arquivo: Modificar seção `.produtos` existente

3. **⭐⭐ Hero Carousel com Swiper.js** (90min)
   - Integrar Swiper.js (CDN)
   - Criar slides com produtos + imagens lifestyle
   - Navigation arrows + pagination dots
   - Arquivo: Modificar seção `.hero` existente

### 🚀 QUICK WINS (15-30min cada)

1. **Hover zoom em imagens de produtos** (15min)
   - CSS transform: scale(1.05) com overflow: hidden
   - Arquivo: `style-refined.css` seção `.product-card`

2. **Melhorar layout cards de produtos** (30min)
   - Ajustar grid para 3 colunas consistente
   - Adicionar placeholders de preços
   - Arquivo: `style-refined.css` + `index.html`

3. **Active states mais evidentes** (20min)
   - Melhorar hover states de buttons e links
   - Adicionar underline animation
   - Arquivo: `style-refined.css`

### 📋 Implementação Fases 2-5

**Consultar seções detalhadas em `ROADMAP-REFINAMENTO.md`**:
- **Fase 2**: Grid lifestyle, seção magazine, What's New (3-4h)
- **Fase 3**: Performance & polish, otimizações (2-3h)
- **Fase 4**: Páginas secundárias (Sobre, Formações) (4-5h)
- **Fase 5**: Integração backend, deploy (2-3h)

---

## 6. Guia Técnico de Implementação V2.0

### CSS V2.0 (`style-refined.css`)
- **critical.css**: contém reset mínimo + header + hero. Manter focado no “acima da dobra”.  
- **main.css**: segue seções moduladas (consultar comentários). Quando criar novos componentes, manter padrão de comentários e mobile-first.
- Responsividade: preferir `clamp()` e `grid auto-fit`. Ajustes mobile existentes (ver bloco `@media screen and (max-width: 768px)`).
- `[data-io]` + `.is-visible`: hooks para IntersectionObserver. Use em novos elementos que precisem de reveal suave.

### JS (`assets/js/main.js`)
Principais blocos:
1. **Mobile navigation** – toggle + accessible states (`aria-expanded`).
2. **Sticky header / active section** – throttle para performance.
3. **Smooth anchor** – offset considerando altura do header.
4. **FAQ accordion** – garante fechamento mútuo e ARIA.
5. **Swiper Voices** – inicializa carrossel e barra de progresso; autoplay 6s; responde a breakpoints.
6. **IntersectionObserver** – aplica `is-visible` com delays (`data-io-delay`).
7. **Form submit** – simulação API + mensagem custom (div `.form__feedback`). Substituir promessa fake por integração real quando disponível.
8. **AOS init** – acontece dentro do `DOMContentLoaded` com config 720 ms.

> Se adicionar novos carrosseis ou reveals, reutilizar padrões existentes para consistência.

### Acessibilidade
- Manter `aria-label`, `aria-controls`, `aria-expanded`.
- Menu mobile deve focar primeiro item ao abrir (feature pendente).
- FAQ: `role="region"` + `aria-labelledby`.
- Formulário: mensagens inseridas em `.form__feedback` com `aria-live="polite"`.

---

## 7. Conteúdo Comercial (Resumo por Categoria)

| Categoria | Principais linhas | Notas de posicionamento |
| --- | --- | --- |
| **Ácido Hialurónico** | Rennova® (Fill, Lift, Lift Plus Lido), Reyoungel® (Fine Lines, Derm, Deep, Plus, Sub Skin) | Diferenciar por densidade, indicação (face/corpo) e ticket médio 60–85 € + IVA |
| **Bioestimuladores** | PLLA Rennova® Elleva, Elleva X; CaHA Burgeon® Calhydra, Novuma®; Radiesse®, Gouri | Destacar reconstituição rápida, kits com água bidestilada, durabilidade 24 meses |
| **Skinboosters** | VliftPro® Elastica Hydroboost, Profhilo® (2 mL/Body 6 mL/Structura) | Enfatizar hidratação estrutural, flacidez corporal, protocolo de baixa inflamação |
| **Fios PDO & COG** | VliftPro® (Mono, Genesis, Cones, Nose, Screw, Tensio) e Magicalift® (Mono, Double Screw, Cog 6D) | Cobertura facial/corporal, kits completos para rinomodelação e eye lift |
| **Mesoterapia & Enzimas** | Cocktails lipolíticos, PDRN + HA, enzimas (Lipase, N-Zymes), eye contour | Protocolos combinados + volumes 5×10 mL, 5×5 mL |
| **Peelings** | Skinderma® (Azelaic, Tranexamic, Lactic, Jessner, Glutathione) + neutralizador | Indicações para acne, hiperpigmentação, fotoenvelhecimento |
| **Cosméticos/Homecare** | Skinderma® (limpeza, tónicos, SPF 50+, cremes antiaging) | Kits pré/pós-procedimento 14–39 € + IVA |
| **Agulhas & Cânulas** | Magicalift® (18G–30G), kits flexíveis | Preço único 85 € + IVA, opções individuais |
| **Aparatologia & Acessórios** | Hilotherm®, dermarollers, centrífugas, Rennova® Mixer | Investimentos 22 € a 5 900 €, suporte para protocolos combinados |

Use esta tabela como fonte para CTA e copy nas próximas fases (categorias e fichas).

---

## 8. QA & Performance Targets

- Lighthouse: **Performance 95+**, **A11y 100**, **Best Practices 100**, **SEO 100**.
- Peso landing: ≤ 1.8 MB; imagens ≤ 900 KB; JS ≤ 140 KB.
- Requests críticos “above the fold”: ≤ 18.
- TTI < 3.2 s; LCP < 2.4 s; CLS < 0.08.
- Navegadores alvo: última versão Chrome, Safari, Firefox, Edge. Validar fallback sem JS (estrutura clara + CTAs acessíveis).

Checklist recomendado (a preencher):
1. `npm run lint`/`npm run build` (quando scripts forem adicionados).
2. Lighthouse desktop + mobile.
3. Axe DevTools.
4. PageSpeed Insights (medir LCP real com critical.css).
5. Teste manual menu mobile, Swiper (arrasto touch), formulário (estados).

---

## 9. Convenções & Boas Práticas

- **HTML**: semântica rigorosa (`section`, `header`, `nav`, `main`, `article`). IDs únicos para âncoras.
- **CSS**: BEM-like (`block__element--modifier`). Agrupar seções por comentários numerados.
- **JS**: ES6+, sem dependências adicionais. Sempre checar existência do elemento antes de manipular.
- **Assets**: nomear com slug lowercase, sem espaços (use `-`). Organizar por categoria em `assets/images/<categoria>/`.
- **Commits**: agrupar mudanças por feature/fase; descrever se afeta UI, copy, assets.
- **Documentação**: toda mudança relevante replicar em `README.md` e aqui.

---

## 10. Apêndice – Recursos e Inspirações V2.0

### Referências Principais (V2.0)
- **Mesoestetic.pt** (PRINCIPAL): Design minimalista white/black/gray, hierarquia clara, carrossel hero, tabs, barra de categorias
- **Screenshots analisados** (4 imagens, Janeiro 2025): Hero carousel, magazine section, best sellers tabs, category bar
- **Moodboard**: Minimalismo editorial, contraste alto, tipografia como elemento visual principal
- **Acessibilidade**: WCAG 2.1 AA, W3C validator, axe DevTools

### Referências Históricas (Descontinuadas)
- ~~Dior Prestige, La Prairie (acentuação dourada)~~ - Não aplicável em V2.0
- ~~Estée Lauder, Dior Progress dots~~ - Substituído por referência Mesoestetic

### Documentos do Projeto
- `ROADMAP-REFINAMENTO.md` - Plano detalhado de melhorias em 5 fases
- `innova.md` - Inventário comercial completo
- `checklist.md` - QA e testes
- `README.md` - Instruções gerais (precisa atualização)

---

### Última atualização
- **Data**: 2025-01-03
- **Responsável**: Claude (Sonnet 4.5) – sessão V2.0 Rebuild
- **Versão**: V2.0 Refined - Rebuild completo white/black/gray
- **Status**: Landing 80% completa, pronta para apresentar a cliente
- **Próximos passos**: Implementar melhorias da Fase 1 do ROADMAP-REFINAMENTO.md

> **IMPORTANTE**: Ao retomar trabalho, sempre consultar `ROADMAP-REFINAMENTO.md` para próximas prioridades. Manter este handbook e README.md sincronizados. Sucesso na próxima iteração! 💡
