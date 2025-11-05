# Arquivo de Ficheiros Antigos - INNOVA

**Data de Arquivo:** 2025-11-05
**Motivo:** Limpeza de projeto - V2.0 White Theme

---

## 📦 Conteúdo deste Arquivo

Esta pasta contém ficheiros do projeto antigo que **não são mais utilizados** na versão atual (V2.0), mas foram preservados para referência futura.

---

## 📂 v1-dark-theme/

Ficheiros da **primeira versão** do site INNOVA (Tema Escuro - "Lumen Edition")

### HTML (5 ficheiros)
- `index_backup_dark.html` - Landing page V1 (tema escuro completo)
- `index_v1_basic.html` - Versão básica V1
- `produto-botox.html` - Página genérica de categoria (antigo)
- `produto-acido-hialuronico.html` - Página genérica de categoria (antigo)
- `produto-bioestimuladores.html` - Página genérica de categoria (antigo)

**Nota:** A V2.0 usa páginas de produto **individuais** (rennova-fill, profhilo, elleva) em vez de páginas genéricas de categoria.

### CSS (5 ficheiros)
- `main.css` - CSS principal do tema escuro (4345 linhas, 88 KB)
- `style-clean.css` - Versão intermédia de limpeza
- `critical.css` - Critical CSS para performance
- `produto.css` - Estilos para páginas de produto antigas
- `mesoestetic-styles.css` - Estilos Cloudflare (não relacionados com INNOVA)

**Nota:** A V2.0 usa apenas `style-refined.css`.

### JS (3 ficheiros)
- `main.js` - JavaScript original V1
- `main-clean.js` - Versão intermédia de limpeza
- `produto.js` - JavaScript para páginas antigas

**Nota:** A V2.0 usa apenas `main-refined.js`.

---

## 📂 future-features/

Funcionalidades **não implementadas** que podem ser desenvolvidas no futuro

### HTML (2 ficheiros)
- `carrinho.html` - Sistema de carrinho de compras
- `checkout.html` - Sistema de checkout/pagamento

**Aviso:** Se estas funcionalidades forem implementadas, terão de ser **refeitas do zero** para usar `style-refined.css` em vez de `main.css`.

### CSS (1 ficheiro)
- `commerce.css` - Estilos para carrinho/checkout (antigos)

### JS (4 ficheiros)
- `commerce.js` - Lógica de carrinho/checkout
- `lazy-load.js` - Sistema de lazy loading de imagens
- `modal.js` - Sistema de modais
- `gsap-animations.js` - Animações GSAP

**Nota:** A V2.0 implementa lazy loading nativo no `main-refined.js`.

---

## ⚠️ IMPORTANTE

### ❌ NÃO utilize estes ficheiros
Todos os ficheiros nesta pasta estão **desatualizados** e **não são compatíveis** com a versão atual V2.0.

### ✅ Ficheiros Ativos V2.0
```
index.html                      → Landing page principal
produto-rennova-fill.html       → Página de produto individual
produto-profhilo.html           → Página de produto individual
produto-elleva.html             → Página de produto individual
produto-template.html           → Template para novos produtos
formacao.html                   → Página de formação

assets/css/style-refined.css    → ÚNICO CSS ativo
assets/js/main-refined.js       → ÚNICO JS ativo
```

---

## 🔄 Como Recuperar Ficheiros

Se precisar recuperar algum ficheiro deste arquivo:

```bash
# Copiar (não mover) ficheiro de volta
cp _archive/v1-dark-theme/html/index_backup_dark.html ./

# Ver diferenças entre versões
diff _archive/v1-dark-theme/css/main.css assets/css/style-refined.css
```

---

## 📊 Estatísticas

### Antes da Limpeza
- **HTML:** 14 ficheiros
- **CSS:** 8 ficheiros (304 KB)
- **JS:** 9 ficheiros (76 KB)

### Depois da Limpeza
- **HTML:** 6 ficheiros ativos
- **CSS:** 1 ficheiro ativo (56 KB)
- **JS:** 1 ficheiro ativo (16 KB)

### Resultado
- ✅ **74% mais limpo** (31 → 8 ficheiros ativos)
- ✅ **Zero duplicatas**
- ✅ **Zero ficheiros quebrados**
- ✅ **Manutenção simplificada**

---

## 📝 Histórico de Versões

### V1.0 - Lumen Edition (Tema Escuro)
- **Período:** Outubro - Novembro 2024
- **Design:** Tema escuro obsidiano com dourado
- **CSS:** `main.css` (4345 linhas)
- **Características:** Páginas genéricas de categoria

### V2.0 - White Theme (Atual)
- **Período:** Novembro 2024 - Presente
- **Design:** Tema branco/preto/cinza minimalista
- **CSS:** `style-refined.css` (2909 linhas)
- **Características:** Páginas específicas por produto, carousel Swiper

---

**Arquivado em:** 2025-11-05
**Por:** Claude Code
**Motivo:** Limpeza e organização do projeto V2.0
