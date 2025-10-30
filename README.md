# VTEX inStore Dev

This project is to launch a new tenant using the instore-core gatsby plugins.

## Setup

```bash
yarn
```

PS.: must have npm permission to use private @vtexlab packages

## Run

```bash
yarn start
```

## Build

```bash
yarn build
```

To test build:

```bash
yarn serve
```

## Test

```bash
yarn test
```

## To launch another version

```
Open a PR on this repo (probably updating @vtexlab/gatsby-theme-instore-core version)
```

## Cypress

Setup cypress.json with the correct baseUrl (change from base.vtexlocal to the "name of your tenant".vtexlocal)

Declare the environment variables on your terminal:

```bash
export CYPRESS_DEFAULT_LOGIN='VALUE'
export CYPRESS_DEFAULT_PASSWORD='VALUE'
```

And run Cypress locally with:

```bash
yarn cypress:open
```

## Novos deploys single tenant

Para demos, testes, defcons, etc., podemos utilizar um deploy separado, que pode conter versão diferente do Sales App (@vtexlabs.gatsby-theme-checkout-instore) sem afetar o ambiente de outras contas.

Passos para criar um deploy single tentant para uma conta `<conta>`:
- Alterar alias da FastStore para rotear corretamente `instore--<conta>.myvtex.com`:
  - [Exemplo desse tipo de mudança no passado](https://github.com/vtex/charts/commit/bd0bfc411fa15f21936c39575694d27249a16fb3).
  - Em caso de dúvida, pedir orientação para o pessoal da FastStore
- Gerar token novo no npm.org com vtexlab específico para o deploy desse repositório
- Criar repositório novo de nome `vtex-sites/<conta>.instore`
	- Selecionar template `vtex-sites/base.instore`
- Clonar repositório
- Logar com toolbelt em `<conta>`
- Mudar no vtex.env para `GATSBY_STORE_ID=<conta>`
- Ajustar os secrets
	- `vtex plugins install webops-secrets`
	- `vtex secrets setup`
	- Copiar valores de `vtex-sites/<outra-conta>.instore`, procurando pegar uma conta de propósito parecido
		- Clonar repo `vtex-sites/<outra-conta>.instore`, logar em `<outra-conta>`, rodar `vtex secrets reveal`, copiar `secrets.revealed.json`
	- Ajustar valores de acordo (especialmente token do NPM)
	- `vtex secrets hide` (criando `secrets.hidden.json`)
	- Abrir `pr`, esperar a action "build"
- Se o app mobile for ser utilizado
	- Ajustar url no master data de acordo com o README do mobile.checkout-instore
- Garantir que a action "build" esteja passando antes de colocar na main