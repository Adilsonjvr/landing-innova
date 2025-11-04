# Guia de Uso - Template de Produto Individual

## Visão Geral

O template `produto-template.html` é um modelo reutilizável para criar páginas individuais de produtos. Foi desenvolvido seguindo o design system INNOVA (white/black/gray) e a tipografia DM Sans.

## Estrutura do Template

### Arquivos Relacionados
- **HTML**: `produto-template.html` - Template principal
- **CSS**: `assets/css/style-refined.css` - Estilos (seção 17)
- **JS**: `assets/js/produto.js` - Funcionalidades interativas

## Como Usar o Template

### 1. Criar Nova Página de Produto

1. Copie `produto-template.html` e renomeie para o produto específico:
   ```bash
   cp produto-template.html produto-rennova.html
   ```

2. Substitua todos os placeholders `[TEXTO_EM_MAIÚSCULAS]` pelo conteúdo real do produto.

### 2. Placeholders do Template

#### Meta Tags e SEO
- `[PRODUTO_NOME]` - Nome do produto (ex: "RENNOVA Fill")
- `[BREVE_DESCRIÇÃO]` - Descrição breve para SEO
- `[CATEGORIA]` - Categoria do produto (ex: "Ácido Hialurónico")

#### Breadcrumbs
- `[CATEGORIA]` - Link da categoria
- `[PRODUTO_NOME]` - Nome do produto atual

#### Hero do Produto
- `[IMAGEM_PRINCIPAL]` - Caminho da imagem principal (ex: `assets/images/acido-hialuronico/rennova_fill-1ml.webp`)
- `[IMAGEM_1]`, `[IMAGEM_2]`, `[IMAGEM_3]` - Thumbnails da galeria
- `[BADGE_TEXTO]` - Texto do badge no hero (ex: "Novidade", "Best Seller")
- `[BADGE_1]`, `[BADGE_2]` - Badges adicionais
- `[SUBTÍTULO_PRODUTO]` - Subtítulo/tagline
- `[DESCRIÇÃO_CURTA_PRODUTO]` - 2-3 parágrafos sobre o produto

#### Especificações Rápidas
- `[COMPOSIÇÃO]` - Ex: "Ácido Hialurónico Cross-linked"
- `[CONCENTRAÇÃO]` - Ex: "20 mg/ml"
- `[DURAÇÃO_RESULTADOS]` - Ex: "12-18 meses"
- `[APRESENTAÇÃO]` - Ex: "1ml x 2 seringas"

#### Tabs de Conteúdo

**Tab Descrição:**
- `[DESCRIÇÃO_DETALHADA]` - Texto completo sobre o produto
- `[BENEFÍCIO_1]`, `[BENEFÍCIO_2]`, etc. - Lista de benefícios
- `[IMAGEM_SECUNDÁRIA]` - Imagem de apoio

**Tab Aplicações:**
- `[APLICAÇÃO_1_TÍTULO]` - Ex: "Preenchimento de Sulcos Nasogenianos"
- `[APLICAÇÃO_1_DESCRIÇÃO]` - Descrição da aplicação
- (Repetir para aplicações 2, 3, 4)

**Tab Protocolo:**
- `[PASSO_1_TÍTULO]` - Ex: "Preparação do Paciente"
- `[PASSO_1_DESCRIÇÃO]` - Descrição do passo
- (Repetir para passos 2, 3, 4)
- `[NOTA_1]`, `[NOTA_2]`, `[NOTA_3]` - Notas importantes

**Tab Especificações:**
- `[COMPOSIÇÃO_COMPLETA]`
- `[CONCENTRAÇÃO_DETALHADA]`
- `[VOLUME]`
- `[PH]`
- `[MÉTODO_ESTERILIZAÇÃO]`
- `[CONDIÇÕES_ARMAZENAMENTO]`
- `[VALIDADE]`
- `[PAÍS_ORIGEM]`
- `[CERTIFICAÇÕES]`

#### Produtos Relacionados
- `[PRODUTO_RELACIONADO_1]`, `[PRODUTO_RELACIONADO_2]`, `[PRODUTO_RELACIONADO_3]`
- `[DESCRIÇÃO_BREVE]` - Descrição curta de cada produto
- `[LINK_PRODUTO_1]`, `[LINK_PRODUTO_2]`, `[LINK_PRODUTO_3]` - Links para outros produtos

## Exemplo Prático: RENNOVA Fill

### Substituições Básicas

