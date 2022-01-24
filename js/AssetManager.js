export default class AssetManager{

    constructor(){

        this.aCarregar = 0;
        this.carregadas = 0;
        this.imagens = new Map();
        this.audios = new Map();
    }
    carregaImagem(chave,source){

        const img1 = new Image();
        img1.addEventListener("load", () => {
           console.log(`Imagem ${this.carregadas}/${this.aCarregar} Carregada!`);
           this.carregadas++;
        });
img1.src=source;
this.imagens.set(chave,img1);
this.aCarregar++;
    }
    carregaAudio(chave,source){

        const audio = new Audio();
        img1.addEventListener("canplay", () => {
           console.log(`Áudio ${this.carregadas}/${this.aCarregar} Carregado!`);
           this.carregadas++;
        });
img1.src=source;
this.audios.set(chave,img1);
this.aCarregar++;
    }
    img(chave){

        return this.imagens.get(chave);
    }
    audio(chave){

        return this.audio.get(chave);
    }
    progresso(){

        if(this.aCarregar>0){

            return `${(this.carregadas/ this.aCarregar*100).toFixed(2)}%`;
        }
        return "Nada a carregar";
    }
    acabou(){
        return this.carregadas === this.aCarregar;
    }
}