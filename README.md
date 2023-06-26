# React: Aplicativo de Lista de Equipes e Canais

Conclua um aplicativo de lista de canais e equipes React parcialmente concluído. Certas funcionalidades principais do React já foram implementadas. Conclua o aplicativo conforme mostrado abaixo para passar em todos os testes de unidade.

![](https://hrcdn.net/s3_pub/istreet-assets/u0qgNojkcOna3LQygHy6Iw/teams-and-channels.gif)

A aplicação tem 2 componentes:

- O componente TeamList, que apresenta uma lista de equipes e uma entrada para adicionar uma nova equipe.
- O componente Equipe, que exibe uma lista de canais para cada equipe e uma entrada para adicionar um novo canal.

O aplicativo possui as seguintes funcionalidades:

- Para o componente TeamList:

  - Cada equipe na matriz de equipes possui as seguintes chaves:

    - nome: O nome da equipe. (Corda)

    - canais: A lista de canais pertencentes a uma equipe. (matriz de canais)

  - Inicialmente, o botão "Adicionar equipe" está desabilitado.
  - Torna-se ativado apenas quando um nome de equipe válido **exclusivo** com pelo menos um caractere é inserido na entrada.
  - Ao clicar no botão habilitado "Adicionar Equipe", a equipe é adicionada à Lista de Equipes.

- Para o componente Equipe:

  - Cada canal em uma equipe possui as seguintes chaves:

    - nome: O nome do canal. (Corda)

    - id: O ID exclusivo do canal. (Inteiro)

  - Inicialmente, o botão "Adicionar canal" está desabilitado.

- Torna-se habilitado apenas quando um nome de canal válido **exclusivo** com pelo menos um caractere é inserido na entrada.
  - Ao clicar no botão "Adicionar canal" habilitado, o canal é adicionado ao componente Equipe.
  - Ao adicionar um novo canal, uma nova propriedade de ID incremental exclusiva deve ser fornecida.
  - Clicar no botão _excluir_ em qualquer canal o remove da lista.

Os seguintes atributos data-testid são necessários no componente para que os testes sejam aprovados:

- O div com a lista de equipes deve ter o atributo data-testid 'team-list'.
- As listas de canais para cada equipe devem ter os atributos data-testid 'channel-list-0', 'channel-list-1' e assim por diante.
- O botão 'Adicionar equipe' deve ter o atributo data-testid 'add-team-btn'.
- Cada botão 'Adicionar canal' deve ter o atributo data-testid 'add-channel-btn-0', 'add-channel-btn-1' e assim por diante.
- A entrada 'Enter Team Name' deve ter o atributo data-testid 'team-name-input'.
- Cada entrada 'Enter Channel Name' deve ter o atributo data-testid 'channel-name-input-0', 'channel-name-input-1' e assim por diante.
- Cada botão _delete_ deve ter o atributo data-testid 'remove-channel-button-00', 'remove-channel-button-01' e assim por diante, denotando primeiro o ID da equipe e depois o ID do canal.

Observe que o componente tem os atributos data-testid acima para casos de teste e certas classes e IDs para fins de renderização. É aconselhável não alterá-los.

## Environment

- React Version: 16.13.1
- Node Version: 14(LTS)
- Default Port: 8000

## Project Specifications

**Read-Only Files**

- `src/App.test.js`

**Commands**

- run:

```bash
npm start
```

- install:

```bash
npm install
```

- test:

```bash
npm test
```
