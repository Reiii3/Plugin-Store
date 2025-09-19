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
        this.idBtnHome.addEventListener('click', () => {
            const dataLayoutNone = [this.idLayoutAbout, this.idLayoutDeveloper];
            dataLayoutNone.forEach(element => {
                element.style.display = 'none';
            });
            this.idLayoutHome.style.display = 'flex';
            this.idLayoutNavigasi.style.transform = 'translateX(-100%)';
            this.blacktouchArea.style.display = 'none';
        });
        this.idBtnAbout.addEventListener('click', () => {
            const dataLayoutNone = [this.idLayoutHome, this.idLayoutDeveloper];
            dataLayoutNone.forEach(element => {
                element.style.display = 'none';
            });
            this.idLayoutAbout.style.display = 'block';
            this.idLayoutNavigasi.style.transform = 'translateX(-100%)';
            this.blacktouchArea.style.display = 'none';
        });
        this.idBtnDeveloper.addEventListener('click', () => {   
            const dataLayoutNone = [this.idLayoutHome, this.idLayoutAbout];
            dataLayoutNone.forEach(element => {
                element.style.display = 'none';
            });
            this.idLayoutDeveloper.style.display = 'block';
            this.idLayoutNavigasi.style.transform = 'translateX(-100%)';
            this.blacktouchArea.style.display = 'none';
        });
        this.idBtnBack.addEventListener('click', () => {
            const layoutTag = document.querySelector('.tag-layout');
            layoutTag.style.transform = 'translateY(-100%)';
            setTimeout(() => {
                layoutTag.style.display = 'none';
                setTimeout(() => {
                    this.idLayoutSelecction.style.transform = 'translateY(100%)';
                }, 400);
            }, 300);
        });
        this.btnDowload.addEventListener('click', () => {
            window.location.href = this.btnDowload.getAttribute('link');
        })
        this.btnJoinWa.addEventListener('click', () => {
            window.location.href = 'https://whatsapp.com/channel/0029Vb6RzcU5vKA4XgE27B1L'
        })
        this.btnJoinTg.addEventListener('click', () => {
            window.location.href = 'https://t.me/JaaGabu'
        })
        this.btnJoinDks.addEventListener('click', () => {
            window.location.href = 'https://chat.whatsapp.com/Ge6gPYkaZRn9OpUmTPMDS4'
        })
        this.btnJoinGv2r.addEventListener('click', () => {
            window.location.href = 'https://whatsapp.com/channel/0029VbARoXA3AzNUMLyW973B'
        })
        this.btnShowSocia.addEventListener('click', () => {
            window.location.href = 'https://sociabuzz.com/reiieja'
        })
        this.btnBuy.addEventListener('click', () => {
            window.location.href = 'https://sociabuzz.com/reiieja/tribe'
        })
    }

    initDocumnet() {
        this.idBtnHome = document.getElementById('btn-home');
        this.idBtnAbout = document.getElementById('btn-about');
        this.idBtnDeveloper = document.getElementById('btn-developer');
        this.idBtnBack = document.getElementById('btn-back');
        this.btnDowload = document.getElementById('btn-download');
        this.btnJoinWa = document.getElementById('btn-join-wa');
        this.btnJoinTg = document.getElementById('btn-join-tg');
        this.btnJoinDks = document.getElementById('btn-join-dks');
        this.btnJoinGv2r = document.getElementById('btn-join-gv2r');
        this.btnShowSocia = document.getElementById('btn-show-socia');
        this.btnBuy = document.getElementById('btn-buy');
        this.blacktouchArea = document.getElementById('black-touch');
        this.idBtnShowMenuNavigasi = document.getElementById('btn-show-menu');
        this.idLayoutNavigasi = document.getElementById('list-navigasi');
        this.idLayoutHome = document.getElementById('home');
        this.idLayoutAbout = document.getElementById('about');
        this.idLayoutDeveloper = document.getElementById('developer');
        this.idLayoutSelecction = document.getElementById('selection-layout');
        this.initListener();
    }
}

new Main();