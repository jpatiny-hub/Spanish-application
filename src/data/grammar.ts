import type { GrammarLesson } from '../types'

export const grammarLessons: GrammarLesson[] = [
  {
    id: 'g1-alphabet',
    order: 1,
    title: 'Alphabet et prononciation',
    summary: "Les sons qui n'existent pas en français : la clé pour bien prononcer dès le début.",
    points: [
      {
        title: 'La lettre "ñ"',
        explanation: 'Se prononce comme le "gn" français de "montagne".',
        examples: [{ es: 'España', fr: 'Espagne' }, { es: 'año', fr: 'année' }],
      },
      {
        title: 'Le "j" et le "g" (devant e/i)',
        explanation: 'Se prononcent comme un "r" raclé au fond de la gorge (proche du "h" aspiré anglais).',
        examples: [{ es: 'jamón', fr: 'jambon' }, { es: 'gente', fr: 'gens' }],
      },
      {
        title: 'Le "h"',
        explanation: "Ne se prononce jamais, il est totalement muet.",
        examples: [{ es: 'hola', fr: 'salut' }, { es: 'hermano', fr: 'frère' }],
      },
      {
        title: 'Le "ll" et le "y"',
        explanation: 'Se prononcent souvent comme le "y" de "yaourt".',
        examples: [{ es: 'llamar', fr: 'appeler' }, { es: 'yo', fr: 'je' }],
      },
    ],
    exercises: [
      {
        question: 'Comment se prononce le "ñ" dans "año" ?',
        options: ['Comme le "gn" français de montagne', 'Comme un "n" simple', 'Comme "ni" en anglais', 'Il est muet'],
        answerIndex: 0,
      },
      {
        question: 'Le "h" espagnol se prononce...',
        options: ['Comme un souffle léger', 'Il est toujours muet', 'Comme un "j"', 'Comme un "ch"'],
        answerIndex: 1,
      },
      {
        question: '"jamón" se prononce avec un son proche de...',
        options: ['Le "j" français', 'Un "r" raclé, proche du "h" aspiré anglais', 'Le "y" de yaourt', 'Un "g" dur'],
        answerIndex: 1,
      },
      {
        question: '"llamar" et "yo" ont en commun le son...',
        options: ['Le "y" de yaourt', 'Le "l" simple', 'Le "w" anglais', 'Le "ll" français'],
        answerIndex: 0,
      },
    ],
  },
  {
    id: 'g2-genre',
    order: 2,
    title: 'Le genre des noms et les articles',
    summary: "Tous les noms sont masculins ou féminins, comme en français, mais les règles diffèrent.",
    points: [
      {
        title: 'Règle générale',
        explanation: 'Les noms terminant en "-o" sont souvent masculins, ceux en "-a" souvent féminins. Il y a des exceptions à apprendre par cœur.',
        examples: [{ es: 'el libro', fr: 'le livre' }, { es: 'la mesa', fr: 'la table' }],
      },
      {
        title: 'Les articles définis',
        explanation: '"el" (masc. singulier), "la" (fém. singulier), "los" (masc. pluriel), "las" (fém. pluriel).',
        examples: [{ es: 'el amigo / los amigos', fr: "l'ami / les amis" }, { es: 'la casa / las casas', fr: 'la maison / les maisons' }],
      },
      {
        title: 'Les articles indéfinis',
        explanation: '"un" (masc.), "una" (fém.) correspondent à "un / une".',
        examples: [{ es: 'un perro', fr: 'un chien' }, { es: 'una flor', fr: 'une fleur' }],
      },
    ],
    exercises: [
      {
        question: 'Quel est l\'article correct pour "libro" (livre) ?',
        options: ['el', 'la', 'los', 'las'],
        answerIndex: 0,
      },
      {
        question: 'Quel est l\'article correct pour "mesa" (table) ?',
        options: ['el', 'la', 'los', 'las'],
        answerIndex: 1,
      },
      {
        question: "Comment dit-on \"une fleur\" ?",
        options: ['un flor', 'una flor', 'el flor', 'unos flor'],
        answerIndex: 1,
      },
      {
        question: 'Quel est le pluriel correct de "la casa" ?',
        options: ['el casas', 'la casas', 'las casas', 'los casas'],
        answerIndex: 2,
      },
      {
        question: '"amigo" devient "amiga" au féminin. Quelle règle générale ça illustre ?',
        options: [
          'Les mots en "-o" sont souvent masculins, ceux en "-a" souvent féminins',
          'Tous les mots sont neutres en espagnol',
          'Le genre dépend de la couleur du mot',
          'Il n\'existe aucune règle',
        ],
        answerIndex: 0,
      },
    ],
  },
  {
    id: 'g3-pronombres',
    order: 3,
    title: 'Les pronoms personnels sujets',
    summary: "Souvent omis en espagnol car le verbe suffit à indiquer qui parle, mais il faut les connaître.",
    points: [
      {
        title: 'Liste complète',
        explanation: 'yo (je), tú (tu), él/ella/usted (il/elle/vous poli), nosotros/as (nous), vosotros/as (vous, Espagne), ellos/ellas/ustedes (ils/elles/vous pluriel).',
        examples: [{ es: 'Yo hablo español.', fr: 'Je parle espagnol.' }, { es: 'Ella vive en Madrid.', fr: 'Elle vit à Madrid.' }],
      },
      {
        title: 'Le sujet est souvent omis',
        explanation: "Comme la terminaison du verbe indique déjà la personne, on n'utilise le pronom que pour insister ou éviter une ambiguïté.",
        examples: [{ es: 'Hablo español.', fr: 'Je parle espagnol. (sujet sous-entendu)' }],
      },
    ],
    exercises: [
      {
        question: 'Quel pronom correspond à "nous" ?',
        options: ['yo', 'tú', 'nosotros', 'ellos'],
        answerIndex: 2,
      },
      {
        question: '"Ella" signifie...',
        options: ['il', 'elle', 'nous', 'vous'],
        answerIndex: 1,
      },
      {
        question: 'Pourquoi peut-on dire juste "Hablo español" sans "yo" ?',
        options: [
          'Parce que "yo" n\'existe pas en espagnol',
          'Parce que la terminaison du verbe indique déjà qui parle',
          'Parce que c\'est incorrect autrement',
          'Parce qu\'on ne conjugue jamais les verbes',
        ],
        answerIndex: 1,
      },
      {
        question: '"Vosotros" est utilisé principalement...',
        options: [
          'En Amérique latine pour dire "nous"',
          'En Espagne, pour "vous" au pluriel informel',
          'Pour dire "il"',
          'Pour vouvoyer une seule personne',
        ],
        answerIndex: 1,
      },
    ],
  },
  {
    id: 'g4-ser-estar',
    order: 4,
    title: '"Ser" et "Estar" : les deux verbes "être"',
    summary: "L'un des pièges classiques du débutant : deux verbes pour un seul verbe français.",
    points: [
      {
        title: 'SER : identité, caractéristique permanente',
        explanation: 'Nationalité, métier, description, heure, origine.',
        examples: [{ es: 'Soy francés.', fr: 'Je suis français.' }, { es: 'Es profesora.', fr: 'Elle est professeure.' }],
      },
      {
        title: 'ESTAR : état temporaire, lieu',
        explanation: 'Humeur, état de santé, localisation, résultat d’une action.',
        examples: [{ es: 'Estoy cansado.', fr: 'Je suis fatigué.' }, { es: 'Madrid está en España.', fr: 'Madrid est en Espagne.' }],
      },
      {
        title: 'Conjugaison au présent',
        explanation: 'SER : soy, eres, es, somos, sois, son. ESTAR : estoy, estás, está, estamos, estáis, están.',
        examples: [{ es: 'Tú eres alto y estás contento.', fr: 'Tu es grand et tu es content.' }],
      },
    ],
    exercises: [
      {
        question: '"Soy profesor." Pourquoi utilise-t-on "ser" ici ?',
        options: ['État temporaire', 'Métier / identité', 'Lieu', 'Humeur du moment'],
        answerIndex: 1,
      },
      {
        question: '"Estoy cansado." Pourquoi utilise-t-on "estar" ici ?',
        options: ['Nationalité', 'Métier', 'État temporaire', 'Heure'],
        answerIndex: 2,
      },
      {
        question: 'Complète : "Madrid ___ en España."',
        options: ['es', 'está', 'soy', 'eres'],
        answerIndex: 1,
      },
      {
        question: 'Complète : "Ella ___ médica."',
        options: ['está', 'es', 'estás', 'soy'],
        answerIndex: 1,
      },
      {
        question: 'Quelle forme de "estar" correspond à "tú" ?',
        options: ['estoy', 'estás', 'está', 'estamos'],
        answerIndex: 1,
      },
    ],
  },
  {
    id: 'g5-presente',
    order: 5,
    title: 'Le présent des verbes réguliers',
    summary: 'Trois groupes de verbes selon leur terminaison : -AR, -ER, -IR.',
    points: [
      {
        title: 'Verbes en -AR (ex : hablar, parler)',
        explanation: 'hablo, hablas, habla, hablamos, habláis, hablan.',
        examples: [{ es: 'Hablamos español en casa.', fr: 'Nous parlons espagnol à la maison.' }],
      },
      {
        title: 'Verbes en -ER (ex : comer, manger)',
        explanation: 'como, comes, come, comemos, coméis, comen.',
        examples: [{ es: 'Ella come una manzana.', fr: 'Elle mange une pomme.' }],
      },
      {
        title: 'Verbes en -IR (ex : vivir, vivre)',
        explanation: 'vivo, vives, vive, vivimos, vivís, viven.',
        examples: [{ es: 'Vivo en Francia.', fr: 'Je vis en France.' }],
      },
    ],
    exercises: [
      {
        question: 'Conjugue "hablar" à la 1ère personne du singulier.',
        options: ['hablo', 'hablas', 'habla', 'hablamos'],
        answerIndex: 0,
      },
      {
        question: 'Conjugue "comer" à la 3ème personne du singulier.',
        options: ['como', 'comes', 'come', 'comen'],
        answerIndex: 2,
      },
      {
        question: 'Conjugue "vivir" avec "nosotros".',
        options: ['vivo', 'vivimos', 'vivís', 'viven'],
        answerIndex: 1,
      },
      {
        question: 'Quelle terminaison prend "hablar" avec "vosotros" ?',
        options: ['-áis', '-amos', '-an', '-as'],
        answerIndex: 0,
      },
      {
        question: 'Complète : "Ellos ___ (comer) mucho."',
        options: ['come', 'comes', 'comen', 'comemos'],
        answerIndex: 2,
      },
    ],
  },
  {
    id: 'g6-negation',
    order: 6,
    title: 'La négation et la question',
    summary: "Construire une phrase négative ou interrogative simplement.",
    points: [
      {
        title: 'La négation',
        explanation: 'On place "no" juste avant le verbe.',
        examples: [{ es: 'No hablo inglés.', fr: 'Je ne parle pas anglais.' }],
      },
      {
        title: 'Les questions',
        explanation: 'On encadre la phrase de "¿ ?" à l\'écrit ; l\'intonation monte à l\'oral. Pas besoin d\'inversion comme en français.',
        examples: [{ es: '¿Hablas español?', fr: 'Tu parles espagnol ?' }, { es: '¿Cómo te llamas?', fr: 'Comment tu t\'appelles ?' }],
      },
    ],
    exercises: [
      {
        question: 'Comment dit-on "Je ne parle pas anglais" ?',
        options: ['No hablo inglés', 'Hablo no inglés', 'No inglés hablo', 'Inglés no hablo'],
        answerIndex: 0,
      },
      {
        question: 'Où se place "no" par rapport au verbe ?',
        options: ['Après le verbe', 'Juste avant le verbe', 'Au milieu du verbe', 'À la fin de la phrase'],
        answerIndex: 1,
      },
      {
        question: 'Comment transformer "Hablas español." en question ?',
        options: ['¡Hablas español!', '¿Hablas español?', 'Hablas, ¿español?', 'No hablas español'],
        answerIndex: 1,
      },
      {
        question: '"¿Cómo te llamas?" veut dire...',
        options: ['Où habites-tu ?', 'Comment tu t\'appelles ?', 'Quel âge as-tu ?', 'D\'où viens-tu ?'],
        answerIndex: 1,
      },
    ],
  },
  {
    id: 'g7-futuro-proximo',
    order: 7,
    title: 'Le futur proche : "ir a" + infinitif',
    summary: 'Pour parler de ce qui va se passer bientôt, comme "aller + infinitif" en français.',
    points: [
      {
        title: 'Construction',
        explanation: 'Verbe "ir" conjugué (voy, vas, va, vamos, vais, van) + "a" + infinitif du verbe.',
        examples: [
          { es: 'Voy a viajar a España.', fr: 'Je vais voyager en Espagne.' },
          { es: 'Mañana va a llover.', fr: 'Demain il va pleuvoir.' },
        ],
      },
      {
        title: 'Usage avec la météo',
        explanation: 'Très utilisé pour les prévisions météo, au présent avec "va" (forme impersonnelle il/elle).',
        examples: [
          { es: 'Va a hacer sol el fin de semana.', fr: 'Il va faire soleil le week-end.' },
          { es: 'Va a nevar en la montaña.', fr: 'Il va neiger en montagne.' },
        ],
      },
    ],
    exercises: [
      {
        question: 'Comment forme-t-on le futur proche en espagnol ?',
        options: [
          '"ir" + infinitif directement',
          '"ir" conjugué + "a" + infinitif',
          '"estar" + gérondif',
          'Verbe conjugué au présent uniquement',
        ],
        answerIndex: 1,
      },
      {
        question: '"Voy a viajar a España." veut dire...',
        options: [
          'J\'ai voyagé en Espagne',
          'Je vais voyager en Espagne',
          'Je voyage en Espagne',
          'Je voyagerais en Espagne',
        ],
        answerIndex: 1,
      },
      {
        question: 'Complète : "Mañana ___ a llover."',
        options: ['voy', 'va', 'van', 'vamos'],
        answerIndex: 1,
      },
      {
        question: 'Conjugue "ir" pour "nosotros".',
        options: ['voy', 'va', 'vamos', 'van'],
        answerIndex: 2,
      },
    ],
  },
  {
    id: 'g8-preterito',
    order: 8,
    title: 'Le prétérit (passé simple) des verbes réguliers',
    summary: "Pour raconter une action terminée dans le passé, ex : un voyage ou un événement précis.",
    points: [
      {
        title: 'Verbes en -AR (ex : viajar, voyager)',
        explanation: 'viajé, viajaste, viajó, viajamos, viajasteis, viajaron.',
        examples: [{ es: 'La semana pasada viajé a Barcelona.', fr: 'La semaine dernière, j\'ai voyagé à Barcelone.' }],
      },
      {
        title: 'Verbes en -ER/-IR (ex : perder, perdre)',
        explanation: 'perdí, perdiste, perdió, perdimos, perdisteis, perdieron.',
        examples: [{ es: 'Perdí mi maleta en el aeropuerto.', fr: "J'ai perdu ma valise à l'aéroport." }],
      },
      {
        title: 'Quand l\'utiliser',
        explanation: 'Pour une action ponctuelle et terminée, souvent avec un repère temporel précis ("ayer", "la semana pasada").',
        examples: [{ es: 'Ayer comí paella con mis amigos.', fr: 'Hier, j\'ai mangé de la paella avec mes amis.' }],
      },
    ],
    exercises: [
      {
        question: 'Conjugue "viajar" à la 1ère personne du singulier au prétérit.',
        options: ['viajo', 'viajé', 'viajaba', 'viajaré'],
        answerIndex: 1,
      },
      {
        question: 'Conjugue "perder" à la 3ème personne du singulier au prétérit.',
        options: ['pierde', 'perdió', 'perdía', 'perderá'],
        answerIndex: 1,
      },
      {
        question: 'Quand utilise-t-on le prétérit ?',
        options: [
          'Pour une habitude répétée',
          'Pour une action ponctuelle terminée dans le passé',
          'Pour parler du futur',
          'Pour un état permanent',
        ],
        answerIndex: 1,
      },
      {
        question: '"Ayer comí paella." veut dire...',
        options: ['Je mange de la paella', 'Je mangerai de la paella', 'Hier j\'ai mangé de la paella', 'Je mangeais de la paella'],
        answerIndex: 2,
      },
    ],
  },
  {
    id: 'g9-gustar',
    order: 9,
    title: 'Exprimer ses goûts : le verbe "gustar"',
    summary: '"Gustar" ne se construit pas comme "aimer" en français : c\'est la chose aimée qui est le sujet.',
    points: [
      {
        title: 'La construction inversée',
        explanation: 'Littéralement "gustar" veut dire "plaire à". On utilise un pronom d\'objet indirect (me, te, le, nos, os, les) devant le verbe.',
        examples: [
          { es: 'Me gusta la música.', fr: "J'aime la musique. (littéralement : la musique me plaît)" },
          { es: 'Le gusta el fútbol.', fr: 'Il/elle aime le football.' },
        ],
      },
      {
        title: 'Singulier ou pluriel',
        explanation: '"Gusta" si ce qui est aimé est au singulier ou un verbe à l\'infinitif, "gustan" si c\'est au pluriel.',
        examples: [
          { es: 'Me gusta bailar.', fr: "J'aime danser." },
          { es: 'Me gustan los deportes.', fr: "J'aime les sports." },
        ],
      },
      {
        title: 'Préciser ou insister sur la personne',
        explanation: 'On peut ajouter "a mí", "a ti", "a él/ella", "a nosotros"... pour clarifier ou insister.',
        examples: [
          { es: 'A mi hermano le gusta nadar.', fr: 'Mon frère aime nager.' },
          { es: 'A mí no me gusta el cine, pero a ti sí.', fr: "Moi je n'aime pas le cinéma, mais toi oui." },
        ],
      },
    ],
    exercises: [
      {
        question: 'Comment dit-on "J\'aime la musique" ?',
        options: ['Yo gusto la música', 'Me gusta la música', 'Me gustas la música', 'Gusto música'],
        answerIndex: 1,
      },
      {
        question: 'Pourquoi "gusta" (et pas "gustan") dans "Me gusta el fútbol" ?',
        options: [
          'Parce que "fútbol" est au singulier',
          'Parce que c\'est un verbe irrégulier sans règle',
          'Parce que c\'est une erreur fréquente',
          'Parce que "me" l\'impose toujours',
        ],
        answerIndex: 0,
      },
      {
        question: 'Complète : "Me ___ los deportes." (au pluriel)',
        options: ['gusta', 'gustan', 'gusto', 'gustas'],
        answerIndex: 1,
      },
      {
        question: '"A mi hermano le gusta nadar." veut dire...',
        options: ['J\'aime nager', 'Mon frère aime nager', 'Mon frère nage', 'Nous aimons nager'],
        answerIndex: 1,
      },
    ],
  },
]
