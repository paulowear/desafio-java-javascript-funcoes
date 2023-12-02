function calculadoraPartidasRankeadas(vitorias, derrotas) {
    let resultado = vitorias - derrotas;
    return resultado;
}

function teste(vitorias = 55) {
    let nivel = "";

    switch (true) {
        case vitorias <= 10:
            nivel = "Ferro";
            break;
        case vitorias >= 11 && vitorias <= 20:
            nivel = "Bronze";
            break;
        case vitorias >= 21 && vitorias <= 50:
            nivel = "Prata";
            break;
        case vitorias >= 51 && vitorias <= 80:
            nivel = "Ouro";
            break;
        case vitorias >= 81 && vitorias <= 90:
            nivel = "Diamante";
            break;
        case vitorias >= 91 && vitorias <= 100:
            nivel = "Lendario";
            break;
        case vitorias >= 101:
            nivel = "Imortal";
            break;
    }

    return nivel;
}

function Main() {
    let result = calculadoraPartidasRankeadas(20, 13);
    let level = teste();
    console.log("O Herói tem de saldo de " + result + " está no nível de " + level);
}

Main();
