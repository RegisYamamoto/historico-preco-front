const listaProdutosHtml = document.querySelector("#lista-produtos");

getProdutos();

async function getProdutos() {
    const response = await fetch("http://localhost:8080/produtos?page=0&size=5&sort=nome");
    const data = await response.json();

    const produtosResposeDto = data.produtosResponseDto;
    console.log("produtosResposeDto: " + JSON.stringify(Object.entries(produtosResposeDto)));

    produtosResposeDto.map((produtoResponseDto) => {
        console.log("produtoResposeDto: " + JSON.stringify(Object.entries(produtoResponseDto)));
        listaProdutos(produtoResponseDto);
    });
}

function listaProdutos(produtoResponseDto) {
    const nomeHtml = document.createElement("h3");
    nomeHtml.innerText = produtoResponseDto.nome;
    listaProdutosHtml.appendChild(nomeHtml);

    const precos = produtoResponseDto.precos;
    console.log("precos: " + JSON.stringify(Object.entries(precos)));

    precos.map((preco) => {
        console.log("preco: " + JSON.stringify(Object.entries(preco)));
        listarPrecos(preco);
    });

    
}

function listarPrecos(preco) {
    const precoHtml = document.createElement("p");
    precoHtml.innerText = preco.preco;
    listaProdutosHtml.appendChild(precoHtml);

    const dataConsultaHtml = document.createElement("p");
    dataConsultaHtml.innerText = preco.dataConsulta;
    listaProdutosHtml.appendChild(dataConsultaHtml);
}