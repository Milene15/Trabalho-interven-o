let estoque = { //Quantidade de produtos disponiveis
	"Celular": 150,
	"Fone de ouvido": 55,
	"Caixa de aúdio":28,
	"Tablet": 32,
	"Carregador portátil": 29
};
let vendas = { //Quantidade de produtos ao final da semana
	"Celular": 38,
	"Fone de ouvido": 10,
	"Pendrive": 17,
	"Caixa de aúdio": 8,
	"Tablet": 5,
	"Carregador portátil": 15
};

function calcularEstoque(estoque,vendas) {//função para receber os objetos
	let unidadesRestantes = {};
	for (let produto in estoque) { //estrutura de repetição para automatizar o calculo
		unidadesRestantes[produto] = estoque[produto] - vendas[produto];
	}
	return unidadesRestantes;


}
let unidadesRestantes = calcularEstoque(estoque,vendas);
console.log(unidadesRestantes); //console.log vai imprimir as informações

// esquipe: Milene e Alessandra