document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var nome = document.getElementById("nome").value;
    var dataNascimento = document.getElementById("dataNascimento").value;
    var telefone = document.getElementById("telefone").value;
    var emailCadastro = document.getElementById("emailCadastro").value;
    var senhaCadastro = document.getElementById("senhaCadastro").value;
    var confirmarSenha = document.getElementById("confirmarSenha").value;
    
    if (senhaCadastro !== confirmarSenha) {
        alert("As senhas não correspondem!");
        return;
    }
    
    var usuario = {
        nome: nome,
        dataNascimento: dataNascimento,
        telefone: telefone,
        email: emailCadastro,
        senha: senhaCadastro
    };
    
    // Verifica se o email já está cadastrado
    if (localStorage.getItem(emailCadastro)) {
        alert("Este email já está cadastrado!");
        return;
    }
    
    localStorage.setItem(emailCadastro, JSON.stringify(usuario));
    alert("Cadastro realizado com sucesso!");
    document.getElementById("cadastroForm").reset();
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var emailLogin = document.getElementById("emailLogin").value;
    var senhaLogin = document.getElementById("senhaLogin").value;
    
    var usuario = JSON.parse(localStorage.getItem(emailLogin));
    
    if (!usuario || usuario.senha !== senhaLogin) {
        alert("Email ou senha incorretos!");
        return;
        alert("Login realizado com sucesso!");
    }

    // Redireciona para a página de início após o login bem-sucedido
    window.location.href = "index.html";
    
});