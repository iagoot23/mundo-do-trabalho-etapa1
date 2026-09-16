# Mundo do Trabalho — Etapa 1: Autoconhecimento

Apresentação web das páginas 19 a 55 do *Livro do Estudante* (SENAI/DN, 2020),
adaptada para a **Geração Alpha** e reorganizada em torno de um portfólio digital
no GitHub.

**75 slides, 3 blocos, 5 entregas avaliadas, 100 pontos.**

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
| <kbd>O</kbd> | Grade com os 75 slides, clicável |
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
| 5, 11, 31 | Cartões que viram, revelando a definição |
| 19, 44 | Botão "copiar" — leva o prompt pronto para a área de transferência |
| 30 | Quiz mito ou real, com explicação após a resposta |
| 32 | Cronômetro de 8 minutos para o Bingo de Autógrafos |
| 40, 71, 72, 73 | Abas para navegar quadros e rubricas sem tabelão ilegível |
| 49 | Carrossel com as 11 perguntas de reflexão |
| 54 | Curtigrama — clique em cada quadrante |
| 55 | Quadro de adjetivos funcional: escolha 5 de 28, com trava e contador |
| 74 | Checklist da entrega final, com barra de progresso |

As escolhas dos slides 55 e 74 ficam salvas no navegador daquele computador.

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
index.html           os 75 slides
assets/style.css     sistema visual
assets/app.js        navegação e widgets
livro-estudante.pdf  fonte original, intocado
```

Para editar um slide, procure pelo texto direto no `index.html`. Cada slide é uma
`<section class="slide">` com `data-title` (o nome que aparece na grade),
`data-block` (1, 2 ou 3) e `data-blockname` (o texto da régua lateral).

Para publicar online: suba a pasta num repositório e ligue o GitHub Pages.
