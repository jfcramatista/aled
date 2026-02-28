// Database de la Bóveda (Nuestra Armería)
const toolsDatabase = [
    {
        id: 1,
        name: "Pomelli",
        category: "imagen",
        icon: "fa-solid fa-camera-retro",
        author: "Ale Javi",
        updateDate: "26 Feb 2026",
        description: "Plataforma de generación de contenido visual profesional para marketing que permite crear sesiones de fotos (photoshoots) automáticas a partir de una sola imagen de producto.",
        videoContext: "Se utilizó para generar múltiples variaciones fotográficas profesionales de una crema y un perfume para campañas de publicidad.",
        tags: ["Marketing", "E-commerce", "Fotografía"],
        appUrl: "https://labs.google.com/pomelli/about/",
        videoUrl: "https://www.youtube.com/embed/HsQHwZFto2M"
    },
    {
        id: 2,
        name: "Appi",
        category: "avatares",
        icon: "fa-solid fa-user-astronaut",
        author: "Ale Javi",
        updateDate: "26 Feb 2026",
        description: "Herramienta de creación y edición de video con IA que permite generar avatares, entrenar modelos de personajes y realizar cambios de rostro (face swap) o clonación de movimientos.",
        videoContext: "El autor la presenta como una solución para crear influencers virtuales o modelos personalizados que graben contenido específico.",
        tags: ["Avatares", "Deepfake", "Influencers"],
        appUrl: "https://appi.ai",
        videoUrl: "https://www.youtube.com/embed/HsQHwZFto2M"
    },
    {
        id: 3,
        name: "Gemini 3.1 Pro",
        category: "programacion",
        icon: "fa-solid fa-terminal",
        author: "Ale Javi",
        updateDate: "26 Feb 2026",
        description: "El modelo más avanzado de Google integrado en su ecosistema, con capacidades multimodales mejoradas para razonamiento complejo, generación de código y creación de contenido multimedia.",
        videoContext: "Se utiliza en el video para demostrar la creación de juegos 3D interactivos y aplicaciones funcionales mediante lenguaje natural.",
        tags: ["LLM", "Multimodal", "Google"],
        appUrl: "https://gemini.google.com/",
        videoUrl: "https://www.youtube.com/embed/HsQHwZFto2M"
    },
    {
        id: 4,
        name: "Google AI Studio (Imagen + Progra)",
        category: "imagen_progra",
        icon: "fa-solid fa-wand-magic-sparkles",
        author: "Ale Javi",
        updateDate: "26 Feb 2026",
        description: "Entorno de desarrollo para prototipar con modelos Gemini, que incluye herramientas como 'Build' para crear aplicaciones funcionales y un Playground para ejecutar código en tiempo real.",
        videoContext: "Fue empleada para programar animaciones SVG complejas y un sistema de reserva de pistas de pádel con integración de Google Maps. Permite crear imágenes a partir de código.",
        tags: ["Imagen + Código", "Prototipado", "API"],
        appUrl: "https://aistudio.google.com",
        videoUrl: "https://www.youtube.com/embed/HsQHwZFto2M"
    },
    {
        id: 5,
        name: "Google AI Studio (Video + Progra)",
        category: "video_progra",
        icon: "fa-solid fa-wand-magic-sparkles",
        author: "Ale Javi",
        updateDate: "26 Feb 2026",
        description: "Entorno de desarrollo para prototipar con modelos Gemini, que incluye herramientas como 'Build' para crear aplicaciones funcionales y un Playground para ejecutar código en tiempo real.",
        videoContext: "Fue empleada para programar animaciones SVG complejas y un sistema de reserva de pistas de pádel con integración de Google Maps. Permite crear videos a través de código.",
        tags: ["Video + Código", "Multimedia", "API"],
        appUrl: "https://aistudio.google.com",
        videoUrl: "https://www.youtube.com/embed/HsQHwZFto2M"
    },
    {
        id: 6,
        name: "Stitch",
        category: "diseno_web",
        icon: "fa-solid fa-palette",
        author: "Ale Javi",
        updateDate: "26 Feb 2026",
        description: "Herramienta de diseño de UX/UI impulsada por IA que genera documentación completa, flujos de pantallas, paletas de colores y prototipos interactivos a partir de una idea.",
        videoContext: "Se utilizó para idear y prototipar tres enfoques distintos de una aplicación móvil diseñada para ayudar a las personas a dejar de fumar.",
        tags: ["Diseño UI", "UX", "Web Design"],
        appUrl: "https://stitch.withgoogle.com/",
        videoUrl: "https://www.youtube.com/embed/HsQHwZFto2M"
    },
    {
        id: 7,
        name: "Antigravity",
        category: "diseno_web",
        icon: "fa-solid fa-layer-group",
        author: "Ale Javi",
        updateDate: "26 Feb 2026",
        description: "Plataforma de desarrollo web de alto nivel que permite generar sitios web profesionales con animaciones complejas y arquitectura de componentes avanzada usando Gemini 3.1 Pro.",
        videoContext: "El autor la usa para construir una landing page extremadamente profesional con efectos de scroll y animaciones interactivas personalizadas.",
        tags: ["Web Design", "Frontend", "Animaciones"],
        appUrl: "https://stitch.withgoogle.com/",
        videoUrl: "https://www.youtube.com/embed/HsQHwZFto2M"
    },
    {
        id: 8,
        name: "Notebook LM",
        category: "diapositivas",
        icon: "fa-solid fa-book",
        author: "Ale Javi",
        updateDate: "26 Feb 2026",
        description: "Herramienta de gestión de conocimiento de Google que ahora permite generar y editar diapositivas (slide decks) de forma iterativa basándose en fuentes de información cargadas.",
        videoContext: "Se empleó para transformar un cómic y una lista de consejos de salud en presentaciones visuales, permitiendo editar elementos específicos de cada slide.",
        tags: ["Productividad", "Slides", "Notas"],
        appUrl: "https://notebooklm.google.com/",
        videoUrl: "https://www.youtube.com/embed/HsQHwZFto2M"
    },
    {
        id: 9,
        name: "Gemini Music",
        category: "musica",
        icon: "fa-solid fa-music",
        author: "Ale Javi",
        updateDate: "26 Feb 2026",
        description: "Nueva funcionalidad dentro de Gemini para la generación de canciones completas con voz y música, capaz de interpretar estilos, idiomas e incluso inspirarse en imágenes.",
        videoContext: "Se demostró su capacidad para crear flamenco, folk y afropop, además de un truco para extender la duración de las canciones pidiendo continuaciones.",
        tags: ["Música IA", "Composición", "Audio"],
        appUrl: "https://gemini.google.com",
        videoUrl: "https://www.youtube.com/embed/HsQHwZFto2M"
    },
    {
        id: 10,
        name: "Firebase",
        category: "backend",
        icon: "fa-solid fa-server",
        author: "Ale Javi",
        updateDate: "26 Feb 2026",
        description: "Ecosistema de servicios en la nube que proporciona autenticación, bases de datos NoSQL, almacenamiento y hosting gratuito (plan Spark) para escalar aplicaciones web y móviles.",
        videoContext: "Se emplea para añadir el sistema de login (Google/Email), gestionar la base de datos de usuarios y desplegar la app en una URL pública.",
        tags: ["Backend", "Autenticación", "Hosting"],
        appUrl: "https://firebase.google.com",
        videoUrl: "https://www.youtube.com/embed/go2i2BGczq0"
    },
    {
        id: 11,
        name: "NordVPN (Ale Javi)",
        category: "seguridad",
        icon: "fa-solid fa-shield-halved",
        author: "Ale Javi",
        updateDate: "26 Feb 2026",
        description: "Servicio de Red Privada Virtual (VPN) de alto rendimiento para navegar de forma segura y acceder a herramientas restringidas por región.",
        videoContext: "Enlace promocional de Ale Javi para obtener acceso seguro y apoyo al canal.",
        tags: ["Privacidad", "Seguridad", "VPN"],
        appUrl: "https://nordvpn.com/alejavi",
        videoUrl: "https://www.youtube.com/embed/HsQHwZFto2M"
    },
    {
        id: 12,
        name: "Hide.me",
        category: "seguridad",
        icon: "fa-solid fa-mask",
        author: "Ale Javi",
        updateDate: "26 Feb 2026",
        description: "Extensión de VPN gratuita para Chrome que permite ocultar la IP y saltar bloqueos geográficos de forma sencilla.",
        videoContext: "Recomendada como herramienta gratuita para acceder a las nuevas funciones de Google desde cualquier lugar.",
        tags: ["Gratis", "Chrome", "VPN"],
        appUrl: "https://hide.me/es/software/chrome-vpn",
        videoUrl: "https://www.youtube.com/embed/HsQHwZFto2M"
    },
    {
        id: 13,
        name: "Qwen 3.5 Plus",
        category: "programacion",
        icon: "fa-solid fa-code",
        author: "Alejavi Rivera",
        updateDate: "22 Feb 2026",
        description: "Modelo de lenguaje de código abierto de Alibaba con capacidades avanzadas en búsqueda agéntica, razonamiento de documentos y generación de código interactivo.",
        videoContext: "Se utilizó para crear una aplicación interactiva de simulación 3D de una habitación editable con cambio de iluminación día/noche.",
        tags: ["Open Source", "Alibaba", "Multi-modal"],
        appUrl: "https://chat.qwenlm.ai/",
        videoUrl: "https://www.youtube.com/embed/QrcuYbtEAY8"
    },
    {
        id: 14,
        name: "Manus",
        category: "agente",
        icon: "fa-solid fa-user-astronaut",
        author: "Alejavi Rivera",
        updateDate: "22 Feb 2026",
        description: "Plataforma de agentes de IA capaz de ejecutar tareas complejas con memoria persistente e integración en aplicaciones de mensajería.",
        videoContext: "Se mostró la nueva funcionalidad para conectar un agente personalizado directamente a Telegram para gestionar tareas 24/7.",
        tags: ["Agentes", "Automatización", "Telegram"],
        appUrl: "https://manus.ai/",
        videoUrl: "https://www.youtube.com/embed/QrcuYbtEAY8"
    },
    {
        id: 15,
        name: "OpenCloud",
        category: "backend",
        icon: "fa-solid fa-server",
        author: "Alejavi Rivera",
        updateDate: "22 Feb 2026",
        description: "Solución de software para desplegar y gestionar agentes de IA de forma privada y segura en servidores VPS.",
        videoContext: "Utilizada para instalar un bot de control de agentes en un VPS de Hostinger con un solo clic.",
        tags: ["Self-hosted", "Privacidad", "VPS"],
        appUrl: "https://github.com/OpenCloud-OS/OpenCloud",
        videoUrl: "https://www.youtube.com/embed/QrcuYbtEAY8"
    },
    {
        id: 16,
        name: "Qwen Image 2",
        category: "imagen",
        icon: "fa-solid fa-wand-magic-sparkles",
        author: "Alejavi Rivera",
        updateDate: "22 Feb 2026",
        description: "Modelo de generación y edición de imágenes de alta fidelidad con gran capacidad para seguir instrucciones textuales complejas y detalles realistas.",
        videoContext: "Se usó para generar un retrato realista con texto específico en un tatuaje y realizar ediciones precisas en los ojos.",
        tags: ["Generación Imagen", "Fotorrealismo", "Edición"],
        appUrl: "https://chat.qwenlm.ai/",
        videoUrl: "https://www.youtube.com/embed/QrcuYbtEAY8"
    },
    {
        id: 17,
        name: "Wan 2.1",
        category: "video",
        icon: "fa-solid fa-video",
        author: "Alejavi Rivera",
        updateDate: "22 Feb 2026",
        description: "Modelo de generación de vídeo cinematográfico que destaca por su consistencia de personajes y capacidad de crear multicenas coherentes.",
        videoContext: "Se generó un vídeo de un ciudadano romano caminando con un smartphone para probar la coherencia y calidad visual.",
        tags: ["Video IA", "Consistencia", "Cinematográfico"],
        appUrl: "https://wanvideo.com/",
        videoUrl: "https://www.youtube.com/embed/QrcuYbtEAY8"
    },
    {
        id: 18,
        name: "Sidus 2.0",
        category: "video",
        icon: "fa-solid fa-film",
        author: "Alejavi Rivera",
        updateDate: "22 Feb 2026",
        description: "Generador de vídeo de alta gama capaz de simular físicas realistas, movimientos humanos complejos y narrativas de estilo cinematográfico.",
        videoContext: "Destacado por su capacidad de generar escenas de Spiderman con calidad de película profesional.",
        tags: ["Sora Competitor", "Físicas Realistas", "Películas"],
        appUrl: "https://sidus.ai/",
        videoUrl: "https://www.youtube.com/embed/QrcuYbtEAY8"
    },
    {
        id: 19,
        name: "Dreamina 4.6",
        category: "imagen",
        icon: "fa-solid fa-palette",
        author: "Alejavi Rivera",
        updateDate: "22 Feb 2026",
        description: "Herramienta de creación y edición de imágenes de ByteDance que permite generar contenido en 2K y realizar in-painting avanzado.",
        videoContext: "Se utilizó para crear un samurái en Times Square y añadir un gato a la imagen mediante edición por zonas.",
        tags: ["ByteDance", "In-painting", "2K"],
        appUrl: "https://dreamina.static.db.com/",
        videoUrl: "https://www.youtube.com/embed/QrcuYbtEAY8"
    },
    {
        id: 20,
        name: "Hunyuan 3.0 Instruct",
        category: "imagen",
        icon: "fa-solid fa-brush",
        author: "Alejavi Rivera",
        updateDate: "22 Feb 2026",
        description: "Modelo de Tencent especializado en la edición iterativa de imágenes mediante instrucciones de lenguaje natural.",
        videoContext: "Se usó para transformar una foto nocturna a diurna y cambiar el estilo de una imagen al de un cómic.",
        tags: ["Tencent", "Edición IA", "Ilimitado"],
        appUrl: "https://hunyuan.tencent.com/",
        videoUrl: "https://www.youtube.com/embed/QrcuYbtEAY8"
    },
    {
        id: 21,
        name: "Ernie 5.0",
        category: "programacion",
        icon: "fa-solid fa-terminal",
        author: "Alejavi Rivera",
        updateDate: "22 Feb 2026",
        description: "El modelo más avanzado de Baidu con capacidades líderes en comprensión visual, audio y generación de código complejo.",
        videoContext: "Se utilizó para programar una aplicación completa de mapas mentales interactiva con más de 1100 líneas de código.",
        tags: ["Baidu", "Coding", "Multimodal"],
        appUrl: "https://yiyan.baidu.com/",
        videoUrl: "https://www.youtube.com/embed/QrcuYbtEAY8"
    },
    {
        id: 22,
        name: "Kimi K2.5 Thinking",
        category: "agente",
        icon: "fa-solid fa-brain",
        author: "Alejavi Rivera",
        updateDate: "22 Feb 2026",
        description: "Modelo agéntico diseñado para el razonamiento profundo y la ejecución de múltiples tareas simultáneas como creación de documentos y hojas de cálculo.",
        videoContext: "Se empleó para generar un kit de lanzamiento completo (web, presentación, Excel y documentos) para una startup con un solo prompt.",
        tags: ["Reasoning", "Productividad", "Multi-agente"],
        appUrl: "https://kimi.moonshot.cn/",
        videoUrl: "https://www.youtube.com/embed/QrcuYbtEAY8"
    },
    {
        id: 23,
        name: "GLM-5",
        category: "programacion",
        icon: "fa-solid fa-code",
        author: "Alejavi Rivera",
        updateDate: "28 Feb 2026",
        description: "Modelo de código abierto de 700B parámetros especializado en ingeniería de agentes y codificación avanzada, superando a modelos premium en tareas de desarrollo y búsqueda.",
        videoContext: "Se utilizó para crear una batería virtual interactiva en 3D con sonidos funcionales y una aplicación de gestión de proyectos con transcripción de voz.",
        tags: ["Open Source", "700B", "Agentic AI"],
        appUrl: "https://chatglm.cn/",
        videoUrl: "https://www.youtube.com/embed/HeVZHuJSkpY"
    },
    {
        id: 24,
        name: "Mamouth AI",
        category: "agente",
        icon: "fa-solid fa-layer-group",
        author: "Alejavi Rivera",
        updateDate: "28 Feb 2026",
        description: "Plataforma que unifica el acceso a los mejores modelos premium (OpenAI, Gemini, Anthropic) bajo una sola interfaz y suscripción, priorizando la privacidad.",
        videoContext: "Presentada como una herramienta para simplificar el uso de múltiples modelos de IA sin necesidad de múltiples cuentas.",
        tags: ["Agregador", "Privacidad", "Multi-modelo"],
        appUrl: "https://mamouth.ai/",
        videoUrl: "https://www.youtube.com/embed/HeVZHuJSkpY"
    },
    {
        id: 25,
        name: "GLM Full-Stack Agent",
        category: "backend",
        icon: "fa-solid fa-database",
        author: "Alejavi Rivera",
        updateDate: "28 Feb 2026",
        description: "Funcionalidad de GLM que permite desarrollar aplicaciones completas incluyendo lógica de servidor (backend), almacenamiento de datos y autenticación de usuarios.",
        videoContext: "Utilizado para crear una herramienta propia de generación de imágenes por IA con gestión de marcas y galería de usuarios.",
        tags: ["Full Stack", "Auto-despliegue", "Backend"],
        appUrl: "https://chatglm.cn/agent",
        videoUrl: "https://www.youtube.com/embed/HeVZHuJSkpY"
    },
    {
        id: 26,
        name: "Image GLM",
        category: "imagen",
        icon: "fa-solid fa-image",
        author: "Alejavi Rivera",
        updateDate: "28 Feb 2026",
        description: "Generador de imágenes gratuito de alta calidad con soporte para resoluciones de hasta 2K y eliminación nativa de marcas de agua.",
        videoContext: "Se puso a prueba comparando calidades de 1K vs 2K con prompts realistas y generación de personajes.",
        tags: ["Gratis", "2K", "No-Watermark"],
        appUrl: "https://bigmodel.cn/image",
        videoUrl: "https://www.youtube.com/embed/HeVZHuJSkpY"
    },
    {
        id: 27,
        name: "Stitch",
        category: "diseno_web",
        icon: "fa-solid fa-object-group",
        author: "Alejavi Rivera",
        updateDate: "28 Feb 2026",
        description: "Herramienta de diseño de interfaces que soporta conexión vía MCP (Model Context Protocol) para ser controlada por agentes externos de IA.",
        videoContext: "Conectada a GLM-5 para generar automáticamente el diseño de una aplicación de finanzas personales sin intervención manual.",
        tags: ["MCP", "UI/UX", "Automatización"],
        appUrl: "https://stitch.so/",
        videoUrl: "https://www.youtube.com/embed/HeVZHuJSkpY"
    },
    {
        id: 28,
        name: "GLM Slides",
        category: "diapositivas",
        icon: "fa-solid fa-chalkboard-user",
        author: "Alejavi Rivera",
        updateDate: "28 Feb 2026",
        description: "Módulo especializado en la creación de presentaciones profesionales que combina búsqueda en tiempo real con maquetación interactiva en HTML/JS.",
        videoContext: "Se utilizó para generar una presentación de 10 diapositivas sobre el futuro de la IA laboral, incluyendo gráficos interactivos.",
        tags: ["Presentaciones", "Data-Viz", "Educación"],
        appUrl: "https://chatglm.cn/slides",
        videoUrl: "https://www.youtube.com/embed/HeVZHuJSkpY"
    },
    {
        id: 29,
        name: "GLM OCR",
        category: "backend",
        icon: "fa-solid fa-file-invoice",
        author: "Alejavi Rivera",
        updateDate: "28 Feb 2026",
        description: "Herramienta gratuita de reconocimiento óptico de caracteres capaz de extraer datos estructurados de imágenes complejas como tickets o facturas.",
        videoContext: "Se extrajeron con precisión todos los datos de un ticket de ferretería, incluyendo unidades, precios y datos fiscales.",
        tags: ["OCR", "Extracción Datos", "Gratis"],
        appUrl: "https://bigmodel.cn/ocr",
        videoUrl: "https://www.youtube.com/embed/HeVZHuJSkpY"
    },
    {
        id: 30,
        name: "GLM Writer",
        category: "redaccion",
        icon: "fa-solid fa-file-lines",
        author: "Alejavi Rivera",
        updateDate: "28 Feb 2026",
        description: "Agente de redacción que genera documentos visuales directamente en formatos editables como .docx de Microsoft Word o PDF.",
        videoContext: "Utilizado para crear un dossier de servicios de automatización con tablas e imágenes integradas listo para editar en Word.",
        tags: ["Documentación", "Office", "Redacción"],
        appUrl: "https://chatglm.cn/write",
        videoUrl: "https://www.youtube.com/embed/HeVZHuJSkpY"
    },
    {
        id: 31,
        name: "GLM Data Analysis",
        category: "analisis_datos",
        icon: "fa-solid fa-chart-line",
        author: "Alejavi Rivera",
        updateDate: "28 Feb 2026",
        description: "Herramienta de análisis avanzado que procesa grandes archivos PDF o Excel para generar gráficos complejos como diagramas Sankey o mapas de calor.",
        videoContext: "Se analizó un informe financiero de 100 páginas de Alphabet para generar resúmenes visuales en formato PNG.",
        tags: ["Data Analysis", "Sankey", "Finanzas"],
        appUrl: "https://chatglm.cn/analysis",
        videoUrl: "https://www.youtube.com/embed/HeVZHuJSkpY"
    },
    {
        id: 32,
        name: "Google Slides (con Gemini)",
        category: "diapositivas",
        icon: "fa-solid fa-desktop",
        author: "Alejavi Rivera",
        updateDate: "15 Feb 2026",
        description: "Plataforma de presentaciones de Google integrada con Gemini (Nano Banana) para edición avanzada, generación de imágenes y modificación de elementos visuales.",
        videoContext: "Se empleó para modificar títulos, eliminar marcas de agua y regenerar diapositivas importadas desde NotebookLM.",
        tags: ["Presentaciones", "Google", "Gemini"],
        appUrl: "https://slides.google.com",
        videoUrl: "https://www.youtube.com/embed/SkuFcjfHWi4"
    },
    {
        id: 33,
        name: "TopView",
        category: "video",
        icon: "fa-solid fa-video",
        author: "Alejavi Rivera",
        updateDate: "15 Feb 2026",
        description: "Plataforma de generación de videos profesionales mediante IA que permite crear comerciales unificando modelos, escenarios y objetos generados.",
        videoContext: "Presentada como una solución para crear anuncios de alta calidad y contenido viral combinando múltiples modelos de IA de video.",
        tags: ["Marketing", "Video IA", "Comerciales"],
        appUrl: "https://www.topview.ai",
        videoUrl: "https://www.youtube.com/embed/SkuFcjfHWi4"
    },
    {
        id: 34,
        name: "Magic Eraser",
        category: "imagen",
        icon: "fa-solid fa-eraser",
        author: "Alejavi Rivera",
        updateDate: "15 Feb 2026",
        description: "Herramienta de edición fotográfica especializada en eliminar objetos, personas o marcas de agua no deseadas de las imágenes de forma rápida.",
        videoContext: "Se utilizó para borrar manualmente logotipos y marcas de agua de las diapositivas exportadas de NotebookLM.",
        tags: ["Edición", "Limpieza", "Imagen"],
        appUrl: "https://magicstudio.com/magiceraser",
        videoUrl: "https://www.youtube.com/embed/SkuFcjfHWi4"
    },
    {
        id: 35,
        name: "Canva Pro (Magic Studio)",
        category: "diseno_web",
        icon: "fa-solid fa-wand-magic-sparkles",
        author: "Alejavi Rivera",
        updateDate: "15 Feb 2026",
        description: "Suite de diseño que incluye herramientas de IA para captura de texto, expansión mágica y edición de elementos dentro de archivos PDF o presentaciones.",
        videoContext: "Se usó para extraer texto de imágenes estáticas y mover elementos de diapositivas (como árboles) usando 'Captura Mágica'.",
        tags: ["Diseño", "Automatización", "IA"],
        appUrl: "https://www.canva.com",
        videoUrl: "https://www.youtube.com/embed/SkuFcjfHWi4"
    },
    {
        id: 36,
        name: "Folder.ll",
        category: "agente",
        icon: "fa-solid fa-folder-tree",
        author: "Alejavi Rivera",
        updateDate: "15 Feb 2026",
        description: "Extensión para NotebookLM que permite organizar y categorizar los cuadernos en carpetas personalizadas con iconos y colores.",
        videoContext: "Se empleó para organizar el caos de múltiples cuadernos en NotebookLM mediante categorías visuales como 'Tecnología'.",
        tags: ["Organización", "UX", "NotebookLM"],
        appUrl: "https://chromewebstore.google.com",
        videoUrl: "https://www.youtube.com/embed/SkuFcjfHWi4"
    },
    {
        id: 37,
        name: "Gemini Canvas",
        category: "programacion",
        icon: "fa-solid fa-code",
        author: "Alejavi Rivera",
        updateDate: "15 Feb 2026",
        description: "Entorno de desarrollo de Gemini que permite generar código y aplicaciones funcionales utilizando cuadernos de NotebookLM como base de conocimiento.",
        videoContext: "Se utilizó para programar una aplicación de salud ('Bioritmos') basada en los consejos extraídos de un cuaderno de NotebookLM.",
        tags: ["Coding", "Apps", "Google Gemini"],
        appUrl: "https://gemini.google.com",
        videoUrl: "https://www.youtube.com/embed/SkuFcjfHWi4"
    },
    {
        id: 38,
        name: "Google Antigravity",
        category: "agente",
        icon: "fa-solid fa-robot",
        author: "Alejavi Rivera",
        updateDate: "15 Feb 2026",
        description: "Plataforma de agentes autónomos que utiliza el protocolo MCP para controlar y automatizar herramientas como NotebookLM mediante lenguaje natural.",
        videoContext: "Se usó para pedirle a un agente que creara automáticamente tres cuadernos de NotebookLM sobre diferentes verticales de IA.",
        tags: ["Agentes", "MCP", "Automatización"],
        appUrl: "https://antigravity.google.com",
        videoUrl: "https://www.youtube.com/embed/SkuFcjfHWi4"
    },
    {
        id: 39,
        name: "Gemini Enterprise (Veo 3.1)",
        category: "video",
        icon: "fa-solid fa-clapperboard",
        author: "Alejavi Rivera",
        updateDate: "8 Feb 2026",
        description: "Plataforma empresarial de Google que permite el acceso al modelo Veo 3.1 para generar videos de alta resolución con audio integrado a partir de descripciones de texto.",
        videoContext: "Se utilizó para generar un video realista de una tortilla de patatas cocinándose con sonido de chisporroteo y un plano cinematográfico de una pareja discutiendo.",
        tags: ["Google", "Veo 3.1", "Video HD"],
        appUrl: "https://gemini.google.com/enterprise",
        videoUrl: "https://www.youtube.com/embed/lSsSVrYdl9A"
    },
    {
        id: 40,
        name: "NordVPN",
        category: "seguridad",
        icon: "fa-solid fa-shield-halved",
        author: "Alejavi Rivera",
        updateDate: "8 Feb 2026",
        description: "Servicio de red privada virtual que permite simular ubicaciones geográficas para acceder a herramientas de IA restringidas regionalmente, protegiendo la IP y bloqueando malware.",
        videoContext: "Se recomendó para acceder a Gemini Enterprise en países donde la funcionalidad de generación de video aún no está disponible.",
        tags: ["VPN", "Privacidad", "Acceso"],
        appUrl: "https://nordvpn.com",
        videoUrl: "https://www.youtube.com/embed/lSsSVrYdl9A"
    },
    {
        id: 41,
        name: "BytePlus (Seaweed 1.5 Pro)",
        category: "video",
        icon: "fa-solid fa-film",
        author: "Alejavi Rivera",
        updateDate: "8 Feb 2026",
        description: "Plataforma profesional de ByteDance (dueños de TikTok) que utiliza los modelos Seaweed para generar videos de hasta 12 segundos en Full HD con audio y sin marcas de agua.",
        videoContext: "Se usó para crear un video surrealista de una rana cantando ópera y tocando el violín, además de un video de un emprendedor tecnológico.",
        tags: ["ByteDance", "Video IA", "Sin Marca de Agua"],
        appUrl: "https://www.byteplus.com",
        videoUrl: "https://www.youtube.com/embed/lSsSVrYdl9A"
    },
    {
        id: 42,
        name: "Tencent Hunyuan (Image 3.0)",
        category: "imagen",
        icon: "fa-solid fa-image",
        author: "Alejavi Rivera",
        updateDate: "8 Feb 2026",
        description: "Modelo generativo de imágenes de Tencent capaz de crear fotografías hiperrealistas y arte digital en alta resolución a partir de prompts complejos.",
        videoContext: "Se utilizó para generar la imagen base de un panadero artesanal y una ciudad futurista sobre nubes antes de convertirlas a video.",
        tags: ["Tencent", "Generación Imagen", "Hiperrealismo"],
        appUrl: "https://hunyuan.tencent.com",
        videoUrl: "https://www.youtube.com/embed/lSsSVrYdl9A"
    },
    {
        id: 43,
        name: "Hunyuan Video 1.5",
        category: "video",
        icon: "fa-solid fa-play",
        author: "Alejavi Rivera",
        updateDate: "8 Feb 2026",
        description: "Modelo de video de Tencent que permite la generación de clips en HD y Full HD a partir de imágenes, manteniendo una alta fidelidad física y visual.",
        videoContext: "Se empleó para animar las imágenes generadas previamente, logrando movimientos realistas de harina volando y coches flotando.",
        tags: ["Tencent", "Image-to-Video", "Full HD"],
        appUrl: "https://hunyuan.tencent.com/video",
        videoUrl: "https://www.youtube.com/embed/lSsSVrYdl9A"
    },
    {
        id: 44,
        name: "Hunyuan Video (Avatares y Motion)",
        category: "avatares",
        icon: "fa-solid fa-user-astronaut",
        author: "Alejavi Rivera",
        updateDate: "8 Feb 2026",
        description: "Herramienta avanzada de Tencent para sincronización labial (lip-sync) y transferencia de movimiento (motion transfer) a partir de un video de referencia.",
        videoContext: "Se usó para crear un avatar parlante a partir de una foto y para hacer que una imagen estática realizara un baile complejo.",
        tags: ["Lip Sync", "Motion Transfer", "Avatares"],
        appUrl: "https://hunyuan.tencent.com/video",
        videoUrl: "https://www.youtube.com/embed/lSsSVrYdl9A"
    },
    {
        id: 45,
        name: "Temp-Mail",
        category: "utilidades",
        icon: "fa-solid fa-envelope-circle-check",
        author: "Alejavi Rivera",
        updateDate: "8 Feb 2026",
        description: "Servicio de correos electrónicos temporales, desechables y gratuitos para proteger la privacidad y evitar el spam al registrarse en nuevas herramientas.",
        videoContext: "Se propuso como estrategia para registrarse en múltiples servicios de IA (como BytePlus) sin comprometer el correo personal.",
        tags: ["Seguridad", "Privacidad", "Temp Mail"],
        appUrl: "https://temp-mail.org/es",
        videoUrl: "https://www.youtube.com/embed/lSsSVrYdl9A"
    },
    {
        id: 46,
        name: "Temporary SMS",
        category: "utilidades",
        icon: "fa-solid fa-comment-sms",
        author: "Alejavi Rivera",
        updateDate: "5 Feb 2026",
        description: "Servicio de recepción de mensajes SMS temporales para verificar cuentas de IA de forma anónima y gratuita.",
        videoContext: "Utilizado para saltar las verificaciones de número telefónico en registros de nuevas plataformas de IA.",
        tags: ["Privacidad", "SMS", "Verificación"],
        appUrl: "https://receive-smss.com/",
        videoUrl: "https://www.youtube.com/embed/zIAnnuzbqUY"
    },
    {
        id: 47,
        name: "ChatGLM Slides",
        category: "diapositivas",
        icon: "fa-solid fa-desktop",
        author: "Alejavi Rivera",
        updateDate: "5 Feb 2026",
        description: "Herramienta integrada en ChatGLM que automatiza la creación de presentaciones completas, incluyendo estructura, contenido y diseño visual exportable a PowerPoint.",
        videoContext: "El autor generó una presentación profesional de 10 diapositivas sobre su propia marca personal basándose en información web.",
        tags: ["PPT", "Presentaciones", "Productividad"],
        appUrl: "https://chatglm.cn",
        videoUrl: "https://www.youtube.com/embed/zIAnnuzbqUY"
    },
    {
        id: 48,
        name: "Flow",
        category: "video",
        icon: "fa-solid fa-wand-magic-sparkles",
        author: "Alejavi Rivera",
        updateDate: "8 Jan 2026",
        description: "Plataforma de generación visual que permite crear imágenes utilizando el modelo Nano Banana Pro y convertirlas posteriormente en vídeo con transiciones suaves.",
        videoContext: "Se utilizó para generar la imagen de un robot y luego animarla para crear una página de error 404 con efecto de bucle.",
        tags: ["Generación Imagen", "Imagen a Vídeo", "Animación"],
        appUrl: "https://flow.com",
        videoUrl: "https://www.youtube.com/embed/vHJEaVyDrRk"
    },
    {
        id: 49,
        name: "Mobbin",
        category: "diseno_web",
        icon: "fa-solid fa-desktop",
        author: "Alejavi Rivera",
        updateDate: "8 Jan 2026",
        description: "Biblioteca de referencia de diseño que recopila interfaces de aplicaciones y sitios web reales para inspiración y análisis de UX/UI.",
        videoContext: "Utilizada para extraer capturas de pantalla de Airbnb y replicar su estructura estética en un nuevo proyecto.",
        tags: ["UI/UX", "Inspiración", "Referencia"],
        appUrl: "https://mobbin.com",
        videoUrl: "https://www.youtube.com/embed/vHJEaVyDrRk"
    },
    {
        id: 50,
        name: "21st.dev",
        category: "diseno_web",
        icon: "fa-solid fa-cube",
        author: "Alejavi Rivera",
        updateDate: "8 Jan 2026",
        description: "Repositorio de componentes de interfaz de usuario (UI) listos para copiar y pegar, con animaciones avanzadas y efectos interactivos.",
        videoContext: "Se utilizó para extraer el código de una animación de partículas para botones y aplicarla a un sitio web existente.",
        tags: ["UI Components", "Animaciones", "Frontend"],
        appUrl: "https://21st.dev",
        videoUrl: "https://www.youtube.com/embed/vHJEaVyDrRk"
    },
    {
        id: 51,
        name: "Stitch (Google)",
        category: "diseno_web",
        icon: "fa-solid fa-object-group",
        author: "Alejavi Rivera",
        updateDate: "8 Jan 2026",
        description: "Herramienta de diseño web de Google integrada con Gemini 3 que permite crear prototipos interactivos y predecir mapas de calor de atención del usuario.",
        videoContext: "Se usó para diseñar una aplicación móvil de esquí desde un prompt y generar un prototipo funcional con predicción de clics.",
        tags: ["Diseño UI", "Heatmaps", "Google AI"],
        appUrl: "https://stitch.google.com",
        videoUrl: "https://www.youtube.com/embed/vHJEaVyDrRk"
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
