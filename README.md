# INNOVA · Landing Page Premium

Landing page premium e altamente otimizada para a marca INNOVA (produtos estéticos profissionais em Portugal). O foco do projeto é transmitir sofisticação, assegurar performance de ponta e maximizar conversões para captação de leads B2B.

## 🧭 Visão Geral

- **Stack:** HTML5 + CSS3 (design system custom) + JavaScript vanilla.
- **Deploy:** Vercel · [`https://portfolio-adilsonjvr.vercel.app`](https://portfolio-adilsonjvr.vercel.app)
- **Principais diferenciais de UX:** animações sutis (AOS), microinterações em CTAs/cards, counters animados, carousel de testemunhos e formulário com feedback otimista.
- **Performance:** lazy loading aplicado em imagens, CSS crítico previsto para inline, assets restantes carregados de forma assíncrona.

## 📂 Estrutura Essencial

```
landing-innova/
├── index.html
├── assets/
│   ├── css/
│   │   ├── main.css
│   │   └── critical.css          # TODO: extrair CSS crítico
│   ├── js/
│   │   ├── main.js
│   │   └── lazy-load.js
│   └── images/
│       ├── hero-bg.png           # imagem de destaque original
│       ├── Gemini_Generated_*.png
│       └── optimized/            # reservada para versões WebP/AVIF
├── vercel.json                   # config do deploy
├── agents.md                     # guia detalhado para automações
└── README.md
```

## 🚀 Preview Local

A página é estática — basta abrir `index.html` no navegador ou utilizar uma extensão como **Live Server** (VS Code).

```bash
# opção usando serve (Node)
npm install -g serve
serve .
```

## ✅ Estado Atual (commit `48e91a6`)

- Logo premium usando fallback dourado + gradient quando suportado.
- Seção “Como Funciona” com imagens reais no lugar dos ícones.
- Seção “Formações” reprojetada (card hero + programas signature e imersivo).
- Footer com ícone WhatsApp customizado.
- Deploy no Vercel ativo e sincronizado com `main`.

## 🔜 Próximos Passos Sugeridos

1. Extrair e inlinear `critical.css`; carregar `main.css` via preload.
2. Otimizar imagens (`optimized/`) gerando WebP/AVIF + uso de `<picture>`.
3. Minificar HTML/CSS/JS para produção.
4. Revisar checklist de testes (responsividade, Lighthouse, acessibilidade).

Os detalhes completos (design system, prompts e checklists) estão no [`agents.md`](agents.md).

---

Desenvolvido com 💛 em Portugal · INNOVA — *Precision. Harmony. Beauty.*
