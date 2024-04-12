# TrackIt Front-end

## Visão Geral
O Track It é um projeto desenvolvido para ajudar os usuários a monitorar e registrar seus hábitos diários. Utiliza tecnologias como React, Redux Toolkit, TypeScript, Ant Design, React Router, React Hook Form e Axios para fornecer uma experiência de usuário eficiente e amigável.

## Tecnologias Utilizadas
- **React**: Biblioteca principal para construção de interfaces de usuário.
- **Redux Toolkit**: Ferramenta oficial recomendada para gerenciamento de estado com Redux.
- **TypeScript**: Linguagem de programação que adiciona tipagem estática ao JavaScript.
- **Ant Design**: Biblioteca de componentes de interface de usuário.
- **React Router**: Biblioteca para roteamento de páginas no React.
- **React Hook Form**: Biblioteca para gerenciar formulários de forma eficiente.
- **Axios**: Cliente HTTP para fazer requisições à API.

## Funcionalidades Principais
1. **Autenticação de Usuários:**
   - Permite que os usuários façam login e se registrem na aplicação.
2. **Gestão de Hábitos:**
   - Permite que os usuários visualizem, adicionem, editem e excluam hábitos.
3. **Rastreamento Diário:**
   - Permite que os usuários registrem o progresso diário de seus hábitos.
4. **Dashboard de Estatísticas:**
   - Apresenta estatísticas e métricas relacionadas aos hábitos dos usuários.
5. **Interface Responsiva:**
   - Garante uma experiência consistente em diferentes dispositivos e tamanhos de tela.

## Fluxo de Dados
1. **Autenticação de Usuários:**
   - O usuário envia suas credenciais (email/senha) para o servidor.
   - O servidor valida as credenciais e retorna um token de acesso JWT.
   - O token JWT é armazenado no lado do cliente e enviado junto com as solicitações subsequentes para autenticação.
2. **Gestão de Hábitos:**
   - O usuário envia solicitações para adicionar/editar/excluir hábitos.
   - As solicitações são enviadas para a API utilizando o cliente Axios.
   - O servidor processa as solicitações, valida os dados e atualiza o estado do hábito no banco de dados.
3. **Rastreamento Diário:**
   - O usuário marca os hábitos concluídos no dia atual.
   - As atualizações são enviadas para a API e refletem no estado do hábito.

## Instalação e Configuração
1. **Pré-requisitos:**
   - Node.js
   - npm ou Yarn
2. **Passos de Instalação:**
   - Clone o repositório do projeto.
   - Instale as dependências usando npm ou Yarn.
   - Configure as variáveis de ambiente necessárias, como a URL da API.
   - Inicie o servidor de desenvolvimento com `npm start` ou `yarn start`.

## Contribuindo
- Para contribuir com o projeto, siga as diretrizes de contribuição definidas no arquivo CONTRIBUTING.md.
- Se encontrar algum problema ou tiver sugestões de melhoria, por favor, abra uma issue no repositório do projeto.
