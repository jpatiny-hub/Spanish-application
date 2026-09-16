import type { VocabItem } from '../types'

export const vocabulary: VocabItem[] = [
  // Salutations
  { id: 'v01', es: 'Hola', fr: 'Bonjour / Salut', category: 'Salutations', example: { es: '¡Hola! ¿Cómo estás?', fr: 'Salut ! Comment vas-tu ?' } },
  { id: 'v02', es: 'Buenos días', fr: 'Bonjour (matin)', category: 'Salutations', example: { es: 'Buenos días, señora.', fr: 'Bonjour, madame.' } },
  { id: 'v03', es: 'Buenas tardes', fr: 'Bon après-midi', category: 'Salutations' },
  { id: 'v04', es: 'Buenas noches', fr: 'Bonsoir / Bonne nuit', category: 'Salutations' },
  { id: 'v05', es: 'Adiós', fr: 'Au revoir', category: 'Salutations' },
  { id: 'v06', es: 'Hasta luego', fr: 'À plus tard', category: 'Salutations' },
  { id: 'v07', es: 'Por favor', fr: "S'il te plaît", category: 'Salutations' },
  { id: 'v08', es: 'Gracias', fr: 'Merci', category: 'Salutations' },
  { id: 'v09', es: 'De nada', fr: 'De rien', category: 'Salutations' },
  { id: 'v10', es: 'Perdón', fr: 'Pardon / Excusez-moi', category: 'Salutations' },

  // Nombres
  { id: 'v11', es: 'uno', fr: 'un', category: 'Nombres' },
  { id: 'v12', es: 'dos', fr: 'deux', category: 'Nombres' },
  { id: 'v13', es: 'tres', fr: 'trois', category: 'Nombres' },
  { id: 'v14', es: 'cuatro', fr: 'quatre', category: 'Nombres' },
  { id: 'v15', es: 'cinco', fr: 'cinq', category: 'Nombres' },
  { id: 'v16', es: 'seis', fr: 'six', category: 'Nombres' },
  { id: 'v17', es: 'siete', fr: 'sept', category: 'Nombres' },
  { id: 'v18', es: 'ocho', fr: 'huit', category: 'Nombres' },
  { id: 'v19', es: 'nueve', fr: 'neuf', category: 'Nombres' },
  { id: 'v20', es: 'diez', fr: 'dix', category: 'Nombres' },

  // Famille
  { id: 'v21', es: 'la familia', fr: 'la famille', category: 'Famille' },
  { id: 'v22', es: 'la madre', fr: 'la mère', category: 'Famille' },
  { id: 'v23', es: 'el padre', fr: 'le père', category: 'Famille' },
  { id: 'v24', es: 'el hermano', fr: 'le frère', category: 'Famille' },
  { id: 'v25', es: 'la hermana', fr: 'la sœur', category: 'Famille' },
  { id: 'v26', es: 'el hijo', fr: 'le fils', category: 'Famille' },
  { id: 'v27', es: 'la hija', fr: 'la fille (enfant)', category: 'Famille' },
  { id: 'v28', es: 'los abuelos', fr: 'les grands-parents', category: 'Famille' },

  // Couleurs
  { id: 'v29', es: 'rojo', fr: 'rouge', category: 'Couleurs' },
  { id: 'v30', es: 'azul', fr: 'bleu', category: 'Couleurs' },
  { id: 'v31', es: 'verde', fr: 'vert', category: 'Couleurs' },
  { id: 'v32', es: 'amarillo', fr: 'jaune', category: 'Couleurs' },
  { id: 'v33', es: 'negro', fr: 'noir', category: 'Couleurs' },
  { id: 'v34', es: 'blanco', fr: 'blanc', category: 'Couleurs' },

  // Nourriture
  { id: 'v35', es: 'el agua', fr: "l'eau", category: 'Nourriture' },
  { id: 'v36', es: 'el pan', fr: 'le pain', category: 'Nourriture' },
  { id: 'v37', es: 'la fruta', fr: 'le fruit', category: 'Nourriture' },
  { id: 'v38', es: 'la carne', fr: 'la viande', category: 'Nourriture' },
  { id: 'v39', es: 'el café', fr: 'le café', category: 'Nourriture' },
  { id: 'v40', es: 'la manzana', fr: 'la pomme', category: 'Nourriture' },

  // Jours & mois
  { id: 'v41', es: 'lunes', fr: 'lundi', category: 'Jours & mois' },
  { id: 'v42', es: 'martes', fr: 'mardi', category: 'Jours & mois' },
  { id: 'v43', es: 'miércoles', fr: 'mercredi', category: 'Jours & mois' },
  { id: 'v44', es: 'jueves', fr: 'jeudi', category: 'Jours & mois' },
  { id: 'v45', es: 'viernes', fr: 'vendredi', category: 'Jours & mois' },
  { id: 'v46', es: 'sábado', fr: 'samedi', category: 'Jours & mois' },
  { id: 'v47', es: 'domingo', fr: 'dimanche', category: 'Jours & mois' },

  // Au quotidien
  { id: 'v48', es: 'la casa', fr: 'la maison', category: 'Au quotidien' },
  { id: 'v49', es: 'el trabajo', fr: 'le travail', category: 'Au quotidien' },
  { id: 'v50', es: 'el tiempo', fr: 'le temps', category: 'Au quotidien' },
  { id: 'v51', es: 'el amigo', fr: "l'ami", category: 'Au quotidien' },
  { id: 'v52', es: 'hoy', fr: "aujourd'hui", category: 'Au quotidien' },
  { id: 'v53', es: 'mañana', fr: 'demain / matin', category: 'Au quotidien' },
  { id: 'v54', es: 'ahora', fr: 'maintenant', category: 'Au quotidien' },
]

export const vocabCategories = Array.from(new Set(vocabulary.map((v) => v.category)))
