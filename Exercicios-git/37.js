class Camera {
  constructor(marca, modelo, resolucao) {
    this.marca = marca;
    this.modelo = modelo;
    this.resolucao = resolucao;
  }

  tirarFoto() {
    console.log(`Tirando foto com a câmera ${this.marca} ${this.modelo}`);
  }

  gravarVideo() {
    console.log(`Gravando vídeo com a câmera ${this.marca} ${this.modelo}`);
  }
}

const camera1 = new Camera("Canon", "EOS 80D", "24.2 MP");
const camera2 = new Camera("Nikon", "D850", "45.7 MP");

camera1.tirarFoto();
camera2.gravarVideo();
