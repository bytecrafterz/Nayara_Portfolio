/*
  All site text in English, Portuguese and Spanish.

  - Fixed page text: the English is written in index.html (elements with
    data-i18n="key"); `strings.pt` / `strings.es` translate the same keys.
  - Projects, categories, disciplines, the career book and the labels the
    script writes live here in all three languages.
  - Images: `<slug>-1/2/3` in img/ (full size and -sm). Rebuild them from
    source/ with tools/build_images.py, which also prints the palettes.
*/
window.SITE = {
  workana: "https://www.workana.com/freelancer/84b58ec73a8e266de6ff8cce8992364c",

  categories: {
    "Branding": { en: "Branding", pt: "Branding", es: "Branding" },
    "Packaging": { en: "Packaging", pt: "Embalagem", es: "Packaging" },
    "Fashion": { en: "Fashion", pt: "Moda", es: "Moda" },
    "Illustration": { en: "Illustration", pt: "Ilustração", es: "Ilustración" },
    "Editorial": { en: "Editorial", pt: "Editorial", es: "Editorial" },
    "Spaces & 3D": { en: "Spaces & 3D", pt: "Espaços & 3D", es: "Espacios y 3D" },
    "Campaigns": { en: "Campaigns", pt: "Campanhas", es: "Campañas" },
    "Motion concepts": { en: "Motion concepts", pt: "Conceitos de motion", es: "Conceptos de motion" },
    "Digital": { en: "Digital", pt: "Digital", es: "Digital" },
  },

  /* The "Across disciplines" list: each row filters the work grid. */
  disciplines: [
    { cat: "Branding", img: "aurel-1", t: { en: "Brand identities", pt: "Identidades de marca", es: "Identidades de marca" } },
    { cat: "Packaging", img: "canto-2", t: { en: "Packaging & objects", pt: "Embalagens & objetos", es: "Packaging y objetos" } },
    { cat: "Editorial", img: "silent-archive-1", t: { en: "Books & editorial", pt: "Livros & editorial", es: "Libros y editorial" } },
    { cat: "Fashion", img: "afterhours-3", t: { en: "Fashion & textiles", pt: "Moda & têxteis", es: "Moda y textiles" } },
    { cat: "Illustration", img: "limon-1", t: { en: "Illustration & pattern", pt: "Ilustração & estampa", es: "Ilustración y estampado" } },
    { cat: "Spaces & 3D", img: "casa-calma-1", t: { en: "Spaces & imagined worlds", pt: "Espaços & mundos imaginados", es: "Espacios y mundos imaginados" } },
    { cat: "Campaigns", img: "brasa-3", t: { en: "Campaigns & visual storytelling", pt: "Campanhas & narrativa visual", es: "Campañas y narrativa visual" } },
    { cat: "Motion concepts", img: "atelier-08-1", t: { en: "Motion & film treatments", pt: "Motion & tratamentos de filme", es: "Motion y tratamientos de film" } },
    { cat: "Digital", img: "vela-1", t: { en: "Digital experiences", pt: "Experiências digitais", es: "Experiencias digitales" } },
  ],

  projects: [
    {
      slug: "aurel", name: "AUREL", cat: "Branding", stack: "Illustrator · Photoshop · InDesign",
      palette: ["#110101", "#431a13", "#6e4a2f", "#b8a28a", "#d3c5b4"],
      sub: { en: "Jewelry identity", pt: "Identidade para joalheria", es: "Identidad para joyería" },
      text: {
        en: "A refined jewelry identity pairing ivory paper, burgundy packaging, and sculptural gold forms. A study in quiet confidence, tactile materials, and editorial restraint.",
        pt: "Uma identidade refinada para joalheria que une papel marfim, embalagens bordô e formas esculturais em ouro. Um estudo de confiança silenciosa, materiais táteis e contenção editorial.",
        es: "Una identidad refinada para joyería que combina papel marfil, packaging burdeos y formas escultóricas en oro. Un estudio de confianza serena, materiales táctiles y contención editorial.",
      },
      caps: [
        { en: "Identity presentation", pt: "Apresentação da identidade", es: "Presentación de identidad" },
        { en: "Packaging study", pt: "Estudo de embalagem", es: "Estudio de packaging" },
        { en: "Editorial campaign", pt: "Campanha editorial", es: "Campaña editorial" },
      ],
    },
    {
      slug: "forma", name: "FORMA", cat: "Branding", stack: "Illustrator · Photoshop · Figma",
      palette: ["#062d94", "#39332c", "#59534b", "#b8ab9c", "#e0d9d1"],
      sub: { en: "Brand in space", pt: "Marca no espaço", es: "Marca en el espacio" },
      text: {
        en: "A contemporary identity built around cobalt geometry, architectural imagery, and a clear typographic voice. The system moves from personal stationery to large-scale public applications.",
        pt: "Uma identidade contemporânea construída com geometria em azul-cobalto, imagens de arquitetura e uma voz tipográfica clara. O sistema vai da papelaria pessoal a aplicações públicas em grande escala.",
        es: "Una identidad contemporánea construida con geometría en azul cobalto, imágenes de arquitectura y una voz tipográfica clara. El sistema va de la papelería personal a aplicaciones públicas a gran escala.",
      },
      caps: [
        { en: "Stationery suite", pt: "Papelaria", es: "Papelería" },
        { en: "Outdoor application", pt: "Aplicação externa", es: "Aplicación exterior" },
        { en: "Social collection", pt: "Coleção para redes sociais", es: "Colección para redes sociales" },
      ],
    },
    {
      slug: "canto", name: "CANTO", cat: "Packaging", stack: "Illustrator · Photoshop · Blender",
      palette: ["#360908", "#503c21", "#755735", "#9e8360", "#cead79"],
      sub: { en: "Artisan vermouth", pt: "Vermute artesanal", es: "Vermut artesanal" },
      text: {
        en: "Botanical illustration and rich, earthy color bring an artisan drinks concept to life. Bottle, gift box, and table setting explore a warm, considered retail experience.",
        pt: "Ilustração botânica e cores terrosas e intensas dão vida a um conceito de bebida artesanal. Garrafa, caixa de presente e mesa posta exploram uma experiência de varejo calorosa e cuidadosa.",
        es: "La ilustración botánica y un color terroso e intenso dan vida a un concepto de bebida artesanal. Botella, caja de regalo y mesa puesta exploran una experiencia de venta cálida y cuidada.",
      },
      caps: [
        { en: "Bottle hero", pt: "Garrafa em destaque", es: "Botella protagonista" },
        { en: "Gift packaging", pt: "Embalagem de presente", es: "Packaging de regalo" },
        { en: "Lifestyle presentation", pt: "Apresentação lifestyle", es: "Presentación lifestyle" },
      ],
    },
    {
      slug: "dolce", name: "DOLCE", cat: "Packaging", stack: "Illustrator · Photoshop · Blender",
      palette: ["#7b5a2c", "#ab8d62", "#b7a17b", "#d1b692", "#ead9bb"],
      sub: { en: "A sweeter ritual", pt: "Um ritual mais doce", es: "Un ritual más dulce" },
      text: {
        en: "A premium waffle-cone packaging study with elegant cylindrical tins, illustrated flavor cues, and gold finishes. The range balances shelf presence with the intimacy of a gift.",
        pt: "Um estudo de embalagem premium para casquinhas de waffle, com latas cilíndricas elegantes, sabores ilustrados e acabamentos dourados. A linha equilibra presença na prateleira com a intimidade de um presente.",
        es: "Un estudio de packaging premium para conos de barquillo, con latas cilíndricas elegantes, sabores ilustrados y acabados dorados. La línea equilibra presencia en el lineal con la intimidad de un regalo.",
      },
      caps: [
        { en: "Signature tin", pt: "Lata principal", es: "Lata principal" },
        { en: "Flavor collection", pt: "Coleção de sabores", es: "Colección de sabores" },
        { en: "Unboxing scene", pt: "Cena de unboxing", es: "Escena de unboxing" },
      ],
    },
    {
      slug: "nori", name: "NORI", cat: "Branding", stack: "Illustrator · Photoshop · InDesign",
      palette: ["#090a0e", "#23293b", "#d1b894", "#e1bb70", "#e1cfb4"],
      sub: { en: "Little people, bright days", pt: "Gente pequena, dias luminosos", es: "Gente pequeña, días luminosos" },
      text: {
        en: "A playful childrenswear concept built on navy, butter yellow, and soft geometric forms. Packaging, garment details, and campaign styling share an approachable retail language.",
        pt: "Um conceito lúdico de moda infantil construído com azul-marinho, amarelo-manteiga e formas geométricas suaves. Embalagens, detalhes das peças e styling de campanha compartilham uma linguagem de varejo acolhedora.",
        es: "Un concepto lúdico de moda infantil construido con azul marino, amarillo mantequilla y formas geométricas suaves. Packaging, detalles de las prendas y estilismo de campaña comparten un lenguaje de venta cercano.",
      },
      caps: [
        { en: "Retail packaging", pt: "Embalagem de loja", es: "Packaging de tienda" },
        { en: "Garment labels", pt: "Etiquetas das peças", es: "Etiquetas de prenda" },
        { en: "Collection campaign", pt: "Campanha da coleção", es: "Campaña de colección" },
      ],
    },
    {
      slug: "vector", name: "VECTOR", cat: "Fashion", stack: "CLO 3D · Illustrator · Blender · Photoshop",
      palette: ["#151617", "#313232", "#545651", "#6b6e62", "#a0a77c"],
      sub: { en: "Performance in detail", pt: "Performance nos detalhes", es: "Rendimiento en cada detalle" },
      text: {
        en: "A sportswear design study exploring compression silhouettes, engineered seam lines, and tactile fabric surfaces. Graphite and electric lime establish a precise athletic direction.",
        pt: "Um estudo de design esportivo que explora silhuetas de compressão, costuras técnicas e superfícies de tecido táteis. Grafite e verde-limão elétrico definem uma direção atlética precisa.",
        es: "Un estudio de ropa deportiva que explora siluetas de compresión, costuras técnicas y superficies textiles táctiles. Grafito y verde lima eléctrico marcan una dirección atlética precisa.",
      },
      caps: [
        { en: "Front concept", pt: "Conceito frontal", es: "Concepto frontal" },
        { en: "Rear concept", pt: "Conceito traseiro", es: "Concepto trasero" },
        { en: "Material detail", pt: "Detalhe do material", es: "Detalle del material" },
      ],
    },
    {
      slug: "afterhours", name: "AFTERHOURS", cat: "Fashion", stack: "Illustrator · Photoshop",
      palette: ["#12100d", "#312b25", "#4e4339", "#655f57", "#a4917f"],
      sub: { en: "Same sky, different angles", pt: "Mesmo céu, outros ângulos", es: "Mismo cielo, otros ángulos" },
      text: {
        en: "An expressive streetwear capsule combining distressed typography, orbital imagery, and washed black textiles. Graphic exploration extends into garment applications and editorial styling.",
        pt: "Uma cápsula de streetwear expressiva que combina tipografia desgastada, imagens orbitais e tecidos pretos lavados. A exploração gráfica se estende às peças e ao styling editorial.",
        es: "Una cápsula de streetwear expresiva que combina tipografía desgastada, imágenes orbitales y tejidos negros lavados. La exploración gráfica se extiende a las prendas y al estilismo editorial.",
      },
      caps: [
        { en: "Graphic study", pt: "Estudo gráfico", es: "Estudio gráfico" },
        { en: "Garment application", pt: "Aplicação na peça", es: "Aplicación en prenda" },
        { en: "Fashion campaign", pt: "Campanha de moda", es: "Campaña de moda" },
      ],
    },
    {
      slug: "limon", name: "LIMON", cat: "Illustration", stack: "Photoshop · Illustrator",
      palette: ["#6c5930", "#988b69", "#bca67e", "#c3b69d", "#d6c7b3"],
      sub: { en: "The lemon grove collection", pt: "A coleção do limoal", es: "La colección del limonar" },
      text: {
        en: "A botanical textile concept inspired by watercolor, summer kitchens, and the natural texture of linen. Lemons, leafy branches, and small flowers form a relaxed homeware language.",
        pt: "Um conceito têxtil botânico inspirado na aquarela, nas cozinhas de verão e na textura natural do linho. Limões, ramos e pequenas flores formam uma linguagem descontraída para casa.",
        es: "Un concepto textil botánico inspirado en la acuarela, las cocinas de verano y la textura natural del lino. Limones, ramas y pequeñas flores forman un lenguaje relajado para el hogar.",
      },
      caps: [
        { en: "Pattern direction", pt: "Direção da estampa", es: "Dirección del estampado" },
        { en: "Textile application", pt: "Aplicação têxtil", es: "Aplicación textil" },
        { en: "Homeware collection", pt: "Coleção casa", es: "Colección hogar" },
      ],
    },
    {
      slug: "silent-archive", name: "The Silent Archive", cat: "Editorial", stack: "Photoshop · InDesign · Illustrator",
      palette: ["#050608", "#33130d", "#433327", "#957861", "#a98f79"],
      sub: { en: "A story hidden in the margins", pt: "Uma história escondida nas margens", es: "Una historia escondida en los márgenes" },
      text: {
        en: "A literary thriller cover exploration built from archival fragments, shadowed doorways, and a single red thread. The imagery suggests memory, investigation, and stories waiting to be discovered.",
        pt: "Uma exploração de capa para um thriller literário, construída com fragmentos de arquivo, portas na penumbra e um único fio vermelho. As imagens sugerem memória, investigação e histórias à espera de serem descobertas.",
        es: "Una exploración de portada para un thriller literario, construida con fragmentos de archivo, puertas en penumbra y un único hilo rojo. Las imágenes sugieren memoria, investigación e historias esperando ser descubiertas.",
      },
      caps: [
        { en: "Cover exploration", pt: "Exploração de capa", es: "Exploración de portada" },
        { en: "Book presentation", pt: "Apresentação do livro", es: "Presentación del libro" },
        { en: "Launch campaign", pt: "Campanha de lançamento", es: "Campaña de lanzamiento" },
      ],
    },
    {
      slug: "small-hours", name: "Small Hours", cat: "Editorial", stack: "InDesign · Photoshop · Acrobat Pro",
      palette: ["#22150f", "#5c4737", "#9c8571", "#bdb1a4", "#dfd2c4"],
      sub: { en: "Room for the story", pt: "Espaço para a história", es: "Espacio para la historia" },
      text: {
        en: "An editorial concept using generous margins, restrained serif typography, and atmospheric imagery. Chapter openers, interior spreads, and a book presentation explore a calm reading experience.",
        pt: "Um conceito editorial com margens generosas, tipografia serifada contida e imagens atmosféricas. Aberturas de capítulo, páginas internas e a apresentação do livro exploram uma leitura tranquila.",
        es: "Un concepto editorial con márgenes generosos, tipografía serif contenida e imágenes atmosféricas. Aperturas de capítulo, páginas interiores y la presentación del libro exploran una lectura tranquila.",
      },
      caps: [
        { en: "Chapter opener", pt: "Abertura de capítulo", es: "Apertura de capítulo" },
        { en: "Interior spread", pt: "Página dupla interna", es: "Doble página interior" },
        { en: "Book and bookmark", pt: "Livro e marcador", es: "Libro y marcapáginas" },
      ],
    },
    {
      slug: "little-strikers", name: "Little Strikers", cat: "Illustration", stack: "Photoshop · Illustrator · InDesign",
      palette: ["#11100d", "#48423c", "#958c82", "#dfd7cb", "#f4eee2"],
      sub: { en: "An adventure in every match", pt: "Uma aventura em cada partida", es: "Una aventura en cada partido" },
      text: {
        en: "A black-and-white football adventure following a young player from discovery to a decisive match and team celebration. Expressive characters and cinematic compositions carry the story.",
        pt: "Uma aventura de futebol em preto e branco que acompanha um jovem jogador da descoberta até a partida decisiva e a comemoração com o time. Personagens expressivos e composições cinematográficas conduzem a história.",
        es: "Una aventura de fútbol en blanco y negro que sigue a un joven jugador desde el descubrimiento hasta el partido decisivo y la celebración con su equipo. Personajes expresivos y composiciones cinematográficas llevan la historia.",
      },
      caps: [
        { en: "The discovery", pt: "A descoberta", es: "El descubrimiento" },
        { en: "The decisive moment", pt: "O momento decisivo", es: "El momento decisivo" },
        { en: "The celebration", pt: "A comemoração", es: "La celebración" },
      ],
    },
    {
      slug: "casa-calma", name: "CASA CALMA", cat: "Spaces & 3D", stack: "Blender · Cycles · Photoshop",
      palette: ["#42240d", "#684d30", "#886643", "#a98867", "#ceb59b"],
      sub: { en: "Architecture for slower living", pt: "Arquitetura para viver sem pressa", es: "Arquitectura para vivir sin prisa" },
      text: {
        en: "A contemporary residential concept explored through travertine, walnut, limewash, and warm natural light. Exterior, living, and kitchen studies share a tactile architectural mood.",
        pt: "Um conceito residencial contemporâneo explorado com travertino, nogueira, pintura à cal e luz natural quente. Os estudos de fachada, sala e cozinha compartilham uma atmosfera arquitetônica tátil.",
        es: "Un concepto residencial contemporáneo explorado con travertino, nogal, pintura a la cal y luz natural cálida. Los estudios de exterior, salón y cocina comparten una atmósfera arquitectónica táctil.",
      },
      caps: [
        { en: "Courtyard exterior", pt: "Pátio externo", es: "Patio exterior" },
        { en: "Living space", pt: "Sala de estar", es: "Salón" },
        { en: "Kitchen study", pt: "Estudo da cozinha", es: "Estudio de cocina" },
      ],
    },
    {
      slug: "moss", name: "MOSS", cat: "Spaces & 3D", stack: "Blender · Photoshop",
      palette: ["#292b20", "#583a25", "#505548", "#437670", "#f3cca7"],
      sub: { en: "A small world, richly imagined", pt: "Um pequeno mundo, ricamente imaginado", es: "Un pequeño mundo, ricamente imaginado" },
      text: {
        en: "A stylized wildlife world combining a faceted fox character with atmospheric forest scenes. Angular forms, warm light, and a restrained natural palette create a distinctive visual language.",
        pt: "Um mundo selvagem estilizado que combina uma raposa facetada com cenas atmosféricas de floresta. Formas angulares, luz quente e uma paleta natural contida criam uma linguagem visual própria.",
        es: "Un mundo salvaje estilizado que combina un zorro facetado con escenas atmosféricas de bosque. Formas angulares, luz cálida y una paleta natural contenida crean un lenguaje visual propio.",
      },
      caps: [
        { en: "Character study", pt: "Estudo de personagem", es: "Estudio de personaje" },
        { en: "Environment study", pt: "Estudo de cenário", es: "Estudio de entorno" },
        { en: "Narrative scene", pt: "Cena narrativa", es: "Escena narrativa" },
      ],
    },
    {
      slug: "luma", name: "LUMA", cat: "Campaigns", stack: "Blender · Photoshop · After Effects",
      palette: ["#d79c73", "#e8bb97", "#f5d0af", "#e8d9cf", "#fdf2e1"],
      sub: { en: "The daily ritual", pt: "O ritual diário", es: "El ritual diario" },
      text: {
        en: "A sculptural beauty campaign concept exploring pearl surfaces, translucent water, and apricot light. Product and material studies build a soft, luminous visual identity.",
        pt: "Um conceito de campanha de beleza escultural que explora superfícies peroladas, água translúcida e luz cor de damasco. Estudos de produto e material constroem uma identidade visual suave e luminosa.",
        es: "Un concepto de campaña de belleza escultural que explora superficies nacaradas, agua translúcida y luz color albaricoque. Los estudios de producto y material construyen una identidad visual suave y luminosa.",
      },
      caps: [
        { en: "Product hero", pt: "Produto em destaque", es: "Producto protagonista" },
        { en: "Water study", pt: "Estudo com água", es: "Estudio con agua" },
        { en: "Campaign visual", pt: "Peça de campanha", es: "Pieza de campaña" },
      ],
    },
    {
      slug: "pulse", name: "PULSE", cat: "Motion concepts", stack: "After Effects · Premiere Pro · Blender",
      palette: ["#03030c", "#120f2b", "#1e2950", "#3a386f", "#866bc4"],
      sub: { en: "Play next", pt: "A próxima partida", es: "La próxima partida" },
      text: {
        en: "Three keyframes for a gaming-store promotion, moving from a dramatic controller reveal to a game showcase and closing brand frame. Chrome, violet, and cyan give the sequence its energy.",
        pt: "Três quadros-chave para a promoção de uma loja de games, da revelação dramática do controle à vitrine de jogos e ao quadro final da marca. Cromo, violeta e ciano dão energia à sequência.",
        es: "Tres fotogramas clave para la promoción de una tienda de videojuegos, desde la revelación dramática del mando hasta el escaparate de juegos y el cierre de marca. Cromo, violeta y cian dan energía a la secuencia.",
      },
      caps: [
        { en: "Opening keyframe", pt: "Quadro de abertura", es: "Fotograma de apertura" },
        { en: "Showcase keyframe", pt: "Quadro de vitrine", es: "Fotograma de escaparate" },
        { en: "Closing keyframe", pt: "Quadro de encerramento", es: "Fotograma de cierre" },
      ],
    },
    {
      slug: "atelier-08", name: "ATELIER 08", cat: "Motion concepts", stack: "Premiere Pro · DaVinci Resolve · After Effects",
      palette: ["#0a0a08", "#4a0b0a", "#31261d", "#9d856c", "#bba68d"],
      sub: { en: "A study in silhouette", pt: "Um estudo de silhueta", es: "Un estudio de silueta" },
      text: {
        en: "A fashion-film treatment bringing cream tailoring into dramatic architectural settings. A hero composition, tactile close-up, and closing brand frame establish the proposed visual rhythm.",
        pt: "Um tratamento de filme de moda que leva a alfaiataria creme a cenários arquitetônicos dramáticos. Uma composição principal, um close tátil e o quadro final da marca definem o ritmo visual proposto.",
        es: "Un tratamiento de fashion film que lleva la sastrería crema a escenarios arquitectónicos dramáticos. Una composición principal, un primer plano táctil y el cierre de marca definen el ritmo visual propuesto.",
      },
      caps: [
        { en: "Hero keyframe", pt: "Quadro principal", es: "Fotograma principal" },
        { en: "Material keyframe", pt: "Quadro de material", es: "Fotograma de material" },
        { en: "Closing keyframe", pt: "Quadro de encerramento", es: "Fotograma de cierre" },
      ],
    },
    {
      slug: "orbit", name: "ORBIT", cat: "Motion concepts", stack: "Premiere Pro · After Effects · Illustrator · Audition",
      palette: ["#060e21", "#161f39", "#383752", "#9e8ea6", "#f2e4e3"],
      sub: { en: "Make room for focus", pt: "Abra espaço para o foco", es: "Haz espacio para el foco" },
      text: {
        en: "An explainer treatment for a productivity concept. The three visual beats move from everyday overload to organization and a calm closing invitation.",
        pt: "Um tratamento de vídeo explicativo para um conceito de produtividade. Os três momentos visuais vão da sobrecarga do dia a dia à organização e a um convite final tranquilo.",
        es: "Un tratamiento de video explicativo para un concepto de productividad. Los tres momentos visuales van de la sobrecarga diaria a la organización y a una invitación final tranquila.",
      },
      caps: [
        { en: "The problem", pt: "O problema", es: "El problema" },
        { en: "The product idea", pt: "A ideia do produto", es: "La idea del producto" },
        { en: "The closing invitation", pt: "O convite final", es: "La invitación final" },
      ],
    },
    {
      slug: "brasa", name: "BRASA", cat: "Campaigns", stack: "Photoshop · Illustrator · InDesign",
      palette: ["#0e0301", "#48240f", "#7d2705", "#b07b4d", "#dac3a8"],
      sub: { en: "Gather around the fire", pt: "Reunidos em volta do fogo", es: "Reunidos alrededor del fuego" },
      text: {
        en: "A restaurant campaign built around fire-grilled food, warm light, and refined typography. Food imagery, a menu study, and an advertisement express a generous, sensory dining experience.",
        pt: "Uma campanha de restaurante construída em torno da comida na brasa, da luz quente e de uma tipografia refinada. Fotos de pratos, um estudo de cardápio e um anúncio expressam uma experiência generosa e sensorial.",
        es: "Una campaña de restaurante construida en torno a la comida a la brasa, la luz cálida y una tipografía refinada. Imágenes de platos, un estudio de menú y un anuncio expresan una experiencia generosa y sensorial.",
      },
      caps: [
        { en: "Food hero", pt: "Prato em destaque", es: "Plato protagonista" },
        { en: "Menu concept", pt: "Conceito de cardápio", es: "Concepto de menú" },
        { en: "Campaign visual", pt: "Peça de campanha", es: "Pieza de campaña" },
      ],
    },
    {
      slug: "vela", name: "VELA", cat: "Digital", stack: "Figma · HTML · CSS · JavaScript",
      palette: ["#695c3e", "#998161", "#b6a083", "#cdb99e", "#ece2d3"],
      sub: { en: "Simple by nature", pt: "Simples por natureza", es: "Simple por naturaleza" },
      text: {
        en: "A skincare commerce concept pairing spacious layouts and clear hierarchy with botanical product imagery. Desktop, mobile, and advertising studies explore a consistent customer experience.",
        pt: "Um conceito de e-commerce de skincare que une layouts arejados e hierarquia clara a imagens botânicas de produto. Estudos para desktop, mobile e anúncios exploram uma experiência de compra consistente.",
        es: "Un concepto de e-commerce de cuidado de la piel que une diseños amplios y jerarquía clara con imágenes botánicas de producto. Estudios para escritorio, móvil y publicidad exploran una experiencia de compra coherente.",
      },
      caps: [
        { en: "Desktop concept", pt: "Conceito desktop", es: "Concepto escritorio" },
        { en: "Mobile concept", pt: "Conceito mobile", es: "Concepto móvil" },
        { en: "Campaign creative", pt: "Criativo de campanha", es: "Creatividad de campaña" },
      ],
    },
    {
      slug: "sonora", name: "SONORA", cat: "Campaigns", stack: "Illustrator · Photoshop · After Effects",
      palette: ["#031032", "#032a82", "#f95f51", "#ddcab7", "#f4e1c7"],
      sub: { en: "Night. Sound. City.", pt: "Noite. Som. Cidade.", es: "Noche. Sonido. Ciudad." },
      text: {
        en: "An expressive music-event identity exploring experimental typography, sound-wave forms, and a vivid blue-and-coral palette. Poster, outdoor, and social studies carry the energy across formats.",
        pt: "Uma identidade expressiva para um evento de música que explora tipografia experimental, formas de ondas sonoras e uma paleta vibrante de azul e coral. Estudos de pôster, mídia externa e redes sociais levam essa energia a todos os formatos.",
        es: "Una identidad expresiva para un evento musical que explora tipografía experimental, formas de ondas sonoras y una paleta vibrante de azul y coral. Estudios de póster, exterior y redes sociales llevan esa energía a todos los formatos.",
      },
      caps: [
        { en: "Poster study", pt: "Estudo de pôster", es: "Estudio de póster" },
        { en: "Outdoor application", pt: "Aplicação externa", es: "Aplicación exterior" },
        { en: "Social announcement", pt: "Anúncio para redes sociais", es: "Anuncio para redes sociales" },
      ],
    },
  ],

  /* Real client projects on Workana (profile read on 21 Oct 2026). Quotes are verbatim, with translations.
     Images come from tools/build_real.py; projects without stars are still open. */
  clients: [
   {
    "id": "beyond",
    "client": "Ileana M. T.",
    "country": {
     "en": "Argentina",
     "pt": "Argentina",
     "es": "Argentina"
    },
    "stars": 5,
    "cat": {
     "en": "Brand identity",
     "pt": "Identidade de marca",
     "es": "Identidad de marca"
    },
    "title": "Beyond 7 & Proyecto 0",
    "sub": {
     "en": "A consultancy and the new service it is launching",
     "pt": "Uma consultoria e o novo serviço que ela lança",
     "es": "Una consultora y el nuevo servicio que lanza"
    },
    "text": {
     "en": "Ileana was launching Proyecto 0 inside her consultancy, Beyond 7, and wanted the two brands to feel like one family. I refined both logos, built a light palette taken from nature with gold as the thread between them, and set the typography and usage rules in a short brand guide. Then came two carousels, three launch stories and a set of metallic gold icons, all left editable so she can keep creating on her own.",
     "pt": "A Ileana estava lançando o Proyecto 0 dentro da sua consultoria, a Beyond 7, e queria que as duas marcas parecessem da mesma família. Refinei os dois logos, criei uma paleta clara inspirada na natureza, com o dourado como fio entre elas, e defini tipografia e regras de uso num guia de marca curto. Depois vieram dois carrosséis, três stories de lançamento e um conjunto de ícones em dourado metálico, tudo editável para ela seguir criando sozinha.",
     "es": "Ileana estaba lanzando Proyecto 0 dentro de su consultora, Beyond 7, y quería que las dos marcas se sintieran de la misma familia. Refiné ambos logos, armé una paleta clara tomada de la naturaleza, con el dorado como hilo entre las dos, y definí la tipografía y las reglas de uso en una guía de marca breve. Después vinieron dos carruseles, tres historias de lanzamiento y un set de íconos en dorado metálico, todo editable para que ella siga creando por su cuenta."
    },
    "deliv": {
     "en": "Logo refinement · palette and typography · brand guide · 2 carousels · 3 stories · metallic icons",
     "pt": "Refinamento dos logos · paleta e tipografia · guia de marca · 2 carrosséis · 3 stories · ícones metálicos",
     "es": "Refinamiento de logos · paleta y tipografía · guía de marca · 2 carruseles · 3 historias · íconos metálicos"
    },
    "quote": {
     "orig": "es",
     "text": "Nayara me ayudó muy cordial y eficientemente a ajustar los logos de marcas y definir las bases de branding. También trabajamos algunos editables. Una experiencia muy recomendable!",
     "tr": {
      "en": "Nayara helped me very warmly and efficiently to adjust the brand logos and define the branding foundations. We also worked on some editable files. A highly recommended experience!",
      "pt": "A Nayara me ajudou de forma muito cordial e eficiente a ajustar os logos das marcas e a definir as bases do branding. Também trabalhamos alguns editáveis. Uma experiência muito recomendável!"
     }
    },
    "caps": [
     {
      "en": "Beyond 7, the consultancy mark in gold",
      "pt": "Beyond 7, a marca da consultoria em dourado",
      "es": "Beyond 7, la marca de la consultora en dorado"
     },
     {
      "en": "Proyecto 0, the new service",
      "pt": "Proyecto 0, o novo serviço",
      "es": "Proyecto 0, el nuevo servicio"
     },
     {
      "en": "Business cards in the shared gold",
      "pt": "Cartões de visita no dourado em comum",
      "es": "Tarjetas en el dorado compartido"
     },
     {
      "en": "Logo versions from the brand guide",
      "pt": "Versões do logo no guia de marca",
      "es": "Versiones del logo en la guía de marca"
     },
     {
      "en": "The light palette: forest, mountain and sand, gold as the accent",
      "pt": "A paleta clara: floresta, montanha e areia, com o dourado de destaque",
      "es": "La paleta clara: bosque, montaña y arena, con el dorado como acento"
     },
     {
      "en": "Carousels and launch stories",
      "pt": "Carrosséis e stories de lançamento",
      "es": "Carruseles e historias de lanzamiento"
     }
    ],
    "imgs": 6
   },
   {
    "id": "allyo",
    "client": "C. M.",
    "country": {
     "en": "United States",
     "pt": "Estados Unidos",
     "es": "Estados Unidos"
    },
    "stars": 5,
    "cat": {
     "en": "Packaging",
     "pt": "Embalagem",
     "es": "Packaging"
    },
    "title": "Allyo Global Logistics",
    "sub": {
     "en": "Wine box, gift boxes and a desk calendar",
     "pt": "Caixa de vinho, caixas de presente e calendário de mesa",
     "es": "Caja de vino, cajas de regalo y calendario de escritorio"
    },
    "text": {
     "en": "Cristina needed corporate gifts for her logistics brand, built around her own bottle and insert measurements. I drew the dielines for a wine box with a crash-lock bottom in two bottle sizes, two gift boxes, each as a rigid set-up box or a folding carton, with step-by-step assembly guides, and a desk calendar with its box, tent stand and thirteen pages for 2027.",
     "pt": "A Cristina precisava de brindes corporativos para a sua marca de logística, feitos a partir das medidas da garrafa e dos encaixes dela. Desenhei as facas de uma caixa de vinho com fundo automático em dois tamanhos de garrafa, de duas caixas de presente, cada uma em versão rígida ou em cartão dobrável, com guias de montagem passo a passo, e de um calendário de mesa com caixa, suporte e treze páginas para 2027.",
     "es": "Cristina necesitaba regalos corporativos para su marca de logística, hechos a partir de las medidas de su botella y de sus insertos. Dibujé los troqueles de una caja de vino con fondo automático en dos tamaños de botella, de dos cajas de regalo, cada una en versión rígida o en cartón plegable, con guías de armado paso a paso, y de un calendario de escritorio con su caja, su soporte y trece páginas para 2027."
    },
    "deliv": {
     "en": "Dielines with bleed and fold lines · assembly guides · 13 calendar pages · print specifications",
     "pt": "Facas com sangria e vincos · guias de montagem · 13 páginas de calendário · especificações de impressão",
     "es": "Troqueles con sangrado y pliegues · guías de armado · 13 páginas de calendario · especificaciones de impresión"
    },
    "quote": null,
    "caps": [
     {
      "en": "The dielines and a calendar month",
      "pt": "As facas e um mês do calendário",
      "es": "Los troqueles y un mes del calendario"
     },
     {
      "en": "Calendar cover, 2027",
      "pt": "Capa do calendário, 2027",
      "es": "Portada del calendario, 2027"
     },
     {
      "en": "A month page; her team photos go in the frame",
      "pt": "Uma página de mês; as fotos da equipe dela entram no quadro",
      "es": "Una página de mes; las fotos de su equipo van en el marco"
     },
     {
      "en": "Wine box with crash-lock bottom",
      "pt": "Caixa de vinho com fundo automático",
      "es": "Caja de vino con fondo automático"
     },
     {
      "en": "Rigid gift box, assembly guide",
      "pt": "Caixa de presente rígida, guia de montagem",
      "es": "Caja de regalo rígida, guía de armado"
     },
     {
      "en": "Calendar box",
      "pt": "Caixa do calendário",
      "es": "Caja del calendario"
     }
    ],
    "imgs": 6
   },
   {
    "id": "fernanda",
    "client": "Fernanda S. R.",
    "country": {
     "en": "Brazil",
     "pt": "Brasil",
     "es": "Brasil"
    },
    "stars": 5,
    "cat": {
     "en": "Brand & campaign",
     "pt": "Marca e campanha",
     "es": "Marca y campaña"
    },
    "title": "Dra. Fernanda Ribeiro",
    "sub": {
     "en": "Identity and a four-piece campaign for an aesthetics clinic",
     "pt": "Identidade e campanha de quatro peças para uma clínica de estética",
     "es": "Identidad y campaña de cuatro piezas para una clínica estética"
    },
    "text": {
     "en": "An advanced aesthetics clinic wanted to look as refined as its care. I designed the identity, with logo and symbol in four colourways, a pattern and a brand guide, and a campaign of four arts, each prepared for print in A4 and for the Instagram feed and stories.",
     "pt": "Uma clínica de estética avançada queria parecer tão refinada quanto o seu atendimento. Criei a identidade, com logo e símbolo em quatro versões de cor, um padrão e um guia de marca, e uma campanha de quatro artes, cada uma preparada para impressão em A4 e para o feed e os stories do Instagram.",
     "es": "Una clínica de estética avanzada quería verse tan refinada como su atención. Diseñé la identidad, con logo y símbolo en cuatro versiones de color, un patrón y una guía de marca, y una campaña de cuatro artes, cada una preparada para impresión en A4 y para el feed y las historias de Instagram."
    },
    "deliv": {
     "en": "Logo and symbol · pattern · brand guide · 4 arts in A4, feed and stories",
     "pt": "Logo e símbolo · padrão · guia de marca · 4 artes em A4, feed e stories",
     "es": "Logo y símbolo · patrón · guía de marca · 4 artes en A4, feed e historias"
    },
    "quote": null,
    "caps": [
     {
      "en": "The four campaign arts",
      "pt": "As quatro artes da campanha",
      "es": "Las cuatro artes de la campaña"
     },
     {
      "en": "Feed and story versions",
      "pt": "Versões para feed e stories",
      "es": "Versiones para feed e historias"
     },
     {
      "en": "The brand guide",
      "pt": "O guia de marca",
      "es": "La guía de marca"
     }
    ],
    "imgs": 3
   },
   {
    "id": "luh",
    "client": "P. L. R.",
    "country": {
     "en": "Brazil",
     "pt": "Brasil",
     "es": "Brasil"
    },
    "stars": 5,
    "cat": {
     "en": "Editable templates",
     "pt": "Modelos editáveis",
     "es": "Plantillas editables"
    },
    "title": "Luh Reis · Personal Trainer",
    "sub": {
     "en": "Workout sheets her students open on the phone",
     "pt": "Planilhas de treino que os alunos abrem no celular",
     "es": "Planillas de entrenamiento que sus alumnos abren en el celular"
    },
    "text": {
     "en": "A personal trainer wanted workout sheets that look like her brand and that she can edit herself in Canva. I made the ABC and ABCDE sets: a cover, a how-to page and one page per workout, with sets, reps, load and rest laid out to read well on a phone. Along the way I gave her logo a full set of colour versions too.",
     "pt": "Uma personal trainer queria planilhas de treino com a cara da marca dela e que ela mesma pudesse editar no Canva. Fiz os conjuntos ABC e ABCDE: capa, página de como usar e uma página por treino, com séries, repetições, carga e descanso organizados para ler bem no celular. No caminho, ainda dei ao logo dela um conjunto completo de versões de cor.",
     "es": "Una entrenadora personal quería planillas de entrenamiento con la cara de su marca y que ella misma pudiera editar en Canva. Hice los conjuntos ABC y ABCDE: portada, página de cómo usar y una página por entrenamiento, con series, repeticiones, carga y descanso ordenados para leerse bien en el celular. De paso, le di a su logo un juego completo de versiones de color."
    },
    "deliv": {
     "en": "ABC and ABCDE sheets for Canva · PDF for students · logo in six colours",
     "pt": "Planilhas ABC e ABCDE para o Canva · PDF para os alunos · logo em seis cores",
     "es": "Planillas ABC y ABCDE para Canva · PDF para los alumnos · logo en seis colores"
    },
    "quote": {
     "orig": "pt",
     "text": "Profissional muito eficiente, compreendeu de forma muito rápida a minha necessidade e entregou no mesmo dia um design profissional, lindo e funcional. Além disso, fez uma gentileza no meu logo e todas as variações, algo que nem estava previsto. Com certeza voltarei a trabalhar com ela novamente, pois foi impecável.",
     "tr": {
      "en": "A very efficient professional who understood what I needed very quickly and delivered a professional, beautiful and functional design the same day. On top of that, she kindly reworked my logo and all its variations, which wasn't even planned. I will definitely work with her again, because it was flawless.",
      "es": "Una profesional muy eficiente, entendió muy rápido lo que necesitaba y entregó el mismo día un diseño profesional, bonito y funcional. Además, tuvo la gentileza de trabajar mi logo y todas sus variaciones, algo que ni siquiera estaba previsto. Sin duda volveré a trabajar con ella, porque fue impecable."
     }
    },
    "caps": [
     {
      "en": "The ABC set and her logo",
      "pt": "O conjunto ABC e o logo dela",
      "es": "El conjunto ABC y su logo"
     },
     {
      "en": "The ABCDE set",
      "pt": "O conjunto ABCDE",
      "es": "El conjunto ABCDE"
     },
     {
      "en": "Her logo in the brand colours",
      "pt": "O logo dela nas cores da marca",
      "es": "Su logo en los colores de la marca"
     }
    ],
    "imgs": 3
   },
   {
    "id": "book",
    "client": "Arnaldo C. J.",
    "country": {
     "en": "Brazil",
     "pt": "Brasil",
     "es": "Brasil"
    },
    "stars": 5,
    "cat": {
     "en": "Editorial design",
     "pt": "Design editorial",
     "es": "Diseño editorial"
    },
    "title": "Autismo para o povo",
    "sub": {
     "en": "Layout of a book, for print and e-book",
     "pt": "Diagramação de um livro, impresso e e-book",
     "es": "Maquetación de un libro, impreso y e-book"
    },
    "text": {
     "en": "A book about autism written to be understood by everyone. I laid out the interior for the printer at 14 × 21 cm, rebuilt the contents with automatic page numbers, cleaned every broken line and page break, and prepared a digital PDF with a clickable contents page, an EPUB for the e-book stores, the editable files and a report listing every change.",
     "pt": "Um livro sobre autismo escrito para ser entendido por todos. Diagramei o miolo para a gráfica em 14 × 21 cm, refiz o sumário com numeração automática, limpei cada quebra de linha e de página indevida e preparei um PDF digital com sumário clicável, um EPUB para as lojas de e-book, os arquivos editáveis e um relatório com cada alteração.",
     "es": "Un libro sobre autismo escrito para que todos lo entiendan. Maqueté el interior para la imprenta en 14 × 21 cm, rehíce el índice con numeración automática, limpié cada salto de línea y de página indebido y preparé un PDF digital con índice clicable, un EPUB para las tiendas de e-books, los archivos editables y un informe con cada cambio."
    },
    "deliv": {
     "en": "Print-ready interior, 182 pages · digital PDF · EPUB · editable files · change report",
     "pt": "Miolo pronto para a gráfica, 182 páginas · PDF digital · EPUB · arquivos editáveis · relatório de alterações",
     "es": "Interior listo para imprenta, 182 páginas · PDF digital · EPUB · archivos editables · informe de cambios"
    },
    "quote": null,
    "caps": [
     {
      "en": "Contents, cover and a chapter page",
      "pt": "Sumário, capa e uma página de capítulo",
      "es": "Índice, portada y una página de capítulo"
     },
     {
      "en": "The digital edition opens with the author's cover",
      "pt": "A edição digital abre com a capa do autor",
      "es": "La edición digital abre con la portada del autor"
     },
     {
      "en": "Contents and running text",
      "pt": "Sumário e texto corrido",
      "es": "Índice y texto corrido"
     }
    ],
    "imgs": 3
   },
   {
    "id": "cipreste",
    "client": "Maria J. B. C.",
    "country": {
     "en": "Brazil",
     "pt": "Brasil",
     "es": "Brasil"
    },
    "stars": null,
    "cat": {
     "en": "Editorial design",
     "pt": "Design editorial",
     "es": "Diseño editorial"
    },
    "title": "Cipreste Móveis Planejados",
    "sub": {
     "en": "A portfolio for a young made-to-measure furniture studio",
     "pt": "Um portfólio para uma marcenaria planejada que está começando",
     "es": "Un portafolio para un taller de muebles a medida que recién empieza"
    },
    "text": {
     "en": "A furniture studio new on the market needed a portfolio that looks complete even with only a few projects. I designed an editorial A4 layout with arched photos and gold details, treated their own photos for light, colour and straight lines, and set one model page per project that they duplicate in Canva as new work comes in.",
     "pt": "Uma marcenaria nova no mercado precisava de um portfólio que parecesse completo mesmo com poucos projetos. Criei um layout editorial em A4 com fotos em arco e detalhes em dourado, tratei as próprias fotos deles (luz, cor e linhas retas) e montei uma página modelo por projeto, que eles duplicam no Canva a cada novo trabalho.",
     "es": "Un taller de muebles nuevo en el mercado necesitaba un portafolio que se viera completo aun con pocos proyectos. Diseñé una maqueta editorial en A4 con fotos en arco y detalles en dorado, traté sus propias fotos (luz, color y líneas rectas) y armé una página modelo por proyecto, que ellos duplican en Canva con cada trabajo nuevo."
    },
    "deliv": {
     "en": "13-page portfolio · print PDF and light phone PDF · Canva file · treated photos",
     "pt": "Portfólio de 13 páginas · PDF para impressão e PDF leve para celular · arquivo para o Canva · fotos tratadas",
     "es": "Portafolio de 13 páginas · PDF para imprimir y PDF liviano para celular · archivo para Canva · fotos tratadas"
    },
    "quote": null,
    "caps": [
     {
      "en": "Index, cover and a project page",
      "pt": "Sumário, capa e uma página de projeto",
      "es": "Índice, portada y una página de proyecto"
     },
     {
      "en": "The cover",
      "pt": "A capa",
      "es": "La portada"
     },
     {
      "en": "A project page: the slatted bar",
      "pt": "Uma página de projeto: o bar ripado",
      "es": "Una página de proyecto: el bar de listones"
     },
     {
      "en": "All thirteen pages",
      "pt": "As treze páginas",
      "es": "Las trece páginas"
     }
    ],
    "imgs": 4
   },
   {
    "id": "vilela",
    "client": "M. L.",
    "country": {
     "en": "Brazil",
     "pt": "Brasil",
     "es": "Brasil"
    },
    "stars": null,
    "cat": {
     "en": "Logo vectorization",
     "pt": "Vetorização de logo",
     "es": "Vectorización de logo"
    },
    "title": "Rancho Vilela Loureiro",
    "sub": {
     "en": "A branding iron and a ranch seal, redrawn as clean vectors",
     "pt": "Uma marca de ferro e um selo de rancho, redesenhados em vetor",
     "es": "Una marca de hierro y un sello de rancho, redibujados en vector"
    },
    "text": {
     "en": "Marcos wanted his two marks exactly as they are, only sharp at any size. Instead of auto-tracing, I redrew the branding-iron monogram and the ranch seal as clean curves over his originals, so the edges stay smooth from a business card to a sign, in one colour and in full colour.",
     "pt": "O Marcos queria as duas marcas exatamente como são, só que nítidas em qualquer tamanho. Em vez de vetorizar no automático, redesenhei o monograma da marca de ferro e o selo do rancho em curvas limpas sobre os originais dele, para as bordas ficarem suaves do cartão de visita à placa, em uma cor e colorido.",
     "es": "Marcos quería sus dos marcas exactamente como son, solo que nítidas en cualquier tamaño. En lugar de vectorizar en automático, redibujé el monograma de la marca de hierro y el sello del rancho en curvas limpias sobre sus originales, para que los bordes queden suaves de la tarjeta al cartel, en un color y a todo color."
    },
    "deliv": {
     "en": "Both marks in AI, EPS, SVG, PDF and PNG · one-colour and colour versions",
     "pt": "As duas marcas em AI, EPS, SVG, PDF e PNG · versões em uma cor e colorida",
     "es": "Las dos marcas en AI, EPS, SVG, PDF y PNG · versiones en un color y a color"
    },
    "quote": null,
    "caps": [
     {
      "en": "The ranch seal",
      "pt": "O selo do rancho",
      "es": "El sello del rancho"
     },
     {
      "en": "The branding-iron mark",
      "pt": "A marca de ferro",
      "es": "La marca de hierro"
     },
     {
      "en": "The seal, one colour and full colour",
      "pt": "O selo, em uma cor e colorido",
      "es": "El sello, en un color y a color"
     }
    ],
    "imgs": 3
   },
   {
    "id": "will",
    "client": "W.",
    "country": {
     "en": "Mexico",
     "pt": "México",
     "es": "México"
    },
    "stars": 5,
    "cat": {
     "en": "YouTube thumbnails",
     "pt": "Miniaturas para YouTube",
     "es": "Miniaturas para YouTube"
    },
    "title": "¿Qué les pasó?",
    "sub": {
     "en": "Thumbnails for a business-history channel",
     "pt": "Miniaturas para um canal de histórias de negócios",
     "es": "Miniaturas para un canal de historias de negocios"
    },
    "text": {
     "en": "A Spanish-language channel about the rise and fall of famous companies, where every thumbnail has to win the click. I built each one piece by piece in a layered PSD, in the channel's own style: the textured wall, the cut-out figure, the 3D trend arrow, the brand plates and the headline. The figure is AI-generated, as the channel asked.",
     "pt": "Um canal em espanhol sobre a ascensão e a queda de empresas famosas, em que cada miniatura precisa ganhar o clique. Montei cada uma peça por peça num PSD em camadas, no estilo do próprio canal: a parede texturizada, a figura recortada, a seta 3D de tendência, as placas das marcas e o título. A figura é gerada com IA, como o canal pediu.",
     "es": "Un canal en español sobre el auge y la caída de empresas famosas, donde cada miniatura tiene que ganarse el clic. Armé cada una pieza por pieza en un PSD por capas, con el estilo propio del canal: la pared con textura, la figura recortada, la flecha 3D de tendencia, las placas de las marcas y el titular. La figura está generada con IA, como pidió el canal."
    },
    "deliv": {
     "en": "PNG at 1280 and 1920 px · layered PSD with alternate headlines",
     "pt": "PNG em 1280 e 1920 px · PSD em camadas com títulos alternativos",
     "es": "PNG en 1280 y 1920 px · PSD por capas con titulares alternativos"
    },
    "quote": null,
    "caps": [
     {
      "en": "Thumbnail for the luxury-brands episode",
      "pt": "Miniatura do episódio das marcas de luxo",
      "es": "Miniatura del episodio de las marcas de lujo"
     },
     {
      "en": "Full size, 16:9",
      "pt": "Tamanho real, 16:9",
      "es": "Tamaño completo, 16:9"
     }
    ],
    "imgs": 2
   },
   {
    "id": "angel",
    "client": "Angel E.",
    "country": {
     "en": "Spain",
     "pt": "Espanha",
     "es": "España"
    },
    "stars": 5,
    "noimg": "quote",
    "cat": {
     "en": "Image editing",
     "pt": "Edição de imagens",
     "es": "Edición de imágenes"
    },
    "title": {
     "en": "Retouching for a website and online store",
     "pt": "Retoque para site e loja online",
     "es": "Retoque para web y tienda online"
    },
    "sub": null,
    "text": null,
    "deliv": null,
    "quote": {
     "orig": "es",
     "text": "Muy buena experiencia trabajando con ella. Ha entendido perfectamente lo que buscábamos desde el principio y ha sabido trasladarlo a un diseño profesional, moderno y muy cuidado. Destacaría especialmente su atención al detalle, buena comunicación y predisposición para realizar cambios y mejoras durante todo el proyecto. El resultado final ha cumplido totalmente nuestras expectativas. Sin duda, volveríamos a contar con ella para futuros trabajos.",
     "tr": {
      "en": "A very good experience working with her. She understood exactly what we were looking for from the start and turned it into a professional, modern and carefully crafted design. I would especially highlight her attention to detail, good communication and willingness to make changes and improvements throughout the project. The final result fully met our expectations. We would certainly work with her again on future projects.",
      "pt": "Uma experiência muito boa trabalhando com ela. Entendeu perfeitamente o que buscávamos desde o início e soube transformar isso em um design profissional, moderno e muito cuidadoso. Destaco especialmente a atenção aos detalhes, a boa comunicação e a disposição para fazer mudanças e melhorias durante todo o projeto. O resultado final atendeu totalmente às nossas expectativas. Sem dúvida, voltaríamos a contar com ela em trabalhos futuros."
     }
    },
    "caps": [],
    "imgs": 0
   },
   {
    "id": "photos",
    "client": "J. J. D. P.",
    "country": {
     "en": "Brazil",
     "pt": "Brasil",
     "es": "Brasil"
    },
    "stars": 5,
    "noimg": "private",
    "cat": {
     "en": "Photo editing",
     "pt": "Edição de fotos",
     "es": "Edición de fotos"
    },
    "title": {
     "en": "250 photos of an 80th birthday",
     "pt": "250 fotos de um aniversário de 80 anos",
     "es": "250 fotos de un cumpleaños de 80 años"
    },
    "sub": null,
    "text": {
     "en": "Light and colour edited photo by photo, faces kept true. The photos belong to a family, so they stay private.",
     "pt": "Luz e cor ajustadas foto a foto, com os rostos preservados. As fotos são de uma família, por isso ficam privadas.",
     "es": "Luz y color ajustados foto por foto, con los rostros intactos. Las fotos son de una familia, así que quedan privadas."
    },
    "deliv": null,
    "quote": null,
    "caps": [],
    "imgs": 0
   }
  ],

  /* Labels the script writes into the page. */
  ui: {
    en: { all: "All", project: "project", projects: "projects", visuals: "3 visuals", view: "View", open: "Open", close: "Close", filter: "Filter", concept: "Concept study", stack: "Suggested production stack", palette: "Palette", next: "Next project", end: "Independent concept exploration", endMotion: "Still keyframes / visual treatment", motion: "Motion effects", on: "On", off: "Off", inProgress: "In progress", inProgressLong: "In progress, not rated yet", clientProject: "Client project", client: "Client", delivered: "Delivered", rating: "Rating", onWorkana: "5.0 on Workana", realNote: "Real client project · shown as delivered", nextClient: "Next client project", trFrom: "Translated from", lang_es: "Spanish", lang_pt: "Portuguese", seeOrig: "Read the original" },
    pt: { all: "Todos", project: "projeto", projects: "projetos", visuals: "3 visuais", view: "Ver", open: "Abrir", close: "Fechar", filter: "Filtrar", concept: "Estudo de conceito", stack: "Stack de produção sugerido", palette: "Paleta", next: "Próximo projeto", end: "Exploração de conceito independente", endMotion: "Quadros-chave estáticos / tratamento visual", motion: "Efeitos de movimento", on: "Ligados", off: "Desligados", inProgress: "Em andamento", inProgressLong: "Em andamento, ainda sem avaliação", clientProject: "Projeto de cliente", client: "Cliente", delivered: "Entregue", rating: "Avaliação", onWorkana: "5.0 no Workana", realNote: "Projeto real de cliente · mostrado como foi entregue", nextClient: "Próximo projeto de cliente", trFrom: "Traduzido do", lang_es: "espanhol", lang_pt: "português", seeOrig: "Ler o original" },
    es: { all: "Todos", project: "proyecto", projects: "proyectos", visuals: "3 visuales", view: "Ver", open: "Abrir", close: "Cerrar", filter: "Filtrar", concept: "Estudio de concepto", stack: "Stack de producción sugerido", palette: "Paleta", next: "Siguiente proyecto", end: "Exploración de concepto independiente", endMotion: "Fotogramas clave fijos / tratamiento visual", motion: "Efectos de movimiento", on: "Activados", off: "Desactivados", inProgress: "En curso", inProgressLong: "En curso, todavía sin calificación", clientProject: "Proyecto de cliente", client: "Cliente", delivered: "Entregado", rating: "Calificación", onWorkana: "5.0 en Workana", realNote: "Proyecto real de cliente · mostrado tal como se entregó", nextClient: "Siguiente proyecto de cliente", trFrom: "Traducido del", lang_es: "español", lang_pt: "portugués", seeOrig: "Leer el original" },
  },

  /* The "My Career" book. Facts come from the public Workana profile (21 Oct 2026); its recent jobs and quotes come from `clients`. */
  career: {
    craft: [
      { lvl: 4, t: { en: "Photoshop", pt: "Photoshop", es: "Photoshop" } },
      { lvl: 4, t: { en: "Sound design", pt: "Sound design", es: "Diseño sonoro" } },
      { lvl: 3, t: { en: "Graphic design", pt: "Design gráfico", es: "Diseño gráfico" } },
      { lvl: 3, t: { en: "Illustration", pt: "Ilustração", es: "Ilustración" } },
      { lvl: 3, t: { en: "Logo design", pt: "Design de logo", es: "Diseño de logo" } },
      { lvl: 3, t: { en: "Video production", pt: "Produção de vídeo", es: "Producción de video" } },
      { lvl: 2, t: { en: "3D rendering", pt: "Renderização 3D", es: "Render 3D" } },
      { lvl: 2, t: { en: "UI design", pt: "Design de interface", es: "Diseño de interfaz" } },
      { lvl: 2, t: { en: "After Effects", pt: "After Effects", es: "After Effects" } },
    ],
    years: {
      4: { en: "10+ yrs", pt: "10+ anos", es: "10+ años" },
      3: { en: "5–10 yrs", pt: "5–10 anos", es: "5–10 años" },
      2: { en: "3–5 yrs", pt: "3–5 anos", es: "3–5 años" },
    },
    services: [
      { t: { en: "Brand identity", pt: "Identidade de marca", es: "Identidad de marca" }, d: { en: "Logo, type, colour and packaging", pt: "Logo, tipografia, cor e embalagem", es: "Logo, tipografía, color y packaging" } },
      { t: { en: "Editorial design", pt: "Design editorial", es: "Diseño editorial" }, d: { en: "Books, covers and layouts", pt: "Livros, capas e diagramação", es: "Libros, portadas y maquetación" } },
      { t: { en: "3D visualization", pt: "Visualização 3D", es: "Visualización 3D" }, d: { en: "Architecture, interiors and products", pt: "Arquitetura, interiores e produtos", es: "Arquitectura, interiores y productos" } },
      { t: { en: "Product imagery & retouching", pt: "Imagem de produto e retoque", es: "Imagen de producto y retoque" }, d: { en: "Ready for online stores", pt: "Pronta para lojas online", es: "Lista para tiendas online" } },
      { t: { en: "Motion & video", pt: "Motion e vídeo", es: "Motion y video" }, d: { en: "Editing, motion graphics, 3D animation", pt: "Edição, motion graphics, animação 3D", es: "Edición, motion graphics, animación 3D" } },
      { t: { en: "Sound design", pt: "Sound design", es: "Diseño sonoro" }, d: { en: "Cleanup, mixing, soundscapes", pt: "Limpeza, mixagem, ambiências", es: "Limpieza, mezcla, ambientes" } },
      { t: { en: "UI/UX design", pt: "Design UI/UX", es: "Diseño UI/UX" }, d: { en: "Web and mobile, prototype-ready", pt: "Web e mobile, pronto para protótipo", es: "Web y móvil, listo para prototipo" } },
    ],
    thumbs: ["aurel-1", "canto-1", "silent-archive-1", "casa-calma-2", "luma-1", "sonora-1"],
    text: {
      en: {
        title: "My Career", vol: "Volume I · 2026", exlibris: "Ex libris", role: "Graphic designer & digital creative", place: "Brazil",
        ch: "Chapter",
        c1t: "The designer",
        c1p: "As a multidisciplinary graphic designer and digital creative, I make premium visuals for brands, products, e-commerce and digital platforms: polished, realistic images that stay clear, functional and useful for selling.",
        c1q: "I value visual quality, attention to detail, clear communication and reliable delivery.",
        langs: "Languages", l1: "Portuguese", l1v: "native", l2: "English", l2v: "high intermediate", l3: "Spanish", l3v: "basic",
        c2t: "Craft & years", c2note: "Years of experience as listed on my Workana profile.",
        c3t: "On Workana", rating: "average client rating", done: "projects delivered", reviews: "client reviews",
        level: "Gold level · member since September 2026", eng: "Workana English test: 80%, top 12%",
        recent: "Recent client work",
        job1: "Image editing & retouching for web and e-commerce", job1w: "Client in Spain",
        job2: "Editorial layout of a 175-page book", job2w: "Client in Brazil",
        c4t: "In my clients' words",
        quote: "A very good experience working with her. She understood exactly what we were looking for from the start and turned it into a professional, modern and carefully crafted design. I would especially highlight her attention to detail, good communication and willingness to make changes and improvements throughout the project.",
        by: "Angel E., Spain", qnote: "Translated from Spanish",
        q1: "Communication", q2: "Deadlines", q3: "Quality",
        c5t: "What I make",
        c6t: "The collection", c6p: "Twenty concept studies across nine disciplines: sixty visuals made to show range, from identities on paper to worlds on screen.", c6link: "See the work",
        c7t: "The next chapter is <em>yours.</em>", c7p: "Send me your brief on Workana. I reply in Portuguese and English, and I also take briefs in Spanish.", c7cta: "Hire me on Workana", sign: "Nayara",
        back: "Selected Works · 2026",
        prev: "Previous page", next: "Next page", close: "Close the book", hint: "Click a page or use ← → to turn it",
      },
      pt: {
        title: "Minha Carreira", vol: "Volume I · 2026", exlibris: "Ex libris", role: "Designer gráfica e criativa digital", place: "Brasil",
        ch: "Capítulo",
        c1t: "A designer",
        c1p: "Sou designer gráfica e criativa digital multidisciplinar. Crio visuais premium para marcas, produtos, e-commerce e plataformas digitais: imagens sofisticadas e realistas, sem perder clareza, funcionalidade e foco comercial.",
        c1q: "Valorizo qualidade visual, atenção aos detalhes, comunicação clara e entregas profissionais.",
        langs: "Idiomas", l1: "Português", l1v: "nativo", l2: "Inglês", l2v: "intermediário alto", l3: "Espanhol", l3v: "básico",
        c2t: "Ofício & anos", c2note: "Anos de experiência conforme meu perfil no Workana.",
        c3t: "No Workana", rating: "nota média dos clientes", done: "projetos entregues", reviews: "avaliações de clientes",
        level: "Nível Ouro · membro desde setembro de 2026", eng: "Teste de inglês do Workana: 80%, top 12%",
        recent: "Trabalhos recentes para clientes",
        job1: "Edição e retoque de imagens para web e e-commerce", job1w: "Cliente na Espanha",
        job2: "Diagramação editorial de um livro de 175 páginas", job2w: "Cliente no Brasil",
        c4t: "Nas palavras das minhas clientes",
        quote: "Uma experiência muito boa trabalhando com ela. Entendeu perfeitamente o que buscávamos desde o início e soube transformar isso em um design profissional, moderno e muito cuidadoso. Destaco especialmente sua atenção aos detalhes, a boa comunicação e a disposição para fazer mudanças e melhorias durante todo o projeto.",
        by: "Angel E., Espanha", qnote: "Traduzido do espanhol",
        q1: "Comunicação", q2: "Prazos", q3: "Qualidade",
        c5t: "O que eu crio",
        c6t: "A coleção", c6p: "Vinte estudos de conceito em nove disciplinas: sessenta visuais feitos para mostrar alcance, da identidade no papel a mundos na tela.", c6link: "Ver os trabalhos",
        c7t: "O próximo capítulo é <em>seu.</em>", c7p: "Envie seu briefing pelo Workana. Respondo em português e inglês, e também recebo briefings em espanhol.", c7cta: "Contratar no Workana", sign: "Nayara",
        back: "Selected Works · 2026",
        prev: "Página anterior", next: "Próxima página", close: "Fechar o livro", hint: "Clique numa página ou use ← → para virar",
      },
      es: {
        title: "Mi Carrera", vol: "Volumen I · 2026", exlibris: "Ex libris", role: "Diseñadora gráfica y creativa digital", place: "Brasil",
        ch: "Capítulo",
        c1t: "La diseñadora",
        c1p: "Soy diseñadora gráfica y creativa digital multidisciplinaria. Creo visuales premium para marcas, productos, e-commerce y plataformas digitales: imágenes pulidas y realistas que además son claras, funcionales y útiles para vender.",
        c1q: "Valoro la calidad visual, la atención al detalle, la comunicación clara y las entregas profesionales.",
        langs: "Idiomas", l1: "Portugués", l1v: "nativo", l2: "Inglés", l2v: "intermedio alto", l3: "Español", l3v: "básico",
        c2t: "Oficio y años", c2note: "Años de experiencia según mi perfil de Workana.",
        c3t: "En Workana", rating: "calificación media de clientes", done: "proyectos entregados", reviews: "reseñas de clientes",
        level: "Nivel Oro · miembro desde septiembre de 2026", eng: "Prueba de inglés de Workana: 80%, top 12%",
        recent: "Trabajos recientes para clientes",
        job1: "Edición y retoque de imágenes para web y e-commerce", job1w: "Cliente en España",
        job2: "Maquetación editorial de un libro de 175 páginas", job2w: "Cliente en Brasil",
        c4t: "En palabras de mis clientas",
        quote: "Muy buena experiencia trabajando con ella. Ha entendido perfectamente lo que buscábamos desde el principio y ha sabido trasladarlo a un diseño profesional, moderno y muy cuidado. Destacaría especialmente su atención al detalle, buena comunicación y predisposición para realizar cambios y mejoras durante todo el proyecto.",
        by: "Angel E., España", qnote: "",
        q1: "Comunicación", q2: "Plazos", q3: "Calidad",
        c5t: "Lo que creo",
        c6t: "La colección", c6p: "Veinte estudios de concepto en nueve disciplinas: sesenta visuales hechos para mostrar alcance, de identidades en papel a mundos en pantalla.", c6link: "Ver los trabajos",
        c7t: "El próximo capítulo es <em>tuyo.</em>", c7p: "Envíame tu brief por Workana. Respondo en portugués e inglés, y también recibo briefs en español.", c7cta: "Contrátame en Workana", sign: "Nayara",
        back: "Selected Works · 2026",
        prev: "Página anterior", next: "Página siguiente", close: "Cerrar el libro", hint: "Haz clic en una página o usa ← → para pasarla",
      },
    },
  },

  /* Translations of the fixed page text in index.html. */
  strings: {
    pt: {
      "skip": "Pular para os trabalhos", "a.langs": "Idioma", "a.filters": "Filtrar projetos", "a.nav": "Seções",
      "nav.clients": "Clientes", "nav.work": "Trabalhos", "nav.disc": "Disciplinas", "nav.career": "Carreira", "nav.contact": "Contato",
      "btn.career": "Minha Carreira", "btn.careerSub": "Abrir o livro",
      "hero.eyebrow": "Direção de arte · Design · Narrativa visual",
      "hero.title": "<span class=\"ln\"><span>Um ponto</span></span> <span class=\"ln\"><span>de <em class=\"foil\">vista.</em></span></span>",
      "hero.intro": "Identidades únicas. Detalhes pensados.<br>Uma coleção de ideias que ganham forma.",
      "hero.explore": "Ver trabalhos selecionados", "hero.count": "20 projetos",
      "hero.sign": "Portfólio de Nayara J. N. · Brasil", "hero.proof": "Nível Ouro no Workana · veja os trabalhos para clientes", "hero.tag": "Designer gráfica · Brasil", "hero.alt": "Retrato de Nayara J. N.", "foot.alt": "Nayara J. N. no estúdio",
      "hero.b1": "Trabalhos selecionados / 2026", "hero.b2": "Mundos de marca, objetos & experiências",
      "cl.kicker": "Projetos reais · Workana", "cl.title": "Trabalhos para <em>clientes</em>",
      "cl.lede": "Briefings reais, prazos reais.<br>Cinco estrelas em todas as avaliações.",
      "cl.note": "Entregues pelo Workana para clientes no Brasil, na Argentina, no México, na Espanha e nos Estados Unidos, e mostrados aqui como foram entregues.",
      "cl.p1": "Nota no Workana", "cl.gold": "Ouro", "cl.p2": "Nível no Workana", "cl.p3": "Onde estão meus clientes", "cl.all": "Todas as avaliações no Workana",
      "work.kicker": "A coleção", "work.title": "Trabalhos <em>selecionados</em><sup>20</sup>",
      "work.lede": "Vinte estudos de conceito.<br>Sessenta perspectivas.",
      "work.note": "Todos os projetos aqui são estudos de conceito independentes. As marcas são fictícias.",
      "disc.kicker": "Uma coleção. Muitas expressões.", "disc.title": "Entre<br><em>disciplinas.</em>",
      "disc.text": "Da identidade no papel a um mundo na tela, cada estudo explora uma forma diferente de fazer uma ideia ser sentida.",
      "car.kicker": "A história até aqui", "car.title": "Uma carreira <em>encadernada</em><br>num pequeno livro.",
      "car.text": "Experiência, avaliações de clientes e os trabalhos por trás delas, reunidos num livro. Abra e vire as páginas.",
      "car.s1": "Nota no Workana", "car.s2": "Nível no Workana", "car.s3": "Anos de Photoshop", "car.s4": "Estudos de conceito",
      "car.hint": "Clique no livro para abrir",
      "foot.kicker": "Contato", "foot.title": "Boas ideias merecem<br><em>ser vistas.</em>",
      "foot.text": "Envie seu briefing pelo Workana. Respondo em português e inglês, e também recebo briefings em espanhol.",
      "foot.cta": "Contratar no Workana", "foot.note": "Os trabalhos para clientes são reais · Os estudos de conceito usam marcas fictícias", "foot.top": "Voltar ao topo",
    },
    es: {
      "skip": "Saltar a los trabajos", "a.langs": "Idioma", "a.filters": "Filtrar proyectos", "a.nav": "Secciones",
      "nav.clients": "Clientes", "nav.work": "Trabajos", "nav.disc": "Disciplinas", "nav.career": "Trayectoria", "nav.contact": "Contacto",
      "btn.career": "Mi Carrera", "btn.careerSub": "Abrir el libro",
      "hero.eyebrow": "Dirección de arte · Diseño · Narrativa visual",
      "hero.title": "<span class=\"ln\"><span>Un punto</span></span> <span class=\"ln\"><span>de <em class=\"foil\">vista.</em></span></span>",
      "hero.intro": "Identidades únicas. Detalles cuidados.<br>Una colección de ideas hechas visibles.",
      "hero.explore": "Ver trabajos seleccionados", "hero.count": "20 proyectos",
      "hero.sign": "Portafolio de Nayara J. N. · Brasil", "hero.proof": "Nivel Oro en Workana · mira el trabajo para clientes", "hero.tag": "Diseñadora gráfica · Brasil", "hero.alt": "Retrato de Nayara J. N.", "foot.alt": "Nayara J. N. en el estudio",
      "hero.b1": "Trabajos seleccionados / 2026", "hero.b2": "Mundos de marca, objetos y experiencias",
      "cl.kicker": "Proyectos reales · Workana", "cl.title": "Trabajo para <em>clientes</em>",
      "cl.lede": "Briefs reales, plazos reales.<br>Cinco estrellas en cada reseña.",
      "cl.note": "Entregados por Workana a clientes de Brasil, Argentina, México, España y Estados Unidos, y mostrados aquí tal como se entregaron.",
      "cl.p1": "Calificación en Workana", "cl.gold": "Oro", "cl.p2": "Nivel en Workana", "cl.p3": "Dónde están mis clientes", "cl.all": "Todas las reseñas en Workana",
      "work.kicker": "La colección", "work.title": "Trabajos <em>seleccionados</em><sup>20</sup>",
      "work.lede": "Veinte estudios de concepto.<br>Sesenta perspectivas.",
      "work.note": "Todos los proyectos son estudios de concepto independientes. Las marcas son ficticias.",
      "disc.kicker": "Una colección. Muchas expresiones.", "disc.title": "Entre<br><em>disciplinas.</em>",
      "disc.text": "De una identidad en papel a un mundo en pantalla, cada estudio explora una forma distinta de hacer sentir una idea.",
      "car.kicker": "La historia hasta ahora", "car.title": "Una carrera <em>encuadernada</em><br>en un pequeño libro.",
      "car.text": "Experiencia, reseñas de clientes y el trabajo detrás de ellas, reunidos en un libro. Ábrelo y pasa las páginas.",
      "car.s1": "Calificación en Workana", "car.s2": "Nivel en Workana", "car.s3": "Años en Photoshop", "car.s4": "Estudios de concepto",
      "car.hint": "Haz clic en el libro para abrirlo",
      "foot.kicker": "Contacto", "foot.title": "Las buenas ideas merecen<br><em>ser vistas.</em>",
      "foot.text": "Envíame tu brief por Workana. Respondo en portugués e inglés, y también recibo briefs en español.",
      "foot.cta": "Contrátame en Workana", "foot.note": "El trabajo para clientes es real · Los estudios de concepto usan marcas ficticias", "foot.top": "Volver arriba",
    },
  },
};
