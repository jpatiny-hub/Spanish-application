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
  },
]
