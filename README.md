<h1 align="center">
    Equivalent-mobile
</h1>

<p align="center">Aplicativo para medir a quantidade de calorias equivalente entre dois alimentos distintos.</p>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/codi-andre/equivalent-mobile.svg">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/codi-andre/equivalent-mobile.svg">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/codi-andre/equivalent-mobile.svg">
  <a href="https://github.com/codi-andre/equivalent-mobile/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/codi-andre/equivalent-mobile.svg">
  </a>

  <a href="https://github.com/codi-andre/equivalent-mobile/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/codi-andre/equivalent-mobile.svg">
  </a>
</p>

<p align="center">
  <a href="#como-utilizar">Como utilizar</a>&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
  <a href="#tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;
</p>

Agradecimento especial a [Raul Melo](https://github.com/raulfdm) por realizar o tratamento dos dados e disponibilizar a [tabela TACO](http://www.nepa.unicamp.br/taco/tabela.php) em um formato versátil.

O projeto TACO (Tabela Brasileira de Composição de Alimentos), coordenado pelo Núcleo de Estudos e Pesquisas em Alimentação (NEPA) da UNICAMP e com financiamento do Ministério da Saúde – MS e do Ministério do Desenvolvimento Social e Combate à Fome – MDS, é uma iniciativa para proporcionar dados de um grande número de nutrientes em alimentos nacionais e regionais, obtidos por meio de amostragem representativa e análises realizadas por laboratórios com competência analítica comprovada por estudos interlaboratoriais, segundo critérios internacionais.

## Como utilizar

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/codi-Andre/equivalent-mobile.git

npm install
# or
bun install
```

Inicie o servidor de desenvolvimento:

```bash
npm start
# or
bun start
```

Baixe o aplicativo **Expo GO**, escanei o QR CODE e veja o resultado.

## Tecnologias

Este projeto foi desenvolvido usando as seguintes tecnologias:

- [Expo](https://expo.dev/)
- [React-Native](https://reactnative.dev/)
- [Drizzle](https://orm.drizzle.team/)
