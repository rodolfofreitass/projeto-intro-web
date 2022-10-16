//SEMANA 1 - Criação dos itens com variáveis e suas propriedades
//SEMANA 2 - Criaçao de uma propriedade com array, nesse caso, motor
//SEMANA 3 - Transformação de variavéis para objetos

const carro1 = {
    nome: 'Lamborghini Murciélago',
    potenciaHp: 572,
    transmManual: true,
    motor: ['V12', 'Aspirado'],
    imagem: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Gray_Lamborghini_LP640.jpg',
    link: 'https://pt.wikipedia.org/wiki/Lamborghini_Murci%C3%A9lago',
    zeroCemSeg: 3.4,
    velMaxima: 332,
    anoLancamento: 2001
}

const carro2 = {
    nome: 'Porsche Carrera GT',
    potenciaHp: 603,
    transmManual: true,
    motor: ['V10', 'Aspirado'],
    imagem: 'http://cdn.shopify.com/s/files/1/0009/0849/2853/products/226A7455.jpg?v=1628482130',
    link: 'https://pt.wikipedia.org/wiki/Porsche_Carrera_GT',
    zeroCemSeg: 3.5,
    velMaxima: 330,
    anoLancamento: 2003
}

const carro3 = {
        nome: 'McLaren F1',
        potenciaHp: 627,
        transmManual: true,
        motor: ['V12', 'Aspirado'],
        imagem: 'https://media.racingonline.com.br/uploads/2019/09/368523_906243_11328_mclaren_f1_chassis_63_at_hampton_court.jpg',
        link: 'https://pt.wikipedia.org/wiki/McLaren_F1',
        zeroCemSeg: 3.2,
        velMaxima: 386,
        anoLancamento: 1993
}

let carros = [
    {
        nome: 'Ferrari Enzo',
        potenciaHp: 660,
        transmManual: false,
        motor: ['V12', 'Aspirado'],
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Orange_Enzo_Ferrari_%287191948164%29.jpg',
        link: 'https://pt.wikipedia.org/wiki/Ferrari_Enzo_Ferrari',
        zeroCemSeg: 3.6,
        velMaxima: 350,
        anoLancamento: 2002
    },

    {
        nome: 'Mercedes-Benz SLR',
        potenciaHp: 626,
        transmManual: false,
        motor: ['V8', 'Supercharger'],
        imagem: 'https://www.motortrend.com/uploads/sites/11/2017/02/2006-Mercedes-McLaren-SLR-01.jpg',
        link: 'https://pt.wikipedia.org/wiki/Mercedes-Benz_SLR_McLaren',
        zeroCemSeg: 3.8,
        velMaxima: 334,
        anoLancamento: 2003
    },

    {
        nome: 'Maserati MC12',
        potenciaHp: 630,
        transmManual: false,
        motor: ['V12', 'Aspirado'],
        imagem: 'https://img4.autodeclics.com/photos/11/328944/hd-maserati-mc12---toutes-les-photos-de-la-tr%C3%A8s-exclusive-supercar-%C3%A0-vendre-aux-ench%C3%A8res.jpg',
        link: 'https://en.wikipedia.org/wiki/Maserati_MC12',
        zeroCemSeg: 3.8,
        velMaxima: 330,
        anoLancamento: 2004
    },

    {
        nome: 'Ford GT',
        potenciaHp: 558,
        transmManual: true,
        motor: ['V8', 'Supercharger'],
        imagem: 'https://www.supercars.net/blog/wp-content/uploads/2016/04/1109291-10241.jpg',
        link: 'https://pt.wikipedia.org/wiki/Ford_GT',
        zeroCemSeg: 3.8,
        velMaxima: 330,
        anoLancamento: 2004
    },
]; 

//SEMANA 4 - Inserção dos objetos através do push, após verificar com if e else

if (carro1.transmManual === true) {
    carros.push(carro1)
} else {
    alert('CARRO 1 NÃO FOI ADICIONADO')
}

