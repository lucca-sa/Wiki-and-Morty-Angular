# Wiki & Morty

Este guia passo a passo ajudará você a configurar e executar o projeto Wiki & Morty em sua máquina local.

## Pré-requisitos

- Antes de começar, certifique-se de ter o Node.js e o npm instalados.
- Caso contrário, faça o download e a instalação a partir do [site oficial do Node.js](https://nodejs.org/en/download).

Para verificar se a instalação foi bem-sucedida, abra o terminal e execute os seguintes comandos:

`node -v`

`npm -v`

Ambos os comandos devem exibir as versões instaladas do Node.js e do npm.

## Configurando e Rodando o Projeto

Abra o terminal e navegue até a pasta raiz do projeto(recomenda-se o terminal integrado do VSCode).

> Nota: Você pode abrir o terminal diretamente na pasta de destino. Dentro da pasta raiz, no Windows, digite powershell ou cmd na barra de endereços do  Windows Explorer. No Mac, abra o terminal e arraste a pasta para o terminal.

**Importante:** Se você estiver usando o cmd ou o PowerShell, é necessário abri-lo como administrador e executar o comando `Set-ExecutionPolicy RemoteSigned` antes de executar o projeto. Esse comando permite que os scripts sejam executados, desde que eles estejam assinados por um editor confiável ou sejam criados localmente. Este passo não é necessário se você estiver usando o terminal integrado de uma IDE como o VSCode.

Instale as dependências necessárias com os seguintes comandos:

`npm i`

`npm install -g @angular/cli`

`npm install -g json-server`

### Configurando o JSON Server para Emulação da API de Usuários

Execute o seguinte comando para iniciar o JSON Server e emular a API responsável por guardar informações do usuário para os sistemas de login e signup:

`json-server --watch database/user_db.json`

Verifique se o JSON Server está rodando na porta 3000 e mantenha esse terminal aberto. Se estiver usando uma porta diferente, anote o número da porta.

Apenas se o JSON Server estiver usando uma porta diferente de 3000, edite o arquivo `src/environments/environment.development.ts` para refletir a porta correta:

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

O aplicativo estará acessível em http://localhost:4200 por padrão, mas isso pode variar. Quando você executar o comando ng serve, o Angular CLI irá indicar a porta real usada. Abra o navegador e vá para http://localhost:(porta_indicada) para interagir com o projeto Rick & Morty.

Agora, você configurou e iniciou o projeto Rick & Morty em sua máquina local, incluindo a emulação da API de usuários com o JSON Server.

Se precisar de mais assistência ou encontrar problemas, consulte a documentação oficial do [Angular](https://angular.io/docs) e do [JSON Server](https://www.npmjs.com/package/json-server) para obter informações adicionais.
