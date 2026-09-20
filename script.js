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
let tituloDisponibilidade = document.getElementById("titulo-disponibilidade");
let profissional = document.getElementById("profissional");
let data = document.getElementById("data");
let horario = document.getElementById("horario");
let orcamento = document.getElementById("orcamento");
let resumoAgendado = document.getElementById("resumo-agendado");
let nomeUsuario = document.getElementById("nome-usuario");
let listaServicosAgendados = document.getElementById("servicos-agendados");
let avaliacaoRealizada = document.getElementById("avaliacao-realizada");
// botões de navegação
let btnLogin = document.getElementById("btn-logar");
let btnVoltar= document.getElementById("btn-voltar");

// Mensagens de alerta de erro ou sucesso
let alertLogin = document.getElementById("msg-login");
let alertCadastro = document.getElementById("msg-cadastro");
let alertBusca = document.getElementById("msg-busca");
let alertRedefinirSenha = document.getElementById("msg-redefinir-senha");
let alertDisponibilidadeOrcamento = document.getElementById("msg-disponibilidade-orcamento");
let alertAgendamentoConfirmado = document.getElementById("msg-agendamento-confirmado");
let alertPerfil = document.getElementById("msg-perfil");
let alertServicosAgendados = document.getElementById("msg-servicos-agendados");
let alertAvaliacao = document.getElementById("msg-avaliacao");
let alertCadastroProfissional = document.getElementById("msg-cadastro-profissional");
let alertDisponibilidadeOrcamentoProfissional = document.getElementById("msg-disponibilidade-orcamento-profissional");
let alertServicosAgendadosProfissional = document.getElementById("msg-servicos-agendados-profissional");
// variaveis para guardar o serviço e profissional escolhido
let servicoAtual;
let profissionalSorteado;
// variável para armazenar o nome do usuário logado e cpf do usuário logado
let nomeUsuarioLogado = "";
let cpfUsuarioLogado = "";
let tipoUsuarioLogado = "";
// varriaveis para armazenar os dados do profissional logado
let nomeProfissional = document.getElementById("nome-profissional-perfil");
let profissaoProfissional = document.getElementById("profissao-profissional-perfil");
let telefoneProfissional = document.getElementById("telefone-profissional-perfil");
let cpfProfissionalLogado = "";
let telefoneProfissionalLogado = "";
let profissaoProfissionalLogado = "";
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
        alertServicosAgendados.innerText = "";
        alertAvaliacao.innerText = "";
        alertCadastroProfissional.innerText = "";
        alertDisponibilidadeOrcamentoProfissional.innerText = "";
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
    } else if (telaAtual === "redefinir-senha-login") {
    telaRedefinirSenha.style.display = "none";
    telaLogin.style.display = "block";

    telaAtual = "login";
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
    // 5. Validação se o CPF já está cadastrado
    if (localStorage.getItem(cpf) !== null) {
        alertCadastro.innerText = "Este CPF já está cadastrado no sistema!";
        alertCadastro.className = "erro";
        apagarMensagem();
        return;
    }
    // 6. Validação se senha e confirmação são iguais
    if (senha !== confirmacaoSenha) {
        alertCadastro.innerText = "Senha e confirmação não coincidem!";
        alertCadastro.className = "erro";
        apagarMensagem();
        return;
    }
    // salva o cpf e a senha do usuário no localStorage
    localStorage.setItem(cpf, senha);
    localStorage.setItem("nome_" + cpf, nome); // <--- salva o nome do usuário vinculando ao CPF
    localStorage.setItem("telefone_" + cpf, telefone); // <--- salva o telefone do usuário vinculando ao CPF
    localStorage.setItem("tipo_" + cpf, "cliente"); // guarda o tipo de usuário como "cliente", para diferenciar de profissionais
    // limpa os campos de cadastro
    document.getElementById("nome").value = "";
    document.getElementById("cpf-cadastro").value = "";
    document.getElementById("senha-cadastro").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("confirmar-senha").value = "";

    // redireciona para a tela de login
    telaCadastro.style.display = "none";
    telaLogin.style.display = "block";
    telaAtual = "login";

    // Coloca a mensagem na TELA DE LOGIN (onde o usuário está agora) e some logo depois
    alertLogin.innerText = "Cadastro realizado com sucesso! Faça seu login.";
    alertLogin.className = "sucesso";
    apagarMensagem();
}

