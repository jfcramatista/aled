// Database de la Bóveda (Nuestra Armería)
const toolsDatabase = [
    {
        id: Date.now() + 1,
        name: "Pomelli",
        category: "imagen",
        icon: "fa-solid fa-camera-retro",
        author: "Ale Javi",
        updateDate: "Febrero 2026",
        description: "Plataforma de generación de contenido visual profesional para marketing que permite crear sesiones de fotos (photoshoots) automáticas a partir de una sola imagen de producto.",
        videoContext: "Se utilizó para generar múltiples variaciones fotográficas profesionales de una crema y un perfume para campañas de publicidad.",
        tags: ["Marketing", "E-commerce", "Fotografía"],
        appUrl: "https://labs.google.com/pomelli/about/",
        videoUrl: "https://www.youtube.com/embed/HsQHwZFto2M"
    },
    {
        id: Date.now() + 2,
        name: "Appi",
        category: "avatares",
        icon: "fa-solid fa-user-astronaut",
        author: "Ale Javi",
        updateDate: "Febrero 2026",
        description: "Herramienta de creación y edición de video con IA que permite generar avatares, entrenar modelos de personajes y realizar cambios de rostro (face swap) o clonación de movimientos.",
        videoContext: "El autor la presenta como una solución para crear influencers virtuales o modelos personalizados que graben contenido específico.",
        tags: ["Avatares", "Deepfake", "Influencers"],
        appUrl: "https://appi.ai",
        videoUrl: "https://www.youtube.com/embed/HsQHwZFto2M"
    },
    {
        id: Date.now() + 3,
        name: "Gemini 3.1 Pro",
        category: "programacion",
        icon: "fa-solid fa-terminal",
        author: "Ale Javi",
        updateDate: "Febrero 2026",
        description: "El modelo más avanzado de Google integrado en su ecosistema, con capacidades multimodales mejoradas para razonamiento complejo, generación de código y creación de contenido multimedia.",
        videoContext: "Se utiliza en el video para demostrar la creación de juegos 3D interactivos y aplicaciones funcionales mediante lenguaje natural.",
        tags: ["LLM", "Multimodal", "Google"],
        appUrl: "https://gemini.google.com/",
        videoUrl: "https://www.youtube.com/embed/HsQHwZFto2M"
    },
    {
        id: Date.now() + 4,
        name: "Google AI Studio",
        category: "creative_coding",
        icon: "fa-solid fa-wand-magic-sparkles",
        author: "Ale Javi",
        updateDate: "Febrero 2026",
        description: "Entorno de desarrollo para prototipar con modelos Gemini, que incluye herramientas como 'Build' para crear aplicaciones funcionales y un Playground para ejecutar código en tiempo real.",
        videoContext: "Fue empleada para programar animaciones SVG complejas y un sistema de reserva de pistas de pádel con integración de Google Maps. Permite crear imágenes y videos a través de código.",
        tags: ["Desarrollo", "Prototipado", "Creative Coding"],
        appUrl: "https://aistudio.google.com",
        videoUrl: "https://www.youtube.com/embed/HsQHwZFto2M"
    },
    {
        id: Date.now() + 5,
        name: "Stitch",
        category: "diseno_web",
        icon: "fa-solid fa-palette",
        author: "Ale Javi",
        updateDate: "Febrero 2026",
        description: "Herramienta de diseño de UX/UI impulsada por IA que genera documentación completa, flujos de pantallas, paletas de colores y prototipos interactivos a partir de una idea.",
        videoContext: "Se utilizó para idear y prototipar tres enfoques distintos de una aplicación móvil diseñada para ayudar a las personas a dejar de fumar.",
        tags: ["Diseño UI", "UX", "Web Design"],
        appUrl: "https://stitch.withgoogle.com/",
        videoUrl: "https://www.youtube.com/embed/HsQHwZFto2M"
    },
    {
        id: Date.now() + 6,
        name: "Antigravity",
        category: "diseno_web",
        icon: "fa-solid fa-layer-group",
        author: "Ale Javi",
        updateDate: "Febrero 2026",
        description: "Plataforma de desarrollo web de alto nivel que permite generar sitios web profesionales con animaciones complejas y arquitectura de componentes avanzada usando Gemini 3.1 Pro.",
        videoContext: "El autor la usa para construir una landing page extremadamente profesional con efectos de scroll y animaciones interactivas personalizadas.",
        tags: ["Web Design", "Frontend", "Animaciones"],
        appUrl: "https://stitch.withgoogle.com/",
        videoUrl: "https://www.youtube.com/embed/HsQHwZFto2M"
    },
    {
        id: Date.now() + 7,
        name: "Notebook LM",
        category: "diapositivas",
        icon: "fa-solid fa-book",
        author: "Ale Javi",
        updateDate: "Febrero 2026",
        description: "Herramienta de gestión de conocimiento de Google que ahora permite generar y editar diapositivas (slide decks) de forma iterativa basándose en fuentes de información cargadas.",
        videoContext: "Se empleó para transformar un cómic y una lista de consejos de salud en presentaciones visuales, permitiendo editar elementos específicos de cada slide.",
        tags: ["Productividad", "Slides", "Notas"],
        appUrl: "https://notebooklm.google.com/",
        videoUrl: "https://www.youtube.com/embed/HsQHwZFto2M"
    },
    {
        id: Date.now() + 8,
        name: "Gemini Music",
        category: "musica",
        icon: "fa-solid fa-music",
        author: "Ale Javi",
        updateDate: "Febrero 2026",
        description: "Nueva funcionalidad dentro de Gemini para la generación de canciones completas con voz y música, capaz de interpretar estilos, idiomas e incluso inspirarse en imágenes.",
        videoContext: "Se demostró su capacidad para crear flamenco, folk y afropop, además de un truco para extender la duración de las canciones pidiendo continuaciones.",
        tags: ["Música IA", "Composición", "Audio"],
        appUrl: "https://gemini.google.com",
        videoUrl: "https://www.youtube.com/embed/HsQHwZFto2M"
    },
    {
        id: Date.now() + 9,
        name: "Firebase",
        category: "backend",
        icon: "fa-solid fa-server",
        author: "Ale Javi",
        updateDate: "Febrero 2026",
        description: "Ecosistema de servicios en la nube que proporciona autenticación, bases de datos NoSQL, almacenamiento y hosting gratuito (plan Spark) para escalar aplicaciones web y móviles.",
        videoContext: "Se emplea para añadir el sistema de login (Google/Email), gestionar la base de datos de usuarios y desplegar la app en una URL pública.",
        tags: ["Backend", "Autenticación", "Hosting"],
        appUrl: "https://firebase.google.com",
        videoUrl: "https://www.youtube.com/embed/go2i2BGczq0"
    },
    {
        id: Date.now() + 10,
        name: "NordVPN (Ale Javi)",
        category: "seguridad",
        icon: "fa-solid fa-shield-halved",
        author: "Ale Javi",
        updateDate: "Febrero 2026",
        description: "Servicio de Red Privada Virtual (VPN) de alto rendimiento para navegar de forma segura y acceder a herramientas restringidas por región.",
        videoContext: "Enlace promocional de Ale Javi para obtener acceso seguro y apoyo al canal.",
        tags: ["Privacidad", "Seguridad", "VPN"],
        appUrl: "https://nordvpn.com/alejavi",
        videoUrl: "https://www.youtube.com/embed/HsQHwZFto2M"
    },
    {
        id: Date.now() + 11,
        name: "Hide.me",
        category: "seguridad",
        icon: "fa-solid fa-mask",
        author: "Ale Javi",
        updateDate: "Febrero 2026",
        description: "Extensión de VPN gratuita para Chrome que permite ocultar la IP y saltar bloqueos geográficos de forma sencilla.",
        videoContext: "Recomendada como herramienta gratuita para acceder a las nuevas funciones de Google desde cualquier lugar.",
        tags: ["Gratis", "Chrome", "VPN"],
        appUrl: "https://hide.me/es/software/chrome-vpn",
        videoUrl: "https://www.youtube.com/embed/HsQHwZFto2M"
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

// ==========================================
// MARCA PERSONAL (Ballena Animada)
// ==========================================
function addAnimatedWhale() {
    const whaleTemplate = document.getElementById('matrix-whale');
    if (whaleTemplate) {
        const whale = whaleTemplate.cloneNode(true);
        whale.style.display = 'block';
        whale.removeAttribute('id'); // Evitar IDs duplicados
        whale.classList.add('matrix-whale', 'animated-whale');
        document.body.appendChild(whale);
    }
}

// Ejecutar cuando se termine de cargar el DOM
window.addEventListener('DOMContentLoaded', addAnimatedWhale);
