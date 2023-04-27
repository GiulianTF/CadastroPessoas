function getEndereco(http, scope) {
    http({
        url: "https://www.selida.com.br/avaliacaotecnica/api/Endereco/GetAll/" + scope.pessoa.pessoaId,
        method: 'GET',
        headers: { 'Chave': '70203B9A-A3A6-47DD-8025-33319B7B81C2' },
    })
        .then(function (response) {
            if (response.data.code == "200") {
                scope.enderecos = response.data.data;
            };
        });
};

function salvarEndereco(endereco, http, window, reload) {
    console.log(JSON.stringify(endereco));
    http({
        url: "https://www.selida.com.br/avaliacaotecnica/api/Endereco",
        method: 'POST',
        headers: { 'Chave': '70203B9A-A3A6-47DD-8025-33319B7B81C2' },
        data: JSON.stringify(endereco)
    })
        .then(function (response) {
            if (response.data.code == "200" && reload) {
                window.location.reload();
            };
        });

}

function deletarEndereco(http, enderecoId, window ) {
    http({
        url: "https://www.selida.com.br/avaliacaotecnica/api/Endereco/" + enderecoId,
        method: 'DELETE',
        headers: { 'Chave': '70203B9A-A3A6-47DD-8025-33319B7B81C2' },
    })
        .then(function (response) {
            console.log(response.data);
            if (response.data.code == "202") {
                window.location.reload();
            };
        });
}
