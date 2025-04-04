// Seleciona os elementos
const loginContainer = document.getElementById("loginContainer");
const cadastroContainer = document.getElementById("cadastroContainer");
const showCadastro = document.getElementById("showCadastro");
const showLogin = document.getElementById("showLogin");

// Quando clicar em "Cadastre-se"
showCadastro.addEventListener("click", (event) => {
    event.preventDefault(); // Evita o recarregamento da página
    loginContainer.style.display = "none"; // Esconde o login
    cadastroContainer.style.display = "block"; // Mostra o cadastro
});

// Quando clicar em "Faça login"
showLogin.addEventListener("click", (event) => {
    event.preventDefault(); // Evita o recarregamento da página
    cadastroContainer.style.display = "none"; // Esconde o cadastro
    loginContainer.style.display = "block"; // Mostra o login
});
