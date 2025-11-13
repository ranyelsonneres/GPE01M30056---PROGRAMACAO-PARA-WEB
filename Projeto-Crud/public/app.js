//lógica do nosso front-end

const form = document.getElementById('user-form');
const userList = document.getElementById('user-list');

//chamar a função para carregar os usuários:
carregarUsuarios();

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
        carregarUsuarios();
    })
}

//função carregar os usuários
function carregarUsuarios(){
    fetch('/api/users/') //por padrão ele faz a requisição do tipo GET ao servidor
    .then(res => res.json()) //converte a resposta da requisição para o formato JSON
    .then(data => { //transforma o JSON em um objeto javascript
        userList.innerHTML = ''; //inicialmente vazia
        data.forEach(user =>{
            const li = document.createElement('li'); //criando um elemento da lista (ul)
            li.innerHTML = `${user.nome} - ${user.email}
            <button onclick="atualizarUsuario(${user.id})">Editar</button>
            <button onclick="excluirUsuario(${user.id})">Excluir</button>`;
            userList.append(li);
        });
    });
}

//função para editar (atualizar)
function atualizarUsuario(id) {
    const nome = prompt('Digite o novo nome:');
    const email = prompt("Digite o novo e-mail:");

    //requisição ao servidor (backend)
    fetch(`/api/users/${id}`, {
        method: 'PUT',
        headers: {'Content-Type':'application/json'}, //conteudo da msg é um json
        body: JSON.stringify({nome, email})
    })
    .then(()=>{
        carregarUsuarios();
    })
}

//função para excluir (delete)
function excluirUsuario(id) {
    const confirmacao = confirm("Tem certeza que deseja excluir este usuário?");
    if(!confirmacao){
        return;
    }
    
    fetch(`/api/users/${id}`, {
        method: 'DELETE'
    })
    .then(()=>{
        carregarUsuarios();
    })
}
