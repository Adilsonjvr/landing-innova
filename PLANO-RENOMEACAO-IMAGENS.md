# Plano de Renomeação de Imagens - INNOVA

**Data:** 2025-01-04
**Objetivo:** Padronizar nomenclatura para facilitar organização e manutenção

---

## 📋 Convenção de Nomenclatura

### Padrão Geral
```
{marca}_{produto}_{tipo}_{numero}.{extensao}
```

**Regras:**
- Lowercase (minúsculas)
- Underscores `_` como separador
- Sem espaços, acentos ou caracteres especiais
- Números com 2 dígitos (01, 02, 03...)
- Preferir WebP quando possível

### Categorias de Tipo
- `main` - Imagem principal do produto
- `box` - Produto na caixa
- `syringe` - Com seringa visível
- `packaging` - Embalagem completa
- `detail` - Detalhe do produto
- `application` - Áreas de aplicação (desenhos anatômicos)

---

## 🔄 Mapeamento de Renomeação

### 1️⃣ ÁCIDO HIALURÓNICO

#### RENNOVA Fill
```
rennova_fill-1ml.webp                                               → rennova_fill_1ml_01.webp
rennova_fill1-7ccb564073c9126f2016596453532857-1024-1024.webp      → rennova_fill_1ml_02.webp
rennova_fill_com-seringa1-1730e0b610b0f67ce116596453533406-*.webp  → rennova_fill_syringe_01.webp
```

#### RENNOVA Lift
```
rennova_lift_1ml.png                                                → rennova_lift_1ml_01.png
rennova_lift1-9807fd09f151f1df6716596453875364-1024-1024.png       → rennova_lift_1ml_02.png
rennova_lift_com-seringa1-8083d437a3191df09316596453876572-*.webp  → rennova_lift_syringe_01.webp
```

#### RENNOVA Lift Plus Lido
```
rennova_lift_plus_lido.webp                                         → rennova_lift_lido_1ml_01.webp
rennova_lift_plus_lido1-c2ec560bb83aed906f16596452112036-*.webp    → rennova_lift_lido_1ml_02.webp
rennova_lift_plus_lido_com-seringa1-24c45c38a1246bab6b16*.webp     → rennova_lift_lido_syringe_01.webp
```
**Nota**: Remover duplicata "(1).webp"

#### Reyoungel
```
reyoungel_derm.webp         → reyoungel_derm_main_01.webp
reyoungel_dermdeep.webp     → reyoungel_derm_deep_01.webp
reyoungel_dermplus.webp     → reyoungel_derm_plus_01.webp
reyoungel_finelines.webp    → reyoungel_fine_lines_01.webp
reyoungel_subskin.png       → reyoungel_subskin_01.png
```

#### Outras Marcas
```
corintha_fine.png           → corintha_fine_01.png
dora_deep.png               → dora_deep_01.png
iona_mid.png                → iona_mid_01.png
tuscan_lipe.png             → tuscan_lip_01.png
```

#### Imagens Genéricas (Manter ou deletar?)
```
20230919141216168.webp                              → generic_ha_01.webp (ou deletar)
20230919141217379.webp                              → generic_ha_02.webp (ou deletar)
95764e3ba7b31a6866f2c313669ca83d.jpg                → generic_ha_03.jpg (ou deletar)
eIMG_9941-e1727108021562123-2-e1728038059509.png   → generic_ha_04.png (ou deletar)
eIMG_9948-e1727108102539123-1-e1728038035547.png   → generic_ha_05.png (ou deletar)
eIMG_9957-e1727108155272123.png                    → generic_ha_06.png (ou deletar)
eIMG_9962-e1727108210942123.png                    → generic_ha_07.png (ou deletar)
```

---

### 2️⃣ SKINBOOSTERS

#### Profhilo
```
profhilo2_780x.webp                             → profhilo_main_01.webp
ibsa-profhilo.jpg                               → profhilo_main_02.jpg
ibsa-profhilo (1).jpg                           → DELETAR (duplicata)
Profhilo-Structura-IBSA-Dermal-filler.webp     → profhilo_structura_01.webp
Profhilo-Body-KIT.png                           → profhilo_body_kit_01.png
Body.png                                        → profhilo_body_main_01.png
```

#### Outros
```
Elastica-hidrobost.webp     → elastica_hydroboost_01.webp
```

---

### 3️⃣ BIOESTIMULADORES

