const formularioHtml = document.querySelector("#formulario");
const idProdutoInput = document.querySelector("#id-produto");
const precoInput = document.querySelector("#preco");
const lojaConsultadaInput = document.querySelector("#loja-consultada");
const respostaHtml = document.querySelector("#resposta");

formularioHtml.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log("precoInput.value: " + precoInput.value);
    console.log("idProdutoInput: " + idProdutoInput.value);

    let requestBody = {
        preco: precoInput.value,
        lojaConsultada: lojaConsultadaInput.value,
    }
    requestBody = JSON.stringify(requestBody);

    cadastrarPreco(requestBody);
});

async function cadastrarPreco(requestBody) {
    console.log("request body: " + requestBody);
    const uri = "http://localhost:8080/produtos/" + idProdutoInput.value + "/precos";
    console.log("uri: " + uri);
    const response = await fetch(uri, {
       method: "POST",
       body: requestBody,
       headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
       } 
    });

    const data = await response.json();

    document.querySelectorAll("#resposta p").forEach(r => r.remove());

    if (data.error === undefined) {
        const resposta = document.createElement("p");
        resposta.innerText = "Cadastro de preço realizado com sucesso";
        respostaHtml.appendChild(resposta);
        formularioHtml.reset();
    } else {
        const resposta = document.createElement("p");
        resposta.innerText = "Erro ao cadastrar preço";
        respostaHtml.appendChild(resposta);
    }
}