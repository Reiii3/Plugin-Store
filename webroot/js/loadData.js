class Load {
    constructor() {
        console.log('form class load');
        this.btnBack = document.getElementById('btn-back');
        this.idLayoutSelection = document.getElementById('selection-layout');
        this.tagLayout = document.querySelector('.tag-layout');
        this.idTagName = document.getElementById('tag-name');
        this.teksNamePlugin = document.getElementById('name-plugin');
        this.teksVersionPlugin = document.getElementById('version-plugin');
        this.idImgPlugin = document.getElementById('img-plugin');
        this.btnDownload = document.getElementById('btn-download');
        this.loadProcess();
    }

    loadProcess() {
        fetch("https://reiii3.github.io/Plugin-Store/data/dataPlugin/data.json")
        .then(response => response.json())
        .then(data => {
            const dataPath = Object.values(data.dataPlugin);
            const idChild = document.getElementById('home');
            dataPath.forEach(dataParse => {
                const card = document.createElement('div')
                const layout = `
                    <div class="placeholder-icon">
                        <img src="${dataParse.image}" alt="dataPlugin">
                    </div>
                    <div class="tag-name">
                        <p>${dataParse.name}</p>
                    </div>
                `
                card.className = 'container-layout-card-list'
                card.id = `${dataParse.id}`
                card.innerHTML = `${layout}`;
                card.addEventListener('click', () => {
                    // window.location.href = `https://reiii3.github.io/Plugin-Store/${dataParse.link}`
                    this.idLayoutSelection.style.transform = 'translateX(0)';
                    this.idTagName.textContent = `Plugin ${dataParse.name}`;
                    this.teksNamePlugin.textContent = `${dataParse.name}`;
                    this.teksVersionPlugin.textContent = `${dataParse.version}`;
                    this.idImgPlugin.src = `${dataParse.image}`;
                    this.btnDownload.setAttribute('link', dataParse.link);
                    setTimeout(() => {
                        this.tagLayout.style.display = 'flex';
                        setTimeout(() => {
                            this.tagLayout.style.transform = 'translateX(0)';
                        }, 300);
                    }, 700);
                })
                idChild.appendChild(card);
            });
        })
    }
}

new Load();