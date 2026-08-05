// Itinerary Builder — Activity Database
// Borrowed from literatium-hotel repo, rethemed for literatium-web.
// 22 real Mompox activities across 10 interest categories.

export type TimeSlot = 'morning' | 'afternoon' | 'evening';
export type Interest = 'river' | 'food' | 'churches' | 'filigree' | 'gabo' | 'nature' | 'cemetery' | 'photography' | 'cooking' | 'cycling';
export type Style = 'relaxing' | 'active' | 'literary' | 'cultural';

export interface Activity {
  id: string;
  interests: string[];
  es: { title: string; desc: string };
  en: { title: string; desc: string };
  time: TimeSlot;
  styles?: Style[];
}

export interface LitBonus {
  id: string;
  es: { title: string; desc: string };
  en: { title: string; desc: string };
  icon: string;
}

export const ACTIVITIES: Activity[] = [
  // === RIVER ===
  {
    id: 'champán-sunset',
    interests: ['river', 'photography'],
    styles: ['relaxing', 'active', 'cultural'],
    es: { title: 'Paseo en champán al atardecer', desc: 'Embarcación tradicional con techo de palma. El río baja ancho y dorado; las cúpulas de Mompox se recortan contra el cielo. Parte una hora antes del ocaso.' },
    en: { title: 'Champán sunset cruise', desc: 'Traditional boat with palm-leaf roof. The river runs wide and golden; Mompox\'s domes silhouette against the sky. Departs an hour before sunset.' },
    time: 'evening',
  },
  {
    id: 'ciénaga-pijiño',
    interests: ['river', 'nature', 'photography'],
    styles: ['active', 'cultural'],
    es: { title: 'Ciénaga de Pijiño', desc: 'Media día en lancha por el brazo del Magdalena. Más de 300 especies de aves — garzas blancas, martín pescador, ibis, babillas y, con suerte, el mono aullador al amanecer.' },
    en: { title: 'Ciénaga de Pijiño', desc: 'Half day by boat down the Magdalena arm. Over 300 bird species — white herons, kingfishers, ibis, caimans and, if lucky, the howler monkey at dawn.' },
    time: 'morning',
  },
  {
    id: 'pesca-natación',
    interests: ['river', 'nature'],
    styles: ['active'],
    es: { title: 'Pesca y natación en lancha privada', desc: 'Alquilar una lancha con pescador local. Pescar bocachico, nadar en el brazo del río, comer fruta bajo el sol.' },
    en: { title: 'Private fishing and swimming trip', desc: 'Hire a lancha with a local fisherman. Fish for bocachico, swim in the river branch, eat fruit under the sun.' },
    time: 'morning',
  },
  {
    id: 'albarrada-caminata',
    interests: ['river', 'photography', 'cultural'],
    styles: ['relaxing', 'active'],
    es: { title: 'Caminata por la Albarrada al atardecer', desc: 'El muro de contención que bordea el río. Casas-tienda del siglo XVII se alinean sobre la piedra. Al caer la tarde, todo se vuelve dorado. Una hora, sin prisa.' },
    en: { title: 'Sunset walk along the Albarrada', desc: 'The retaining wall that borders the river. 17th-century house-shops line the stone. At dusk, everything turns golden. One hour, no rush.' },
    time: 'evening',
  },
  // === FOOD ===
  {
    id: 'tour-gastronómico',
    interests: ['food'],
    styles: ['cultural', 'active'],
    es: { title: 'Tour gastronómico momposino', desc: 'Bocachico del Magdalena, casabito, queso de capa, butifarra y vino de corozo. Empieza en el mercado, termina con dulce.' },
    en: { title: 'Momposino food tour', desc: 'Magdalena bocachico, casabito, layered cheese, butifarra and corozo wine. Starts at the market, ends with sweets.' },
    time: 'morning',
  },
  {
    id: 'clase-cocina',
    interests: ['food', 'cooking'],
    styles: ['cultural'],
    es: { title: 'Clase de cocina momposina', desc: 'Con un chef local. Aprende a hacer casabito, arepa \'e huevo y arroz de coco. Come lo que cocinas.' },
    en: { title: 'Momposino cooking class', desc: 'With a local chef. Learn to make casabito, egg arepa and coconut rice. Eat what you cook.' },
    time: 'afternoon',
  },
  {
    id: 'mercado-local',
    interests: ['food', 'photography'],
    styles: ['cultural'],
    es: { title: 'Mercado público de Mompox', desc: 'Frutas del trópico, pescado fresco, queso de capa hilado a mano. El mercado más colorido del Magdalena. Llega temprano.' },
    en: { title: 'Mompox public market', desc: 'Tropical fruits, fresh fish, hand-pulled layered cheese. The most colourful market on the Magdalena. Arrive early.' },
    time: 'morning',
  },
  // === CHURCHES ===
  {
    id: 'seis-iglesias',
    interests: ['churches', 'cultural'],
    styles: ['cultural'],
    es: { title: 'Recorrido por las seis iglesias', desc: 'Santa Bárbara con su torre barroca, la Inmaculada junto al río, San Francisco con su convento, San Agustín, San Juan de Dios y Santo Domingo. A pie o en tuk-tuk, dos horas.' },
    en: { title: 'Tour of the six churches', desc: 'Santa Bárbara with its baroque tower, the Inmaculada by the river, San Francisco with its convent, San Agustín, San Juan de Dios and Santo Domingo. On foot or by tuk-tuk, two hours.' },
    time: 'morning',
  },
  {
    id: 'semana-santa',
    interests: ['churches', 'cultural'],
    styles: ['cultural'],
    es: { title: 'Ruta de Semana Santa', desc: 'Las siete iglesias, el Paso Robado, la Serenata a los Difuntos. La segunda procesión más importante de Colombia. Solo en marzo-abril.' },
    en: { title: 'Holy Week route', desc: 'The seven churches, the Stolen Effigy, the Serenade to the Dead. Colombia\'s second most important procession. March-April only.' },
    time: 'evening',
  },
  // === FILIGREE ===
  {
    id: 'taller-filigrana',
    interests: ['filigree'],
    styles: ['cultural', 'active'],
    es: { title: 'Taller de filigrana momposina', desc: 'Tres horas con un maestro artesano. Teje hilos de plata hasta formar tu propia pieza — anillo, dije o aretes. Materiales incluidos. Te llevas la joya.' },
    en: { title: 'Mompox filigree workshop', desc: 'Three hours with a master artisan. Weave silver threads into your own piece — ring, pendant or earrings. Materials included. You take the jewel home.' },
    time: 'afternoon',
  },
  {
    id: 'ruta-filigrana',
    interests: ['filigree', 'cultural'],
    styles: ['cultural'],
    es: { title: 'Ruta de la filigrana', desc: 'Visita los talleres de los maestros joyeros de Mompox. 300 años de tradición. Mira cómo se transforma un hilo de oro en una flor.' },
    en: { title: 'Filigree route', desc: 'Visit the workshops of Mompox\'s master goldsmiths. 300 years of tradition. Watch a gold thread become a flower.' },
    time: 'afternoon',
  },
  // === GABO ===
  {
    id: 'ruta-gabo',
    interests: ['gabo', 'literary'],
    styles: ['literary', 'cultural'],
    es: { title: 'Ruta de Gabo en Mompox', desc: 'Los lugares que inspiraron Macondo — la albarrada, la plaza, las calles de Cien años de soledad. Con guía literario que cita a Gabo en cada parada.' },
    en: { title: "Gabo's route in Mompox", desc: 'The places that inspired Macondo — the albarrada, the plaza, the streets of One Hundred Years of Solitude. With a literary guide who quotes Gabo at each stop.' },
    time: 'afternoon',
  },
  {
    id: 'lectura-macondo',
    interests: ['gabo', 'literary'],
    styles: ['literary', 'relaxing'],
    es: { title: 'Lectura bajo el árbol del güiro', desc: 'Trae tu libro de Gabo. Siéntate bajo el uvero del patio de Literatium. Lee en silencio, como se leía en Macondo antes de que llegara el cine.' },
    en: { title: 'Reading under the güiro tree', desc: 'Bring your Gabo book. Sit under the uvero tree in Literatium\'s patio. Read in silence, as they read in Macondo before cinema arrived.' },
    time: 'afternoon',
  },
  // === NATURE ===
  {
    id: 'observación-aves',
    interests: ['nature', 'photography'],
    styles: ['active'],
    es: { title: 'Observación de aves al amanecer', desc: 'Salida en lancha a las 5am. Garzas, martín pescador, ibis, guacamayas y, con suerte, el mono aullador. Binoculares recomendados.' },
    en: { title: 'Dawn birdwatching', desc: 'Boat departure at 5am. Herons, kingfishers, ibis, macaws and, if lucky, the howler monkey. Binoculars recommended.' },
    time: 'morning',
  },
  {
    id: 'caballo-paseo',
    interests: ['nature', 'active'],
    styles: ['active'],
    es: { title: 'Paseo a caballo por la sabana', desc: 'Por los caminos de tierra que rodean Mompox. Cruces de río, hatos ganaderos y atardeceres sin horizonte.' },
    en: { title: 'Horseback ride through the savanna', desc: 'Along the dirt roads surrounding Mompox. River crossings, cattle ranches and sunsets without horizon.' },
    time: 'afternoon',
  },
  // === CEMETERY ===
  {
    id: 'cementerio',
    interests: ['cemetery', 'cultural', 'photography'],
    styles: ['cultural'],
    es: { title: 'Cementerio de Mompox', desc: 'Uno de los cementerios más bellos de Colombia. Tumbas coloniales, ángeles de mármol y un silencio que solo rompen los zopilotes. Especial al atardecer.' },
    en: { title: 'Mompox Cemetery', desc: 'One of Colombia\'s most beautiful cemeteries. Colonial tombs, marble angels and a silence broken only by vultures. Especially at dusk.' },
    time: 'evening',
  },
  // === PHOTOGRAPHY ===
  {
    id: 'tour-fotografía',
    interests: ['photography'],
    styles: ['active', 'cultural'],
    es: { title: 'Tour fotográfico al amanecer', desc: 'Mompox sin gente, con luz dorada. Calles empedradas, fachadas blancas, el río como espejo. Guía que conoce los ángulos secretos.' },
    en: { title: 'Sunrise photography tour', desc: 'Mompox without people, with golden light. Cobbled streets, white facades, the river as mirror. Guide who knows the secret angles.' },
    time: 'morning',
  },
  {
    id: 'callejeada-fotos',
    interests: ['photography', 'cultural'],
    styles: ['active'],
    es: { title: 'Callejeada fotográfica nocturna', desc: 'Las iglesias iluminadas, los portales con luz cálida, el río bajo la luna. Mompox de noche es otra ciudad.' },
    en: { title: 'Night photography walk', desc: 'Illuminated churches, portales with warm light, the river under the moon. Mompox at night is another city.' },
    time: 'evening',
  },
  // === CYCLING ===
  {
    id: 'bicicleta-pueblo',
    interests: ['cycling', 'active'],
    styles: ['active'],
    es: { title: 'Paseo en bicicleta por Mompox', desc: 'Alquila una bici y recorre las calles coloniales sin prisa. Del centro a la albarrada, de la plaza al cementerio. El mejor modo de sentir el pueblo.' },
    en: { title: 'Bicycle ride through Mompox', desc: 'Rent a bike and explore the colonial streets at your pace. From the centre to the albarrada, from the plaza to the cemetery. The best way to feel the town.' },
    time: 'morning',
  },
  {
    id: 'bicicleta-campo',
    interests: ['cycling', 'nature'],
    styles: ['active'],
    es: { title: 'Ciclismo por los alrededores', desc: 'Por los caminos de tierra que salen de Mompox. Hacia Pinillos, hacia la sabana. Lleva agua y protector.' },
    en: { title: 'Cycling the surroundings', desc: 'Along the dirt roads leaving Mompox. Towards Pinillos, towards the savanna. Bring water and sunscreen.' },
    time: 'morning',
  },
  // === CULTURAL EXTRA ===
  {
    id: 'city-tour-guiado',
    interests: ['cultural', 'churches', 'gabo'],
    styles: ['cultural'],
    es: { title: 'City tour guiado por el centro histórico', desc: '2.5 horas con guía local. Centro histórico, Casa de la Cultura, cementerio del Rosario. La historia completa de Mompox en una mañana.' },
    en: { title: 'Guided city tour of the historic centre', desc: '2.5 hours with a local guide. Historic centre, Casa de la Cultura, Rosario cemetery. The complete history of Mompox in one morning.' },
    time: 'morning',
  },
  {
    id: 'casa-cultura',
    interests: ['cultural'],
    styles: ['cultural'],
    es: { title: 'Casa de la Cultura', desc: 'Archivo histórico, exposiciones de filigrana, fotografía antigua de Mompox. Entrada gratuita. Donde se guarda la memoria del pueblo.' },
    en: { title: 'Casa de la Cultura', desc: 'Historical archive, filigree exhibitions, old photographs of Mompox. Free entry. Where the town\'s memory is kept.' },
    time: 'afternoon',
  },
];

