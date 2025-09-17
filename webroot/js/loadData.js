class Load {
    constructor() {
        console.log('form class load');
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
                idChild.appendChild(card);
            });
        })
    }
}

new Load();