```html
<!-- Meta Tags -->
<title>RENNOVA Fill | INNOVA - Medicina Estética Premium</title>
<meta name="description" content="RENNOVA Fill - Ácido Hialurónico de alta qualidade com tecnologia cross-linking avançada | INNOVA">

<!-- Hero -->
<h1 class="produto-title">RENNOVA Fill</h1>
<p class="produto-subtitle">Preenchimento Dérmico de Alta Performance</p>

<!-- Specs Rápidas -->
<strong>Composição</strong>
<span>Ácido Hialurónico Cross-linked</span>

<strong>Concentração</strong>
<span>20 mg/ml</span>

<strong>Duração</strong>
<span>12-18 meses</span>

<strong>Apresentação</strong>
<span>1ml x 2 seringas pré-preenchidas</span>
```

## Galeria de Imagens

### Estrutura Recomendada
Coloque as imagens do produto na pasta correspondente:
```
assets/images/[categoria]/
  ├── produto-principal.webp (1200x1200px)
  ├── produto-vista-1.webp
  ├── produto-vista-2.webp
  └── produto-detalhes.webp
```

### Formato das Imagens
- **Formato**: WebP (melhor compressão) ou JPG/PNG
- **Tamanho**: Imagem principal 1200x1200px, thumbnails 300x300px
- **Fundo**: Preferencialmente branco ou transparente
- **Qualidade**: 85% de compressão

## Funcionalidades JavaScript

O arquivo `produto.js` inclui:

1. **Galeria de Thumbnails**: Clique em thumbnails para trocar imagem principal
2. **Tabs de Conteúdo**: Navegação entre descrição, aplicações, protocolo e especificações
3. **Deep Linking**: Suporte para links diretos para tabs (ex: `produto.html#protocolo`)
4. **Lazy Loading**: Carregamento otimizado de imagens
5. **Animações**: Fade in suave ao scroll

## Responsividade

O template é totalmente responsivo com breakpoints:
- **Mobile**: < 640px (1 coluna, thumbnails em grid 4x)
- **Tablet**: 640px - 968px (ajustes de padding e layout)
- **Desktop**: > 968px (layout completo 2 colunas)

## Customizações Comuns

### Adicionar Mais Thumbnails
```html
<button class="thumb">
    <img src="[CAMINHO_IMAGEM]" alt="[PRODUTO] - Vista 4">
</button>
```

### Adicionar Mais Aplicações
```html
<div class="aplicacao-card">
    <div class="aplicacao-icon">
        <svg><!-- ícone --></svg>
    </div>
    <h3>[TÍTULO]</h3>
    <p>[DESCRIÇÃO]</p>
</div>
```

### Mudar Ordem das Tabs
Basta reordenar os botões em `.produto-tabs-nav` e os painéis em `.produto-tabs-content`.

## Checklist de Criação de Produto

- [ ] Copiar `produto-template.html` e renomear
- [ ] Substituir todas as meta tags
- [ ] Adicionar imagens do produto (principal + 3-4 thumbnails)
- [ ] Preencher informações do hero
- [ ] Completar especificações rápidas
- [ ] Escrever descrição detalhada (tab 1)
- [ ] Listar 4-6 benefícios clínicos
- [ ] Definir 4 aplicações principais (tab 2)
- [ ] Criar protocolo de tratamento 4-6 passos (tab 3)
- [ ] Preencher tabela de especificações técnicas (tab 4)
- [ ] Adicionar 3 produtos relacionados
- [ ] Testar todos os links
- [ ] Verificar responsive em mobile
- [ ] Testar galeria de imagens
- [ ] Validar navegação de tabs

## Exemplos de Produtos a Criar

Com base nas imagens disponíveis, você pode criar páginas para:

### Ácido Hialurónico
- RENNOVA Fill
- RENNOVA Lift
- RENNOVA Lift Plus Lido
- Reyoungel Derm
- Reyoungel Fine Lines
- Reyoungel SubSkin

### Bioestimuladores
- ELLEVA
- Calhydra
- Novuma
- Radiesse

### Skinboosters
- Profhilo
- Profhilo Body
- Profhilo Structura

### Fios
- V-Lift Pro PDO Threads
- Mono
- Cones
- Screw

### Mesoterapia
- Enzimas Skinderma
- HA + DMAE
- Lipase
- Hyaluronidase

## Suporte e Manutenção

Para problemas ou dúvidas sobre o template:
1. Verificar console do navegador para erros JavaScript
2. Validar HTML: https://validator.w3.org/
3. Testar em diferentes navegadores (Chrome, Firefox, Safari)
4. Verificar compatibilidade mobile

## Próximos Passos

Após criar as páginas de produto:
1. Atualizar links na [página principal](index.html)
2. Adicionar links nas [categorias](index.html#categorias)
3. Vincular produtos relacionados entre si
4. Adicionar à navegação do footer
5. Atualizar sitemap.xml (quando criado)