export const LIT_BONUS: LitBonus[] = [
  {
    id: 'desayuno',
    es: { title: 'Desayuno en el comedor colonial', desc: 'Café único de Huila, frutas del trópico y el silencio de la mañana momposina.' },
    en: { title: 'Breakfast in the colonial dining room', desc: 'Unique Huila coffee, tropical fruits and the silence of a Mompox morning.' },
    icon: '☕',
  },
  {
    id: 'jacuzzi',
    es: { title: 'Jacuzzi del jardín al atardecer', desc: 'Agua tibia bajo las estrellas. Disponible para todos los huéspedes — no solo la Suite.' },
    en: { title: 'Garden jacuzzi at dusk', desc: 'Warm water under the stars. Available to all guests — not only the Suite.' },
    icon: '✦',
  },
  {
    id: 'siesta',
    es: { title: 'Siesta con aire acondicionado', desc: 'La hora sagrada de Mompox — de 1 a 4 pm, el calor manda a dormir.' },
    en: { title: 'Siesta with air conditioning', desc: 'Mompox\'s sacred hour — 1 to 4pm, the heat sends you to sleep.' },
    icon: '🌙',
  },
  {
    id: 'lectura',
    es: { title: 'Lectura en el corredor', desc: 'Un libro de la biblioteca, una taza de café, y el sonido del viento entre los helechos.' },
    en: { title: 'Reading in the corridor', desc: 'A book from the library, a cup of coffee, and the sound of wind through the ferns.' },
    icon: '📖',
  },
  {
    id: 'café-tarde',
    es: { title: 'Café de Huila a las 4pm', desc: 'Literatium Café servido en el comedor o el jardín. El ritual de cada tarde.' },
    en: { title: 'Huila coffee at 4pm', desc: 'Literatium Café served in the dining room or garden. The afternoon ritual.' },
    icon: '☕',
  },
];

