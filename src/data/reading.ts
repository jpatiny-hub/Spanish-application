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
]
