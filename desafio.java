package br.com.paulo.desafio;

public class desafio {

    public static int calculadoraPartidasRankeadas(int vitorias, int derrotas) {
        int resultado = vitorias - derrotas;
        return resultado;
    }

    public static String teste(int vitorias, String nivel) {
        vitorias = 10;
        if (vitorias <= 10) {
            return nivel = "Ferro";
        } else if (vitorias >= 11 && vitorias <= 20) {
            return nivel = "Bronze";
        } else if (vitorias >= 21 && vitorias <= 50) {
            return nivel = "Prata";
        } else if (vitorias >= 51 && vitorias <= 80) {
            return nivel = "Ouro";
        } else if (vitorias >= 81 && vitorias <= 90) {
            return nivel = "Diamante";
        } else if (vitorias >= 91 && vitorias <= 100) {
            return nivel = "Lendario";
        } else if (vitorias >= 101) {
            return nivel = "Imortal";
        }
        return "";
    }

    public static void main(String[] args) {
        int result = calculadoraPartidasRankeadas(20, 13);
        String level = teste(55, null); // Substitua null pelo valor desejado para 'nivel'
        System.out.println("O Heroi tem um saldo de " + result + " e esta no nivel de " + level);
    }
}
