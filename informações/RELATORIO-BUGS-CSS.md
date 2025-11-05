# Relatório de Análise CSS - Bugs e Problemas

**Data:** 2025-11-05
**Ficheiro Analisado:** `style-refined.css` (2910 linhas, 56 KB)
**Status:** ⚠️ 12 bugs/problemas identificados

---

## 🔴 BUGS CRÍTICOS (Corrigir Imediatamente)

### 1. Z-Index Conflict - Product Price Badge vs Overlay
**Localização:** Linhas 1171 e 1261
**Severidade:** 🔴 CRÍTICA

```css
/* Linha 1171 */
.product-overlay {
    z-index: 1;  /* ⚠️ CONFLITO */
}

/* Linha 1261 */
.product-price-badge {
    z-index: 1;  /* ⚠️ MESMO Z-INDEX */
}
```

**Problema:**
Ambos os elementos têm `z-index: 1`, o que pode causar sobreposição incorreta dependendo da ordem DOM. O preço pode aparecer por cima do overlay em alguns browsers.

**Solução:**
```css
.product-overlay {
    z-index: 2;  /* Overlay deve estar acima */
}

.product-price-badge {
    z-index: 1;  /* Preço abaixo do overlay */
}
```

---

### 2. Triplo Overflow Hidden - Corta Sombras e Efeitos
**Localização:** Linhas 1071, 1076, 1093
**Severidade:** 🔴 CRÍTICA

```css
.products-carousel-wrapper {
    overflow: hidden;  /* ⚠️ 1º overflow */
}

.products-swiper {
    overflow: hidden;  /* ⚠️ 2º overflow */
}

.product-card-carousel {
    overflow: hidden;  /* ⚠️ 3º overflow */
}
```

**Problema:**
Os 3 níveis de `overflow: hidden` cortam completamente:
- Box-shadows dos cards no hover
- Efeitos de transformação que ultrapassam os limites
- Tooltips ou elementos flutuantes

**Solução:**
```css
.products-carousel-wrapper {
    overflow: hidden; /* Apenas aqui é necessário */
}

.products-swiper {
    overflow: visible; /* ✅ Permitir sombras */
    padding: 1rem 0; /* Espaço para sombras */
}

.product-card-carousel {
    overflow: hidden; /* Manter apenas para border-radius das imagens */
}
```

---

### 3. Transform Stack no Product Price Badge
**Localização:** Linhas 1256, 1268-1271
**Severidade:** 🟡 MÉDIA

```css
/* Linha 1256 - Estado normal */
.product-price-badge {
    transform: translateX(-50%);
}

/* Linha 1268 - Hover */
.product-card-carousel:hover .product-price-badge {
    transform: translateX(-50%) translateY(10px);  /* ⚠️ Duplica translateX */
}
```

**Problema:**
Duplicar `translateX(-50%)` no hover pode causar jank visual em alguns browsers ao combinar múltiplas transformações.

**Solução:**
```css
.product-price-badge {
    left: 50%;
    transform: translateX(-50%);
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.product-card-carousel:hover .product-price-badge {
    opacity: 0;
    transform: translateX(-50%) translateY(10px); /* ✅ OK - mas pode usar translate3d */
}

/* MELHOR SOLUÇÃO - GPU acceleration */
.product-card-carousel:hover .product-price-badge {
    opacity: 0;
    transform: translate3d(-50%, 10px, 0); /* ✅ Usa GPU */
}
```

---

## 🟠 BUGS MODERADOS (Corrigir em Breve)

### 4. Scroll Behavior Sem Acessibilidade
**Localização:** Linha 53
**Severidade:** 🟠 MODERADA (Acessibilidade)

```css
html {
    scroll-behavior: smooth;  /* ⚠️ Sem respeitar prefers-reduced-motion */
}
```

**Problema:**
Animação de scroll pode causar náuseas em utilizadores com problemas vestibulares. WCAG 2.1 recomenda respeitar `prefers-reduced-motion`.

**Solução:**
```css
/* Remover da linha 53 */

/* Adicionar no final do ficheiro */
@media (prefers-reduced-motion: no-preference) {
    html {
        scroll-behavior: smooth; /* ✅ Apenas se utilizador permitir */
    }
}
```

---

### 5. Backdrop-Filter Sem Fallback
**Localização:** Linha 145
**Severidade:** 🟠 MODERADA (Compatibilidade)