if (carro2.transmManual === true) {
    carros.push(carro2)
} else {
    alert('CARRO 2 NÃO FOI ADICIONADO')
}

if (carro3.transmManual === true) {
    carros.push(carro3)
} else {
    alert('CARRO 3 NÃO FOI ADICIONADO')
}

//SEMANA 5 - Utilizando laços para gerar um relatório

function Relatorio(car) {
    let carro = `Nome:${car.nome.toUpperCase()}\nPotência(cv): ${car.potenciaHp} \nTransmissão manual? ${car.transmManual ? "Sim" : "Não"} \nMotor: ${car.motor.join()}`
    return carro
}
function relatorioArray(carros) {
    for (let i of carros) {
        console.log(Relatorio(i));
    }
}
relatorioArray(carros)

//SEMANA 6 - Criando um relatório com função
//SEMANA 12 - Utilizando esta função de busca com o botão de pesquisa

function pesquisaRelatorio( ) {
    let car = document.getElementById("pesquisaCarro").value;
    let carrosFilter = carros.filter(carro => {
        return carro.nome.toUpperCase().includes(car.toUpperCase())
    })
    if (carrosFilter.length === 0) {
        alert('CARRO NÃO ENCONTRADO')
        gerarCarros(carros)
    } else {
        gerarCarros(carrosFilter)
    }
}


//SEMANA 11 - Criação dos itens através da manipulação do DOM

function gerarCarros(carros) {
    let CarrosListados = document.getElementById("carros-listados")
    CarrosListados.innerHTML = ""
    let carrosDesign
    for (const carro of carros) {
        carrosDesign = `<section class="carros-design" id="carros-design">
            <figure><img class="fotos-carros" src="${carro.imagem}" alt="${carro.nome}"></figure>
        <ul>
            <li class="infos" id="carro-1"><a href="${carro.link}" target="_blank"><p>${(carro.nome).toUpperCase()}</p></a></li>
            <li class="infos"><h2>Potência:</h2>${carro.potenciaHp} cavalos</li>
            <li class="infos"><h2>Transmissão: </h2>${carro.transmManual ?"Manual":"Automática"}</li>
            <li class="infos"><h2>Motor: </h2>${carro.motor.join(", ")}</li>
            <li class="infos"><h2>0 a 100km/h em segundos: </h2>${carro.zeroCemSeg}</li>
            <li class="infos"><h2>Velocidade máxima em km/h: </h2>${carro.velMaxima}</li>
            <li class="infos"><h2>Ano de lançamento:</h2> ${carro.anoLancamento}</li>
        </ul>
    </section>`
        CarrosListados.innerHTML += carrosDesign
    }
}
gerarCarros(carros)


//Média numérica calculada

const mediaPotencia = (carro1.potenciaHp+carro2.potenciaHp+carro3.potenciaHp)/3;
console.log(`Média de potência entre Lamborghini Murciélago, Porsche Carrera GT e McLaren F1: ${mediaPotencia} hp`);

// Verificação de valores booleanos true 

const verificaTransm = carro1.transmManual && carro2.transmManual && carro3.transmManual
console.log(`Lamborghini Murciélago, Porsche Carrera GT e McLaren F1 possuem transmissão manual? ${verificaTransm}`);


//Linhas de código já utilizadas e que não servem mais para o projeto

// let novoCarro = Relatorio(carro3)
// console.log(novoCarro);
// console.log(`${nome1.toUpperCase()}\nPotência(cv): ${potenciaHp1}\nTransmissão manual?: ${transmManual1}\nMotor: ${motor1}`);
// console.log(`${nome2.toUpperCase()}\nPotência(cv): ${potenciaHp2}\nTransmissão manual?: ${transmManual2}\nMotor: ${motor2}`);
// console.log(`${nome3.toUpperCase()}\nPotência(cv): ${potenciaHp3}\nTransmissão manual?: ${transmManual3}\nMotor: ${motor3}`);