// função para o botão de entrar (login)
function entrar() {
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
   //busca os dados salvos no localStore
   let dadosSalvos = localStorage.getItem(cpf);
   // verifica se os dados digitados são iguais
   // Se não encontrou os dados no localStorage
    if (dadosSalvos === null) {
        alertLogin.innerText = "Usuário não encontrado. Por favor, cadastre-se!";
        alertLogin.className = "erro"
        apagarMensagem();
        return;
    }

    // Se a senha digitada for diferente da senha salva
    if (dadosSalvos !== senha) {
        alertLogin.innerText = "Senha incorreta!";
        alertLogin.className = "erro"
        apagarMensagem(); 
        return;
    }

    // Guarda os dados nas variáveis globais
    cpfUsuarioLogado = cpf;
    nomeUsuarioLogado = localStorage.getItem("nome_" + cpf);
    tipoUsuarioLogado = localStorage.getItem("tipo_" + cpf); // <--- Guarda o tipo (cliente ou profissional)  
    // Se passou por todas as verificações
    // oculta a tela de login
        telaLogin.style.display = "none";
     // Limpa os campos de login após o sucesso 
    document.getElementById("cpf").value = "";
    document.getElementById("senha").value = "";

   if (tipoUsuarioLogado === "profissional") {
    // Busca os dados no localStorage e guarda nas variáveis
        profissaoProfissionalLogado = localStorage.getItem("profissao_" + cpf);
        telefoneProfissionalLogado = localStorage.getItem("telefone_" + cpf);

        // Coloca os textos na tela
        nomeProfissional.innerText = `Bem-vindo(a), ${nomeUsuarioLogado}!`;
        profissaoProfissional.innerText = `Profissão: ${profissaoProfissionalLogado}`;
        telefoneProfissional.innerText = `Telefone: ${telefoneProfissionalLogado}`;
        // mostra a tela de perfil do profissional
        telaPerfilProfissional.style.display = "block";
        telaAtual = "perfil-profissional";
    } else {
        // se for "cliente" vai pro perfil do cliente
        telaPerfil.style.display = "block";
        nomeUsuario.innerText = `Olá, ${nomeUsuarioLogado}! 👋`;
        telaAtual = "perfil";
    }
}
// função para excluir conta
function excluirConta(){
 let confirmacao = confirm("Tem certeza de que deseja excluir sua conta? Esta ação não pode ser desfeita.");
    
    if (confirmacao) {
       // Remove os dados do usuário do localStorage
    localStorage.removeItem(cpfUsuarioLogado);
    localStorage.removeItem("nome_" + cpfUsuarioLogado);
    localStorage.removeItem("agendamento_" + cpfUsuarioLogado);
   // Limpa as variáveis globais
    cpfUsuarioLogado = "";
    nomeUsuarioLogado = "";
    // Redireciona para a tela de cadastro
    telaPerfil.style.display = "none";
    telaCadastro.style.display = "block";
    telaAtual = "cadastro";
    // Mensagem de sucesso na tela de cadastro
    alertCadastro.innerText = "Conta excluída com sucesso! Cadastre-se novamente.";
    alertCadastro.className = "sucesso";
    apagarMensagem();
    }

}
// redefinir senha vindo do login
function redefinirSenhaLogin() {
    telaLogin.style.display = "none";
    telaRedefinirSenha.style.display = "block";

    telaAtual = "redefinir-senha-login";
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
 //validação se o cpf digitado bate com o salvo
     if (localStorage.getItem(cpf) === null) {
        alertRedefinirSenha.innerText = "CPF não cadastrado, cadastre-se!";
        alertRedefinirSenha.className = "erro"
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
  // se passar por todas as validações salva a nova senha
   localStorage.setItem(cpf, novaSenha);
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
}
// função para escolher o profissional
function selecionarServico(servico) {
    servicoAtual = servico
    // chama a função para sortear o profissional
    sorteioProfissional(servico);

    // trocar de tela 
    telaBusca.style.display = "none";
    telaDisponibilidadeOrcamento.style.display = "block";

    telaAtual = "disponibilidade-orcamento";
}
function outroProfissional() {
    alertBusca.innerText = "Em breve serão cadastrados novos profissionais!";
    apagarMensagem();
}
// constante para simular um banco de dados 
// nomes de profissionais suas disponibilidades(datas e horario)
// orçamento estipulado para o serviço
const profissionaisPorServico = {
    Pedreiro: [
        {
            nome: "João Silva",
            data: "31/08/2026",
            horario: "08:00h",
            orcamento: "R$ 150,00"
        },
        {
            nome: "Carlos Sousa ",
            data: "31/08/2026",
            horario: "13:30h",
            orcamento: "R$ 180,00"
        },
         {
            nome: "Mateus Oliveira ",
            data: "01/09/2026",
            horario: "10:30h",
            orcamento: "R$ 180,00"
        }
    ],

    Eletricista: [
        {
            nome: "Marcos Lima",
            data: "02/09/2026",
            horario: "14:00h",
            orcamento: "R$ 120,00"
        },
        {
            nome: "Lucas Mendes",
            data: "03/09/2026",
            horario: "15:00h",
            orcamento: "R$ 140,00"
        },
         {
            nome: "Luana Carvalho",
            data: "03/09/2026",
            horario: "15:30h",
            orcamento: "R$ 150,00"
        },
    ],

    Encanador: [
        {
            nome: "Roberto Alves",
            data: "28/08/2026",
            horario: "09:00h",
            orcamento: "R$ 100,00"
        },
        {
            nome: "Fernando Dias",
            data: "01/09/2026",
            horario: "14:00h",
            orcamento: "R$ 130,00"
        },
         {
            nome: "Larissa Ribeiro",
            data: "04/09/2026",
            horario: "14:20h",
            orcamento: "R$ 150,00"
        },
    ]
};
// função para sortear um profissional
function sorteioProfissional(servico) {

    // 1. Pega a lista de profissionais da categoria escolhida
    const lista = profissionaisPorServico[servico];
    // 2. Sorteia uma posição aleatória da lista
    const indiceSorteado = Math.floor(Math.random() * lista.length);
    // 3. Pega o profissional daquela posição
    profissionalSorteado = lista[indiceSorteado];
    // 4. mostra na tela
    tituloDisponibilidade.innerText = `Disponibilidade e Orçamento - ${servico}`;
    profissional.innerText = `Nome do Profissional: ${profissionalSorteado.nome}`;
    data.innerText = `Data Disponível: ${profissionalSorteado.data}`;
    horario.innerText = `Horário Disponível: ${profissionalSorteado.horario}`;
    orcamento.innerText = `Orçamento Estipulado: ${profissionalSorteado.orcamento}`;
}
// função nova disponibilidade e orçamento
function nvDisponibilidadeOrcamento() {
    // chama a função de sorteio para sortear outra disponibilidade 
    sorteioProfissional(servicoAtual);
}
// função para o botão agendar
function agendar(){
   let confirmacao = confirm(
        `Você está agendando com o(a) ${servicoAtual}: ${profissionalSorteado.nome} para ${profissionalSorteado.data} às ${profissionalSorteado.horario} no valor de ${profissionalSorteado.orcamento}.\n\nConfirmar Agendamento?`
    );

    if (confirmacao) {
        let textoResumo = `Agendamento confirmado para: ${servicoAtual}\nProfissional: ${profissionalSorteado.nome}\nData/Horário: ${profissionalSorteado.data} às ${profissionalSorteado.horario}\nValor: ${profissionalSorteado.orcamento}`;

        resumoAgendado.innerText = textoResumo;
        localStorage.setItem("agendamento_" + cpfUsuarioLogado, textoResumo);

        telaDisponibilidadeOrcamento.style.display = "none";
        telaAgendamentoConfirmado.style.display = "block";
        telaAtual = "agendamento-confirmado";
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
// função para buscar serviços
function buscarServico() {
    telaPerfil.style.display = "none";
    telaBusca.style.display = "block";

    telaAtual = "buscar-profissional";
}
function servicosAgendados() {
    telaPerfil.style.display = "none";
    telaServicosAgendados.style.display = "block";
    telaAtual = "servicos-agendados";

    let agendamentoSalvo = localStorage.getItem("agendamento_" + cpfUsuarioLogado);

    if (agendamentoSalvo) {
        // Se houver um agendamento salvo, exibe-o na tela
        // usa o <br> para quebrar linha no HTML
        agendamentoSalvo = agendamentoSalvo.replace(/\n/g, "<br>");
        listaServicosAgendados.innerHTML = `${agendamentoSalvo} <br><br>
        <button onclick="cancelarAgendamento()">🗑️ Cancelar Agendamento</button>
        <button onclick="irParaAvaliacao()">⭐ Avaliar Serviço</button>
        `;
    } else {
        listaServicosAgendados.innerHTML = "Vc ainda não tem serviços agendados.";
    }
}
// Função do botão Cancelar Agendamento
function cancelarAgendamento() {
    // Confirmação do usuário antes de cancelar o agendamento
    let confirmacao = confirm("Tem certeza de que deseja cancelar este agendamento?");
    // Se o usuário confirmar, remove o agendamento do localStorage
    if (confirmacao) {
        localStorage.removeItem("agendamento_" + cpfUsuarioLogado);
       // mostra mensagem de sucesso na tela de serviços agendados
        alertServicosAgendados.innerText = "Agendamento cancelado com sucesso!";
        alertServicosAgendados.className = "sucesso";
        apagarMensagem();
    // Atualiza a tela de serviços agendados
        servicosAgendados();
    }
    // Se o usuário não confirmar, apenas retorna para a tela de serviços agendados
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
    let profissao = document.getElementById("profissao").value.trim();
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
    // 5. validação se CPF já está cadastrado
    if (localStorage.getItem(cpf) !== null) {
        alertCadastroProfissional.innerText = "Este CPF já está cadastrado no sistema!";
        alertCadastroProfissional.className = "erro";
        apagarMensagem();
        return;
    }

    // 6. validação da senha
    if (senha !== confirmacaoSenha) {
        alertCadastroProfissional.innerText = "Senha e confirmação não coincidem!";
        alertCadastroProfissional.className = "erro";
        apagarMensagem();
        return;
    }

    // salva o CPF e a senha do profissional
    localStorage.setItem(cpf, senha);

    // salva os dados do profissional vinculados ao CPF
    localStorage.setItem("nome_" + cpf, nome);
    localStorage.setItem("telefone_" + cpf, telefone);
    localStorage.setItem("profissao_" + cpf, profissao);
    localStorage.setItem("tipo_" + cpf, "profissional"); // guarda o tipo de usuário como "profissional", para diferenciar de clientes

    // limpa os campos
    document.getElementById("nome-profissional").value = "";
    document.getElementById("cpf-profissional").value = "";
    document.getElementById("telefone-profissional").value = "";
    document.getElementById("profissao").value = "";
    document.getElementById("senha-profissional").value = "";
    document.getElementById("confirmar-senha-profissional").value = "";

    // volta para a tela de login
    telaCadastroProfissional.style.display = "none";
    telaLogin.style.display = "block";
    telaAtual = "login";

    // mensagem na tela de login
    alertLogin.innerText = "Cadastro de profissional realizado com sucesso! Faça seu login.";
    alertLogin.className = "sucesso";
    apagarMensagem();
}
// função para excluir conta do profissional
function excluirContaProfissional() {

    let confirmacao = confirm("Tem certeza de que deseja excluir sua conta? Esta ação não pode ser desfeita.");

    if (confirmacao) {

        // Remove os dados do profissional do localStorage
        localStorage.removeItem(cpfUsuarioLogado);
        localStorage.removeItem("nome_" + cpfUsuarioLogado);
        localStorage.removeItem("telefone_" + cpfUsuarioLogado);
        localStorage.removeItem("profissao_" + cpfUsuarioLogado);

        // Limpa as variáveis globais
       cpfUsuarioLogado = "";
       nomeUsuarioLogado = "";
       tipoUsuarioLogado ="";

       cpfProfissionalLogado = "";
       telefoneProfissionalLogado = "";
       profissaoProfissionalLogado = "";
        // Redireciona para a tela de cadastro
        telaPerfilProfissional.style.display = "none";
        telaCadastroProfissional.style.display = "block";
        telaAtual = "cadastro-profissional";

        // Mensagem de sucesso
        alertCadastroProfissional.innerText = "Conta excluída com sucesso! Cadastre-se novamente.";
        alertCadastroProfissional.className = "sucesso";
        apagarMensagem();
    }
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
    alertDisponibilidadeOrcamentoProfissional.innerText = "Disponibilidade e orçamento salvos com sucesso!";
    alertDisponibilidadeOrcamentoProfissional.className = "sucesso";
    apagarMensagem();
    // Limpa os campos após salvar
    document.getElementById("data-profissional").value = "";
    document.getElementById("horario-profissional").value = "";
    document.getElementById("orcamento-profissional").value = "";
}
// função para ver os serviços agendados do profissional
function servicosProfissional() {
    telaPerfilProfissional.style.display = "none";
    telaServicosAgendadosProfissional.style.display = "block";
    telaAtual = "servicos-agendados-profissional";
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