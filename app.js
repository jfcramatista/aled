// Database de la Bóveda (Nuestra Armería)
const toolsDatabase = [
    {
        id: 1,
        name: "Midjourney v6",
        category: "imagen",
        icon: "fa-solid fa-paintbrush",
        status: "vigente",
        updateDate: "Marzo 2024",
        description: "Generación de imágenes por IA en Discord. Insuperable en fotorealismo, uso de seeds y variables de aspecto.",
        tags: ["Texto a Imagen", "Pago mensual", "Discord"],
        appUrl: "https://midjourney.com",
        videoUrl: "https://www.youtube.com/embed/V61k3B2qHME" // Video placeholder de referencia
    },
    {
        id: 2,
        name: "Runway Gen-2",
        category: "video",
        icon: "fa-solid fa-film",
        status: "vigente",
        updateDate: "Febrero 2024",
        description: "Creación de video con control de cámara y 'Motion Brush' para animar zonas específicas de la imagen.",
        tags: ["Texto a Video", "Imagen a Video"],
        appUrl: "https://runwayml.com",
        videoUrl: "https://www.youtube.com/embed/zM2W1g1X84o"
    },
    {
        id: 3,
        name: "Suno AI v3",
        category: "audio",
        icon: "fa-solid fa-music",
        status: "vigente",
        updateDate: "Abril 2024",
        description: "Generación de canciones completas con calidad de estudio. Crea letra, ritmo y voz.",
        tags: ["Música", "Voz sintética"],
        appUrl: "https://suno.ai",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        id: 4,
        name: "Devin / Cursor IDE",
        category: "codigo",
        icon: "fa-solid fa-terminal",
        status: "vigente",
        updateDate: "Enero 2024",
        description: "Editor de código con mente propia. Autocompleta o genera scripts desde prompts en lenguaje natural.",
        tags: ["Programación", "IA Agente"],
        appUrl: "https://cursor.com",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        id: 5,
        name: "DALL-E 2",
        category: "imagen",
        icon: "fa-solid fa-image",
        status: "obsoleto",
        updateDate: "Septiembre 2022",
        description: "Herramienta que rompió el mercado, pero ha sido superada en calidad. Usar DALL-E 3 en GPT-4 en su lugar.",
        tags: ["Texto a Imagen", "OpenAI"],
        appUrl: "https://openai.com/dall-e-2",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
];

const toolsGrid = document.getElementById('toolsGrid');
const searchInput = document.getElementById('searchInput');
const sidebarItems = document.querySelectorAll('.sidebar-nav li');
const modal = document.getElementById("videoModal");
const closeModal = document.querySelector(".close-modal");
const videoContainer = document.getElementById("videoContainer");

let currentCategory = 'all';

// Función para renderizar tarjetas
function renderTools(tools) {
    toolsGrid.innerHTML = '';

    if (tools.length === 0) {
        toolsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-secondary);">
                <i class="fa-solid fa-radar" style="font-size: 3rem; margin-bottom: 20px; color: var(--neon-cyan); opacity: 0.5;"></i>
                <p>El radar de la bóveda no detectó herramientas con estos parámetros.</p>
            </div>
        `;
        return;
    }

    tools.forEach(tool => {
        const card = document.createElement('article');
        card.className = 'tool-card glass-panel';

        const tagsHtml = tool.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

        card.innerHTML = `
            <div class="card-header">
                <div class="tool-icon">
                    <i class="${tool.icon}"></i>
                </div>
            </div>
            <div class="tool-info">
                <h4>${tool.name}</h4>
                <div class="tool-date"><i class="fa-regular fa-clock"></i> Último registro: ${tool.updateDate}</div>
                <p class="tool-desc">${tool.description}</p>
                <div class="tool-tags">
                    ${tagsHtml}
                </div>
            </div>
            <div class="card-actions">
                <a href="${tool.appUrl}" target="_blank" class="btn btn-primary">Acceder</a>
                <button class="btn btn-secondary watch-video-btn" data-video="${tool.videoUrl}">
                    <i class="fa-brands fa-youtube"></i> Video Info
                </button>
            </div>
        `;
        toolsGrid.appendChild(card);
    });

    // Agregar eventos a botones de video
    document.querySelectorAll('.watch-video-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const videoUrl = e.currentTarget.getAttribute('data-video');
            openVideoModal(videoUrl);
        });
    });
}

// Función de filtrado global (Buscador + Categoría)
function filterTools() {
    const searchTerm = searchInput.value.toLowerCase();

    const filtered = toolsDatabase.filter(tool => {
        const matchesSearch = tool.name.toLowerCase().includes(searchTerm) ||
            tool.description.toLowerCase().includes(searchTerm) ||
            tool.tags.some(tag => tag.toLowerCase().includes(searchTerm));

        const matchesCategory = currentCategory === 'all' || tool.category === currentCategory;

        return matchesSearch && matchesCategory;
    });

    renderTools(filtered);
}

// Event Listeners (Filtros superiores)
searchInput.addEventListener('input', filterTools);

// Event Listeners (Sidebar Categorías)
sidebarItems.forEach(item => {
    item.addEventListener('click', () => {
        // Efecto visual en sidebar
        sidebarItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        // Actualizar filtro y renderizar
        currentCategory = item.getAttribute('data-cat');
        filterTools();
    });
});

// Lógica del Holograma de Video (Modal)
function openVideoModal(url) {
    videoContainer.innerHTML = `
        <div class="video-wrapper">
            <iframe src="${url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    `;
    modal.style.display = "flex";
}

closeModal.onclick = function () {
    modal.style.display = "none";
    videoContainer.innerHTML = ''; // Corta el video
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        videoContainer.innerHTML = '';
    }
}

// Carga Inicial en Pantalla
renderTools(toolsDatabase);
