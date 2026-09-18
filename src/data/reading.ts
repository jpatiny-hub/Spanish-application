import type { ReadingText } from '../types'

export const readingTexts: ReadingText[] = [
  {
    id: 'r1-presentacion',
    title: 'Me presento',
    level: 1,
    paragraphs: [
      {
        es: '¡Hola! Me llamo Marta. Soy francesa y vivo en Lyon. Tengo treinta años.',
        fr: "Bonjour ! Je m'appelle Marta. Je suis française et je vis à Lyon. J'ai trente ans.",
      },
      {
        es: 'Tengo un hermano y una hermana. Mi familia es pequeña pero muy unida.',
        fr: "J'ai un frère et une sœur. Ma famille est petite mais très unie.",
      },
      {
        es: 'Me gusta aprender español porque quiero viajar a España el año que viene.',
        fr: "J'aime apprendre l'espagnol parce que je veux voyager en Espagne l'année prochaine.",
      },
    ],
    questions: [
      {
        question: '¿Cómo se llama la persona del texto?',
        options: ['Marta', 'María', 'Marina', 'Marga'],
        answerIndex: 0,
      },
      {
        question: '¿De dónde es?',
        options: ['España', 'Francia', 'Italia', 'México'],
        answerIndex: 1,
      },
      {
        question: '¿Por qué aprende español?',
        options: [
          'Para trabajar',
          'Porque quiere viajar a España',
          'Porque vive en España',
          'Para estudiar en la universidad',
        ],
        answerIndex: 1,
      },
    ],
  },
  {
    id: 'r2-dia',
    title: 'Un día normal',
    level: 2,
    paragraphs: [
      {
        es: 'Todos los días me levanto a las siete de la mañana. Desayuno café con pan y después voy al trabajo.',
        fr: "Tous les jours je me lève à sept heures du matin. Je prends un café avec du pain puis je vais au travail.",
      },
      {
        es: 'Por la tarde, como con mis compañeros en un restaurante cerca de la oficina. La comida en España es normalmente a las dos.',
        fr: "L'après-midi, je mange avec mes collègues dans un restaurant près du bureau. Le repas en Espagne est normalement à deux heures.",
      },
      {
        es: 'Los fines de semana, no trabajo. Me gusta leer libros y salir con mis amigos.',
        fr: "Le week-end, je ne travaille pas. J'aime lire des livres et sortir avec mes amis.",
      },
    ],
    questions: [
      {
        question: '¿A qué hora se levanta?',
        options: ['A las seis', 'A las siete', 'A las ocho', 'A las nueve'],
        answerIndex: 1,
      },
      {
        question: '¿Con quién come por la tarde?',
        options: ['Con su familia', 'Solo', 'Con sus compañeros', 'Con sus amigos'],
        answerIndex: 2,
      },
      {
        question: '¿Qué le gusta hacer el fin de semana?',
        options: ['Trabajar', 'Leer y salir con amigos', 'Cocinar', 'Dormir todo el día'],
        answerIndex: 1,
      },
    ],
  },
  {
    id: 'r3-ciudad',
    title: 'Una ciudad española: Sevilla',
    level: 3,
    paragraphs: [
      {
        es: 'Sevilla es una ciudad situada en el sur de España, en la región de Andalucía. Es conocida por su clima cálido y su rica historia.',
        fr: "Séville est une ville située dans le sud de l'Espagne, dans la région d'Andalousie. Elle est connue pour son climat chaud et sa riche histoire.",
      },
      {
        es: 'En el centro de la ciudad se encuentra la Catedral de Sevilla, una de las más grandes del mundo, y la Giralda, su famosa torre.',
        fr: "Au centre de la ville se trouve la cathédrale de Séville, l'une des plus grandes du monde, et la Giralda, sa célèbre tour.",
      },
      {
        es: 'Cada año, miles de turistas visitan la ciudad durante la Semana Santa y la Feria de Abril, dos fiestas muy importantes para los sevillanos.',
        fr: "Chaque année, des milliers de touristes visitent la ville pendant la Semaine Sainte et la Feria d'avril, deux fêtes très importantes pour les habitants de Séville.",
      },
    ],
    questions: [
      {
        question: '¿En qué región de España está Sevilla?',
        options: ['Cataluña', 'Andalucía', 'Galicia', 'País Vasco'],
        answerIndex: 1,
      },
      {
        question: '¿Cómo se llama la famosa torre de la catedral?',
        options: ['La Alhambra', 'La Giralda', 'La Sagrada Familia', 'El Alcázar'],
        answerIndex: 1,
      },
      {
        question: '¿Qué fiestas se mencionan en el texto?',
        options: [
          'Navidad y Año Nuevo',
          'La Semana Santa y la Feria de Abril',
          'San Fermín',
          'Las Fallas',
        ],
        answerIndex: 1,
      },
    ],
  },
  {
    id: 'r4-familia',
    title: 'Mi familia',
    level: 1,
    paragraphs: [
      {
        es: 'Mi familia no es muy grande. Somos cuatro: mi madre, mi padre, mi hermano y yo.',
        fr: "Ma famille n'est pas très grande. Nous sommes quatre : ma mère, mon père, mon frère et moi.",
      },
      {
        es: 'Mi padre se llama Pedro y trabaja en un banco. Mi madre se llama Ana y es médica.',
        fr: 'Mon père s\'appelle Pedro et travaille dans une banque. Ma mère s\'appelle Ana et est médecin.',
      },
      {
        es: 'Los domingos, toda la familia come junta en casa de mis abuelos. Es mi momento favorito de la semana.',
        fr: 'Le dimanche, toute la famille mange ensemble chez mes grands-parents. C\'est mon moment préféré de la semaine.',
      },
    ],
    questions: [
      {
        question: '¿Cuántas personas hay en la familia?',
        options: ['Tres', 'Cuatro', 'Cinco', 'Seis'],
        answerIndex: 1,
      },
      {
        question: '¿A qué se dedica la madre?',
        options: ['Es profesora', 'Trabaja en un banco', 'Es médica', 'Es abogada'],
        answerIndex: 2,
      },
      {
        question: '¿Dónde come la familia los domingos?',
        options: ['En un restaurante', 'En casa de los abuelos', 'En la playa', 'En el trabajo'],
        answerIndex: 1,
      },
    ],
  },
  {
    id: 'r5-tiempo',
    title: 'El tiempo esta semana',
    level: 1,
    paragraphs: [
      {
        es: 'Hoy hace sol y mucho calor en Madrid. La temperatura es de treinta grados.',
        fr: "Aujourd'hui il y a du soleil et il fait très chaud à Madrid. La température est de trente degrés.",
      },
      {
        es: 'Mañana va a llover por la tarde y va a hacer viento. Es mejor llevar un paraguas.',
        fr: "Demain il va pleuvoir l'après-midi et il va y avoir du vent. Il vaut mieux prendre un parapluie.",
      },
      {
        es: 'El fin de semana, el cielo va a estar nublado, pero no hace frío. Es un buen momento para pasear.',
        fr: 'Le week-end, le ciel va être nuageux, mais il ne fait pas froid. C\'est un bon moment pour se promener.',
      },
    ],
    questions: [
      {
        question: '¿Qué tiempo hace hoy en Madrid?',
        options: ['Llueve', 'Hace sol y calor', 'Nieva', 'Hace viento'],
        answerIndex: 1,
      },
      {
        question: '¿Qué va a pasar mañana por la tarde?',
        options: ['Va a nevar', 'Va a hacer sol', 'Va a llover', 'Va a hacer mucho frío'],
        answerIndex: 2,
      },
      {
        question: '¿Cómo va a estar el cielo el fin de semana?',
        options: ['Despejado', 'Nublado', 'Con tormenta', 'Con nieve'],
        answerIndex: 1,
      },
    ],
  },
  {
    id: 'r6-viaje',
    title: 'Un viaje a Barcelona',
    level: 2,
    paragraphs: [
      {
        es: 'La semana pasada, viajé a Barcelona con dos amigos. Reservamos un hotel cerca de la playa.',
        fr: "La semaine dernière, j'ai voyagé à Barcelone avec deux amis. Nous avons réservé un hôtel près de la plage.",
      },
      {
        es: 'El primer día, visitamos la Sagrada Familia y caminamos por las Ramblas. Compramos los billetes en la estación de tren.',
        fr: "Le premier jour, nous avons visité la Sagrada Familia et marché le long des Ramblas. Nous avons acheté les billets à la gare.",
      },
      {
        es: 'Al final del viaje, perdimos una maleta en el aeropuerto, ¡pero la encontramos al día siguiente!',
        fr: "À la fin du voyage, nous avons perdu une valise à l'aéroport, mais nous l'avons retrouvée le lendemain !",
      },
    ],
    questions: [
      {
        question: '¿Con quién viajó a Barcelona?',
        options: ['Solo', 'Con su familia', 'Con dos amigos', 'Con sus compañeros de trabajo'],
        answerIndex: 2,
      },
      {
        question: '¿Qué monumento visitaron el primer día?',
        options: ['El Museo del Prado', 'La Sagrada Familia', 'La Alhambra', 'El Alcázar'],
        answerIndex: 1,
      },
      {
        question: '¿Qué problema tuvieron al final del viaje?',
        options: [
          'Perdieron el tren',
          'Perdieron una maleta',
          'Perdieron los billetes',
          'Llegaron tarde al hotel',
        ],
        answerIndex: 1,
      },
    ],
  },
  {
    id: 'r7-laboratorio',
    title: 'Un día en el laboratorio',
    level: 2,
    paragraphs: [
      {
        es: 'Soy bióloga y trabajo en el laboratorio de una empresa farmacéutica. Cada mañana, reviso los resultados de los ensayos clínicos.',
        fr: 'Je suis biologiste et je travaille dans le laboratoire d\'une entreprise pharmaceutique. Chaque matin, je vérifie les résultats des essais cliniques.',
      },
      {
        es: 'A las diez, tengo una reunión con mis colegas para hablar de un nuevo medicamento. Después, analizo las muestras con el microscopio.',
        fr: 'À dix heures, j\'ai une réunion avec mes collègues pour parler d\'un nouveau médicament. Ensuite, j\'analyse les échantillons au microscope.',
      },
      {
        es: 'Por la tarde, escribo un informe sobre la investigación. Es un trabajo difícil, pero me gusta mucho porque es importante para la salud de las personas.',
        fr: "L'après-midi, j'écris un rapport sur la recherche. C'est un travail difficile, mais je l'aime beaucoup parce que c'est important pour la santé des gens.",
      },
    ],
    questions: [
      {
        question: '¿Dónde trabaja la persona del texto?',
        options: [
          'En un hospital',
          'En el laboratorio de una empresa farmacéutica',
          'En una universidad',
          'En una farmacia',
        ],
        answerIndex: 1,
      },
      {
        question: '¿Qué hace a las diez?',
        options: [
          'Analiza muestras',
          'Escribe un informe',
          'Tiene una reunión con colegas',
          'Va a casa',
        ],
        answerIndex: 2,
      },
      {
        question: '¿Qué escribe por la tarde?',
        options: ['Un correo', 'Un informe sobre la investigación', 'Una carta', 'Un artículo de periódico'],
        answerIndex: 1,
      },
    ],
  },
  {
    id: 'r8-restaurante',
    title: 'En el restaurante',
    level: 2,
    paragraphs: [
      {
        es: '—Buenas noches, ¿tiene una mesa para dos personas? —Sí, señora, por aquí, por favor.',
        fr: '— Bonsoir, avez-vous une table pour deux personnes ? — Oui madame, par ici, s\'il vous plaît.',
      },
      {
        es: 'De primero, quiero una ensalada, y de segundo, quiero pescado con verduras. Para beber, un agua con gas, por favor.',
        fr: 'En entrée, je veux une salade, et en plat principal, je veux du poisson avec des légumes. Comme boisson, une eau gazeuse, s\'il vous plaît.',
      },
      {
        es: 'Al final de la comida, pedimos la cuenta y dejamos una propina porque el servicio fue excelente.',
        fr: 'À la fin du repas, nous avons demandé l\'addition et laissé un pourboire car le service était excellent.',
      },
    ],
    questions: [
      {
        question: '¿Para cuántas personas es la mesa?',
        options: ['Una', 'Dos', 'Tres', 'Cuatro'],
        answerIndex: 1,
      },
      {
        question: '¿Qué pide de segundo?',
        options: ['Una ensalada', 'Carne', 'Pescado con verduras', 'Sopa'],
        answerIndex: 2,
      },
      {
        question: '¿Por qué dejan una propina?',
        options: [
          'Porque es obligatorio',
          'Porque el servicio fue excelente',
          'Porque la comida era barata',
          'Porque el camarero lo pidió',
        ],
        answerIndex: 1,
      },
    ],
  },
]
