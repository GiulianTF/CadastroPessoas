function salvarPessoa(http, scope) {
    http({
        url: "https://www.selida.com.br/avaliacaotecnica/api/Pessoas",
        method: 'POST',
        headers: { 'Chave': '70203B9A-A3A6-47DD-8025-33319B7B81C2' },
        data: JSON.stringify(pessoa)
    })
        .then(function (response) {
            if (response.data.code == "200") {
                scope.pessoaId = response.data.data;
                scope.exibEnd(true);
            }
        });
}

function getPessoa(http, scope) {
    http({
        url: "https://www.selida.com.br/avaliacaotecnica/api/Pessoas/GetAll",
        method: 'GET',
        headers: { 'Chave': '70203B9A-A3A6-47DD-8025-33319B7B81C2' }
    })
        .then(function (response) {
            scope.pessoas = response.data.data;
        });
}

function deletarPessoa(http, pessoaId, window) {
    http({
        url: "https://www.selida.com.br/avaliacaotecnica/api/Pessoas/" + pessoaId,
        method: 'DELETE',
        headers: { 'Chave': '70203B9A-A3A6-47DD-8025-33319B7B81C2' },
    })
        .then(function (response) {
            if (response.data.code == "202") {
                window.location.reload();
            };
        });
}

function alterarPessoa(http, pessoa) {
    http({
        url: "https://www.selida.com.br/avaliacaotecnica/api/Pessoas/" + pessoa.pessoaId,
        method: 'PUT',
        headers: { 'Chave': '70203B9A-A3A6-47DD-8025-33319B7B81C2' },
        data: JSON.stringify(pessoa)
    })
        .then(function (response) {
            window.sessionStorage.setItem('keyPessoa', JSON.stringify(pessoa));
        });
    
}