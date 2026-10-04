# Carnet de tâches — ToDo App (Groupe 1)

Mini-projet L2 GInfo — Introduction aux frameworks JavaScript (Vue.js 3 + Vite).

## Membres du groupe

- Membre 1 — Nom Prénom (fonctionnalité : Ajouter une tâche)
- Membre 2 — Nom Prénom (fonctionnalité : Modifier une tâche)
- Membre 3 — Nom Prénom (fonctionnalité : Supprimer une tâche)
- Membre 4 — Nom Prénom (fonctionnalité : Marquer une tâche comme terminée)
- Membre 5 — Nom Prénom (fonctionnalité : Filtrer les tâches par statut)

*(à compléter avec les vrais noms avant la remise)*

## Fonctionnalités réalisées

- [x] Ajouter une tâche
- [x] Modifier une tâche
- [x] Supprimer une tâche
- [x] Marquer une tâche comme terminée / à faire
- [x] Filtrer les tâches par statut (Toutes / En cours / Terminées)
- [x] Persistance des données dans `localStorage`

## Organisation du code par fonctionnalité

Chaque fonctionnalité minimale du cahier des charges correspond à **un seul
composant Vue**, pour que chaque membre puisse travailler et commiter dans
son propre fichier sans marcher sur celui des autres :

| Fonctionnalité | Fichier | Membre |
|---|---|---|
| Ajouter une tâche | `src/components/AddTaskForm.vue` | Membre 1 |
| Modifier une tâche | `src/components/EditTaskControl.vue` | Membre 2 |
| Supprimer une tâche | `src/components/DeleteTaskControl.vue` | Membre 3 |
| Marquer comme terminée | `src/components/StatusToggleControl.vue` | Membre 4 |
| Filtrer par statut | `src/components/StatusFilter.vue` | Membre 5 |

Fichiers communs (socle partagé, mis en place en début de projet avant de
se répartir les fonctionnalités ci-dessus) :

- `src/composables/useTasks.js` — état réactif des tâches (`ref`/`reactive`)
  + sauvegarde automatique dans `localStorage`. C'est le seul endroit où
  vivent les données ; chaque composant de fonctionnalité importe
  `useTasks()` et n'appelle que la fonction qui le concerne.
- `src/components/TaskItem.vue` — assemble les contrôles Modifier /
  Supprimer / Marquer terminé pour une tâche.
- `src/components/TaskList.vue` — affiche la liste filtrée (`v-for`).
- `src/App.vue` — assemble l'en-tête, le formulaire d'ajout, le filtre et
  la liste.
- `src/style.css` — style visuel commun.

## Notions du cours utilisées

- `ref()` / `reactive()` pour l'état des tâches et des formulaires
- `v-model` pour les champs de saisie
- `v-for` pour afficher la liste des tâches
- `v-if` / `v-else` pour l'affichage conditionnel (mode édition, liste vide)
- Événements (`@click`, `@submit`, `@keyup`)
- Props (`task` transmis de `TaskList` → `TaskItem` → contrôles)
- `computed()` pour la liste filtrée et le compteur de tâches restantes
- `localStorage` pour la persistance des données

## Instructions d'installation

Prérequis : [Node.js](https://nodejs.org/) (version 18 ou plus).

```bash
# 1. Cloner le dépôt
git clone <URL_DU_DEPOT>
cd todo-app

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

L'application est ensuite accessible sur l'URL indiquée dans le terminal
(en général `http://localhost:5173`).

Pour générer une version de production :

```bash
npm run build
npm run preview
```

## Captures d'écran

*(à ajouter ici avant la remise : capture de la liste vide, de l'ajout
d'une tâche, du filtrage, et de l'édition d'une tâche)*

## Contribution de chaque membre

*(à compléter avant la remise : quelques lignes par membre décrivant sa
fonctionnalité et un lien vers ses commits)*

## Workflow Git conseillé

1. `git clone` le dépôt, puis `git checkout -b feature/<ton-nom>-<fonctionnalité>`
   (ex. `feature/rina-ajout-tache`).
2. Travailler uniquement dans le fichier de sa fonctionnalité (voir le
   tableau ci-dessus) pour éviter les conflits.
3. Committer avec un message clair, ex. `Ajout formulaire tâche`,
   `Correction filtre statut`, `Amélioration interface`.
4. Ouvrir une Pull Request vers `main` et faire relire par un autre membre
   avant de fusionner.
5. Ne pas oublier d'inviter **@GasyCoder** comme collaborateur sur le
   dépôt GitHub dès le début du projet.
