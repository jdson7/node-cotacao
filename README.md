# API Cotação BOVESPA

**Desenvolvido por** **[Jádson Freitas](https://jadsonfreitas.com)**

API desenvolvida para recuperar cotações de ações e fundos imobiliários da Bolsa de Valores brasileira, utilizando puppeteer para fazer web scraping de sites contendo tais informações.

## Tecnologias utilizadas

* [Node JS](https://nodejs.org) - Ambiente de execução Javascript server-side.
* [Express](https://expressjs.com) - Framework para aplicativo da web do Node.js mínimo e flexível que fornece um conjunto robusto de recursos para aplicativos web e móvel.
* [Puppeteer](https://pptr.dev/) - Biblioteca Node.js que fornece uma API de alto nível para controle programático do Chrome ou Chromium por meio do protocolo DevTools.

## Instalação

Api desenvolvida utilizando [Node.js](https://nodejs.org/) v12.4.0

Instale as dependencias e inicie o servidor.

```sh
$ yarn dev
```

Execute as rotas no seu cliente REST favorito (Postman, Insomnia e etc).

```sh
http://localhost:3333/acoes/:ticker
```
> http://localhost:3333/acoes/wege3

```sh
http://localhost:3333/fundos/:ticker
```
> http://localhost:3333/fundos/knri11

License
----
MIT