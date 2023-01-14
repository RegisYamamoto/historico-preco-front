const produto = document.querySelector("#produto");
const formulario = document.querySelector("#formulario");
const idProdutoInput = document.querySelector("#id-produto");

//buscarProduto();

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    buscarProduto();
});

async function buscarProduto() {
    const response = await fetch("http://localhost:8080/produtos/" + idProdutoInput.value);
    console.log(response);
    const data = await response.json();
    console.log(data);

    mostrarProduto(data);
}

function mostrarProduto(data) {
    const nomeHtml = document.createElement("h4");
    nomeHtml.innerText = data.nome;
    produto.appendChild(nomeHtml);
    console.log(nomeHtml);

    const idHtml = document.createElement("p");
    idHtml.innerText = "id: " + data.id;
    produto.appendChild(idHtml);

    const descricaoHtml = document.createElement("p");
    descricaoHtml.innerText = "descrição: " + data.descricao;
    produto.appendChild(descricaoHtml);

    const marcaHtml = document.createElement("p");
    marcaHtml.innerText = "marca: " + data.marca;
    produto.appendChild(marcaHtml);

    const dataCadastroHtml = document.createElement("p");
    dataCadastroHtml.innerText = "data de cadastro: " + data.dataCadastro;
    produto.appendChild(dataCadastroHtml);

    const dataUltAtualizacaoHtml = document.createElement("p");
    dataUltAtualizacaoHtml.innerText = "data da ultima atualização: " + data.dataUltAtualizacao;
    produto.appendChild(dataUltAtualizacaoHtml);

    const precos = data.precos;
    precos.map((preco) => {
        console.log("preco: " + JSON.stringify(preco));
        listarPrecos(preco);
    });
}

function listarPrecos(preco) {
    console.log("entrou em listarPrecos()");
    const precoHtml = document.createElement("h4");
    precoHtml.innerText = "preço: R$ " + preco.preco;
    produto.appendChild(precoHtml);
}