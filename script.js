// VARIAVEIS GLOBAIS
let telaAtual = "boas-vindas"; // Variável para controlar a tela atual

// Elementos das telas
let telaBoasVindas = document.getElementById('tela-boas-vindas');
let telaLogin = document.getElementById("tela-login");
let telaCadastro = document.getElementById("tela-cadastro");
let telaBusca = document.getElementById("tela-buscar-profissional");
let telaRedefinirSenha = document.getElementById("tela-redefinir-senha");
let telaDisponibilidadeOrcamento = document.getElementById("tela-disponibilidade-orcamento");
let telaAgendamentoConfirmado = document.getElementById("tela-agendamento-confirmado");
let telaPerfil= document.getElementById("tela-perfil");
let telaServicosAgendados = document.getElementById("tela-servicos-agendados");
let telaAvaliacao = document.getElementById("tela-avaliacao");
let telaCadastroProfissional = document.getElementById("tela-cadastro-profissional");
let telaPerfilProfissional = document.getElementById("tela-perfil-profissional");
let telaDisponibilidadeOrcamentoProfissional = document.getElementById("tela-disponibilidade-orcamento-profissional");
let telaServicosAgendadosProfissional = document.getElementById("tela-servicos-agendados-profissional");
let telaEditarDadosCliente = document.getElementById("tela-editar-perfil");
let telaEditarDadosProfissional = document.getElementById("tela-editar-perfil-profissional");
let tituloDisponibilidade = document.getElementById("titulo-disponibilidade");
let profissional = document.getElementById("profissional");
let data = document.getElementById("data");
let horario = document.getElementById("horario");
let orcamento = document.getElementById("orcamento");
let resumoAgendado = document.getElementById("resumo-agendado");
let nomeUsuario = document.getElementById("nome-usuario");
let listaServicosAgendados = document.getElementById("servicos-agendados");
let listaServicosAgendadosProfissional = document.getElementById("lista-servicos-profissional");
let avaliacaoRealizada = document.getElementById("avaliacao-realizada");
// botões de navegação
let btnLogin = document.getElementById("btn-logar");
let btnVoltar= document.getElementById("btn-voltar");

// Mensagens de alerta de erro ou sucesso
let alertLogin = document.getElementById("msg-login");
let alertCadastro = document.getElementById("msg-cadastro");
let alertBusca = document.getElementById("msg-buscar-profissional");
let alertRedefinirSenha = document.getElementById("msg-redefinir-senha");
let alertDisponibilidadeOrcamento = document.getElementById("msg-disponibilidade-orcamento");
let alertAgendamentoConfirmado = document.getElementById("msg-agendamento-confirmado");
let alertPerfil = document.getElementById("msg-perfil");
let alertPerfilProfissional = document.getElementById("msg-perfil-profissional");
let alertServicosAgendados = document.getElementById("msg-servicos-agendados");
let alertAvaliacao = document.getElementById("msg-avaliacao");
let alertCadastroProfissional = document.getElementById("msg-cadastro-profissional");
let alertDisponibilidadeOrcamentoProfissional = document.getElementById("msg-disponibilidade-orcamento-profissional");
let alertServicosAgendadosProfissional = document.getElementById("msg-servicos-agendados-profissional");
let alertEditarDadosCliente = document.getElementById("msg-editar-perfil");
let alertEditarDadosProfissional = document.getElementById("msg-editar-perfil-profissional");
let alertDisponibilidadeProfissional = document.getElementById("msg-disponibilidade-do-profissional");
// variaveis para guardar o serviço e profissional escolhido
let servicoAtual;
// variável para armazenar o nome do cliente logado e cpf do cliente logado
let idUsuarioLogado = "";
let nomeUsuarioLogado = "";
let cpfUsuarioLogado = "";
let tipoUsuarioLogado = "";
// variaveis para armazenar os dados do cliente logado
let nomeCliente = document.getElementById("nome-cliente");
let telefoneCliente = document.getElementById("telefone-cliente");
// varriaveis para armazenar os dados do profissional logado
let nomeProfissional = document.getElementById("nome-profissional-perfil");
let profissaoProfissional = document.getElementById("profissao-profissional-perfil");
let telefoneProfissional = document.getElementById("telefone-profissional-perfil");
let cpfProfissionalLogado = "";
let telefoneProfissionalLogado = "";
let profissaoProfissionalLogado = "";
// variável para acessar a profissão escolhida pelo cliente
let profissaoBusca = document.getElementById("profissao");
// Função simples para apagar a mensagem de erro após 3 segundos
function apagarMensagem() {
    setTimeout(function() {
        alertLogin.innerText = "";
        alertCadastro.innerText = "";
        alertBusca.innerText = "";
        alertRedefinirSenha.innerText = "";
        alertDisponibilidadeOrcamento.innerText = "";
        alertAgendamentoConfirmado.innerText = "";
        alertPerfil.innerText = "";
        alertPerfilProfissional.innerText = "";
        alertServicosAgendados.innerText = "";
        alertAvaliacao.innerText = "";
        alertCadastroProfissional.innerText = "";
        alertDisponibilidadeOrcamentoProfissional.innerText = "";
        alertEditarDadosCliente.innerText = "";
        alertEditarDadosProfissional.innerText = "";
    }, 3000); // 3000 milissegundos = 3 segundos
}

