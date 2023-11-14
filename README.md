# Rick & Morty Project - Lucca Sá

Este guia passo a passo ajudará você a configurar e executar o projeto Rick & Morty em sua máquina local.

## Pré-requisitos

- Antes de começar, certifique-se de ter o Node.js e o npm instalados.
- Caso contrário, faça o download e a instalação a partir do [site oficial do Node.js](https://nodejs.org/en/download).

Para verificar se a instalação foi bem-sucedida, abra o terminal e execute os seguintes comandos:

`node -v`

`npm -v`


Ambos os comandos devem exibir as versões instaladas do Node.js e do npm.

## Configurando e Rodando o Projeto

Clone ou baixe o projeto do repositório.


### Configurando o JSON Server para Emulação da API de Usuários

Abra o terminal e navegue até a pasta raiz do projeto.

> Nota: Você pode abrir o terminal diretamente na pasta de destino. No Windows, digite powershell na barra de endereços do Explorer. No Mac, abra o terminal e arraste a pasta para o terminal.

Execute o seguinte comando para iniciar o JSON Server e emular a API responsável por guardar informações do usuário para os sistemas de login e signup:

`json-server --watch database/user_db.json`

Verifique se o JSON Server está rodando na porta 3000. Se estiver usando uma porta diferente, anote o número da porta.

Se o JSON Server estiver usando uma porta diferente de 3000, edite o arquivo `src/environments/environment.development.ts` para refletir a porta correta:

 `export const environment = {
  baseUrlAPI: 'https://rickandmortyapi.com/api/',
  signupMockUrl: 'http://localhost:(porta_do_json_server)/users',
};`


Substitua `(porta_do_json_server)` pelo número da porta indicado pelo JSON Server.
Essa alteração pode ser feita em um bloco de notas, notepad++ ou sua IDE de preferência.


### Iniciando o Servidor Angular

Abra um novo terminal na mesma pasta do projeto.

Execute o seguinte comando para iniciar o servidor Angular:

`ng serve`


O aplicativo estará acessível em http://localhost:4200 por padrão. Abra o navegador e vá para http://localhost:4200 para interagir com o projeto Rick & Morty.

Agora, você configurou e iniciou o projeto Rick & Morty em sua máquina local, incluindo a emulação da API de usuários com o JSON Server.

Se precisar de mais assistência ou encontrar problemas, consulte a documentação oficial do [Angular](url) e do [JSON Server](url) para obter informações adicionais.

