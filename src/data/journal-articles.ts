/**
 * JOURNAL — Literary Diario
 * -------------------------
 * Seed articles for /diario (the editorial section of Literatium).
 * Editorial voice: referential to García Márquez, Mompox, the river,
 * the colonial house, books and coffee. Slow, atmospheric, never marketing.
 *
 * The body fields are HTML strings so the article template can render
 * rich typography (drop caps, blockquotes, em, h2/h3) directly.
 */

export interface JournalArticle {
  slug: string;
  title: string;        // Spanish (default)
  titleEn: string;      // English
  excerpt: string;
  excerptEn: string;
  body: string;         // HTML string — Spanish
  bodyEn: string;       // HTML string — English
  category: string;     // Spanish category (also used as display label)
  categoryEn: string;
  tags: string[];       // Spanish tags
  readingTime: number;  // minutes
  date: string;         // ISO date string
  author: string;
  coverImage: string;   // path from /assets/...
  relatedSlugs: string[];
}

export const journalArticles: JournalArticle[] = [
  {
    slug: 'la-primera-linea-de-macondo',
    title: 'La primera línea de Macondo',
    titleEn: 'The First Line of Macondo',
    excerpt: '«Muchos años después, frente al pelotón de fusilamiento…» La frase que abrió Cien años de soledad también abrió una manera de contar el Caribe. Una nota sobre por qué esa línea, y por qué Mompox.',
    excerptEn: '"Many years later, facing the firing squad…" The sentence that opened One Hundred Years of Solitude also opened a way of telling the Caribbean. A note on why that line, and why Mompox.',
    category: 'Literatura',
    categoryEn: 'Literature',
    tags: ['García Márquez', 'Macondo', 'Cien años de soledad'],
    readingTime: 6,
    date: '2025-03-14',
    author: 'Redacción Literatium',
    coverImage: '/assets/garcia-marquez-mural.jpg',
    relatedSlugs: ['el-rio-que-no-se-olvida', 'la-albarrada-al-atardecer'],
    body: `<p class="drop-cap">Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en la que su padre lo llevó a conocer el hielo. Así comienza Cien años de soledad, y así comienza, para muchos lectores, la literatura del Caribe colombiano. Una sola frase que dobla el tiempo sobre sí mismo: el futuro del pelotón, el pasado del hielo, y el presente del recuerdo que los sostiene a ambos.</p>

<p>Gabriel García Márquez escribió esa línea en Ciudad de México, en una pequeña casa de la calle de la Loma, después de meses de no saber cómo entrar en su propia novela. La contó muchas veces: tenía los personajes, tenía el pueblo, tenía el tono — pero le faltaba la puerta. Hasta que un día, conduciendo hacia Acapulco, oyó la frase entera en la cabeza. Dio media vuelta, volvió a la ciudad, y escribió durante dieciocho meses.</p>

<h2>Macondo no está en un solo mapa</h2>

<p>Se ha discutido mucho de qué Macondo es Macondo. Aracataca, donde nació Gabo, reclama el nombre con justicia. Pero quienes caminan Mompox en una tarde de marzo reconocen en seguida el aire del pueblo ficticio: el calor que dobla las dos de la tarde, las calles desiertas, los perros dormidos en el portal, el río que pasa sin prisa llevando una memoria más larga que la del pueblo mismo. No es que Mompox sea Macondo. Es que ambos pueblos vienen del mismo río.</p>

<blockquote>«El río era entonces una cosa de la vida, no un paisaje.»</blockquote>

<p>El abuelo de Gabo, el coronel Nicolás Márquez, recorrió estos ríos. Era, como Aureliano, veterano de las guerras civiles del siglo XIX. Llevaba al niño Gabo de la mano por Aracataca y le contaba historias mientras pasaban los trenes. Pero las historias no eran sólo de Aracataca — eran del río entero, del Magdalena y sus afluentes, de los pueblos que se comunicaban por agua, de Mompox y su antiguo esplendor de puerto.</p>

<h2>Una línea que enseña a leer el tiempo</h2>

<p>Lo que hace esa primera línea extraordinaria no es solo su música. Es que en una sola cláusula nos enseña cómo va a funcionar toda la novela: el tiempo no es lineal, sino circular; los hechos se cuentan desde un futuro que los recuerda; el presente es solo el lugar donde alguien está recordando. Es una línea que ya contiene, en germen, los cien años que vienen después.</p>

<p>Quien llega a Mompox después de leer a Gabo entiende de qué se trata. Aquí también el tiempo se ha detenido, doblado sobre sí mismo. Las iglesias del siglo XVI siguen marcando las horas. La albarrada sigue conteniendo al río. Las casas coloniales siguen teniendo un patio interior donde, en cierta hora, el sol dibuja el mismo dibujo que dibujaba hace doscientos años. La primera línea de Macondo no es una metáfora: es una descripción de cómo se vive aquí.</p>

<h2>Leer a Gabo en Mompox</h2>

<p>Por eso en Literatium tenemos varios ejemplares de Cien años de soledad, en español y en inglés, junto a la ventana que da al patio. No es un detalle decorativo. Es una invitación. La invitación a leer esa primera línea despacio, y luego dejarla resonar mientras se camina al río, mientras se toma un tinto en el portal, mientras cae la tarde sobre la albarrada. Hay libros que cambian cuando se leen en su paisaje. Este es uno de ellos.</p>

<p class="marginalia">— El primer párrafo de Gabo es un mapa. El resto de la novela es solo el viaje. —</p>`,
    bodyEn: `<p class="drop-cap">Many years later, facing the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice. Thus begins One Hundred Years of Solitude, and thus begins, for many readers, the literature of the Colombian Caribbean. A single sentence that folds time upon itself: the future of the firing squad, the past of the ice, and the present of the memory that holds them both.</p>

<p>Gabriel García Márquez wrote that line in Mexico City, in a small house on Calle de la Loma, after months of not knowing how to enter his own novel. He told the story many times: he had the characters, he had the village, he had the tone — but he lacked a door. Until one day, driving toward Acapulco, he heard the whole sentence in his head. He turned the car around, went back to the city, and wrote for eighteen months.</p>

<h2>Macondo is not on any single map</h2>

<p>Much has been argued about which Macondo is Macondo. Aracataca, where Gabo was born, rightly claims the name. But those who walk Mompox on a March afternoon recognise at once the air of the fictional village: the heat that bends two in the afternoon, the empty streets, the dogs asleep on the porch, the river passing without hurry, carrying a memory longer than the village's own. It is not that Mompox is Macondo. It is that both villages come from the same river.</p>

<blockquote>"The river was then a thing of life, not a landscape."</blockquote>

<p>Gabo's grandfather, Colonel Nicolás Márquez, travelled these rivers. Like Aureliano, he was a veteran of the civil wars of the nineteenth century. He took the boy Gabo by the hand through Aracataca and told him stories while the trains went by. But the stories were not only of Aracataca — they were of the whole river, of the Magdalena and its tributaries, of the towns that communicated by water, of Mompox and its old glory as a port.</p>

<h2>A line that teaches us how to read time</h2>

<p>What makes that first line extraordinary is not only its music. It is that in a single clause it teaches us how the whole novel will work: time is not linear but circular; events are told from a future that remembers them; the present is only the place where someone is remembering. It is a line that already contains, in seed, the hundred years that come after.</p>

<p>Whoever arrives in Mompox after reading Gabo understands what this is about. Here too time has stopped, folded upon itself. The sixteenth-century churches still mark the hours. The albarrada still holds back the river. The colonial houses still have an inner courtyard where, at a certain hour, the sun draws the same figure it drew two hundred years ago. The first line of Macondo is not a metaphor: it is a description of how one lives here.</p>

<h2>Reading Gabo in Mompox</h2>

<p>That is why at Literatium we keep several copies of One Hundred Years of Solitude, in Spanish and in English, by the window that looks onto the courtyard. It is not a decorative detail. It is an invitation. The invitation to read that first line slowly, and then let it resonate while walking to the river, while drinking a tinto on the porch, while the afternoon falls over the albarrada. There are books that change when read in their landscape. This is one of them.</p>

<p class="marginalia">— Gabo's first paragraph is a map. The rest of the novel is only the journey. —</p>`
  },

  {
    slug: 'el-rio-que-no-se-olvida',
    title: 'El río que no se olvida',
    titleEn: 'The River That Is Not Forgotten',
    excerpt: 'El Magdalena no es un paisaje en Mompox — es un personaje. Sobre el champán y la boga, sobre el agua lenta que llevó el oro al Caribe y trajo los libros de España, una nota sobre el río que hizo el pueblo.',
    excerptEn: 'The Magdalena is not a landscape in Mompox — it is a character. On the champán and the boga, on the slow water that carried gold to the Caribbean and brought books from Spain, a note on the river that made the town.',
    category: 'Mompox',
    categoryEn: 'Mompox',
    tags: ['río Magdalena', 'champán', 'bogas', 'historia'],
    readingTime: 7,
    date: '2025-02-22',
    author: 'Redacción Literatium',
    coverImage: '/assets/mompox-river-sunset-real.jpg',
    relatedSlugs: ['la-albarrada-al-atardecer', 'la-primera-linea-de-macondo'],
    body: `<p class="drop-cap">El río Magdalena pasa por Mompox sin prisa, como quien ha caminado mucho y sabe que todavía le queda camino. Llega desde el sur, desde las estribaciones de los Andes, y aquí se ensancha, se vuelve lento, se vuelve casi un lago. A partir de Mompox ya no es el mismo río: es un río que piensa. Y quien vive cerca de él aprende a pensar despacio, porque el río no se puede apurar.</p>

<p>Durante tres siglos, este río fue la arteria principal del Virreinato de Nueva Granada. Por aquí bajaba el oro del interior rumbo a Cartagena, y por aquí subían los libros, las telas y los vidrios de España. Mompox, fundada en 1537, no nació por casualidad en esta orilla: nació porque era el puerto donde los champanes se detenían a esperar la marea, a cambiar de bogas, a descargar mercancía. El pueblo fue, literalmente, una hija del río.</p>

<h2>El champán — un barco de río hecho a mano</h2>

<p>El champán era una balsa de guadua de quince o veinte metros de largo, con un rancho de palma en el centro para que los pasajeros durmieran a la sombra. Lo movían, río arriba, entre doce y veinte bogas — hombres del Chocó y de las riberas, desnudos de la cintura para arriba, empujando una pértiga de madera contra el fondo. El viaje de Mompox a Honda, en el interior, duraba dos meses. Dos meses de río, de sol, de mosquitos, de la cantilena de los bogas marcando el ritmo de la pértiga.</p>

<blockquote>«El champán no era un barco. Era una manera de caminar el río.»</blockquote>

<p>Río abajo era más rápido: tres o cuatro días hasta Cartagena, dejándose llevar por la corriente, con una gran vela cuadrada de lona blanca que tomaba el viento del norte. Pero río arriba era una hazaña. Los bogas iban parados en la proa, hundían la pértiga hasta tocar fondo, caminaban hacia atrás por toda la longitud del champán empujando, y luego volvían a la proa a empezar de nuevo. Así, durante semanas. El río Magdalena fue el primer camino de Colombia, y los bogas fueron sus primeros caminantes.</p>

<h2>Lo que el río se llevó</h2>

<p>Cuando el río cambió de course a finales del siglo XIX, el puerto de Mompox perdió su razón de ser. El brazo principal del Magdalena se desvió, y los vapores pasaron por fuera. El pueblo, que había sido más rico que Cartagena en su mejor momento, se quedó dormido. Las casas coloniales no se demolieron — no había dinero para construirlas de nuevo, y no había tampoco dinero para reemplazarlas. Mompox se conservó, como se conservan las cosas en los pueblos pobres: por abandono.</p>

<p>Ese abandono, que fue una desgracia económica, fue también una suerte. Cuando la UNESCO declaró a Mompox Patrimonio de la Humanidad en 1995, declaró un pueblo que se había quedado en el siglo XVIII sin querer. Hoy, caminar la albarrada al atardecer es caminar por un puerto fantasma que no se ha ido del todo — el río sigue ahí, los champanes ya no, pero a veces, cuando cae la tarde y el aire huele a barro y a leña, uno los oye todavía.</p>

<h2>El río hoy</h2>

<p>El Magdalena sigue siendo el gran personaje de Mompox. En la mañana, los pescadores salen en canoa a buscar bocachico y bagre. En la tarde, los niños se tiran del muelle. En la noche, el río se vuelve negro y refleja las estrellas. Quien se sienta en la albarrada con un libro y un café, en silencio, entiende por qué García Márquez volvía siempre al río en sus novelas: porque el río es la memoria del Caribe colombiano, y porque lo que el río ha visto, ningún hombre lo ha olvidado.</p>

<p class="marginalia">— El río es lento porque tiene mucho que recordar. —</p>`,
    bodyEn: `<p class="drop-cap">The Magdalena River passes through Mompox without hurry, like someone who has walked far and knows there is still road ahead. It comes from the south, from the foothills of the Andes, and here it widens, becomes slow, becomes almost a lake. From Mompox on it is no longer the same river: it is a river that thinks. And whoever lives near it learns to think slowly, because the river cannot be hurried.</p>

<p>For three centuries this river was the main artery of the Viceroyalty of New Granada. Down this way came the gold of the interior bound for Cartagena, and up this way came the books, the cloth and the glassware of Spain. Mompox, founded in 1537, was not born by chance on this bank: it was born because it was the port where the champanes stopped to wait for the tide, to change bogas, to unload cargo. The town was, literally, a daughter of the river.</p>

<h2>The champán — a hand-built river boat</h2>

<p>The champán was a bamboo raft fifteen or twenty metres long, with a palm shelter in the middle for passengers to sleep in the shade. It was moved, upstream, by between twelve and twenty bogas — men from Chocó and the banks, bare from the waist up, pushing a wooden pole against the riverbed. The journey from Mompox to Honda, in the interior, took two months. Two months of river, of sun, of mosquitoes, of the chant of the bogas marking the rhythm of the pole.</p>

<blockquote>"The champán was not a boat. It was a way of walking the river."</blockquote>

<p>Downstream was faster: three or four days to Cartagena, carried by the current, with a large square sail of white canvas catching the northern wind. But upstream was a feat. The bogas stood at the bow, sank the pole until it touched bottom, walked backwards along the whole length of the champán pushing, then returned to the bow to begin again. Like that, for weeks. The Magdalena River was Colombia's first road, and the bogas were its first walkers.</p>

<h2>What the river took away</h2>

<p>When the river changed course at the end of the nineteenth century, the port of Mompox lost its reason for being. The main branch of the Magdalena shifted, and the steamboats passed outside. The town, which had been richer than Cartagena at its best, fell asleep. The colonial houses were not demolished — there was no money to build them again, and no money either to replace them. Mompox was preserved, as things are preserved in poor towns: through neglect.</p>

<p>That neglect, which was an economic misfortune, was also a piece of luck. When UNESCO declared Mompox a World Heritage Site in 1995, it declared a town that had been left in the eighteenth century without wanting to. Today, walking the albarrada at sunset is walking through a ghost port that has not entirely gone — the river is still there, the champanes are not, but sometimes, when evening falls and the air smells of mud and firewood, you can still hear them.</p>

<h2>The river today</h2>

<p>The Magdalena is still the great character of Mompox. In the morning, fishermen go out in canoes to find bocachico and catfish. In the afternoon, children dive off the pier. At night, the river turns black and reflects the stars. Whoever sits on the albarrada with a book and a coffee, in silence, understands why García Márquez always returned to the river in his novels: because the river is the memory of the Colombian Caribbean, and because what the river has seen, no one has forgotten.</p>

<p class="marginalia">— The river is slow because it has much to remember. —</p>`
  },

  {
    slug: 'cafe-unico-de-huila',
    title: 'Café único, de Huila',
    titleEn: 'A Single Coffee, from Huila',
    excerpt: 'No es el único café del mundo. Es el único que cuenta, en cada taza, la historia de una familia, de un monte y de un viaje. Una crónica sobre la finca de los Cadena en los Andes de Huila.',
    excerptEn: 'It is not the only coffee in the world. It is the only one that tells, in every cup, the story of a family, a mountain and a journey. A chronicle of the Cadena family farm in the Andes of Huila.',
    category: 'Café',
    categoryEn: 'Coffee',
    tags: ['café', 'Huila', 'familia Cadena', 'café único'],
    readingTime: 6,
    date: '2025-01-30',
    author: 'Redacción Literatium',
    coverImage: '/assets/coffee-farm-huila.jpg',
    relatedSlugs: ['martica-y-el-mapa-a-mano', 'la-primera-linea-de-macondo'],
    body: `<p class="drop-cap">En la cabecera del río Magdalena, a mil ochocientos metros sobre el nivel del mar, los Andes se pliegan en montañas suaves cubiertas de cafetos. Allí, en el departamento del Huila, la familia Cadena cultiva café desde hace cuatro generaciones. La finca no es grande: doce hectáreas de arábica, principalmente variedad Caturra y Castillo, sembradas a media ladera bajo la sombra de guamos y chagualos. Es una finca pequeña hecha con paciencia, como se hace un buen libro.</p>

<p>El café de Huila tiene una particularidad que los catadores conocen bien: la altura. Por encima de los mil setecientos metros, el grano madura más despacio. Las noches frías y los días templados concentran azúcares en la cereza del café, y eso da una taza de acidez brillante, con notas a caramelo, a panela, a fruta roja. El café del Huila ha ganado, año tras año, los concursos nacionales e internacionales de taza. Pero la familia Cadena no cultiva para los concursos. Cultiva para la mesa.</p>

<h2>La cosecha — cada grano a mano</h2>

<p>En la finca de los Cadena no hay cosechadoras mecánicas. No las hay porque la montaña no lo permite — los cafetos están sembrados en pendientes donde una máquina no podría subir. Pero tampoco las habría si la montaña fuera plana. Cada grano se cosecha a mano, y solo se cosecha el grano maduro. Un cosechador experimentado pasa por el mismo cafeto tres veces en una misma cosecha, esperando a que las cerezas verdes se vuelvan rojas. Es un trabajo lento. Es un trabajo hecho para que la taza final sepa a lo que tiene que saber.</p>

<blockquote>«El buen café no se hace en la taza. Se hace en la montaña.»</blockquote>

<p>Después de la cosecha viene el beneficio: despulpar, fermentar, lavar, secar. En la finca de los Cadena el secado se hace al sol, en patios elevados de madera, durante doce a veinte días según el clima. Es el método más lento y el más caro, pero es también el que conserva mejor los azúcares del grano. Mientras el café seca, alguien lo mueve con un rastrillo de madera cada dos horas, para que se seque parejo. Una vez seco, el grano verde reposa en costales de fique durante al menos sesenta días antes de tostar. Todo esto, antes de que el café llegue a Mompox.</p>

<h2>El viaje del café</h2>

<p>Felipe, uno de los dueños de Literatium, es Cadena por línea materna. Cada dos meses viaja a la finca en Huila, carga el café en su camioneta, y baja con él cruzando Colombia de cordillera a río. Son doce horas de carretera — por Neiva, por Gamarras, por el puente sobre el Magdalena, hasta llegar a Mompox. El café llega en costales de fique, todavía en grano verde. Aquí, en la cocina de Literatium, lo tostamos en lotes pequeños, de a un kilo y medio por vez, en una tostadora manual de tambor giratorio. Es un ritual que se hace cada mañana temprano, antes de que los huéspedes bajen a desayunar.</p>

<p>Por eso lo llamamos <em>café único</em>. No porque sea el único café del mundo, ni siquiera el único café de Huila. Es único porque cada taza cuenta la historia completa: del monte, de la familia, del viaje, del tueste. No es un producto anónimo que sale de una máquina. Es un producto firmado, con nombre y apellido, con fecha y con origen. Cuando un huésped toma una taza en Literatium, está tomando cuatro generaciones de paciencia andina.</p>

<h2>La primera página del día</h2>

<p>En Literatium, el café no es solo una bebida: es el ritual que abre cada mañana. Lo servimos en tazas de cerámica verde, recién hecho, en la sala que da al patio. Es la primera página del día. Quien lo toma despacio, mientras lee o mientras mira el jardín, entiende por qué un libro puede empezar con una taza de café, y por qué una taza de café puede, a su manera, contener un libro entero.</p>

<p class="marginalia">— Del monte de Huila, al río de Mompox, a tu taza. —</p>`,
    bodyEn: `<p class="drop-cap">At the headwaters of the Magdalena River, eighteen hundred metres above sea level, the Andes fold into gentle mountains covered in coffee plants. There, in the department of Huila, the Cadena family has grown coffee for four generations. The farm is not large: twelve hectares of arabica, mainly Caturra and Castillo varieties, planted mid-slope under the shade of guamo and chagualo trees. It is a small farm made with patience, the way one makes a good book.</p>

<p>Huila coffee has a particularity that cuppers know well: the altitude. Above seventeen hundred metres, the bean matures more slowly. Cold nights and warm days concentrate sugars in the coffee cherry, and that gives a cup of bright acidity, with notes of caramel, panela, red fruit. Huila coffee has won, year after year, national and international cup competitions. But the Cadena family does not grow for competitions. They grow for the table.</p>

<h2>The harvest — each bean by hand</h2>

<p>On the Cadena farm there are no mechanical harvesters. There are none because the mountain does not allow it — the coffee plants are planted on slopes where a machine could not climb. But there would not be any even if the mountain were flat. Each bean is harvested by hand, and only the ripe bean is harvested. An experienced picker passes through the same coffee plant three times in a single harvest, waiting for the green cherries to turn red. It is slow work. It is work done so that the final cup tastes of what it has to taste of.</p>

<blockquote>"Good coffee is not made in the cup. It is made on the mountain."</blockquote>

<p>After the harvest comes the processing: pulping, fermenting, washing, drying. On the Cadena farm the drying is done in the sun, on raised wooden patios, for twelve to twenty days depending on the weather. It is the slowest method and the most expensive, but it is also the one that best preserves the sugars of the bean. While the coffee dries, someone moves it with a wooden rake every two hours, so it dries evenly. Once dry, the green bean rests in fique sacks for at least sixty days before roasting. All this, before the coffee reaches Mompox.</p>

<h2>The journey of the coffee</h2>

<p>Felipe, one of the owners of Literatium, is a Cadena on his mother's side. Every two months he travels to the farm in Huila, loads the coffee into his pickup, and brings it down crossing Colombia from mountain range to river. It is twelve hours of road — through Neiva, through Gamarras, over the bridge across the Magdalena, until arriving in Mompox. The coffee arrives in fique sacks, still as green beans. Here, in Literatium's kitchen, we roast it in small batches, one and a half kilos at a time, in a manual drum roaster. It is a ritual done early every morning, before guests come down to breakfast.</p>

<p>That is why we call it <em>café único</em> — a single coffee. Not because it is the only coffee in the world, nor even the only coffee of Huila. It is unique because every cup tells the whole story: of the mountain, of the family, of the journey, of the roast. It is not an anonymous product that comes out of a machine. It is a signed product, with name and surname, with date and origin. When a guest drinks a cup at Literatium, they are drinking four generations of Andean patience.</p>

<h2>The first page of the day</h2>

<p>At Literatium, coffee is not only a beverage: it is the ritual that opens every morning. We serve it in green ceramic cups, freshly made, in the room overlooking the courtyard. It is the first page of the day. Whoever drinks it slowly, while reading or while looking at the garden, understands why a book can begin with a cup of coffee, and why a cup of coffee can, in its own way, contain an entire book.</p>

<p class="marginalia">— From the mountains of Huila, to the river of Mompox, to your cup. —</p>`
  },

  {
    slug: 'la-albarrada-al-atardecer',
    title: 'La albarrada al atardecer',
    titleEn: 'The Albarrada at Sunset',
    excerpt: 'Un paseo a pie por el muro de piedra del siglo XVII que contiene al Magdalena. La imagen que se queda de Mompox — el río dorado, las casas-tienda, los buguis del crepúsculo — se camina, no se fotografía.',
    excerptEn: 'A walking essay along the seventeenth-century stone wall that holds back the Magdalena. The image that stays from Mompox — the golden river, the house-shops, the dusk bugs — is walked, not photographed.',
    category: 'Mompox',
    categoryEn: 'Mompox',
    tags: ['albarrada', 'atardecer', 'caminar', 'Magdalena'],
    readingTime: 5,
    date: '2024-12-10',
    author: 'Redacción Literatium',
    coverImage: '/assets/mompox-river-colonial.jpg',
    relatedSlugs: ['el-rio-que-no-se-olvida', 'filigrana-trescientos-anos'],
    body: `<p class="drop-cap">La albarrada de Mompox es un muro de piedra coralina del siglo XVII que corre paralelo al río Magdalena a lo largo de casi un kilómetro. No es un malecón turístico. Es un muro verdadero, grueso, construido por los españoles para que el río no se llevara el pueblo en la temporada de lluvias. Tiene trescientos ochenta años, y sigue haciendo lo que se construyó para hacer: contener al río.</p>

<p>Se empieza a caminar desde la Calle de la Albarrada, frente a la iglesia de San Francisco. A las cinco de la tarde el sol ya está bajo, el calor ha aflojado, y los momposinos salen a sentarse en el muro. Hay quien pescó temprano y viene con la caña al hombro. Hay quien trae una cerveza en una bolsa plástica. Hay parejas que no se hablan. Hay niños que corren arriba del muro como si fuera un camino. La albarrada, al atardecer, es el salón de Mompox.</p>

<h2>El río se vuelve oro</h2>

<p>Es difícil describir lo que pasa con la luz a las cinco y media. El sol, ya casi tocando la selva del otro lado del río, pega de frente contra el agua. El Magdalena, que durante el día es un río color café lodoso, se vuelve, literalmente, oro líquido. No es una metáfora. Es un color. Las ondas pequeñas del agua reflejan el sol en mil puntos de luz, y la pared entera del muro se enciende en un dorado viejo, como si fuera de cera. Es el momento en el que todos los que están sentados en el muro se quedan callados, sin darse cuenta.</p>

<blockquote>«En Mompox, el atardecer no es una hora. Es una pausa del río.»</blockquote>

<p>Quien escribe ha visto muchos atardeceres en muchos ríos. El del Magdalena en Mompox es distinto porque aquí el río es ancho, lento, y el paisaje del otro lado es plano, selvático, sin montañas que corten la luz. El sol se pone derecho, sin obstáculos, y la luz dura más que en otros lugares. Hay un cuarto de hora — entre las cinco y media y las seis menos cuarto — en el que todo el pueblo parece pintado del mismo color. Las casas coloniales que dan al muro, las tejas de barro, la torre de Santa Bárbara al fondo: todo se vuelve del mismo oro viejo.</p>

<h2>Las casas-tienda</h2>

<p>Detrás del muro, en la primera fila de casas, están las antiguas casas-tienda. Eran, en el siglo XVIII, las tiendas de los comerciantes que cargaban y descargaban mercancía del río. Tienen un frente estrecho y un fondo larguísimo que llega hasta la calle paralela, con un patio interior abierto al cielo. La planta baja era la tienda; el patio era el almacén; el piso alto era la vivienda. Hoy muchas son casas de familia, pero conservan la estructura colonial: paredes de calicanto, techos de teja, ventanas de madera con rejas de hierro forjado.</p>

<p>Caminar la albarrada es, en cierto modo, leer la historia del pueblo en su arquitectura. Cada veinte metros hay una puerta de madera oscura que da a un zaguán oscuro, y al fondo del zaguán se ve un patio con un árbol. Las puertas están abiertas porque en Mompox todavía se vive hacia la calle, no hacia adentro. Quien pasa ve la vida de los otros pasar: una señora planchando, un hombre viendo televisión, un niño haciendo tarea. No hay nada que esconder. Es un pueblo que se mira a sí mismo.</p>

<h2>La vuelta y el silencio</h2>

<p>Al final de la albarrada, donde el muro dobla hacia el sur, hay una escalera de piedra que baja al río. Es el lugar donde los pescadores amarran las canoas. A las seis de la tarde ya no hay sol directo: el río se vuelve gris, después plateado, después negro. Los bugs del crepúsculo empiezan a salir del agua y a volar en espiral contra el cielo. Es la hora en la que hay que volver — no porque haya peligro, sino porque ya no hay nada que ver, y porque el silencio que viene es un silencio que conviene escuchar.</p>

<p>Quien camina la albarrada al atardecer entiende por qué Mompox es Patrimonio de la Humanidad. No es por las iglesias, aunque las iglesias también. Es por esto: por un muro de piedra, por un río dorado, por una manera de estar sentado a las cinco y media sin hacer nada, mirando el agua. Es un patrimonio del tiempo. Y el tiempo, en Mompox, no se vende. Se camina.</p>

<p class="marginalia">— Camina despacio. El río ya te está esperando. —</p>`,
    bodyEn: `<p class="drop-cap">The albarrada of Mompox is a wall of seventeenth-century coral stone that runs parallel to the Magdalena River for almost a kilometre. It is not a tourist promenade. It is a real wall, thick, built by the Spanish so the river would not carry the town away in the rainy season. It is three hundred and eighty years old, and it still does what it was built to do: hold back the river.</p>

<p>You start walking from Calle de la Albarrada, in front of the church of San Francisco. At five in the afternoon the sun is already low, the heat has loosened, and the momposinos come out to sit on the wall. There is someone who fished early and comes with the rod on his shoulder. There is someone who brings a beer in a plastic bag. There are couples who do not speak. There are children who run on top of the wall as if it were a road. The albarrada, at sunset, is Mompox's living room.</p>

<h2>The river turns to gold</h2>

<p>It is hard to describe what happens with the light at half past five. The sun, almost touching the jungle on the other side of the river, hits the water full on. The Magdalena, which during the day is a muddy brown river, becomes, literally, liquid gold. It is not a metaphor. It is a colour. The small ripples of the water reflect the sun in a thousand points of light, and the whole wall of the masonry turns an old gold, as if it were made of wax. It is the moment when everyone sitting on the wall falls quiet, without realising it.</p>

<blockquote>"In Mompox, sunset is not an hour. It is a pause of the river."</blockquote>

<p>The writer has seen many sunsets on many rivers. The Magdalena's at Mompox is different because here the river is wide, slow, and the landscape on the other side is flat, jungle, with no mountains to cut the light. The sun sets straight, with no obstacle, and the light lasts longer than elsewhere. There is a quarter of an hour — between half past five and quarter to six — when the whole town seems painted in the same colour. The colonial houses facing the wall, the clay tiles, the tower of Santa Bárbara in the distance: all turn the same old gold.</p>

<h2>The house-shops</h2>

<p>Behind the wall, in the first row of houses, are the old house-shops. In the eighteenth century these were the shops of the merchants who loaded and unloaded cargo from the river. They have a narrow front and a very long depth that reaches the parallel street, with an inner courtyard open to the sky. The ground floor was the shop; the courtyard was the warehouse; the upper floor was the dwelling. Today many are family homes, but they preserve the colonial structure: rubblework walls, tile roofs, wooden windows with wrought-iron grilles.</p>

<p>Walking the albarrada is, in a way, reading the history of the town in its architecture. Every twenty metres there is a dark wooden door leading to a dark corridor, and at the back of the corridor you see a courtyard with a tree. The doors are open because in Mompox people still live toward the street, not toward the inside. Whoever passes sees the lives of others pass: a woman ironing, a man watching television, a child doing homework. There is nothing to hide. It is a town that looks at itself.</p>

<h2>The turn and the silence</h2>

<p>At the end of the albarrada, where the wall turns south, there is a stone staircase that goes down to the river. It is where the fishermen tie their canoes. At six in the afternoon there is no direct sun anymore: the river turns grey, then silver, then black. The dusk bugs begin to come out of the water and fly in spirals against the sky. It is the hour to go back — not because there is danger, but because there is nothing left to see, and because the silence that follows is a silence worth listening to.</p>

<p>Whoever walks the albarrada at sunset understands why Mompox is a World Heritage Site. It is not for the churches, although the churches too. It is for this: for a stone wall, for a golden river, for a way of sitting at half past five doing nothing, watching the water. It is a heritage of time. And time, in Mompox, is not for sale. It is for walking.</p>

<p class="marginalia">— Walk slowly. The river is already waiting for you. —</p>`
  },

  {
    slug: 'martica-y-el-mapa-a-mano',
    title: 'Martica y el mapa a mano',
    titleEn: 'Martica and the Hand-Drawn Map',
    excerpt: 'En Literatium hay una mujer que, cuando llegas, te dibuja el mapa de Mompox a mano, con bolígrafo, en una hoja de cuaderno. Es el mapa más exacto del pueblo — porque incluye las cosas que solo ella sabe.',
    excerptEn: 'At Literatium there is a woman who, when you arrive, draws you the map of Mompox by hand, with a pen, on a notebook page. It is the most accurate map of the town — because it includes the things only she knows.',
    category: 'La Casa',
    categoryEn: 'The House',
    tags: ['Martica', 'mapas', 'huéspedes', 'La Casa'],
    readingTime: 5,
    date: '2024-11-18',
    author: 'Redacción Literatium',
    coverImage: '/assets/martha-desk.jpeg',
    relatedSlugs: ['cafe-unico-de-huila', 'la-albarrada-al-atardecer'],
    body: `<p class="drop-cap">Cuando un huésped llega a Literatium, después del jugo de corozo y antes de que le muestren la habitación, Martica se sienta con él en el recibidor y le dibuja un mapa. No es un mapa turístico. Es un mapa a mano, con bolígrafo negro, en una hoja arrancada de un cuaderno cuadriculado. Dura cinco minutos. Y es, sin que nadie lo diga, la bienvenida verdadera.</p>

<p>El mapa empieza siempre con el río. Una línea larga y serpenteante que cruza la hoja de izquierda a derecha, con la palabra MAGDALENA escrita en letras pequeñas y mayúsculas encima. Después, el muro de la albarrada: una línea paralela, más recta, con marcas de x que son los bancos donde uno se puede sentar. Después las tres plazas — Santa Bárbara, la Concepción, Santo Domingo — dibujadas como cuadrados con una cruz adentro que significa "aquí hay iglesia". Después las calles, con sus nombres coloniales: Calle Real del Medio, Calle de la Albarrada, Calle del Arenal.</p>

<h2>Los lugares que no están en Google Maps</h2>

<p>Pero lo importante del mapa de Martica no son las plazas ni las iglesias — esas están en cualquier mapa. Lo importante son las marcas pequeñas, hechas con una letra apretada y rápida, que solo ella pone. "Aquí vive doña Ana, vende queso de capa, llamar antes de las diez." "Aquí abren el comedor doña Carlota, preguntar por el bocachico frito." "Aquí está el taller de don Eduardo, filigrana, no cobran por mirar." "Aquí, cuidado con el perro." "Aquí, buena vista del atardecer, llevar repelente."</p>

<blockquote>«Un mapa no es un dibujo del pueblo. Es una conversación con quien lo habita.»</blockquote>

<p>Ese es el mapa real de Mompox. No el de las calles — el de las personas. Martica lleva treinta años recibiendo huéspedes. Conoce al tendero que abre temprano, al pescador que tiene bocachico fresco los martes, al orfebre que trabaja de noche. Conoce también las horas: a qué hora se va la luz en cierta cuadra, a qué hora sale el pan caliente de la panadería de la Concepción, a qué hora hay que estar en la albarrada para ver el atardecer, a qué hora los mosquitos se vuelven imposibles. Todo eso está en el mapa, escrito de su puño y letra.</p>

<h2>Una bienvenida hecha a mano</h2>

<p>Hay algo, además, en el gesto mismo de dibujar el mapa. En una época en que todo se mira en la pantalla del teléfono, alguien se sienta contigo, saca un cuaderno y te dibuja a mano el lugar donde vas a estar. No es nostalgia — es eficiencia. El mapa de Martica contiene información que ninguna aplicación tiene, porque es información hecha de personas, de horas, de conocimiento acumulado. Pero también es algo más: es una manera de decirte, sin decirlo, que en esta casa te van a atender por tu nombre, no por tu número de reserva.</p>

<p>Martica no usa computadora. Anota las llegadas en un cuaderno de pasta dura que tiene desde hace veinte años. Sabe quién viene, sabe de qué país, sabe qué cuarto prefiere cada huésped que regresa. Cuando alguien vuelve a Literatium después de años, Martica lo reconoce en la puerta — y a veces ya le está dibujando el mapa antes de que se siente. "Tú ya lo tienes", dice entonces, riendo, y rompe la hoja. "Pero te lo hago de nuevo, porque han cambiado dos cosas." Las dos cosas, casi siempre, son que doña Ana ya no vende queso, o que abrió una nueva panadería en la Calle del Arenal.</p>

<h2>El cuaderno de los huéspedes</h2>

<p>Junto al cuaderno de mapas hay otro cuaderno, más grueso, donde Martica anota lo que los huéspedes le cuentan. Es un cuaderno de conversaciones. "El señor de la habitación 4 dice que la albarrada le recordó a un puerto en Portugal." "La señora del 2 lloró cuando vio el atardecer, dice que hace años no veía uno así." "La pareja del patio quiere saber si podemos mandar el café de Huila a España." Esas notas, escritas en su letra apretada, son la verdadera memoria de Literatium — más que las fotos, más que las reseñas, más que el sitio web.</p>

<p>Por eso, cuando alguien nos pregunta qué es Literatium, no sabemos qué contestar. Podemos decir: un hotel boutique en una casa colonial de Mompox. Podemos decir: un refugio donde se habla de literatura y se toma café de Huila. Podemos decir: una casa con libros. Todo eso es cierto. Pero la respuesta más honesta es: es la casa donde Martica te va a dibujar el mapa. Y ese mapa, arrugado en el bolsillo al cabo de tres días, va a ser el recuerdo más claro que vas a tener de Mompox.</p>

<p class="marginalia">— El mejor mapa del pueblo está en un cuaderno de Martica. Pídelo. —</p>`,
    bodyEn: `<p class="drop-cap">When a guest arrives at Literatium, after the corozo juice and before being shown the room, Martica sits with them in the entry hall and draws them a map. It is not a tourist map. It is a hand-drawn map, with a black pen, on a sheet torn from a grid notebook. It takes five minutes. And it is, without anyone saying so, the real welcome.</p>

<p>The map always begins with the river. A long, serpentine line crossing the page from left to right, with the word MAGDALENA written in small capitals above it. Then the wall of the albarrada: a parallel line, straighter, with x-marks for the benches where one can sit. Then the three plazas — Santa Bárbara, la Concepción, Santo Domingo — drawn as squares with a cross inside meaning "here is a church". Then the streets, with their colonial names: Calle Real del Medio, Calle de la Albarrada, Calle del Arenal.</p>

<h2>The places that are not on Google Maps</h2>

<p>But the important thing about Martica's map is not the plazas or the churches — those are on any map. What matters are the small marks, written in tight, quick handwriting, that only she puts. "Here lives doña Ana, sells capa cheese, call before ten." "Here doña Carlota opens the comedor, ask for the fried bocachico." "Here is don Eduardo's workshop, filigree, they don't charge to look." "Here, careful with the dog." "Here, good view of the sunset, bring repellent."</p>

<blockquote>"A map is not a drawing of a town. It is a conversation with the person who lives in it."</blockquote>

<p>That is the real map of Mompox. Not the map of streets — the map of people. Martica has been receiving guests for thirty years. She knows the shopkeeper who opens early, the fisherman who has fresh bocachico on Tuesdays, the goldsmith who works at night. She also knows the hours: when the power goes out in a certain block, when the hot bread comes out of the Concepción bakery, when you have to be on the albarrada to see the sunset, when the mosquitoes become impossible. All of that is on the map, written in her hand.</p>

<h2>A hand-made welcome</h2>

<p>There is something, too, in the very gesture of drawing the map. In a time when everything is looked at on a phone screen, someone sits with you, takes out a notebook and hand-draws the place where you are going to be. It is not nostalgia — it is efficiency. Martica's map contains information no app has, because it is information made of people, of hours, of accumulated knowledge. But it is also something more: it is a way of telling you, without saying it, that in this house you will be served by your name, not by your reservation number.</p>

<p>Martica does not use a computer. She notes arrivals in a hardcover notebook she has had for twenty years. She knows who is coming, knows from what country, knows which room each returning guest prefers. When someone comes back to Literatium after years, Martica recognises them at the door — and sometimes she is already drawing the map before they sit down. "You already have it," she says then, laughing, and tears up the sheet. "But I'll do it again, because two things have changed." The two things, almost always, are that doña Ana no longer sells cheese, or that a new bakery has opened on Calle del Arenal.</p>

<h2>The guest notebook</h2>

<p>Next to the map notebook there is another notebook, thicker, where Martica writes down what guests tell her. It is a notebook of conversations. "The gentleman in room 4 says the albarrada reminded him of a port in Portugal." "The lady in room 2 cried when she saw the sunset, says she hasn't seen one like that in years." "The couple from the courtyard wants to know if we can send Huila coffee to Spain." Those notes, in her tight handwriting, are the true memory of Literatium — more than the photos, more than the reviews, more than the website.</p>

<p>That is why, when someone asks us what Literatium is, we don't know what to answer. We can say: a boutique hotel in a colonial house in Mompox. We can say: a refuge where literature is spoken and Huila coffee is drunk. We can say: a house with books. All of that is true. But the most honest answer is: it is the house where Martica will draw you the map. And that map, crumpled in your pocket after three days, will be the clearest memory you will have of Mompox.</p>

<p class="marginalia">— The best map of the town is in one of Martica's notebooks. Ask for it. —</p>`
  },

  {
    slug: 'filigrana-trescientos-anos',
    title: 'Filigrana, trescientos años',
    titleEn: 'Filigree, Three Hundred Years',
    excerpt: 'En Mompox se teje la plata y el oro como si fuera encaje. Tres siglos de tradición orfebre que sobreviven en cuatro talleres de la Calle Real del Medio. Una nota sobre los maestros y el oficio.',
    excerptEn: 'In Mompox silver and gold are woven as if it were lace. Three centuries of goldsmith tradition that survive in four workshops on Calle Real del Medio. A note on the masters and the craft.',
    category: 'Mompox',
    categoryEn: 'Mompox',
    tags: ['filigrana', 'artesanos', 'plata', 'Calle Real del Medio'],
    readingTime: 6,
    date: '2024-10-05',
    author: 'Redacción Literatium',
    coverImage: '/assets/filigree-1.webp',
    relatedSlugs: ['la-albarrada-al-atardecer', 'el-rio-que-no-se-olvida'],
    body: `<p class="drop-cap">La filigrana de Mompox es, literalmente, hilo de oro y plata. El orfebre toma un hilo finísimo — a veces del grosor de un cabello — lo tuerce, lo aplasta, lo curva, lo suelda, y al final ha hecho una joya que parece encaje. Un par de aretes, una cruz, un relicario: piezas que pesan gramos y que tienen, contados, kilómetros de hilo adentro. Es una de las tradiciones orfebres más antiguas del continente. Y se sigue haciendo aquí, en cuatro talleres de la Calle Real del Medio, exactamente como se hacía hace trescientos años.</p>

<p>La filigrana llegó a Mompox en el siglo XVII, traída por los plateros españoles que venían a trabajar el oro del interior. Pero los orfebres momposinos la hicieron suya: la refinaron, la volvieron más delicada, y la convirtieron en una firma de la ciudad. En el censo de 1777 había en Mompox más de cuarenta talleres de platería. Hoy quedan cuatro. Cuatro talleres, y seis maestros viejos que saben hacerlo. Es una tradición en el filo — no se va a perder, pero está en el filo.</p>

<h2>Cómo se hace una pieza de filigrana</h2>

<p>Todo empieza con el hilo. El orfebre funde el metal — oro de dieciocho quilates o plata de mil — y lo estira en una laminadora hasta obtener una cinta finísima. Después pasa esa cinta por una hilera, una pieza de acero con agujeros cada vez más pequeños, hasta que el metal se vuelve un hilo. Un hilo que puede ser del grosor de un cabello humano. Para hacer una sola pieza de filigrana se necesitan a veces metros de hilo.</p>

<blockquote>«No es joyería. Es escritura con metal.»</blockquote>

<p>Después viene el armado. El orfebre toma el hilo, lo tuerce con una pinza fina, lo curva sobre una plantilla de madera, lo suelda pieza por pieza con un soplete pequeño y una aleación de plata y cobre. Cada espiral, cada curva, cada pequeño corazón se suelda por separado. Una cruz de filigrana de cinco centímetros puede tener doscientas soldaduras. Y no hay margen de error: una soldadura mala quema el hilo, y la pieza entera se pierde.</p>

<h2>Don Eduardo y los maestros</h2>

<p>En la Calle Real del Medio, a media cuadra de la plaza de Santo Domingo, está el taller de don Eduardo. Tiene setenta y dos años, aprendió el oficio de su padre, y su padre lo aprendió del suyo. Don Eduardo abre el taller a las seis de la mañana, cuando todavía no ha salido el sol, y trabaja hasta las dos de la tarde, que es cuando la luz se vuelve demasiado vertical y la vista se cansa. En su taller hay cuatro banquitos de madera, una laminadora del siglo XIX, dos sopletes, y una vitrina con las piezas terminadas: cruces, aretes, relicarios, dijes en forma de paloma.</p>

<p>Don Eduardo no cobra por mirar. Quien entra al taller puede sentarse en un banquito y verlo trabajar en silencio durante una hora. Es un privilegio raro. Verlo torcer el hilo con la pinza — con una precisión que parece imposible en una mano humana — es entender que la filigrana no es solo un oficio: es una manera de pensar. Una manera lenta, paciente, minuciosa, de pensar el mundo. Una manera que casi se ha perdido en todas partes, y que aquí sigue viva porque aquí se siguió haciendo, día tras día, sin interrupción, durante trescientos años.</p>

<h2>Comprar una pieza</h2>

<p>Quien quiera llevarse una pieza de filigrana de Mompox tiene que saber dos cosas. Primera: cada pieza está firmada, en el reverso, con las iniciales del orfebre que la hizo. No es producción anónima. Es obra firmada. Segunda: el precio no es el de un recuerdo turístico. Una cruz de filigrana de plata puede costar lo mismo que una buena cena en Cartagena. Pero — y esto es lo importante — esa cruz va a durar más que quien la compra. La filigrana bien cuidada dura generaciones. Se hereda. Se vuelve recuerdo.</p>

<p>En Literatium conocemos a los cuatro maestros. Podemos llevar a un huésped al taller de don Eduardo a las seis de la mañana, cuando empieza, si lo pide. No es un tour. Es una visita: sentarse, mirar, callar. Y, si se quiere, comprar. Pero sobre todo, mirar. Trescientos años de tradición, en un hilo más fino que un cabello, torcidos por una mano de setenta y dos años. Esa es la filigrana de Mompox.</p>

<p class="marginalia">— Si compras una cruz, pregunta por el nombre del orfebre. Lo vas a recordar. —</p>`,
    bodyEn: `<p class="drop-cap">The filigree of Mompox is, literally, thread of gold and silver. The goldsmith takes a very fine thread — sometimes the thickness of a hair — twists it, flattens it, curves it, solders it, and at the end has made a jewel that looks like lace. A pair of earrings, a cross, a reliquary: pieces that weigh grams and contain, counted, kilometres of thread inside. It is one of the oldest goldsmith traditions on the continent. And it is still made here, in four workshops on Calle Real del Medio, exactly as it was made three hundred years ago.</p>

<p>Filigree arrived in Mompox in the seventeenth century, brought by Spanish silversmiths who came to work the gold of the interior. But the momposino goldsmiths made it their own: they refined it, made it more delicate, and turned it into a signature of the city. In the 1777 census there were more than forty silversmith workshops in Mompox. Today four remain. Four workshops, and six old masters who know how to do it. It is a tradition on the edge — it is not going to be lost, but it is on the edge.</p>

<h2>How a filigree piece is made</h2>

<p>It all begins with the thread. The goldsmith melts the metal — eighteen-karat gold or sterling silver — and stretches it in a rolling mill until he obtains a very thin ribbon. Then he passes that ribbon through a drawplate, a piece of steel with ever smaller holes, until the metal becomes a thread. A thread that can be the thickness of a human hair. To make a single piece of filigree, metres of thread are sometimes needed.</p>

<blockquote>"It is not jewellery. It is writing with metal."</blockquote>

<p>Then comes the assembly. The goldsmith takes the thread, twists it with fine pliers, curves it over a wooden template, solders it piece by piece with a small torch and an alloy of silver and copper. Each spiral, each curve, each little heart is soldered separately. A five-centimetre filigree cross can have two hundred solders. And there is no margin for error: a bad solder burns the thread, and the whole piece is lost.</p>

<h2>Don Eduardo and the masters</h2>

<p>On Calle Real del Medio, half a block from the plaza of Santo Domingo, is don Eduardo's workshop. He is seventy-two, learned the craft from his father, and his father learned it from his. Don Eduardo opens the workshop at six in the morning, before the sun is up, and works until two in the afternoon, when the light becomes too vertical and the eyes tire. In his workshop there are four wooden stools, a nineteenth-century rolling mill, two torches, and a glass case with the finished pieces: crosses, earrings, reliquaries, dove-shaped charms.</p>

<p>Don Eduardo does not charge to watch. Whoever enters the workshop may sit on a stool and watch him work in silence for an hour. It is a rare privilege. Watching him twist the thread with the pliers — with a precision that seems impossible in a human hand — is understanding that filigree is not only a craft: it is a way of thinking. A slow, patient, meticulous way of thinking the world. A way that has almost been lost everywhere, and that here is still alive because here it continued to be done, day after day, without interruption, for three hundred years.</p>

<h2>Buying a piece</h2>

<p>Whoever wants to take a piece of Mompox filigree should know two things. First: each piece is signed, on the back, with the initials of the goldsmith who made it. It is not anonymous production. It is signed work. Second: the price is not that of a tourist souvenir. A silver filigree cross can cost the same as a good dinner in Cartagena. But — and this is the important thing — that cross will outlast whoever buys it. Well-cared-for filigree lasts generations. It is inherited. It becomes memory.</p>

<p>At Literatium we know the four masters. We can take a guest to don Eduardo's workshop at six in the morning, when he starts, if they ask. It is not a tour. It is a visit: to sit, to watch, to be quiet. And, if one wants, to buy. But above all, to watch. Three hundred years of tradition, in a thread finer than a hair, twisted by a seventy-two-year-old hand. That is the filigree of Mompox.</p>

<p class="marginalia">— If you buy a cross, ask the goldsmith's name. You will remember it. —</p>`
  }
];