```css
.header {
    backdrop-filter: blur(12px);  /* ⚠️ Não funciona no Firefox Android */
}
```

**Problema:**
`backdrop-filter` não é suportado em:
- Firefox Android
- Alguns browsers antigos
- Pode causar problemas de performance em mobile

**Solução:**
```css
.header {
    background: rgba(255, 255, 255, 0.95); /* ✅ Fallback */
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px); /* ✅ Prefixo Safari */
}

/* Fallback para browsers sem suporte */
@supports not (backdrop-filter: blur(12px)) {
    .header {
        background: rgba(255, 255, 255, 0.98); /* Mais opaco */
    }
}
```

---

### 6. Hero Swiper Min-Height Excessiva em Mobile
**Localização:** Linhas 401, 495
**Severidade:** 🟠 MODERADA (UX Mobile)

```css
.hero-swiper .swiper-slide {
    min-height: 600px;  /* ⚠️ Muito alto para mobile landscape */
}

@media (max-width: 768px) {
    .hero-swiper .swiper-slide {
        min-height: 500px;  /* ⚠️ Ainda muito alto */
    }
}
```

**Problema:**
Em dispositivos landscape (ex: iPhone rotado), 500px pode ocupar 2-3 ecrãs de altura, forçando scroll excessivo.

**Solução:**
```css
.hero-swiper .swiper-slide {
    min-height: 600px;
}

@media (max-width: 768px) {
    .hero-swiper .swiper-slide {
        min-height: 500px;
    }
}

/* ✅ Adicionar para landscape */
@media (max-width: 968px) and (max-height: 500px) and (orientation: landscape) {
    .hero-swiper .swiper-slide {
        min-height: 400px; /* Reduzir em landscape */
    }
}
```

---

### 7. Product Card Altura Fixa - Risco de Cortar Conteúdo
**Localização:** Linhas 1094, 1365, 1379, 1409
**Severidade:** 🟠 MODERADA (Internacionalização)

```css
.product-card-carousel {
    height: 320px;  /* ⚠️ Altura fixa */
}
```

**Problema:**
Altura fixa pode cortar texto em:
- Traduções mais longas (ex: alemão)
- Fontes maiores (acessibilidade)
- Conteúdo dinâmico

**Solução:**
```css
.product-card-carousel {
    min-height: 320px;  /* ✅ Usar min-height */
    height: auto;       /* ✅ Permitir crescimento */
}

/* Manter alturas específicas apenas se absolutamente necessário */
@media (max-width: 640px) {
    .product-card-carousel {
        min-height: 280px;
    }
}
```

---

### 8. Aspect-Ratio Sem Fallback para Safari < 15
**Localização:** Linhas 2375, 2413
**Severidade:** 🟠 MODERADA (Compatibilidade)

```css
.galeria-main {
    aspect-ratio: 1;  /* ⚠️ Não funciona em Safari < 15 */
}

.galeria-thumbnails .thumb {
    aspect-ratio: 1;  /* ⚠️ Sem fallback */
}
```

**Problema:**
`aspect-ratio` não é suportado em Safari < 15 (iOS < 15, macOS < Monterey).

**Solução:**
```css
/* Fallback com padding-bottom hack */
.galeria-main {
    position: relative;
    width: 100%;
    padding-bottom: 100%; /* ✅ Fallback para aspect-ratio 1:1 */
}

.galeria-main::before {
    content: '';
    display: block;
    padding-bottom: 100%;
}

@supports (aspect-ratio: 1) {
    .galeria-main {
        padding-bottom: 0; /* Remove fallback */
        aspect-ratio: 1;
    }

    .galeria-main::before {
        display: none;
    }
}
```

---

## 🟡 PROBLEMAS DE PERFORMANCE

### 9. Transition "all" Usado Extensivamente
**Localização:** Linhas 42, 76, 189, 559, 633, etc. (20+ ocorrências)
**Severidade:** 🟡 BAIXA (Performance)

```css
:root {
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);  /* ⚠️ "all" */
}

a {
    transition: var(--transition);  /* Usa "all" */
}
```

**Problema:**
`transition: all` força o browser a verificar TODAS as propriedades CSS para animação, causando:
- Maior uso de CPU
- Jank em dispositivos antigos
- Performance ruim em animações complexas

