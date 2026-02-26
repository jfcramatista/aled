// Database de la Bóveda (Nuestra Armería)
const toolsDatabase = [
    {
        id: Date.now() + 1,
        name: "Google Antigravity",
        category: "codigo",
        icon: "fa-solid fa-code",
        author: "Ale Javi",
        updateDate: "Febrero 2026",
        description: "Agente de IA de Google para orquestar proyectos, generar código funcional y manejar servidores MCP.",
        videoContext: "El video trata sobre cómo se articula Stitch con Antigravity y Firebase para crear aplicaciones web.",
        tags: ["Orquestador", "Desarrollo", "MCP"],
        appUrl: "https://antigravity.google.com",
        videoUrl: "https://www.youtube.com/embed/go2i2BGczq0"
    },
    {
        id: Date.now() + 2,
        name: "Google Stitch",
        category: "imagen",
        icon: "fa-solid fa-image",
        author: "Ale Javi",
        updateDate: "Febrero 2026",
        description: "Plataforma de diseño visual para crear maquetas, prototipos y UI profesional mediante IA.",
        videoContext: "Muestra cómo diseñar visualmente un prototipo para la web antes de programarlo en Antigravity.",
        tags: ["Diseño UI", "Prototipado", "Maquetación"],
        appUrl: "https://stitch.google.com",
        videoUrl: "https://www.youtube.com/embed/go2i2BGczq0"
    },
    {
        id: Date.now() + 3,
        name: "Firebase",
        category: "backend",
        icon: "fa-solid fa-server",
        author: "Ale Javi",
        updateDate: "Febrero 2026",
        description: "Ecosistema para backend que permite añadir autenticación, base de datos y hosting gratuito.",
        videoContext: "Trata sobre cómo iniciar sesión y conectar la aplicación para agregarle registro de usuario y base de datos.",
        tags: ["Backend", "Hosting", "Autenticación"],
        appUrl: "https://firebase.google.com",
        videoUrl: "https://www.youtube.com/embed/go2i2BGczq0"
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
            <div class="card-header" style="align-items: center;">
                <div class="tool-icon">
                    <i class="${tool.icon}"></i>
                </div>
                <div class="tool-channel" style="color: var(--neon-cyan); font-size: 0.8rem; font-weight: 600; display: flex; align-items: center; gap: 6px;">
                    <i class="fa-brands fa-youtube" style="color: #ff0000;"></i> ${tool.author || "Canal Desconocido"}
                </div>
            </div>
            <div class="tool-info">
                <h4>${tool.name}</h4>
                <div class="tool-date"><i class="fa-regular fa-clock"></i> Registro: ${tool.updateDate}</div>
                <p class="tool-desc" style="margin-bottom: 8px;"><strong>¿Qué es?</strong> ${tool.description}</p>
                <p class="tool-desc" style="color: var(--text-secondary); font-size: 0.85rem; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 8px;">
                    <strong>En el Video:</strong> ${tool.videoContext || "Sin contexto adicional"}
                </p>
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
