const formularioHtml = document.querySelector("#formulario");
const idInput = document.querySelector("#id-produto");
const nomeInput = document.querySelector("#nome");
const descricaoInput = document.querySelector("#descricao");
const marcaInput = document.querySelector("#marca");
const respostaHtml = document.querySelector("#resposta")

formularioHtml.addEventListener("submit", (e) => {
    e.preventDefault();

    let requestBody = {
        id: idInput.value,
        nome: nomeInput.value,
        descricao: descricaoInput.value,
        marca: marcaInput.value
    }
    requestBody = JSON.stringify(requestBody);

    cadastrarProduto(requestBody);
});

async function cadastrarProduto(requestBody) {
    console.log("requestBody: " + requestBody);

    const response = await fetch("http://localhost:8080/produtos", {
        method: "POST",
        body: requestBody,
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        } 
    });

    const data = await response.json();
    console.log("data: " + JSON.stringify(data));

    document.querySelectorAll("#resposta p").forEach(r => r.remove());

    console.log("data.error: " + JSON.stringify(data.error));

    if (data.erro === false || data.erro === undefined) {
        const resposta = document.createElement("p");
        resposta.innerText = "Cadastro de produto realizado com sucesso";
        respostaHtml.appendChild(resposta);
        formularioHtml.reset();
    } else {
        const resposta = document.createElement("p");
        resposta.innerText = data.motivo;
        respostaHtml.appendChild(resposta);
    }
}