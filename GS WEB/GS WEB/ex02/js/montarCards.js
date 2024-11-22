const cards = document.querySelector('#paineis');
let totalPaineis = 0;
let maiorValor = 0;

paineis.forEach(painel => {
   if(painel.fabricante.toLowerCase() === "resun" || painel.fabricante.toLowerCase() === "ztroon"){
    cards.innerHTML += `
        <div class="col-6 my-2">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title"> ${painel.fabricante}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">${painel.quantidade_celulas} células</h6>
                <div class="d-flex justify-content-between">
                    <p>Tipo de Placa: ${painel.tipo_placa} </p>
                    <p>Potência: ${painel.potencia} kW</p>
                </div>
                <h3>${formatarMoeda(painel.preco_unitario)}</h3>
            </div>
        </div>
    </div>
        `;
        totalPaineis++;
        if(painel.preco_unitario >= maiorValor){
            maiorValor = painel.preco_unitario;
        }
   }
});

document.querySelector('#totalPaineis').textContent = totalPaineis;
document.querySelector('#maiorValor').textContent = formatarMoeda(maiorValor);