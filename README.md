# Sobre o Projeto

"Don't Panic, Baby" foi  o primeiro projeto da fase de setup da equipe Astrea da
2ª Edicão do 42Labs.</br>
O projeto consiste em um jogo no qual o usuário deve adivinhar
a equação secreta que resulta em "42". No jogo, cada tentativa deve resultar em 42 e, a cada jogada, dicas mostrarão o 
quão perto ele está da equação secreta.

## Índice

- [Sobre o Projeto](#Sobre-o-Projeto)
- [Tecnologias](#Tecnologias)
- [Como Utilizar](#Como-Utilizar)
- [Como Testar](#Como-Testar)

## Tecnologias

- [node](https://nodejs.org/en/)
- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [express](https://expressjs.com/pt-br/starter/installing.html)
- [jest](https://jestjs.io/pt-BR/)
- [swagger](https://swagger.io)

## Como Utilizar

A aplicação consiste num jogo em que o jogador deve digitar exatamente 6 caracteres para formar uma equação que deve resultar em 42. A aplicação responderá ao jogador se a equação recebida é a correta através de dicas.</br>
A equação secreta é sempre a mesma. Caso não resulte em 42, a equação será rejeitada.</br>
Os caracteres aceitos são dígitos e operadores ("*", "/", "+" e "-").</br></br>
As dicas são as seguintes:
* O "C" significa que o caractere existe na equação secreta e está na posição correta.
* O "T' significa que o caractere existe na equação secreta, mas não está na posição correta.
* O "X" significa que o caractere inserido não está na equação secreta.

## Como Testar

O programa é compátivel apenas com distribuições baseadas em Debian.

Para colocar em produção utilize o seguinte comando da pasta raiz do projeto. 

```sh
./autorun.sh
```

Para acessar a documentação, utilize o seguinte link após utilizar o comando anterior: 

- [localhost:3333/api-docs](http://localhost:3333/api-docs)

Para testar o projeto, encerre os terminais ativos com Ctrl + C e execute o seguinte comando:

```sh
yarn tests
```

P.S: é necessário que você execute o ```./autorun.sh``` para instalar o node e o yarn.

