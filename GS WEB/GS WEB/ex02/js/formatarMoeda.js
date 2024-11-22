function formatarMoeda(valor) {
    // A função recebe um parâmetro chamado 'valor', que é assumido como um número.

    const valorFormatado = new Intl.NumberFormat('pt-BR', {
        // Cria um novo objeto Intl.NumberFormat, que é uma função incorporada do JavaScript
        // para formatação de números de acordo com regras locais.

        style: 'currency',
        // Define o estilo de formatação como 'currency', indicando que queremos formatar como moeda.

        currency: 'BRL'
        // Define a moeda como o Real brasileiro (BRL).
    }).format(valor);
    // Chama o método 'format' do objeto Intl.NumberFormat, passando o 'valor' como argumento.
    // O resultado é armazenado na variável 'valorFormatado'.

    return valorFormatado;
    // Retorna a string formatada, que representa o 'valor' como moeda brasileira.
}
