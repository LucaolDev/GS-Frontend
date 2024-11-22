const tbody = document.querySelector('#paineis');

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const consumo = Number(document.querySelector('#consumo').value);
    const potencia = Number(document.querySelector('#potenciaPainel').value);
    const irradiacao = Number(document.querySelector('#irradiacaoSolar').value);
    const eficiencia = Number(document.querySelector('#eficienciaSistema').value);
    
    const qtdPlacas = ((consumo / (potencia * irradiacao * eficiencia))*30/1000);


    tbody.innerHTML += `
    
    <tr> 
        <td>${consumo}</td>
        <td>${potencia}</td>
        <td>${irradiacao}</td>
        <td>${eficiencia}</td>
        <td>${Math.ceil(qtdPlacas)}</td>
    </tr>
    `;

    this.reset();
    
})