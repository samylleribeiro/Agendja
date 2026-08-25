// VARIAVEIS GLOBAIS
let telaAtual = "boas-vindas"; // Variável para controlar a tela atual

// Elementos das telas
let telaBoasVindas = document.getElementById('tela-boas-vindas');
let telaLogin = document.getElementById("tela-login");
let telaCadastro = document.getElementById("tela-cadastro");
let telaBusca = document.getElementById("tela-buscar-profissional")
// botões de navegação
let btnLogin = document.getElementById("btn-logar");
let btnVoltar= document.getElementById("btn-voltar");

// Mensagens de erro
let alertLogin = document.getElementById("msg-login");
let alertCadastro = document.getElementById("msg-cadastro");
let alertBusca = document.getElementById("msg-busca");

// Função simples para apagar a mensagem de erro após 3 segundos
function apagarMensagem() {
    setTimeout(function() {
        alertLogin.innerText = "";
        alertCadastro.innerText = "";
        alertBusca.innerText = "";
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
    } else if (telaAtual === "buscar-profissional") {
        telaBusca.style.display = "none";
        telaLogin.style.display = "block";

        telaAtual = "login";
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
function cadastrar() {
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
    let confirmacaoSenha = document.getElementById("confirmar-senha").value;

    // 1.validação simples dos campos não preenchidos
    if (cpf === "" || senha === "" || nome === "" || confirmacaoSenha === "") {
        alertCadastro.innerText = "Por favor, preencha todos os campos!";
        alertCadastro.className = "erro";
        apagarMensagem();
        return;
    }

    // 2.Validação dos 11 dígitos do CPF
    if (cpf.length !== 11) {
        alertCadastro.innerText = "O CPF deve ter exatamente 11 dígitos!";
        alertCadastro.className = "erro";
        apagarMensagem();
        return;
    }
    // 3.validação se cpf já esta cadastrado no sistema
    if(localStorage.getItem(cpf) !== null) {
        alertCadastro.innerText = "Este CPF já está cadastrado no sistema!";
        alertCadastro.className = "erro";
        apagarMensagem();
        return;
    }
    // 4.validação simples se a senha e a confirmação de senha são iguais
    if (senha !== confirmacaoSenha) {
        alertCadastro.innerText = "Senha e confirmação não coincidem!";
        alertCadastro.className = "erro";
        apagarMensagem();
        return;
    }
     
    // salva o cpf e a senha do usuário no localStorage
    localStorage.setItem(cpf, senha);

    // limpa os campos de cadastro
    document.getElementById("nome").value = "";
    document.getElementById("cpf-cadastro").value = "";
    document.getElementById("senha-cadastro").value = "";
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
    if (cpf === "" || senha === "") {
        alertLogin.innerText = "Por favor, preencha todos os campos!";
        alertLogin.className = "erro"
        apagarMensagem();
        return;
    }
     //  Validação dos 11 dígitos do CPF
    if (cpf.length !== 11) {
        alertLogin.innerText = "O CPF deve ter exatamente 11 dígitos!";
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

    // Se passou por todas as verificações
    // Oculta a tela de login e exibe a tela de buscar profissional
    telaLogin.style.display = "none";
    telaBusca.style.display = "block";
    telaAtual = "buscar-profissional"; // Atualiza a variável de controle de tela
    // Limpa os campos de login após o sucesso 
    document.getElementById("cpf").value = "";
    document.getElementById("senha").value = "";
}
// função para excluir conta
function excluirConta(){
    // pega os inputs da tela de login
    let cpf = document.getElementById("cpf").value.trim();
    let senha = document.getElementById("senha").value;
    
    // validação se o campos estão vazios
    if (cpf === "" || senha === "") {
        alertLogin.innerText = "Por favor, digite seus dados nos campos acima para excluir a conta!";
        alertLogin.className = "erro"
        apagarMensagem();
        return;
    }
    //validação se o cpf tem 11 digitos
    if (cpf.length !== 11) {
        alertLogin.innerText = "O CPF deve ter exatamente 11 dígitos!";
        alertLogin.className = "erro"
        apagarMensagem();
        return;
    }
    // validação se o cpf novo não já esta salvo
    if (localStorage.getItem(cpf) === null) {
        alertLogin.innerText = "CPF não encontrado!";
        alertLogin.className = "erro"
        apagarMensagem();
        return;
    }
    // Busca a senha salva no localStorage
    let senhaSalva = localStorage.getItem(cpf);
    // validação se a senha digitada e igual a salva:
    if (senhaSalva !== senha) {
        alertLogin.innerText = "Senha incorreta! Não foi possível excluir a conta.";
        alertLogin.className = "erro";
        apagarMensagem();
        return;
    }
    // Remove os dados que tinha salvo
    localStorage.removeItem(cpf);

    // limpa os inputs da tela de login
    document.getElementById("cpf").value = "";
    document.getElementById("senha").value = "";

    // Vai para a tela de cadastro
    telaLogin.style.display = "none";
    telaCadastro.style.display = "block";
    telaAtual = "cadastro";

    // Coloca a mensagem na TELA DE CADASTRO (onde o usuário está agora) e some logo depois
    alertCadastro.innerText = "Conta excluída com sucesso! Cadastre novos dados.";
    alertCadastro.className = "sucesso"
    apagarMensagem();
}
// função para redefinir senha
function redefinirSenha() {
    alert("Em breve séra implementada a função para redefinir a senha");
}
// função para escolher o profissional
function selecionarServico(servico) {
    alert(`Em breve você poderá ver a disponibilidade para o serviço de ${servico}!`);
}
function outroProfissional() {
    alertBusca.innerText = "Em breve serão cadastrados novos profissionais!";
    apagarMensagem();
}