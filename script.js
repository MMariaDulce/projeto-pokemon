document.getElementById("Login").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o envio do formulário
  
    // Obtenha os valores dos campos de entrada
    const Nome = document.getElementById("login").value;
    const Senha = document.getElementById("senha").value;
  
    // Aqui você faria a validação do login e senha
    // Por exemplo, você pode compará-los com valores armazenados em algum lugar ou realizar uma solicitação de verificação para um servidor
    if (Nome.trim() !== "" && Senha.trim() !== "") {
    // Exemplo de validação simples
    if (Nome !== Senha) 
      alert("Login Aprovado!");
      // Redirecionar para outra página ou executar outras ações após o login bem-sucedido
    }
  });
  