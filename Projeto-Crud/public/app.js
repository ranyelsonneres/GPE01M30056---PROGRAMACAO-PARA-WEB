//lógica do nosso front-end

const form = document.getElementById('user-form');

//evento: submit
form.addEventListener('submit', e =>{
    e.preventDefault();

    //nome
    const nome = document.getElementById('nome').value;
    //email
    const email = document.getElementById('email').value;
    console.log(nome, email);

    //função para cadastrar
    cadastrarUsuario(nome, email);
})

//função cadastrar
function cadastrarUsuario(nome, email) {
    //fetch (requisitar do front para o back)
    fetch('/api/users/', {
        method: 'POST',
        headers: {'Content-Type':'application/json'}, //conteudo da msg é um json
        body: JSON.stringify({nome, email})
    })
    .then(()=>{
        form.reset();
    })
}
