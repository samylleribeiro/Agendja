# 📅 Agendjá - Front-end

Projeto desenvolvido em equipe como parte do Projeto Integrador 2 (PI2). Apresentando uma interface para o sistema **Agendjá** voltado ao agendamento de serviços, permitindo o acesso de clientes e profissionais

## 🚀 Tecnologias Utilizadas

- **HTML:** Estruturação das telas.
- **CSS:** Estilização das telas.
- **JavaScript:** Lógica de trocas de telas e validações.

## 🛠️ Funcionalidades implementadas
### Cliente
- Cadastro de usuário.
- Login.
- Visualização do perfil cliente
- Busca e seleção de serviços.
- Consulta de disponibilidade e orçamento.
- Realização de agendamento.
- Visualização de serviços agendados.
- Cancelamento de agendamento.
- Avaliação do serviço.
- Redefinição de senha pela tela de perfil.
- Redefinição de senha pela tela de login.
- Editar os dados
- Exclusão de conta.

### Profissional
- Cadastro de profissional.
- Login.
- Visualização do perfil profissional.
- Definição de disponibilidade e orçamento.
- Visualização de serviços agendados.
- Cancelamento de agendamento.
- Visualização das avaliações recebidas.
- Redefinição de senha pela tela de perfil do profissional.
- Redefinição de senha pela tela de login.
- Editar seus dados
- Exclusão de conta.

## 🖥️ Telas do sistema

- Tela inicial.
- Telas de cadastro(cliente/profissional).
- Tela de login.
- Telas de recuperação de senha(pela tela de login).
- Tela de perfil do cliente.
- Tela de perfil do profissional.
- Telas de redifinição de senha(com usuário logado).
- Tela de busca e seleção de serviços.
- Tela de agendamentos.
- Tela de avaliações.

## Validações implementadas
validarCPF(): verifica se o CPF possui 11 dígitos numéricos e bloqueia sequências de números repetidos.
validarTelefone(): verifica se o telefone possui 10 ou 11 dígitos numéricos, aceitando formatação.
validarCamposVazios(): verifica se os campos obrigatórios foram preenchidos.
validarNome(): permite somente letras e espaços no nome.

## 📂 Próximas etapas
- [ ] Publicação na plataforma Vercel.

## Observação importante:
Esse front-end está integrado à API do AgendJá, desenvolvida com Node.js e Express, com publicação no Render.