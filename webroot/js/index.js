class Main {
    constructor() {
        console.log('Hello Form AxPlugin Store');
        this.initDocumnet();
        this.initListener();
    }

    initListener() {
        this.idBtnShowMenuNavigasi.addEventListener('click', () => {
            this.blacktouchArea.style.display = 'block';
            this.idLayoutNavigasi.style.transform = 'translateX(0)';
        });
        this.blacktouchArea.addEventListener('click', () => {
            this.blacktouchArea.style.display = 'none';
            this.idLayoutNavigasi.style.transform = 'translateX(-100%)';
        });
    }

    initDocumnet() {
        this.blacktouchArea = document.getElementById('black-touch');
        this.idBtnShowMenuNavigasi = document.getElementById('btn-show-menu');
        this.idLayoutNavigasi = document.getElementById('list-navigasi');
        this.idLayoutHome = document.getElementById('home');
        this.initListener();
    }
}

new Main();