// função para o botão de voltar
function voltar() {
    if (telaAtual === "login") {
        // Limpa os campos de login ao sair
        document.getElementById("cpf").value = "";
        document.getElementById("senha").value = "";

        telaLogin.style.display = "none";
        telaBoasVindas.style.display = "block";
        
        btnVoltar.style.display = "none";
        btnLogin.style.display = "block";

        telaAtual = "boas-vindas";
    } else if (telaAtual === "cadastro") {
        telaCadastro.style.display = "none";
        telaLogin.style.display = "block";

        telaAtual = "login";
    } else if (telaAtual === "cadastro-profissional") {
        telaCadastroProfissional.style.display = "none";
        telaLogin.style.display = "block";

        telaAtual = "login";
    } else if (telaAtual === "buscar-profissional") {
        telaBusca.style.display = "none";
        telaPerfil.style.display = "block";

        telaAtual = "perfil";
    } else if (telaAtual === "redefinir-senha-perfil") {
    telaRedefinirSenha.style.display = "none";
    telaPerfil.style.display = "block";

    telaAtual = "perfil";

    } else if (telaAtual === "redefinir-senha-perfil-profissional") {
    telaRedefinirSenha.style.display = "none";
    telaPerfilProfissional.style.display = "block";
    
    telaAtual = "perfil-profissional";
    }
     else if (telaAtual === "disponibilidade-orcamento") {
        telaDisponibilidadeOrcamento.style.display = "none";
        telaBusca.style.display = "block";

        telaAtual = "buscar-profissional";
    } else if (telaAtual === "agendamento-confirmado") {
        telaAgendamentoConfirmado.style.display = "none";
        telaDisponibilidadeOrcamento.style.display = "block";

        telaAtual = "disponibilidade-orcamento"
    } else if(telaAtual === "perfil") {
        telaPerfil.style.display = "none";
        telaLogin.style.display = "block";

        telaAtual = "login";
    } else if (telaAtual === "servicos-agendados") {
        telaServicosAgendados.style.display = "none";
        telaPerfil.style.display = "block";

        telaAtual = "perfil";
    } else if (telaAtual === "avaliacao") {
        telaAvaliacao.style.display = "none";
        telaServicosAgendados.style.display = "block";

        telaAtual = "servicos-agendados";
    } else if (telaAtual === "perfil-profissional") {
        telaPerfilProfissional.style.display = "none";
        telaLogin.style.display = "block";

        telaAtual = "login";
    } else if (telaAtual === "disponibilidade-orcamento-profissional") {
        telaDisponibilidadeOrcamentoProfissional.style.display = "none";
        telaPerfilProfissional.style.display = "block";

        telaAtual = "perfil-profissional";
    } else if (telaAtual === "servicos-agendados-profissional") {
    telaServicosAgendadosProfissional.style.display = "none";
    telaPerfilProfissional.style.display = "block";
    telaAtual = "perfil-profissional";
  } else if (telaAtual === "editar-perfil") {
    telaEditarDadosCliente.style.display = "none";
    telaPerfil.style.display = "block";
    telaAtual = "perfil";
  } else if (telaAtual === "editar-perfil-profissional") {
    telaEditarDadosProfissional.style.display = "none";
    telaPerfilProfissional.style.display = "block";
    telaAtual = "perfil-profissional"
  } 
   
}
// função para o botão de logar
function logar() {
    // Oculta a tela de boas-vindas e exibe a tela de login
    telaBoasVindas.style.display = "none";
    telaLogin.style.display = "block";
    // atualiza botões de navegação
    btnLogin.style.display = "none";
    btnVoltar.style.display = "block";
    // Atualiza a variável de tela atual
    telaAtual = "login";
}
// função para o botão de cadastro
function cadastrarCliente() {
    //Limpa os campos do login ao ir para o cadastro
    document.getElementById("cpf").value = "";
    document.getElementById("senha").value = "";
    // Oculta a tela de boas-vindas e exibe a tela de cadastro
    telaLogin.style.display = "none";
    telaCadastro.style.display = "block";
    // Atualiza a variável de tela atual
    telaAtual = "cadastro";
}
// função para o botão finalizar cadastro
function finalizarCadastro() {
    // pega os valores dos campos de cadastro
    let nome = document.getElementById("nome").value.trim();
    let cpf = document.getElementById("cpf-cadastro").value.trim();
    let senha = document.getElementById("senha-cadastro").value;
    let telefone = document.getElementById("telefone").value.trim();
    let confirmacaoSenha = document.getElementById("confirmar-senha").value;

    // 1.validação simples dos campos não preenchidos
    if (validarCamposVazios(nome) || validarCamposVazios(cpf) || validarCamposVazios(senha) || validarCamposVazios(telefone) || validarCamposVazios(confirmacaoSenha)) {
        alertCadastro.innerText = "Por favor, preencha todos os campos!";
        alertCadastro.className = "erro";
        apagarMensagem();
        return;
    }

    // 2.Validação do cpf
    if (!validarCPF(cpf)) {
        alertCadastro.innerText = "CPF inválido!";
        alertCadastro.className = "erro";
        apagarMensagem();
        return;
    }
    // 3. Validação do nome (apenas letras e espaços)
    if (!validarNome(nome)) {
        alertCadastro.innerText = "Nome inválido! Digite apenas letras e espaços.";
        alertCadastro.className = "erro";
        apagarMensagem();
        return;
    }
    // 4. Validação do telefone (apenas números e 10 ou 11 dígitos)
    if (!validarTelefone(telefone)) {
        alertCadastro.innerText = "Telefone inválido! Digite apenas números (10 ou 11 dígitos).";
        alertCadastro.className = "erro";
        apagarMensagem();
        return;
    }
    // 5. Validação se senha e confirmação são iguais
    if (senha !== confirmacaoSenha) {
        alertCadastro.innerText = "Senha e confirmação não coincidem!";
        alertCadastro.className = "erro";
        apagarMensagem();
        return;
    }
    // Integra com a api agendjá
 fetch("https://api-agendja.onrender.com/clientes", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        nome: nome,
        cpf: cpf,
        telefone: telefone,
        senha: senha
    })
})
.then(resposta => {
    if (!resposta.ok) {
        throw new Error("Erro ao cadastrar cliente");
    }

    return resposta.json();
})
.then(dados => {
    console.log(dados);

    // limpa os campos
    document.getElementById("nome").value = "";
    document.getElementById("cpf-cadastro").value = "";
    document.getElementById("senha-cadastro").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("confirmar-senha").value = "";

    // vai para a tela de login
    telaCadastro.style.display = "none";
    telaLogin.style.display = "block";
    telaAtual = "login";

    alertLogin.innerText = "Cadastro realizado com sucesso! Faça seu login.";
    alertLogin.className = "sucesso";
    apagarMensagem();
})
.catch(erro => {
    console.error(erro);
    alertCadastro.innerText = "Não foi possível realizar o cadastro. Verifique os dados e tente novamente.";
    alertCadastro.className = "erro";
    apagarMensagem();
});
}
// função para o botão de entrar (cliente) - login
function entrarCliente() {
    // pega os valores dos campos de login
    let cpf = document.getElementById("cpf").value.trim();
    let senha = document.getElementById("senha").value;
    // validação simples dos campos não preenchidos
    if ( validarCamposVazios(cpf) || validarCamposVazios(senha)) {
        alertLogin.innerText = "Por favor, preencha todos os campos!";
        alertLogin.className = "erro"
        apagarMensagem();
        return;
    }
     //  Validação do cpf
    if (!validarCPF(cpf)) {
        alertLogin.innerText = "CPF inválido!";
        alertLogin.className = "erro"
        apagarMensagem();
        return;
    }
      // Integra com a api agendjá
 fetch("https://api-agendja.onrender.com/clientes/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        cpf: cpf,
        senha: senha
    })
})
.then(resposta => {
    if (!resposta.ok) {
        throw new Error("Erro ao realizar login");
    }

    return resposta.json();
})
.then(dados => {
    console.log(dados);

   // Guarda os dados do cliente autenticado
    cpfUsuarioLogado = dados.cpf;
    nomeUsuarioLogado = dados.nome;
    idUsuarioLogado = dados.id;
    tipoUsuarioLogado = "cliente";

    // limpa os campos
    document.getElementById("senha").value = "";
    document.getElementById("cpf").value = "";

    // vai para a tela de perfil
    telaLogin.style.display = "none";
    telaPerfil.style.display = "block";
    telaAtual = "perfil";

    // Mostra o nome e o telefone do cliente logado na tela de perfil recebendo os dados da api
    nomeCliente.innerText = `Olá, ${dados.nome}! 👋`;
    telefoneCliente.innerText = `Telefone: ${dados.telefone}`;
   
})
.catch(erro => {
    console.error(erro);
    alertLogin.innerText = "Não foi possível realizar o login. Verifique os dados e tente novamente.";
    alertLogin.className = "erro";
    apagarMensagem();
});
}
// função para o botão de entrar (profissional) - login
function entrarProfissional() {
    // pega os valores dos campos de login
    let cpf = document.getElementById("cpf").value.trim();
    let senha = document.getElementById("senha").value;
    // validação simples dos campos não preenchidos
    if ( validarCamposVazios(cpf) || validarCamposVazios(senha)) {
        alertLogin.innerText = "Por favor, preencha todos os campos!";
        alertLogin.className = "erro"
        apagarMensagem();
        return;
    }
     //  Validação do cpf
    if (!validarCPF(cpf)) {
        alertLogin.innerText = "CPF inválido!";
        alertLogin.className = "erro"
        apagarMensagem();
        return;
    }
      // Integra com a api agendjá
 fetch("https://api-agendja.onrender.com/profissionais/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        cpf: cpf,
        senha: senha
    })
})
.then(resposta => {
    if (!resposta.ok) {
        throw new Error("Erro ao realizar login");
    }

    return resposta.json();
})
.then(dados => {
    console.log(dados);

   // Guarda os dados do profissional autenticado
    cpfUsuarioLogado = dados.cpf;
    nomeUsuarioLogado = dados.nome;
    profissaoProfissionalLogado = dados.profissao;
    idUsuarioLogado = dados.id;
    tipoUsuarioLogado = "profissional";

    // limpa os campos
    document.getElementById("senha").value = "";
    document.getElementById("cpf").value = "";

    // vai para a tela de perfil
    telaLogin.style.display = "none";
    telaPerfilProfissional.style.display = "block";
    telaAtual = "perfil-profissional";

    // Mostra o nome e o telefone do profissional logado na tela de perfil recebendo os dados da api
    nomeProfissional.innerText = `Olá, ${dados.nome}! 👋`;
    telefoneProfissional.innerText = `Telefone: ${dados.telefone}`;
    // chama a função para mostrar a profissão do profissional logado
    mostrarProfissaoProfissional();
})
.catch(erro => {
    console.error(erro);
    alertLogin.innerText = "Não foi possível realizar o login. Verifique os dados e tente novamente.";
    alertLogin.className = "erro";
    apagarMensagem();
});
}
// função para excluir conta de um cliente
function excluirContaCliente(){
 let confirmacao = confirm("Tem certeza de que deseja excluir sua conta? Esta ação não pode ser desfeita.");
    
    if (confirmacao) {
        // Integra com a api agendjá para excluir a conta do cliente logado
        if (tipoUsuarioLogado === "cliente") {
            fetch(`https://api-agendja.onrender.com/clientes/${idUsuarioLogado}`, {
                method: "DELETE"
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Erro ao excluir conta");
                }
                return response.json();
            })
            .then(dados => {
                console.log(dados);
                // Limpa as variáveis globais
                cpfUsuarioLogado = "";
                nomeUsuarioLogado = "";
                idUsuarioLogado = "";
                tipoUsuarioLogado = "";
                // Redireciona para a tela de cadastro
                telaPerfil.style.display = "none";
                telaCadastro.style.display = "block";
                telaAtual = "cadastro";
                // Mensagem de sucesso na tela de cadastro
                alertCadastro.innerText = "Conta excluída com sucesso! Cadastre-se novamente.";
                alertCadastro.className = "sucesso";
                apagarMensagem();
            })
            .catch(erro => {
                console.error(erro);
                alertCadastro.innerText = "Não foi possível excluir a conta. Tente novamente mais tarde.";
                alertCadastro.className = "erro";
                apagarMensagem();
            });
        }
    }
}
// função para excluir conta de um profissional
function excluirContaProfissional(){
 let confirmacao = confirm("Tem certeza de que deseja excluir sua conta? Esta ação não pode ser desfeita.");
    
    if (confirmacao) {
        // Integra com a api agendjá para excluir a conta do profissional logado
        if (tipoUsuarioLogado === "profissional") {
            fetch(`https://api-agendja.onrender.com/profissionais/${idUsuarioLogado}`, {
                method: "DELETE"
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Erro ao excluir conta");
                }
                return response.json();
            })
            .then(dados => {
                console.log(dados);
                // Limpa as variáveis globais
                cpfUsuarioLogado = "";
                nomeUsuarioLogado = "";
                idUsuarioLogado = "";
                tipoUsuarioLogado = "";
                profissaoProfissionalLogado = "";
                // Redireciona para a tela de cadastro profissional
                telaPerfilProfissional.style.display = "none";
                telaCadastroProfissional.style.display = "block";
                telaAtual = "cadastro-profissional";
                // Mensagem de sucesso na tela de cadastro
                alertCadastroProfissional.innerText = "Conta excluída com sucesso! Cadastre-se novamente.";
                alertCadastroProfissional.className = "sucesso";
                apagarMensagem();
            })
            .catch(erro => {
                console.error(erro);
                alertCadastroProfissional.innerText = "Não foi possível excluir a conta. Tente novamente mais tarde.";
                alertCadastroProfissional.className = "erro";
                apagarMensagem();
            });
        }
    }
}
// redefinir senha vindo do perfil
function redefinirSenhaPerfil() {
    telaPerfil.style.display = "none";
    telaRedefinirSenha.style.display = "block";

    telaAtual = "redefinir-senha-perfil";
}
// redefinir senha vindo do perfil do profissional
function redefinirSenhaPerfilProfissional() {
    telaPerfilProfissional.style.display = "none";
    telaRedefinirSenha.style.display = "block";

    telaAtual = "redefinir-senha-perfil-profissional";
}
// função para salvar nova senha
function salvarNovaSenha(){
 // pega os valores dos campos de redefinir senha
    let cpf = document.getElementById("cpf-redefinir").value.trim();
    let novaSenha = document.getElementById("nova-senha").value;
    let confirmarNovaSenha = document.getElementById("confirmar-nova-senha").value;

 // validação se os campos estão vazios
 if( validarCamposVazios(cpf) || validarCamposVazios(novaSenha) || validarCamposVazios(confirmarNovaSenha) ) {
    alertRedefinirSenha.innerText = "Por favor preencha todos os campos, para redefinir a senha";
    alertRedefinirSenha.className = "erro";
    apagarMensagem();
    return
 }
 //validação do cpf digitado
    if (!validarCPF(cpf)) {
        alertRedefinirSenha.innerText = "CPF inválido!";
        alertRedefinirSenha.className = "erro";
        apagarMensagem();
        return;
    }
  // validação se senha e nova senha são iguais
   if (novaSenha !== confirmarNovaSenha) {
        alertRedefinirSenha.innerText = "Nova senha e a confirmação não coincidem";
        alertRedefinirSenha.className = "erro";
        apagarMensagem();
        return;
    }
 // Integra com a api agendjá
 // se o usuário for cliente, integra com a api para atualizar a senha do cliente
 if (tipoUsuarioLogado === "cliente") {
    fetch(`https://api-agendja.onrender.com/clientes/${idUsuarioLogado}/senha`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ senha: novaSenha })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Erro ao atualizar a senha");
        }
        return response.json();
    })
    .then(data => {
        // limpa os campos de redefinir
        document.getElementById("cpf-redefinir").value = "";
        document.getElementById("nova-senha").value = "";
        document.getElementById("confirmar-nova-senha").value = "";
        // volta pra tela de login
        telaRedefinirSenha.style.display = "none";
        telaLogin.style.display = "block";

        telaAtual = "login";

        // mensagem de sucesso na tela de login(tela atual no momento)
        alertLogin.innerText = "Senha atualizada, faça login novamente";
        alertLogin.className = "sucesso";
        apagarMensagem();
    })
    .catch(error => {
        console.error("Erro:", error);
        alertRedefinirSenha.innerText = "Erro ao atualizar a senha. Tente novamente.";
        alertRedefinirSenha.className = "erro";
        apagarMensagem();
    });
 }  
 // se o usuário for profissional, integra com a api para atualizar a senha do profissional
 if (tipoUsuarioLogado === "profissional") {
    fetch(`https://api-agendja.onrender.com/profissionais/${idUsuarioLogado}/senha`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ senha: novaSenha })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Erro ao atualizar a senha");
        }
        return response.json();
    })
    .then(data => {
        // limpa os campos de redefinir
        document.getElementById("cpf-redefinir").value = "";
        document.getElementById("nova-senha").value = "";
        document.getElementById("confirmar-nova-senha").value = "";
        // volta pra tela de login
        telaRedefinirSenha.style.display = "none";
        telaLogin.style.display = "block";

        telaAtual = "login";

        // mensagem de sucesso na tela de login(tela atual no momento)
        alertLogin.innerText = "Senha atualizada, faça login novamente";
        alertLogin.className = "sucesso";
        apagarMensagem();
    })
    .catch(error => {
        console.error("Erro:", error);
        alertRedefinirSenha.innerText = "Erro ao atualizar a senha. Tente novamente.";
        alertRedefinirSenha.className = "erro";
        apagarMensagem();
    });
 }
}
 // função para escolher o profissional
