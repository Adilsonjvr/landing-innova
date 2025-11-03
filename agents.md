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

### Stack & Estrutura
```
innova-landing/
├── index.html                 # landing principal (fase 2)
├── assets/
│   ├── css/
│   │   ├── main.css           # design system e estilos globais
│   │   └── critical.css       # recorte crítico (header + hero)
│   ├── js/
│   │   ├── main.js            # interações gerais (nav, Swiper, IO, form)
│   │   ├── lazy-load.js       # fallback para lazy loading
│   │   ├── modal.js           # modal de orçamento (em revisão)
│   │   └── gsap-animations.js # opcional (hooks GSAP)
│   ├── images/                # imagens originais + novas variações
│   └── icons/
├── checklist.md               # checklist QA (precisa atualização)
├── innova.md                  # inventário comercial (fonte de copy)
├── produto-botox.html         # experimento antigo (não atualizado)
├── README.md                  # instruções gerais (precisa sync)
└── agents.md                  # ESTE DOCUMENTO
```

Dependências externas carregadas via CDN:
- **Fonts**: Manrope, Inter, Playfair Display (Google Fonts).
- **Swiper 10**: carrossel testimoniais.
- **AOS 2.3.1**: efeitos de entrada (com fallback em JS personalizado).
- **GSAP** (core + ScrollTrigger): reservado para animações avançadas (não obrigatório).

---

## 2. Diretrizes de Design (Lumen Edition)

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

> ⚠️ Manter fundos brancos/cinza-claro para main content. Reservar `--gradient-obsidian` para hero ou blocos premium específicos. Sempre garantir legibilidade (texto preto sobre branco; texto claro sobre blocos escuros).

### Layout & Grid
- Container máx. 1280 px (90 vw).
- Grid 12 colunas (`display: grid / repeat(12, 1fr)`).
- Espaçamentos escalonados (8px → 128px).
- Breakpoints: 640, 768, 1024, 1280, 1536 px (mobile first).

### Componentes notáveis
| Componente | Descrição |
| --- | --- |
| **Header “Floating Capsule”** | Barra utilitária + nav 3 colunas + CTA; comportamento sticky com blur e indicador ativo. |
| **Hero “Precision Ritual”** | Grid 7/5; copy modular + métricas + imagem editorial 4:5; CTAs duplos. |
| **Signature Range** | Cards facetados (glass), badges translúcidas, CTA com underline animado. |
| **Innova Standard** | Manifesto + linha do tempo vertical + grid 2×2 de “stickers” glass. |
| **Partnership Flow** | Timeline horizontal (Swiper não necessário) com 4 fases, imagens circulares, micro CTAs. |
| **Luxe Academy** | Bento grid (masterclass, atelier, immersive) com highlight ribbon e dados de formação. |
| **Voices from the Field** | Swiper 3 slides (desktop) com progress bar segmentada e navegação custom. |
| **FAQ** | Accordion acessível (botões, ícone +/–, transição max-height). Inclui sidebar “Precision concierge”. |
| **CTA final** | Bloco gradient-dourado com badge, destaques e CTAs (solid + ghost). |
| **Contacto** | Grid 2 colunas: cartão concierge + mapa + credenciais / formulário com labels flutuantes e feedback inline. |

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

## 4. Estado Atual (Abrangência por Fase)

### ✅ Fase 0 — Discovery & Arquitetura
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

## 5. Tarefas Imediatas (Prioridades 0–2)

1. **Imagens otimizadas**  
   - Exportar variações WebP/AVIF para hero, processo, academy nas proporções definidas (desktop/tablet/mobile).  
   - Atualizar `<picture>` tags em `index.html`.  
   - Remover referências a imagens antigas que foram deletadas.

2. **Checklist QA (`checklist.md`)**  
   - Atualizar com blocos: Responsividade (breakpoints), Performance (CWV com metas), Acessibilidade (axe/Lighthouse), SEO (metas/OG/schema), Funcionalidades (Swiper, nav, forms), Cross-browser, Validações W3C.

3. **Copy & CTAs**  
   - Revisar seções ainda genéricas na landing para injetar dados de portefólio (HA, bioestimuladores, fios, aparatologia).  
   - Garantir CTAs apontando para futuras categorias (mesmo que placeholders).

4. **Planeamento Fase 3**  
   - Criar `produtos/index.html` com visão geral das categorias + cards.  
   - Definir template base reutilizável (componentização manual ou includes parciais se necessário).  
   - Mapear assets necessários por categoria (usar imagens já adicionadas às novas pastas).

5. **Documentação**  
   - Rever `README.md` para refletir fluxo atual (critical CSS, carregamento assíncrono, dependências).
   - Registrar próximos hand-offs e convenções de copy neste `agents.md`.

---

## 6. Guia Técnico de Implementação

### CSS
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

## 10. Apêndice – Recursos e Inspirações

- Moodboard: editoriais de cosmética high-end (Dior Prestige, La Prairie). Destaque para layouts em branco/preto com acentuação dourada.
- Referências de carrossel: Estée Lauder testimonials, Dior Progress dots.
- Acessibilidade: consultar WCAG 2.1 AA, W3C validator, axe DevTools.

---

### Última atualização
- **Data**: 2025-02-14
- **Responsável**: Codex (GPT-5) – sessão Lumen Edition

> Ao finalizar novas tarefas ou fases, atualizar este handbook antes de prosseguir. Mantê-lo sincronizado é essencial para continuidade entre agentes. Sucesso na próxima iteração! 💡
