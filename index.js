
function calculadoraPartidasRankeadas(vitorias, derrotas){
    let resultado = vitorias - derrotas;
    return resultado;
}

function teste(vitorias = 55, nivel){
    
    if(vitorias <= 10){
        return nivel ="Ferro";
        
           
    }else if(vitorias >= 11 && vitorias <= 20){
        return nivel ="Bronze";
           
    }else if(vitorias >= 21 && vitorias <= 50){
        return nivel = "Prata";
           
    }else if(vitorias >= 51 && vitorias <= 80){
        return nivel = "Ouro";
           
    }else if(vitorias >= 81 && vitorias <= 90){
        return nivel = "Diamante";
           
    }else if(vitorias >= 91 && vitorias <= 100){
        return nivel = "Lendario";
           
    }
    else if(vitorias >= 101){
        return nivel = "Imortal";
           
    }
}


function Main(){
    let result = calculadoraPartidasRankeadas(20,13);
    let level = teste();
    console.log("O Herói tem de saldo de " + result + " está no nível de " + level);
} 

Main();