function buscarProfissionais() {
    // pega a profissão escolhida pelo cliente
    let profissaoEscolhida = profissaoBusca.value;

    // busca os profissionais na API AgendJá
    fetch("https://api-agendja.onrender.com/profissionais")
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao buscar profissionais");
            }
            return response.json();
        })
        .then(dados => {
            console.log(dados);

            // filtra os profissionais pela profissão escolhida
            let profissionaisFiltrados = dados.filter(
                profissional => profissional.profissao === profissaoEscolhida
            );

            if (profissionaisFiltrados.length === 0) {
                alertBusca.innerText = "Não há profissionais disponíveis para a profissão escolhida.";
                apagarMensagem();
            } else {
                // busca as disponibilidades na API AgendJá
                fetch("https://api-agendja.onrender.com/disponibilidade")
                    .then(response => {
                        if (!response.ok) {
                            throw new Error("Erro ao buscar disponibilidade");
                        }
                        return response.json();
                    })
                    .then(disponibilidades => {
                        console.log(disponibilidades);

                        // filtra as disponibilidades pelos profissionais filtrados
                        let disponibilidadesFiltradas = disponibilidades.filter(
                            disponibilidade =>
                                profissionaisFiltrados.some(
                                    profissional =>
                                        profissional.id === disponibilidade.profissional_id
                                )
                        );

                        if (disponibilidadesFiltradas.length === 0) {
                            alertBusca.innerText = "Não há disponibilidade de horários para os profissionais da profissão escolhida.";
                            apagarMensagem();
                            return;
                        }
                        // troca a tela de busca para a tela de disponibilidade e orçamento
                        telaBusca.style.display = "none";
                        telaDisponibilidadeOrcamento.style.display = "block";
                        telaAtual = "disponibilidade-orcamento";
                        // mostra os profissionais e suas disponibilidades na tela,usando a div "disponibilidades-do-profissional"
                        let disponibilidadesDoProfissional = document.getElementById("disponibilidades-do-profissional");
                        disponibilidadesDoProfissional.innerHTML = "";

                        disponibilidadesFiltradas.forEach(disponibilidade => {
                            let profissional = profissionaisFiltrados.find(p => p.id === disponibilidade.profissional_id);
                            if (profissional) {
                                let elemento = document.createElement("div");
                                elemento.innerHTML = `
                                    <p>${profissional.nome}</p>
                                    <p>Disponibilidade: ${formatarData(disponibilidade.data)} às ${disponibilidade.horario}</p>
                                    <p>Valor: ${formatarOrcamento(disponibilidade)}</p>
                                    <button>Agendar</button>
                                `;
                                // adiciona o evento de clique no botão "Agendar" para chamar a função agendar com os dados do profissional e da disponibilidade
                                let botaoAgendar = elemento.querySelector("button");
                              botaoAgendar.onclick = function() {
                              agendar(profissional, disponibilidade);
                              }; 
                             disponibilidadesDoProfissional.appendChild(elemento);                                   
                            }
                        });
                    })
                    .catch(error => {
                        console.error("Erro:", error);
                    });
            }
        })
        .catch(error => {
            console.error("Erro:", error);
        });
}
// função para formatar o valor do orçamento para moeda brasileira exemplo: 100 para R$ 100,00
function formatarOrcamento(disponibilidade) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(disponibilidade.orcamento);
}
// função para formatar a data para o formato brasileiro exemplo: 2024-06-01 para 01/06/2024
function formatarData(data) {
    let [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}/${ano}`;
}
// função para o botão agendar
function agendar(profissional, disponibilidade){
   let confirmacao = confirm(
    "Você está agendando o serviço de " + profissaoBusca.value +
    "\nProfissional: " + profissional.nome +
    "\nData: " + formatarData(disponibilidade.data) +
    "\nHorário: " + disponibilidade.horario +
    "\nOrçamento: " + formatarOrcamento(disponibilidade) +
    "\n\nTem certeza que deseja prosseguir?"
    );
 // se o usuário confirmar, chama a api para salvar o agendamento
    if (confirmacao) {
        // Integra com a api agendjá para salvar o agendamento
        fetch("https://api-agendja.onrender.com/agendamentos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                 cliente_id: Number(idUsuarioLogado),
                 profissional_id: profissional.id,
                 servico: profissaoBusca.value,
                 data: disponibilidade.data,
                 horario: disponibilidade.horario,
                 orcamento: disponibilidade.orcamento,
                 status: "Pendente"
            })
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Erro ao salvar agendamento");
        })
        .then(dados => {
            console.log("Agendamento salvo com sucesso:", dados);
            // troca a tela de disponibilidade e orçamento para a tela de agendamento confirmado
            telaDisponibilidadeOrcamento.style.display = "none";
            telaAgendamentoConfirmado.style.display = "block";
            telaAtual = "agendamento-confirmado";
            // Exibe mensagem com os detalhes do agendamento na tela de agendamento confirmado
            resumoAgendado.innerHTML = `
                <p>Serviço: ${profissaoBusca.value}</p>
                <p>Profissional: ${profissional.nome}</p>
                <p>Data: ${formatarData(disponibilidade.data)}</p>
                <p>Horário: ${disponibilidade.horario}</p>
                <p>Orçamento: ${formatarOrcamento(disponibilidade)}</p>
            `;
   
        })
        .catch(error => {
            console.error("Erro:", error);
        });
    }
}
// função para copiar agendamento
function copiar() {
    // 1. Pega o texto do resumo do agendamento confirmado
    let copiarTexto = resumoAgendado.innerText;
    // 2  copia o resumo para a área de transferência
    navigator.clipboard.writeText(copiarTexto);
    // 3 coloca o texto na tela
    alertAgendamentoConfirmado.innerText = "Resumo do agendamento confirmado copiado com sucesso!";
    alertAgendamentoConfirmado.className = "sucesso";
    apagarMensagem();   
}
// função para o cliente buscar serviços(botão buscar serviço)
function buscarServico() {
    telaPerfil.style.display = "none";
    telaBusca.style.display = "block";

    telaAtual = "buscar-profissional";
}
function servicosAgendados() {
    telaPerfil.style.display = "none";
    telaServicosAgendados.style.display = "block";
    telaAtual = "servicos-agendados";
    // integra com a api para mostrar os agendamentos confirmados de um cliente logado, usando o id do cliente logado
    fetch(`https://api-agendja.onrender.com/agendamentos/cliente/${idUsuarioLogado}`)
    .then(response => {
        if (!response.ok) {
            throw new Error("Erro ao buscar agendamentos");
        }
        return response.json();
    })
    .then(agendamentos => {
        // verifica se há agendamentos
        if (agendamentos.length === 0) {
            listaServicosAgendados.innerHTML = "";
            alertServicosAgendados.innerText = "Você não possui agendamentos confirmados.";
            return;
        }   // Busca a lista de profissionais
            fetch("https://api-agendja.onrender.com/profissionais")
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Erro ao buscar profissionais");
                    }
                    return response.json();
                })
                .then(profissionais => {

                    // Encontra o nome do profissional pelo ID
                    agendamentos.forEach(agendamento => {
                        const profissional = profissionais.find(
                            p => p.id === agendamento.profissional_id
                        );

                        if (profissional) {
                            agendamento.profissional = profissional.nome;
                        }
                    });

                    // Mostra os agendamentos na tela
                    listaServicosAgendados.innerHTML = "";
                    alertServicosAgendados.innerText = "";

                    agendamentos.forEach(agendamento => {
                       listaServicosAgendados.innerHTML += `
                            <div class="agendamento">
                                <p>Serviço: ${formatarProfissao(agendamento.servico)}</p>
                                <p>Profissional: ${agendamento.profissional || "Não encontrado"}</p>
                                <p>Data: ${formatarData(agendamento.data)}</p>
                                <p>Horário: ${agendamento.horario}</p>
                                <p>Orçamento: ${formatarOrcamento(agendamento)}</p> 
                                <button onclick="deletarAgendamento(${agendamento.id})">🗑️</button>                          
                            </div>
                        `;
                    });
                });
        })
        .catch(error => {
            console.error("Erro:", error);
        });
}
// Função do botão Cancelar Agendamento
function deletarAgendamento(idAgendamento) {
    // usa o confirm para o usuário confirmar se deseja se realmente cancelar o agendamento
    let confirmacao = confirm(
    "Tem certeza que deseja cancelar este agendamento?"
    );
    // se confirmar
    if (confirmacao) {
    // integra com api para deletar o agendamento    
       fetch(`https://api-agendja.onrender.com/agendamentos/${idAgendamento}`, {
                method: "DELETE"
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Erro ao excluir o agendamento");
                }
                return response.json();
            })
            .then(dados => {
                console.log(dados);
               // se tela atual for a tela que mostra os agendamentos na tela para o cliente
               if (telaAtual === "servicos-agendados") {
               // chama a função que mostra os agendamentos na tela de perfil do cliente
               servicosAgendados()
               // se a tela atual for a tela que mostra os agendamentos na tela para o profissional
               } else if (telaAtual === "servicos-agendados-profissional"){
              // chama a função que mostra os agendamentos na tela de perfil do profissional
              servicosProfissional()
               }
            })
            .catch(erro => {
                console.error(erro);
            });
        }
    }
