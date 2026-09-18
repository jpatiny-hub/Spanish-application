import type { SpeakingItem } from '../types'

export const speakingItems: SpeakingItem[] = [
  // Salutations
  { id: 's01', es: 'Hola', fr: 'Bonjour / Salut', category: 'Salutations', level: 'mot' },
  { id: 's02', es: 'Buenos días', fr: 'Bonjour (matin)', category: 'Salutations', level: 'fragment' },
  { id: 's03', es: '¿Cómo estás?', fr: 'Comment vas-tu ?', category: 'Salutations', level: 'fragment' },
  { id: 's04', es: 'Muy bien, gracias, ¿y tú?', fr: 'Très bien, merci, et toi ?', category: 'Salutations', level: 'phrase' },
  { id: 's05', es: 'Encantado de conocerte.', fr: 'Enchanté de te connaître.', category: 'Salutations', level: 'phrase' },
  { id: 's06', es: 'Hasta luego, nos vemos mañana.', fr: 'À plus tard, on se voit demain.', category: 'Salutations', level: 'phrase' },

  // Famille
  { id: 's07', es: 'la familia', fr: 'la famille', category: 'Famille', level: 'mot' },
  { id: 's08', es: 'mi hermano mayor', fr: 'mon grand frère', category: 'Famille', level: 'fragment' },
  { id: 's09', es: 'Tengo dos hermanas.', fr: "J'ai deux sœurs.", category: 'Famille', level: 'phrase' },
  { id: 's10', es: 'Mi madre y mi padre viven en Francia.', fr: 'Ma mère et mon père vivent en France.', category: 'Famille', level: 'phrase' },
  { id: 's11', es: 'Toda mi familia se reúne los domingos.', fr: 'Toute ma famille se réunit le dimanche.', category: 'Famille', level: 'phrase' },

  // Au quotidien
  { id: 's12', es: 'el trabajo', fr: 'le travail', category: 'Au quotidien', level: 'mot' },
  { id: 's13', es: 'todos los días', fr: 'tous les jours', category: 'Au quotidien', level: 'fragment' },
  { id: 's14', es: 'Me levanto a las siete.', fr: 'Je me lève à sept heures.', category: 'Au quotidien', level: 'phrase' },
  { id: 's15', es: '¿Qué hora es, por favor?', fr: "Quelle heure est-il, s'il vous plaît ?", category: 'Au quotidien', level: 'phrase' },
  { id: 's16', es: 'Los fines de semana me gusta descansar.', fr: 'Le week-end, j\'aime me reposer.', category: 'Au quotidien', level: 'phrase' },

  // Météo
  { id: 's17', es: 'hace calor', fr: 'il fait chaud', category: 'Météo', level: 'fragment' },
  { id: 's18', es: 'está lloviendo', fr: 'il pleut', category: 'Météo', level: 'fragment' },
  { id: 's19', es: 'Hoy hace mucho sol en Madrid.', fr: "Aujourd'hui il y a beaucoup de soleil à Madrid.", category: 'Météo', level: 'phrase' },
  { id: 's20', es: 'Mañana va a llover por la tarde.', fr: "Demain il va pleuvoir dans l'après-midi.", category: 'Météo', level: 'phrase' },
  { id: 's21', es: 'En invierno hace mucho frío y a veces nieva.', fr: 'En hiver il fait très froid et parfois il neige.', category: 'Météo', level: 'phrase' },

  // Voyage
  { id: 's22', es: 'el aeropuerto', fr: "l'aéroport", category: 'Voyage', level: 'mot' },
  { id: 's23', es: 'un billete de ida y vuelta', fr: 'un billet aller-retour', category: 'Voyage', level: 'fragment' },
  { id: 's24', es: '¿Dónde está la estación de tren?', fr: 'Où est la gare ?', category: 'Voyage', level: 'phrase' },
  { id: 's25', es: 'He reservado un hotel cerca de la playa.', fr: "J'ai réservé un hôtel près de la plage.", category: 'Voyage', level: 'phrase' },
  { id: 's26', es: 'Perdí mi maleta en el aeropuerto.', fr: "J'ai perdu ma valise à l'aéroport.", category: 'Voyage', level: 'phrase' },

  // Au restaurant
  { id: 's27', es: 'la cuenta, por favor', fr: "l'addition, s'il vous plaît", category: 'Au restaurant', level: 'fragment' },
  { id: 's28', es: '¿Tiene una mesa para dos personas?', fr: 'Avez-vous une table pour deux personnes ?', category: 'Au restaurant', level: 'phrase' },
  { id: 's29', es: 'De primero quiero una ensalada.', fr: 'En entrée je veux une salade.', category: 'Au restaurant', level: 'phrase' },
  { id: 's30', es: 'Para beber, un agua con gas, por favor.', fr: "Comme boisson, une eau gazeuse, s'il vous plaît.", category: 'Au restaurant', level: 'phrase' },

  // Au travail (biologiste en industrie pharmaceutique)
  { id: 's31', es: 'el laboratorio', fr: 'le laboratoire', category: 'Au travail', level: 'mot' },
  { id: 's32', es: 'una reunión de equipo', fr: 'une réunion d\'équipe', category: 'Au travail', level: 'fragment' },
  { id: 's33', es: 'Trabajo en una empresa farmacéutica.', fr: 'Je travaille dans une entreprise pharmaceutique.', category: 'Au travail', level: 'phrase' },
  { id: 's34', es: 'Esta mañana analicé varias muestras en el laboratorio.', fr: "Ce matin j'ai analysé plusieurs échantillons au laboratoire.", category: 'Au travail', level: 'phrase' },
  { id: 's35', es: 'Tengo que escribir un informe sobre los resultados.', fr: "Je dois écrire un rapport sur les résultats.", category: 'Au travail', level: 'phrase' },
  { id: 's36', es: 'Mañana tenemos una reunión importante con el equipo de investigación.', fr: "Demain nous avons une réunion importante avec l'équipe de recherche.", category: 'Au travail', level: 'phrase' },
]

export const speakingCategories = Array.from(new Set(speakingItems.map((s) => s.category)))
