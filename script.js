public class GerenciadorDeEstudos {
    public static void main(String[] args) {
        System.out.println("=== Iniciando o Hub de Materiais ===");
        

        String materia = "Biologia";
        String topico = "Genética";
        
        String[] materiais = {
            "Resumo do Professor (PDF)",
            "Videoaula - DNA e RNA (YouTube)",
            "Foto da Lousa (JPG)"
        };
        
        System.out.println("Mural de: " + materia + " - " + topico);
        System.out.println("Materiais salvos com sucesso no sistema:");
        
        for (int i = 0; i < materiais.length; i++) {
            System.out.println((i + 1) + ". " + materiais[i]);
        }
    }
}
