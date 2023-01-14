const listaProdutosHtml = document.querySelector("#lista-produtos");

getProdutos();

async function getProdutos() {
    const response = await fetch("http://localhost:8080/produtos?page=0&size=5&sort=nome");
    const data = await response.json();

    const produtosResposeDto = data.produtosResponseDto;
    console.log("produtosResposeDto: " + JSON.stringify(produtosResposeDto));

    produtosResposeDto.map((produtoResponseDto) => {
        console.log("produtoResposeDto: " + JSON.stringify(produtoResponseDto));
        listaProdutos(produtoResponseDto);
    });
}

function listaProdutos(produtoResponseDto) {
    const nomeHtml = document.createElement("h4");
    nomeHtml.innerText = produtoResponseDto.nome;
    listaProdutosHtml.appendChild(nomeHtml);

    const idHtml = document.createElement("p");
    idHtml.innerText = produtoResponseDto.id;
    listaProdutosHtml.append(idHtml);

    const precos = produtoResponseDto.precos;
    precos.map((preco) => {
        console.log("preco: " + JSON.stringify(preco));
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