const form = document.getElementById("loginForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const usuario = document.getElementById("Usuario").value;
    const senha = document.getElementById("Senha").value;

    if (usuario === "prefeitura" && senha === "pref@456") {
        window.location.href = "./PREF/gestao_geral_pref.html";
    } else if (usuario === "tutor" && senha === "123456") {
        window.location.href = "./USER/home.html";
    } else if (usuario === "Ong" && senha === "ong$-135") {
        window.location.href = "./ONG/home_ong.html";
    } else {
        alert("Usuário ou senha inválidos.");
    }
});