#### ELLEVA
```
elleva_x.webp                                                       → elleva_main_01.webp
elleva-x1-570ae70f96a2ac609d16669621957707-1024-1024.webp          → elleva_main_02.webp
rennova_elleva_frascocaixa1-09b1d3b3edd4a6628d16596449*.webp      → elleva_box_01.webp
```

#### Calhydra
```
Calhydra.webp                                   → calhydra_main_01.webp
CALHYDRA-CaHa---HA-1x1.5ml---2x1ml.jpg          → calhydra_product_01.jpg
CALHYDRA-CaHa---HA-1x1.5ml---2x1ml (1).jpg      → DELETAR (duplicata)
calhydra_logo.png                               → calhydra_logo.png (manter)
```

#### Outros Bioestimuladores
```
Gouri_2.jpg                                     → gouri_main_01.jpg
novuma-kutu.png                                 → novuma_box_01.png
radiesse-1-5ml-laboratoires-merz-*.webp         → radiesse_1_5ml_01.webp
bioestimuladores.jpg                            → bioestimuladores_category_01.jpg
```

#### Imagens de Aplicação (Desenhos Anatômicos)
```
Cene-hattinda--e1728212712726.png               → application_jawline_01.png
Cene-ucunda--e1728212815131.png                 → application_chin_01.png
Marionette-e1728213279568.png                   → application_marionette_01.png
Yanaklarda-e1728213168299.png                   → application_cheeks_01.png
boyun-bolgesi-e1728213562336.png                → application_neck_01.png
burun-e1728212770982.png                        → application_nose_01.png
cizimler_elmacik-kemikleri-e1728212888747.png   → application_cheekbones_01.png
dekolte-e1728213841510.png                      → application_decolletage_01.png
el-e1728213954243.png                           → application_hands_01.png
karin-bolgesi-e1728213898715.png                → application_abdomen_01.png
kalca-e1728213776192.png                        → application_buttocks_01.png
kol-e1728213687673.png                          → application_arms_01.png
uyluk-e1728213625421.png                        → application_thighs_01.png
cizimler_diz-e1728214009138.png                 → application_knees_01.png
xNazolabial-cizgilerde--e1728213236901.png      → application_nasolabial_01.png
```

#### Imagens Genéricas
```
c1.jpg                                          → generic_bio_01.jpg
```

---

## ⚠️ Ações Necessárias

### 1. Decisões Pendentes
- [ ] **Imagens genéricas com timestamps**: Manter ou deletar?
  - `20230919*.webp`
  - `eIMG_*.png`
  - `95764e3ba7b31a6866f2c313669ca83d.jpg`

### 2. Duplicatas para Deletar
- [ ] `ibsa-profhilo (1).jpg`
- [ ] `rennova_lift_plus_lido1-*1024-1024 (1).webp`
- [ ] `CALHYDRA-CaHa---HA-1x1.5ml---2x1ml (1).jpg`

### 3. Páginas HTML para Atualizar
- [ ] `produto-rennova-fill.html` (4 imagens)
- [ ] `produto-profhilo.html` (3 imagens)
- [ ] `produto-elleva.html` (3 imagens)

---

## 🚀 Implementação

### Opção A: Renomear Tudo (Recomendada)
**Vantagens:**
- Nomenclatura 100% limpa e consistente
- Facilita futuras adições
- Profissional e organizado

**Desvantagens:**
- Precisa atualizar 10 referências em 3 arquivos HTML

### Opção B: Renomear Apenas Principais
**Vantagens:**
- Menos trabalho imediato
- Apenas imagens usadas nas páginas

**Desvantagens:**
- Inconsistência na estrutura
- Dificuldade para encontrar imagens no futuro

---

## 📊 Impacto

**Imagens Totais:**
- Ácido Hialurónico: 27 arquivos
- Skinboosters: 7 arquivos
- Bioestimuladores: 27 arquivos
- **Total: ~61 arquivos**

**Referências HTML:**
- 3 páginas de produto
- ~10 referências a imagens

**Tempo Estimado:**
- Renomeação: 30-45 min
- Atualização HTML: 15 min
- Testes: 10 min
- **Total: ~60-70 min**

---

## ✅ Próximos Passos

1. **Decisão**: Aprovar convenção de nomenclatura
2. **Backup**: Git já tem histórico, mas confirmar
3. **Executar**: Script de renomeação
4. **Atualizar**: Referências nas páginas HTML
5. **Testar**: Verificar todas as páginas de produto
6. **Commit**: "refactor: standardize image naming convention"

---

**Nota:** Após renomeação, atualizar [RELATORIO-IMAGENS.md](RELATORIO-IMAGENS.md) com a nova estrutura.
