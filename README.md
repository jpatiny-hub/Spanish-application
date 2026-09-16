# Español — apprendre l'espagnol

Application personnelle (Progressive Web App) pour apprendre l'espagnol depuis les bases : grammaire, vocabulaire, lecture, écoute et oral.

## Fonctionnalités

- **Grammaire** — fiches théoriques courtes (alphabet, genre, pronoms, ser/estar, conjugaison, négation/question).
- **Vocabulaire** — flashcards par thème avec répétition espacée (système de Leitner à 5 boîtes, sauvegardée sur l'appareil).
- **Lecture** — textes progressifs (3 niveaux) avec traduction à la demande et questions de compréhension.
- **Écoute** — quiz audio basé sur la synthèse vocale du navigateur (`speechSynthesis`).
- **Oral** — répétition guidée avec reconnaissance vocale du navigateur (`SpeechRecognition`) pour vérifier la prononciation.

Tout le contenu est stocké localement (aucun compte, aucun serveur) : les données de progression restent uniquement sur ton téléphone.

## Développement local

```bash
npm install
npm run dev
```

Puis ouvre l'URL affichée dans le terminal.

## Build de production

```bash
npm run build
npm run preview
```

## Installation sur smartphone (Android)

1. Déploie l'appli (voir ci-dessous) pour obtenir une URL publique, **ou** lance `npm run dev -- --host` sur ton ordinateur et ouvre l'IP affichée depuis le téléphone (même réseau Wi-Fi).
2. Ouvre l'URL dans **Chrome** sur Android.
3. Menu ⋮ → **Ajouter à l'écran d'accueil** (ou la bannière d'installation apparaît automatiquement).
4. L'icône apparaît sur l'écran d'accueil comme une vraie application, plein écran, avec cache hors-ligne.

## Déploiement sur GitHub Pages

Un workflow GitHub Actions (`.github/workflows/deploy.yml`) build et publie automatiquement le contenu de `dist/` sur GitHub Pages à chaque push sur `main`.

Une fois le dépôt en place :

1. Sur GitHub : **Settings → Pages → Build and deployment → Source : GitHub Actions**.
2. Pousse sur `main` (ou lance le workflow manuellement depuis l'onglet Actions).
3. L'appli sera disponible à `https://<utilisateur>.github.io/spanish-application/`.

## Ajouter du contenu

Tout le contenu pédagogique est dans `src/data/` :

- `vocabulary.ts` — mots de vocabulaire (`id`, `es`, `fr`, `category`, `example` optionnel).
- `grammar.ts` — fiches de grammaire (`points` avec explication + exemples).
- `reading.ts` — textes de lecture (`paragraphs` + `questions` à choix multiples).

Ajouter une entrée dans ces fichiers suffit : elle apparaît automatiquement dans l'appli (flashcards, listes, quiz d'écoute).

## Stack technique

Vite + React + TypeScript, Tailwind CSS, React Router (`HashRouter`, compatible hébergement statique), `vite-plugin-pwa` pour le manifeste et le service worker hors-ligne.
