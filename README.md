# Mundo do Trabalho — Etapa 1: Autoconhecimento

Apresentação web das páginas 19 a 55 do *Livro do Estudante* (SENAI/DN, 2020),
adaptada para a **Geração Alpha** e reorganizada em torno de um portfólio digital
no GitHub.

**76 slides, 3 blocos, 5 entregas avaliadas, 100 pontos.**

## Como abrir

Duplo clique em `index.html`. É só isso — não precisa de servidor, de internet
nem de instalar nada. Funciona em qualquer navegador moderno, inclusive no
computador da sala de aula sem rede.

Para projetar: abra e pressione **F** (tela cheia).

## Atalhos

| Tecla | O que faz |
|---|---|
| <kbd>→</kbd> / <kbd>Espaço</kbd> | Avança revelando item por item |
| <kbd>←</kbd> | Volta |
| <kbd>↓</kbd> / <kbd>↑</kbd> | Pula o slide inteiro, sem revelar |
| <kbd>O</kbd> | Grade com os 76 slides, clicável |
| <kbd>F</kbd> | Tela cheia |
| <kbd>T</kbd> | Alterna tema claro e escuro |
| <kbd>Home</kbd> / <kbd>End</kbd> | Primeiro / último slide |
| <kbd>?</kbd> | Ajuda |
| <kbd>Esc</kbd> | Fecha a grade ou a ajuda |

O endereço do navegador guarda o slide atual (`index.html#42`), então dá para
fechar e reabrir sem perder o lugar, ou mandar um slide específico para alguém.

## Slides interativos

| Slide | Interação |
|---|---|
| 5, 11, 32 | Cartões que viram, revelando a definição |
| 19, 45 | Botão "copiar" — leva o prompt pronto para a área de transferência |
| 19, 41, 72, 73, 74 | Abas para navegar quadros e rubricas sem tabelão ilegível |
| 20 | As duas páginas de exemplo vivas, em iframe rolável |
| 31 | Quiz mito ou real, com explicação após a resposta |
| 33 | Cronômetro de 8 minutos para o Bingo de Autógrafos |
| 50 | Carrossel com as 11 perguntas de reflexão |
| 55 | Curtigrama — clique em cada quadrante |
| 56 | Quadro de adjetivos funcional: escolha 5 de 28, com trava e contador |
| 75 | Checklist da entrega final, com barra de progresso |

As escolhas dos slides 56 e 75 ficam salvas no navegador daquele computador.

## O prompt e os exemplos

O slide 19 traz o prompt da landing page inteiro, dividido em quatro abas. Ele é
um **cardápio**: na parte 1 o estudante preenche, na parte 3 apaga as opções que
não quiser e deixa uma de cada item (paleta, fontes, layout do topo, formato da
foto, elemento interativo, estilo dos cards e mais dez decisões), e nas partes 2
e 4 não mexe. O botão copia as quatro partes de uma vez.

O slide 20 mostra o resultado: o mesmo cardápio preenchido uma única vez e
enviado para duas IAs diferentes, lado a lado em iframe rolável. As duas páginas
estão em `exemplos/` e abrem sozinhas, sem servidor.

As páginas falam por si, então o slide não traz legenda nenhuma — a comparação
é da turma. Os arquivos estão como as IAs os devolveram, de propósito: a saída B
puxa uma biblioteca de confete de um CDN e aponta a foto para um site de imagem
genérica, que numa sala sem internet vira um retângulo quebrado. A única
alteração foi corrigir, na saída A, um `z-index` que fazia o cartão do topo
passar por cima do menu fixo ao rolar.

## As cinco entregas

| # | Entrega | Origem no livro | Ferramenta | Pontos |
|---|---|---|---|---|
| 1 | Portfólio + Landing Page | p. 24, reformulado | Vibe coding | 20 |
| 2 | Capa do Meu Álbum | p. 38–40, substitui o Brasão | Canva ou IA | 20 |
| 3 | Dashboard Quem Sou Eu | p. 40–44, funde 3 estratégias | Canva | 20 |
| 4 | Árvore das Profissões 2.0 | p. 47–48, ampliada | Canva e IA | 20 |
| 5 | Âncoras + Manifesto | p. 45 e 48–49, fundidas | IA como editora | 20 |

Rubrica única nas entregas 2 a 5: conteúdo 8 · execução digital 4 ·
`PROCESSO.md` 4 · publicação 4.

Na entrega 1: repositório 5 · página no ar 5 · identificação pessoal 6 ·
registro do vibe coding 4.

## O que mudou em relação ao livro

**Geração Alpha.** O capítulo 4 do livro descreve a geração Z e define o recorte
como "nascidos entre 1992 e 2010". Para uma turma Alpha isso está errado, não só
datado. O bloco 2 foi reescrito: recorte a partir de 2010, plataformas atuais, e
o ponto que nenhuma geração anterior teve — crescer com IA generativa como coisa
banal. Os marcadores originais (PARTIU!, SE LIGA!, DEMORÔ!, BORA LÁ!, FECHÔ!)
foram mantidos.

**Brasão → Capa de Álbum.** Outro instrutor já aplicou o Brasão em outra unidade
curricular. A substituição preserva a arquitetura da atividade original: onde o
livro tinha brasão e heráldica, a nova versão tem capa de álbum e direção de arte
— mesma lógica de condensar identidade em símbolos, em outro século. As
definições de crença e valor e as 11 perguntas de reflexão continuam idênticas ao
livro (p. 38–39). A tracklist de 5 faixas é acréscimo.

**Portfólio → repositório GitHub.** O livro admite portfólio físico ou digital
(p. 24) e deixa o formato a cargo do docente. Aqui ele é o repositório público
`portfolio-mundo-trabalho`, com landing page feita por vibe coding e publicada no
GitHub Pages. Toda atividade concluída vira um card nessa página.

**PROCESSO.md.** Como todas as entregas passam por IA, cada uma exige um arquivo
registrando o prompt usado e o que o estudante mudou na resposta. Vale 4 dos 20
pontos. É o que separa aprender de colar.

**Exemplos atualizados.** O livro cita Uber e Airbnb como novidade tecnológica.
Substituídos por exemplos de profissões que somem, mudam de pele e nascem.

## Atividades do livro mantidas sem nota

Bingo de Autógrafos, Comunicação Não Violenta, Entrevista em duplas, Ilha do
Tesouro, Alguns Minutos de Fama, O que eu gostaria de estar fazendo e a Discussão
Coletiva sobre diferenças seguem no deck como dinâmicas de sala. Entram no
portfólio como registro, mas não valem pontos — alimentam a avaliação das
capacidades socioemocionais.

## Arquivos

```
index.html           os 76 slides
assets/style.css     sistema visual
assets/app.js        navegação e widgets
exemplos/            as duas landing pages de exemplo do slide 20
livro-estudante.pdf  fonte original, intocado
```

Para editar um slide, procure pelo texto direto no `index.html`. Cada slide é uma
`<section class="slide">` com `data-title` (o nome que aparece na grade),
`data-block` (1, 2 ou 3) e `data-blockname` (o texto da régua lateral).

## Ao editar o CSS ou o JavaScript

Os dois arquivos são carregados com um número de versão no final
(`assets/app.js?v=3`). Navegadores guardam esses arquivos em cache por bastante
tempo, então quem já abriu a apresentação continuaria vendo a versão antiga
depois de uma alteração sua. Ao mexer em `style.css` ou `app.js`, aumente o `v=`
nas duas linhas do topo do `index.html`. Editar só o texto dos slides não exige
nada disso.

Para publicar online: suba a pasta num repositório e ligue o GitHub Pages.
