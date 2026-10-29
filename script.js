import java.util.ArrayList;
import java.util.List;

class Material {
    private String titulo;
    private String tipo;
    private String linkAcesso;

    public Material(String titulo, String tipo, String linkAcesso) {
        this.titulo = titulo;
        this.tipo = tipo;
        this.linkAcesso = linkAcesso;
    }

    public void exibirMaterial() {
        System.out.println(String.format("🔹 [%s] %s -> Acesso: %s", tipo, titulo, linkAcesso));
    }
}

public class SistemaHub {
    public static void main(String[] args) {
        System.out.println("===================================");
        System.out.println("   🚀 HUB DE MATERIAIS INICIADO");
        System.out.println("===================================\n");
        
        System.out.println("Carregando mural...\n");

        List<Material> bancoDeMateriais = new ArrayList<>();

        bancoDeMateriais.add(new Material("Material 1", "PDF", "/downloads/arquivo1.pdf"));
        bancoDeMateriais.add(new Material("Videoaula", "VÍDEO", "youtube.com/link-da-aula"));
        bancoDeMateriais.add(new Material("Foto da Lousa", "IMAGEM", "/galeria/foto1.jpg"));

        System.out.println("✅ Você possui " + bancoDeMateriais.size() + " materiais salvos:\n");
        for (Material item : bancoDeMateriais) {
            item.exibirMaterial();
        }
        
        System.out.println("\nBons estudos!");
    }
}