**Solução:**
```css
:root {
    /* Remover --transition com "all" */
    --transition-transform: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-opacity: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-colors: background-color 0.3s, color 0.3s, border-color 0.3s;
}

/* Exemplo de uso específico */
.btn {
    transition: var(--transition-transform), var(--transition-colors);
}

.product-card-carousel {
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

### 10. Grid Auto-Fit Sem Limite em Telas Largas
**Localização:** Linha 692, 1437, 1478, etc.
**Severidade:** 🟡 BAIXA (UX Desktop)

```css
.features-grid {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));  /* ⚠️ Sem limite */
}
```

**Problema:**
Em telas ultra-largas (>2560px), os cards ficam excessivamente largos e o conteúdo fica difícil de ler.

**Solução:**
```css
.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    max-width: 1400px; /* ✅ Limitar largura máxima */
    margin: 0 auto;
}

/* OU usar max() para limitar cada coluna */
.features-grid {
    grid-template-columns: repeat(auto-fit, minmax(260px, max(300px, 1fr)));
}
```

---

## ⚪ MELHORIAS RECOMENDADAS (Não Bugs)

### 11. Falta de Will-Change para Animações Complexas
**Localização:** Cards com hover (linhas 870-920, 1089-1155)
**Severidade:** ⚪ SUGESTÃO (Performance)

**Problema:**
Animações complexas sem `will-change` podem causar jank.

**Solução:**
```css
.product-card-carousel {
    will-change: transform; /* ✅ Avisar browser de mudanças */
}

.product-card-carousel:hover {
    will-change: auto; /* ✅ Remover após hover */
}
```

---

### 12. Position Sticky Conflicts em Produto Page
**Localização:** Linhas 140, 1645, 2364
**Severidade:** ⚪ SUGESTÃO (Edge Case)

```css
.header {
    position: sticky;
    top: 0;
    z-index: 1000;
}

.categorias-formacao {
    position: sticky;
    top: 80px;
    z-index: 100;
}

.produto-galeria {
    position: sticky;
    top: 120px;
}
```

**Problema:**
Se `.categorias-formacao` e `.produto-galeria` existirem na mesma página (improvável mas possível), podem sobrepor-se incorretamente.

**Solução:**
Manter como está (não é um problema real no uso atual), mas documentar que estes elementos não devem coexistir.

---

## 📊 Resumo de Bugs

| Severidade | Quantidade | Ação |
|------------|------------|------|
| 🔴 Crítico | 3 | Corrigir IMEDIATAMENTE |
| 🟠 Moderado | 5 | Corrigir esta semana |
| 🟡 Baixo | 2 | Corrigir quando possível |
| ⚪ Sugestão | 2 | Opcional |
| **Total** | **12** | |

---

## ✅ Pontos Positivos do CSS

1. ✅ **Variáveis CSS bem organizadas** - Sistema de cores e spacing consistente
2. ✅ **BEM-like naming** - Classes descritivas e bem estruturadas
3. ✅ **Mobile-first approach** - Media queries bem pensadas
4. ✅ **Modularização clara** - Seções bem divididas com comentários
5. ✅ **Sem código duplicado** - Muito limpo e DRY
6. ✅ **Easing functions consistentes** - cubic-bezier mantido em todo ficheiro

---

## 🎯 Plano de Correção Sugerido

### Fase 1: Bugs Críticos (Hoje)
1. Corrigir z-index do overlay vs price badge
2. Remover overflow hidden desnecessários
3. Optimizar transform no hover do price badge

### Fase 2: Bugs Moderados (Esta Semana)
4. Adicionar prefers-reduced-motion
5. Adicionar fallback para backdrop-filter
6. Ajustar min-height do hero em landscape
7. Mudar height para min-height nos cards
8. Adicionar fallback para aspect-ratio

### Fase 3: Performance (Quando Possível)
9. Substituir `transition: all` por propriedades específicas
10. Adicionar max-width aos grids auto-fit
11. Adicionar will-change nas animações

---

## 📝 Notas Finais

O CSS está **muito bem estruturado** e a maioria dos bugs identificados são **edge cases** ou **melhorias de compatibilidade**.

Não há **bugs que quebrem funcionalidade** - o site funciona perfeitamente. Estas correções são principalmente para:
- ✅ Melhorar compatibilidade cross-browser
- ✅ Aumentar performance em mobile
- ✅ Garantir acessibilidade WCAG 2.1
- ✅ Prevenir problemas futuros com conteúdo dinâmico

**Veredicto:** 📗 CSS de alta qualidade com pequenos ajustes necessários.