// Função para ir para a tela de avaliação
function irParaAvaliacao() {
    telaServicosAgendados.style.display = "none";
    telaAvaliacao.style.display = "block";
    telaAtual = "avaliacao";

    document.getElementById("botoes-avaliacao").innerHTML = `
    <button onclick="enviarAvaliacao('Excelente')">Excelente</button>
    <button onclick="enviarAvaliacao('Boa')">Boa</button>
    <button onclick="enviarAvaliacao('Ruim/Pessimo')">Ruim</button>
    `;
}
// Função para enviar a avaliação
function enviarAvaliacao(avaliacao) {
//alerta de sucesso na tela de avaliação
    alertAvaliacao.innerText = "Obrigado por avaliar o serviço! Sua avaliação foi registrada com sucesso.";
    alertAvaliacao.className = "sucesso";
    apagarMensagem();

//coloca a avaliação na tela de serviços agendados
 avaliacaoRealizada.innerText = `Sua avaliação: ${avaliacao}`;
 // Salva a avaliação no localStorage vinculando ao CPF do usuário logado
 localStorage.setItem("avaliacao_" + cpfUsuarioLogado, avaliacaoRealizada.innerText);
}
// função para o botão de cadastro de profissional
function cadastrarProfissional() {
    //Limpa os campos do login ao ir para o cadastro
    document.getElementById("cpf").value = "";
    document.getElementById("senha").value = "";
    // Oculta a tela de boas-vindas e exibe a tela de cadastro
    telaLogin.style.display = "none";
    telaCadastroProfissional.style.display = "block";
    // Atualiza a variável de tela atual
    telaAtual = "cadastro-profissional";
}
// função para finalizar cadastro de profissional
function finalizarCadastroProfissional() {
    // pega os valores dos campos de cadastro
    let nome = document.getElementById("nome-profissional").value.trim();
    let cpf = document.getElementById("cpf-profissional").value.trim();
    let telefone = document.getElementById("telefone-profissional").value.trim();
    let profissao = document.getElementById("escolha-profissao").value;
    let senha = document.getElementById("senha-profissional").value;
    let confirmacaoSenha = document.getElementById("confirmar-senha-profissional").value;

    // 1. validação simples dos campos não preenchidos
    if (validarCamposVazios(cpf) || validarCamposVazios(nome) || validarCamposVazios(telefone) || validarCamposVazios(profissao) || validarCamposVazios(confirmacaoSenha)) {
        alertCadastroProfissional.innerText = "Por favor, preencha todos os campos!";
        alertCadastroProfissional.className = "erro";
        apagarMensagem();
        return;
    }

    // 2. validação do cpf
    if (!validarCPF(cpf)) {
        alertCadastroProfissional.innerText = "CPF inválido!";
        alertCadastroProfissional.className = "erro";
        apagarMensagem();
        return;
    }
    // 3. validação do nome (apenas letras e espaços)
    if (!validarNome(nome)) {
        alertCadastroProfissional.innerText = "Nome inválido! Digite apenas letras e espaços.";
        alertCadastroProfissional.className = "erro";
        apagarMensagem();
        return;
    }
    // 4. validação do telefone (apenas números e 10 ou 11 dígitos)
    if (!validarTelefone(telefone)) {
        alertCadastroProfissional.innerText = "Telefone inválido! Digite apenas números e com 10 ou 11 dígitos.";
        alertCadastroProfissional.className = "erro";
        apagarMensagem();
        return;
    }
    // 5. validação da senha
    if (senha !== confirmacaoSenha) {
        alertCadastroProfissional.innerText = "Senha e confirmação não coincidem!";
        alertCadastroProfissional.className = "erro";
        apagarMensagem();
        return;
    }
  // Integra com a api agendjá
 fetch("https://api-agendja.onrender.com/profissionais", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        nome: nome,
        cpf: cpf,
        telefone: telefone,
        profissao:profissao,
        senha: senha
    })
})
.then(resposta => {
    if (!resposta.ok) {
        throw new Error("Erro ao cadastrar um profissional");
    }

    return resposta.json();
})
.then(dados => {
    console.log(dados);

    // limpa os campos
    document.getElementById("nome-profissional").value = "";
    document.getElementById("cpf-profissional").value = "";
    document.getElementById("senha-profissional").value = "";
    document.getElementById("telefone-profissional").value = "";
    document.getElementById("confirmar-senha-profissional").value = "";
    document.getElementById("escolha-profissao").value = "";

    // vai para a tela de login
    telaCadastroProfissional.style.display = "none";
    telaLogin.style.display = "block";
    telaAtual = "login";

    alertLogin.innerText = "Cadastro realizado com sucesso! Faça seu login.";
    alertLogin.className = "sucesso";
    apagarMensagem();
})
.catch(erro => {
    console.error(erro);
    alertCadastroProfissional.innerText = "Não foi possível realizar o cadastro. Verifique os dados e tente novamente.";
    alertCadastroProfissional.className = "erro";
    apagarMensagem();
});
}
// Função para abrir a tela de Disponibilidade e Orçamento
function disponibilidadeProfissional() {
    telaPerfilProfissional.style.display = "none";
    telaDisponibilidadeOrcamentoProfissional.style.display = "block";
    telaAtual = "disponibilidade-orcamento-profissional";
}
//função para salvar a disponibilidade do profissional
function salvarDisponibilidadeOrcamento() {
    // pega os valores dos campos de disponibilidade
    let dataDisponivel = document.getElementById("data-profissional").value;
    let horarioDisponivel = document.getElementById("horario-profissional").value;
    let orcamentoDisponivel = document.getElementById("orcamento-profissional").value;

    // validação simples dos campos não preenchidos
    if (validarCamposVazios(dataDisponivel) || validarCamposVazios(horarioDisponivel) || validarCamposVazios(orcamentoDisponivel)) {
        alertDisponibilidadeOrcamentoProfissional.innerText = "Por favor, preencha todos os campos!";
        alertDisponibilidadeOrcamentoProfissional.className = "erro";
        apagarMensagem();
        return;
    }
 // integra com a api agendjá para salvar a disponibilidade do profissional
    fetch(`https://api-agendja.onrender.com/disponibilidade`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            profissional_id: idUsuarioLogado,
            data: dataDisponivel,
            horario: horarioDisponivel,
            orcamento: orcamentoDisponivel
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Erro ao salvar disponibilidade e orçamento");
        }
        return response.json();
    })
    .then(dados => {
        alertDisponibilidadeOrcamentoProfissional.innerText = "Disponibilidade e orçamento salvos com sucesso!";
        alertDisponibilidadeOrcamentoProfissional.className = "sucesso";
        apagarMensagem();
        // Limpa os campos após salvar
        document.getElementById("data-profissional").value = "";
        document.getElementById("horario-profissional").value = "";
        document.getElementById("orcamento-profissional").value = "";
    })
    .catch(erro => {
        console.error(erro);
        alertDisponibilidadeOrcamentoProfissional.innerText = "Não foi possível salvar a disponibilidade e o orçamento. Tente novamente.";
        alertDisponibilidadeOrcamentoProfissional.className = "erro";
        apagarMensagem();
    });
}
// função para ver os serviços agendados do profissional
function servicosProfissional() {
    telaPerfilProfissional.style.display = "none";
    telaServicosAgendadosProfissional.style.display = "block";
    telaAtual = "servicos-agendados-profissional";
    // integra com a api para mostrar os agendamentos confirmados de um profissional logado, usando o id do profissional logado
    fetch(`https://api-agendja.onrender.com/agendamentos/profissional/${idUsuarioLogado}`)
    .then(response => {
        if (!response.ok) {
            throw new Error("Erro ao carregar os serviços agendados");
        }
        return response.json();
    })
  .then(dados => {
    // verifica se há agendamentos
    if (dados.length === 0) {
        listaServicosAgendadosProfissional.innerHTML = "";
        alertServicosAgendadosProfissional.innerText =
            "Você não possui agendamentos confirmados.";
        return;
    }

    // busca os clientes para encontrar seus nomes
    fetch("https://api-agendja.onrender.com/clientes")
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao buscar clientes");
            }
            return response.json();
        })
        .then(clientes => {
            listaServicosAgendadosProfissional.innerHTML = "";

            dados.forEach(agendamento => {
                const cliente = clientes.find(
                    c => c.id === agendamento.cliente_id
                );

                listaServicosAgendadosProfissional.innerHTML += `
                    <div class="agendamento">
                        <p>Serviço: ${formatarProfissao(agendamento.servico)}</p>
                        <p>Cliente: ${cliente ? cliente.nome : "Não encontrado"}</p>
                        <p>Data: ${formatarData(agendamento.data)}</p>
                        <p>Horário: ${agendamento.horario}</p>
                        <p>Orçamento: ${formatarOrcamento(agendamento)}</p>
                        <button onclick="deletarAgendamento(${agendamento.id})">🗑️</button>
                    </div>
                `;
            });
        })
        .catch(erro => {
            console.error("Erro ao buscar clientes:", erro);
        });
   })     
}
// função para validar o CPF
function validarCPF(cpf) {
    // verifica se o CPF tem 11 caracteres
    if (cpf.length !== 11) {
        return false;
    }
    // verifica se todos os caracteres são números
    if (!/^\d+$/.test(cpf)) {
        return false;
    }
    // verifica se todos os dígitos são iguais (ex: 11111111111)
    if (/^(\d)\1+$/.test(cpf)) {
        return false;
    }
    return true;
}
// função para validar campos vazios
function validarCamposVazios(campo) {
// verifica se o campo está vazio
    if (!campo || campo.trim() === "") {
        return true; // campo vazio
    }
    return false; // campo preenchido
}
// função para validar o nome do usuário (apenas letras e espaços)
function validarNome(nome) {
// verifica se o nome contém apenas letras e espaços
    if (!/^[A-Za-zÀ-ÿ\s]+$/.test(nome)) {
        return false; // nome inválido
    }
   return true; // nome válido
}
// função para validar o telefone do profissional
function validarTelefone(telefone) {
    // remove tudo o que não for número
    let apenasNumeros = telefone.replace(/\D/g, "");
    // verifica se tem 10 ou 11 dígitos
    if (apenasNumeros.length !== 10 && apenasNumeros.length !== 11) {
        return false;
    }
    return true;
}
// função para ir para tela de editar dados do perfil do usuário
function  editarPerfilCliente() {
telaPerfil.style.display = "none";
telaEditarDadosCliente.style.display = "block";
telaAtual = "editar-perfil";
}
// função para ir para a tela de editar dados do profissional
function editarDadosProfissional() {
 telaPerfilProfissional.style.display = "none";
 telaEditarDadosProfissional.style.display = "block";
 telaAtual = "editar-perfil-profissional"; 
}
// função para confirmar a edição dos dados do cliente
function finalizarEdicaoPerfil() {
// pega os valores que o cliente digitou
let nome = document.getElementById("nome-editar").value.trim();
let cpf = document.getElementById("cpf-editar").value.trim();
let telefone = document.getElementById("telefone-editar").value.trim(); 
// 1. validação simples dos campos não preenchidos
    if (validarCamposVazios(cpf) || validarCamposVazios(nome) || validarCamposVazios(telefone)) {
        alertEditarDadosCliente.innerText = "Por favor, preencha todos os campos!";
        alertEditarDadosCliente.className = "erro";
        apagarMensagem();
        return;
    }

    // 2. validação do cpf
    if (!validarCPF(cpf)) {
        alertEditarDadosCliente.innerText = "CPF inválido!";
        alertEditarDadosCliente.className = "erro";
        apagarMensagem();
        return;
    }
    // 3. validação do nome (apenas letras e espaços)
    if (!validarNome(nome)) {
        alertEditarDadosCliente.innerText = "Nome inválido! Digite apenas letras e espaços.";
        alertEditarDadosCliente.className = "erro";
        apagarMensagem();
        return;
    }
    // 4. validação do telefone (apenas números e 10 ou 11 dígitos)
    if (!validarTelefone(telefone)) {
        alertEditarDadosCliente.innerText = "Telefone inválido! Digite apenas números e com 10 ou 11 dígitos.";
        alertEditarDadosCliente.className = "erro";
        apagarMensagem();
        return;
    }
    // integrar com a api agendjá para atualizar os dados do cliente
    fetch(`https://api-agendja.onrender.com/clientes/${idUsuarioLogado}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            cpf: cpf,
            telefone: telefone
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Erro ao atualizar os dados do cliente");
        }
        return response.json();
    })
    .then(dados => {
        // atualiza os dados do cliente logado
        nomeUsuarioLogado = nome;
        cpfUsuarioLogado = cpf;
        nomeCliente.innerText = `Olá, ${nomeUsuarioLogado}! 👋`;
        telefoneCliente.innerText = `Telefone: ${telefone}`;
        // limpa os campos
        document.getElementById("nome-editar").value = "";
        document.getElementById("cpf-editar").value = "";
        document.getElementById("telefone-editar").value = "";
        // volta para a tela de perfil do cliente
        telaEditarDadosCliente.style.display = "none";
        telaPerfil.style.display = "block";
        telaAtual = "perfil";
        
        alertPerfil.innerText = "Dados atualizados com sucesso";
        alertPerfil.className = "sucesso";
        apagarMensagem();
    })
    .catch(error => {
        console.error("Erro ao atualizar os dados do cliente:", error);
        alertEditarDadosCliente.innerText = "Erro ao atualizar os dados do cliente!";
        alertEditarDadosCliente.className = "erro";
        apagarMensagem();
    });
}
// função para editar os dados de um profissional
function finalizarEdicaoDadosProfissional() {
// pega os valores que o cliente digitou
let nome = document.getElementById("nome-profissional-editar").value.trim();
let cpf = document.getElementById("cpf-profissional-editar").value.trim();
let telefone = document.getElementById("telefone-profissional-editar").value.trim();
let profissao = document.getElementById("profissao-profissional-editar").value;
// 1. validação simples dos campos não preenchidos
    if (validarCamposVazios(cpf) || validarCamposVazios(nome) || validarCamposVazios(telefone) || validarCamposVazios(profissao)){
        alertEditarDadosProfissional.innerText = "Por favor, preencha todos os campos!";
        alertEditarDadosProfissional.className = "erro";
        apagarMensagem();
        return;
    }

    // 2. validação do cpf
    if (!validarCPF(cpf)) {
        alertEditarDadosProfissional.innerText = "CPF inválido!";
        alertEditarDadosProfissional.className = "erro";
        apagarMensagem();
        return;
    }
    // 3. validação do nome (apenas letras e espaços)
    if (!validarNome(nome)) {
        alertEditarDadosProfissional.innerText = "Nome inválido! Digite apenas letras e espaços.";
        alertEditarDadosProfissional.className = "erro";
        apagarMensagem();
        return;
    }
    // 4. validação do telefone (apenas números e 10 ou 11 dígitos)
    if (!validarTelefone(telefone)) {
        alertEditarDadosProfissional.innerText = "Telefone inválido! Digite apenas números e com 10 ou 11 dígitos.";
        alertEditarDadosProfissional.className = "erro";
        apagarMensagem();
        return;
    }
    // integrar com a api agendjá para atualizar os dados do profissional
    fetch(`https://api-agendja.onrender.com/profissionais/${idUsuarioLogado}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            cpf: cpf,
            telefone: telefone,
            profissao: profissao
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Erro ao atualizar os dados do profissional");
        }
        return response.json();
    })
    .then(dados => {
        // atualiza os dados do profissional logado
        nomeUsuarioLogado = nome;
        cpfUsuarioLogado = cpf;
        profissaoProfissionalLogado = profissao;
        nomeProfissional.innerText = `Olá, ${nomeUsuarioLogado}! 👋`;
        telefoneProfissional.innerText = `Telefone: ${telefone}`;
        // chama a função para mostrar a profissão do profissional logado na tela de perfil
        mostrarProfissaoProfissional();
        // limpa os campos
        document.getElementById("nome-profissional-editar").value = "";
        document.getElementById("cpf-profissional-editar").value = "";
        document.getElementById("telefone-profissional-editar").value = "";
        document.getElementById("profissao-profissional-editar").value = "";
        // volta para a tela de perfil do profissional
        telaEditarDadosProfissional.style.display = "none";
        telaPerfilProfissional.style.display = "block";
        telaAtual = "perfil-profissional";

        // mensagem na tela de login do profissional
        alertPerfilProfissional.innerText = "Dados atualizados com sucesso";
        alertPerfilProfissional.className = "sucesso";
        apagarMensagem();
    })
    .catch(error => {
        console.error("Erro ao atualizar os dados do profissional:", error);
        alertEditarDadosProfissional.innerText = "Erro ao atualizar os dados do profissional!";
        alertEditarDadosProfissional.className = "erro";
        apagarMensagem();
    });
}
// função para organizar a forma de mostrar a profissão do profissional na tela de perfil do profissional
function mostrarProfissaoProfissional() {
    if (profissaoProfissionalLogado === "eletricista") {
        profissaoProfissional.innerText = "Profissão: Eletricista";
    } else if (profissaoProfissionalLogado === "encanador") {
        profissaoProfissional.innerText = "Profissão: Encanador(a)";
    } else if (profissaoProfissionalLogado === "pintor") {
        profissaoProfissional.innerText = "Profissão: Pintor(a)";
    } else if (profissaoProfissionalLogado === "pedreiro") {
        profissaoProfissional.innerText = "Profissão: Pedreiro(a)";
    } else if (profissaoProfissionalLogado === "jardineiro") {
        profissaoProfissional.innerText = "Profissão: Jardineiro(a)";
    } else if (profissaoProfissionalLogado === "mecanico") {
        profissaoProfissional.innerText = "Profissão: Mecânico(a)";
    } else if (profissaoProfissionalLogado === "montador") {
        profissaoProfissional.innerText = "Profissão: Montador(a) de Móveis";
    } else {
    profissaoProfissional.innerText = `Profissão: ${profissaoProfissionalLogado}`;
    }
}
// função para formatar a profissão do profissional no perfil do profissional, para mostrar a primeira letra maiúscula e o restante minúsculo
function formatarProfissao(profissao) {
     if (profissao === "eletricista") {
        return "Eletricista";
    } else if (profissao === "encanador") {
        return "Encanador(a)";
    } else if (profissao === "pintor") {
        return "Pintor(a)";
    } else if (profissao === "pedreiro") {
        return "Pedreiro(a)";
    } else if (profissao === "jardineiro") {
        return "Jardineiro(a)";
    } else if (profissao === "mecanico") {
        return "Mecânico(a)";
    } else if (profissao === "montador") {
        return "Montador(a) de Móveis";
    } else {
        return profissao;
    }
}
// função para caso usuário esqueça a senha
function esqueciSenha() {
alert("Em breve você poderá redefinir sua senha, aguarde a próxima atualização do sistema!");
}