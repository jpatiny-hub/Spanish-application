import type { WritingExercise } from '../types'

export const writingExercises: WritingExercise[] = [
  // Au quotidien
  { id: 'w01', category: 'Au quotidien', type: 'traduction', prompt: 'Je me lève à sept heures.', answer: 'Me levanto a las siete.' },
  { id: 'w02', category: 'Au quotidien', type: 'traduction', prompt: "Aujourd'hui, je ne travaille pas.", answer: 'Hoy no trabajo.' },
  { id: 'w03', category: 'Au quotidien', type: 'a-trous', prompt: 'Yo ___ (hablar) español todos los días.', answer: 'hablo', hint: 'hablar, présent, 1ère pers.' },
  { id: 'w04', category: 'Au quotidien', type: 'a-trous', prompt: 'Ella ___ (vivir) en Madrid.', answer: 'vive', hint: 'vivir, présent, 3ème pers.' },
  { id: 'w05', category: 'Au quotidien', type: 'traduction', prompt: 'Nous mangeons à deux heures.', answer: 'Comemos a las dos.' },
  { id: 'w06', category: 'Au quotidien', type: 'a-trous', prompt: 'Nosotros ___ (comer) juntos los domingos.', answer: 'comemos', hint: 'comer, présent, 1ère pers. pluriel' },

  // Famille
  { id: 'w07', category: 'Famille', type: 'traduction', prompt: "J'ai un frère et une sœur.", answer: 'Tengo un hermano y una hermana.' },
  { id: 'w08', category: 'Famille', type: 'traduction', prompt: 'Ma famille est petite mais unie.', answer: 'Mi familia es pequeña pero unida.' },
  { id: 'w09', category: 'Famille', type: 'a-trous', prompt: 'Mis padres ___ (ser) muy simpáticos.', answer: 'son', hint: 'ser, présent, 3ème pers. pluriel' },
  { id: 'w10', category: 'Famille', type: 'a-trous', prompt: 'Mi hermana ___ (tener) veinte años.', answer: 'tiene', hint: 'tener, présent, 3ème pers.' },
  { id: 'w11', category: 'Famille', type: 'traduction', prompt: 'Mes grands-parents habitent en Espagne.', answer: 'Mis abuelos viven en España.' },

  // Au travail
  { id: 'w12', category: 'Au travail', type: 'traduction', prompt: 'Je travaille dans un laboratoire.', answer: 'Trabajo en un laboratorio.' },
  { id: 'w13', category: 'Au travail', type: 'traduction', prompt: 'Nous avons une réunion à dix heures.', answer: 'Tenemos una reunión a las diez.' },
  { id: 'w14', category: 'Au travail', type: 'a-trous', prompt: 'Yo ___ (analizar) las muestras cada mañana.', answer: 'analizo', hint: 'analizar, présent, 1ère pers.' },
  { id: 'w15', category: 'Au travail', type: 'a-trous', prompt: 'Mi colega ___ (escribir) el informe.', answer: 'escribe', hint: 'escribir, présent, 3ème pers.' },
  { id: 'w16', category: 'Au travail', type: 'traduction', prompt: 'Le résultat est important pour la recherche.', answer: 'El resultado es importante para la investigación.' },
  { id: 'w17', category: 'Au travail', type: 'a-trous', prompt: 'Nosotros ___ (necesitar) más tiempo para el ensayo clínico.', answer: 'necesitamos', hint: 'necesitar, présent, 1ère pers. pluriel' },

  // Météo
  { id: 'w18', category: 'Météo', type: 'traduction', prompt: "Aujourd'hui il fait chaud et il y a du soleil.", answer: 'Hoy hace calor y hace sol.' },
  { id: 'w19', category: 'Météo', type: 'traduction', prompt: 'Demain il va pleuvoir.', answer: 'Mañana va a llover.' },
  { id: 'w20', category: 'Météo', type: 'a-trous', prompt: 'En invierno ___ (nevar) en la montaña.', answer: 'nieva', hint: 'nevar, présent (verbe impersonnel)' },
  { id: 'w21', category: 'Météo', type: 'traduction', prompt: 'Il fait très froid en hiver.', answer: 'Hace mucho frío en invierno.' },

  // Voyage
  { id: 'w22', category: 'Voyage', type: 'traduction', prompt: "J'ai réservé un hôtel près de la plage.", answer: 'He reservado un hotel cerca de la playa.' },
  { id: 'w23', category: 'Voyage', type: 'traduction', prompt: 'Où est la gare, s\'il vous plaît ?', answer: '¿Dónde está la estación, por favor?' },
  { id: 'w24', category: 'Voyage', type: 'a-trous', prompt: 'Nosotros ___ (comprar) los billetes en la estación.', answer: 'compramos', hint: 'comprar, présent, 1ère pers. pluriel' },
  { id: 'w25', category: 'Voyage', type: 'traduction', prompt: "J'ai perdu ma valise à l'aéroport.", answer: 'Perdí mi maleta en el aeropuerto.' },

  // Grammaire (négation, ser/estar, temps)
  { id: 'w26', category: 'Grammaire', type: 'traduction', prompt: 'Je ne parle pas anglais.', answer: 'No hablo inglés.' },
  { id: 'w27', category: 'Grammaire', type: 'traduction', prompt: 'Je suis français mais je suis fatigué.', answer: 'Soy francés pero estoy cansado.' },
  { id: 'w28', category: 'Grammaire', type: 'a-trous', prompt: 'Madrid ___ (estar) en España.', answer: 'está', hint: 'estar (lieu), présent, 3ème pers.' },
  { id: 'w29', category: 'Grammaire', type: 'a-trous', prompt: 'Ella ___ (ser) profesora.', answer: 'es', hint: 'ser (métier), présent, 3ème pers.' },
  { id: 'w30', category: 'Grammaire', type: 'traduction', prompt: 'Nous ne travaillons pas le dimanche.', answer: 'No trabajamos el domingo.' },
  { id: 'w31', category: 'Grammaire', type: 'a-trous', prompt: '¿___ (Hablar) tú español?', answer: 'Hablas', hint: 'hablar, présent, 2ème pers. (question)' },

  // Achats
  { id: 'w32', category: 'Achats', type: 'traduction', prompt: 'Combien ça coûte ?', answer: '¿Cuánto cuesta?' },
  { id: 'w33', category: 'Achats', type: 'traduction', prompt: "Je vais payer par carte.", answer: 'Voy a pagar con tarjeta.' },
  { id: 'w34', category: 'Achats', type: 'a-trous', prompt: 'Yo ___ (querer) comprar un kilo de manzanas.', answer: 'quiero', hint: 'querer, présent, 1ère pers.' },
  { id: 'w35', category: 'Achats', type: 'traduction', prompt: 'Ce magasin est très cher.', answer: 'Esta tienda es muy cara.' },

  // Santé
  { id: 'w36', category: 'Santé', type: 'traduction', prompt: "J'ai mal à la tête.", answer: 'Me duele la cabeza.' },
  { id: 'w37', category: 'Santé', type: 'traduction', prompt: 'Je dois prendre rendez-vous avec le médecin.', answer: 'Tengo que pedir una cita con el médico.' },
  { id: 'w38', category: 'Santé', type: 'a-trous', prompt: 'Ella ___ (estar) enferma hoy.', answer: 'está', hint: 'estar (état), présent, 3ème pers.' },
  { id: 'w39', category: 'Santé', type: 'traduction', prompt: 'Prends un comprimé toutes les huit heures.', answer: 'Toma una pastilla cada ocho horas.' },

  // Loisirs (gustar)
  { id: 'w40', category: 'Loisirs', type: 'traduction', prompt: "J'aime la musique.", answer: 'Me gusta la música.' },
  { id: 'w41', category: 'Loisirs', type: 'traduction', prompt: 'Mon frère aime le sport.', answer: 'A mi hermano le gusta el deporte.' },
  { id: 'w42', category: 'Loisirs', type: 'a-trous', prompt: 'A nosotros nos ___ (gustar) bailar.', answer: 'gusta', hint: 'gustar, présent, avec "nos"' },
  { id: 'w43', category: 'Loisirs', type: 'traduction', prompt: "Je préfère lire un livre.", answer: 'Prefiero leer un libro.' },
]

export const writingCategories = Array.from(new Set(writingExercises.map((w) => w.category)))