/* ---- Derived helpers used by the diario pages ---- */

export function getArticleBySlug(slug: string): JournalArticle | undefined {
  return journalArticles.find((a) => a.slug === slug);
}

export function getRelatedArticles(article: JournalArticle): JournalArticle[] {
  return article.relatedSlugs
    .map((s) => getArticleBySlug(s))
    .filter((a): a is JournalArticle => Boolean(a));
}

export function getAllCategories(): { es: string; en: string }[] {
  const seen = new Map<string, { es: string; en: string }>();
  for (const a of journalArticles) {
    if (!seen.has(a.category)) {
      seen.set(a.category, { es: a.category, en: a.categoryEn });
    }
  }
  return Array.from(seen.values());
}

export function getAllTags(): string[] {
  const seen = new Set<string>();
  for (const a of journalArticles) {
    for (const t of a.tags) seen.add(t);
  }
  return Array.from(seen.values());
}

export function getArticlesByCategory(cat: string): JournalArticle[] {
  return journalArticles.filter((a) => a.category === cat);
}

export function getArticlesByTag(tag: string): JournalArticle[] {
  return journalArticles.filter((a) => a.tags.includes(tag));
}

/** URL-safe slug for a Spanish category (lowercase, no accents). */
export function slugifyCategory(cat: string): string {
  return cat
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** URL-safe slug for a Spanish tag (lowercase, no accents). */
export function slugifyTag(tag: string): string {
  return tag
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** ISO date → "14 de marzo de 2025" (Spanish, long form). */
export function formatDateEs(iso: string): string {
  const meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
  const d = new Date(iso + 'T00:00:00');
  return `${d.getUTCDate()} de ${meses[d.getUTCMonth()]} de ${d.getUTCFullYear()}`;
}

/** ISO date → "14 March 2025" (English, long form). */
export function formatDateEn(iso: string): string {
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const d = new Date(iso + 'T00:00:00');
  return `${d.getUTCDate()} ${months[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}