// Step option definitions (for the UI)
export const STEP_OPTIONS = {
  duration: [
    { val: 1, es: 'Un día', en: 'One day', icon: '☀️', descEs: 'Lo esencial — río, comida y atardecer', descEn: 'The essentials — river, food and sunset' },
    { val: 2, es: 'Dos días', en: 'Two days', icon: '🌅', descEs: 'Tiempo para filigrana, iglesias y Gabo', descEn: 'Time for filigree, churches and Gabo' },
    { val: 3, es: 'Tres días', en: 'Three days', icon: '📚', descEs: 'Mompox despacio — con siesta y lecturas', descEn: 'Mompox slowly — with siesta and reading' },
  ],
  style: [
    { val: 'relaxing', es: 'Relajante', en: 'Relaxing', icon: '🌿', descEs: 'Meceredora, café y poco más', descEn: 'Rocking chair, coffee and not much more' },
    { val: 'active', es: 'Activo', en: 'Active', icon: '🚣', descEs: 'Río, caminatas y aventura', descEn: 'River, walks and adventure' },
    { val: 'literary', es: 'Literario', en: 'Literary', icon: '📖', descEs: 'Gabo, libros y realismo mágico', descEn: 'Gabo, books and magical realism' },
    { val: 'cultural', es: 'Cultural', en: 'Cultural', icon: '🏛️', descEs: 'Iglesias, filigrana e historia', descEn: 'Churches, filigree and history' },
  ],
  interests: [
    { val: 'river', es: 'Río Magdalena', en: 'Magdalena River', icon: '⛵' },
    { val: 'food', es: 'Comida momposina', en: 'Momposino food', icon: '🍴' },
    { val: 'churches', es: 'Iglesias coloniales', en: 'Colonial churches', icon: '🏛️' },
    { val: 'filigree', es: 'Filigrana', en: 'Filigree', icon: '💎' },
    { val: 'gabo', es: 'Gabo y Macondo', en: 'Gabo & Macondo', icon: '🦋' },
    { val: 'nature', es: 'Naturaleza', en: 'Nature', icon: '🌿' },
    { val: 'cemetery', es: 'Cementerio', en: 'Cemetery', icon: '⚰️' },
    { val: 'photography', es: 'Fotografía', en: 'Photography', icon: '📷' },
    { val: 'cooking', es: 'Cocina', en: 'Cooking', icon: '👨‍🍳' },
    { val: 'cycling', es: 'Bicicleta', en: 'Cycling', icon: '🚲' },
  ],
  travelers: [
    { val: 'solo', es: 'Solo', en: 'Solo', icon: '🚶' },
    { val: 'couple', es: 'En pareja', en: 'Couple', icon: '💑' },
    { val: 'family', es: 'En familia', en: 'Family', icon: '👨‍👩‍👧' },
    { val: 'friends', es: 'Con amigos', en: 'Friends', icon: '👥' },
  ],
  pace: [
    { val: 'slow', es: 'Mañanas lentas', en: 'Slow mornings', icon: '☕', descEs: 'Desayuno largo, siesta sagrada', descEn: 'Long breakfast, sacred siesta' },
    { val: 'balanced', es: 'Equilibrado', en: 'Balanced', icon: '⚖️', descEs: 'Una actividad por la mañana, otra por la tarde', descEn: 'One activity morning, one afternoon' },
    { val: 'packed', es: 'Días llenos', en: 'Packed days', icon: '🏃', descEs: 'Aprovechar cada hora de luz', descEn: 'Make the most of every daylight hour' },
  ],
};
