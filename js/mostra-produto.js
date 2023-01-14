const produtoHtml = document.querySelector("#produto");
const formularioHtml = document.querySelector("#formulario");
const idProdutoInput = document.querySelector("#id-produto");

formularioHtml.addEventListener("submit", (e) => {
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
    produtoHtml.appendChild(nomeHtml);
    console.log(nomeHtml);

    const idHtml = document.createElement("p");
    idHtml.innerText = "id: " + data.id;
    produtoHtml.appendChild(idHtml);

    const descricaoHtml = document.createElement("p");
    descricaoHtml.innerText = "descrição: " + data.descricao;
    produtoHtml.appendChild(descricaoHtml);

    const marcaHtml = document.createElement("p");
    marcaHtml.innerText = "marca: " + data.marca;
    produtoHtml.appendChild(marcaHtml);

    const dataCadastroHtml = document.createElement("p");
    dataCadastroHtml.innerText = "data de cadastro: " + data.dataCadastro;
    produtoHtml.appendChild(dataCadastroHtml);

    const dataUltAtualizacaoHtml = document.createElement("p");
    dataUltAtualizacaoHtml.innerText = "data da ultima atualização: " + data.dataUltAtualizacao;
    produtoHtml.appendChild(dataUltAtualizacaoHtml);

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
    produtoHtml.appendChild(precoHtml);
}