# Travail Réalisé - Parties 1 & 2

---

## Partie 1 : Routage Simple

### 1. Création des composants demandés
```bash
ng g c core/home --skip-tests
ng g c core/notfound --skip-tests
```

### 2. Configuration du routage (app-routing.module.ts)
```typescript
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'listSuggestion', component: ListSuggestionComponent },
  { path: '**', component: NotfoundComponent }
];
```

**Routes créées :**
- ✅ Route par défaut qui redirige vers `/home`
- ✅ `/home` → HomeComponent
- ✅ `/listSuggestion` → ListSuggestionComponent
- ✅ `**` → NotfoundComponent (wildcard pour 404)

### 3. Configuration du HeaderComponent
**Liens ajoutés dans le header :**
- ✅ Lien **"home"** → redirige vers la page d'accueil (HomeComponent)
- ✅ Lien **"Suggestions"** → redirige vers la liste des suggestions (ListSuggestionComponent)

**Fichier : `header.component.html`**
```html
<nav class="nav-menu">
  <a routerLink="/home" routerLinkActive="active">🏠 Accueil</a>
  <a routerLink="/suggestions" routerLinkActive="active">💡 Suggestions</a>
</nav>
```

---

## Partie 2 : Lazy Loading

### 1. Création des modules fonctionnels avec lazy loading
```bash
ng g module features/suggestions --route suggestions --module app.module
ng g module features/users --route users --module app.module
```

**Résultat :**
- ✅ Modules créés automatiquement
- ✅ Fichiers de routing créés
- ✅ Routes lazy ajoutées dans `app-routing.module.ts`

**Routes lazy loading dans app-routing.module.ts :**
```typescript
{ 
  path: 'suggestions', 
  loadChildren: () => import('./features/suggestions/suggestions.module')
    .then(m => m.SuggestionsModule) 
},
{ 
  path: 'users', 
  loadChildren: () => import('./features/users/users.module')
    .then(m => m.UsersModule) 
}
```

### 2. Création des composants internes du module Suggestions

#### a. Placer SuggestionList dans le module suggestions
```bash
  ng g c features/suggestions/suggestion-list --skip-tests
```
- ✅ Composant créé dans `features/suggestions/`
- ✅ Imports nécessaires ajoutés (FormsModule pour ngModel)

#### b. Créer SuggestionDetailComponent
```bash
ng g c features/suggestions/suggestion-detail --skip-tests
```
- ✅ Composant créé dans le module Suggestions

### 3. Routage interne du module Suggestions

**Fichier : `suggestions-routing.module.ts`**
```typescript
const routes: Routes = [
  { path: '', component: SuggestionListComponent },
  { path: ':id', component: SuggestionDetailComponent }
];
```

**Routes créées :**
- ✅ `/suggestions` → SuggestionListComponent
- ✅ `/suggestions/:id` → SuggestionDetailComponent

### 4. Configuration de la route paramétrée

**Dans SuggestionDetailComponent :**
- ✅ Utilisation de `ActivatedRoute` pour récupérer l'ID
```typescript
ngOnInit(): void {
  this.route.params.subscribe(params => {
    this.suggestionId = +params['id'];
    this.loadSuggestion();
  });
}
```

**Dans SuggestionList :**
- ✅ Bouton "Détails" ajouté permettant le chargement du SuggestionDetailComponent
```typescript
onViewDetails(id: number): void {
  this.router.navigate(['/suggestions', id]);
}
```

**Dans SuggestionDetail :**
- ✅ Affichage des détails correspondants à une suggestion
- ✅ Lien "back to list" permettant le retour à la liste des suggestions
```typescript
goBackToList(): void {
  this.router.navigate(['/suggestions']);
}
```

### 5. Ajout du router-outlet

**Fichier : `app.component.html`**
```html
<app-header></app-header>
<router-outlet></router-outlet>
```
- ✅ `<router-outlet>` ajouté dans le composant racine du module Suggestions

---

## Résumé des fichiers créés/modifiés

### Partie 1
```
✓ src/app/app-routing.module.ts
✓ src/app/core/header/header.component.html
✓ src/app/core/notfound/notfound.component.*
✓ src/app/home/home.component.*
✓ src/app/app.component.html
```

### Partie 2
```
✓ src/app/features/suggestions/suggestions.module.ts
✓ src/app/features/suggestions/suggestions-routing.module.ts
✓ src/app/features/suggestions/suggestion-list/suggestion-list.component.*
✓ src/app/features/suggestions/suggestion-detail/suggestion-detail.component.*
✓ src/app/features/users/users.module.ts
✓ src/app/features/users/users-routing.module.ts
```

---

## Tests de fonctionnement

### Partie 1
```
✓ localhost:4200 → Redirige vers /home
✓ localhost:4200/home → Affiche HomeComponent
✓ localhost:4200/listSuggestion → Affiche ListSuggestionComponent
✓ localhost:4200/xyz → Affiche NotfoundComponent (404)
```

### Partie 2
```
✓ localhost:4200/suggestions → Affiche SuggestionListComponent (lazy-loaded)
✓ localhost:4200/suggestions/1 → Affiche SuggestionDetailComponent avec ID=1
✓ Clic sur "Détails" → Navigation vers /suggestions/:id
✓ Clic sur "Retour à la liste" → Navigation vers /suggestions
✓ DevTools Network → Vérification du chargement lazy (chunk-*.js)
```

---

## Commandes utilisées

```bash
# Partie 1
ng g c core/notfound --skip-tests

# Partie 2
ng g module features/suggestions --route suggestions --module app.module
ng g module features/users --route users --module app.module
ng g c features/suggestions/suggestion-detail --skip-tests
ng g c features/suggestions/suggestion-list --skip-tests
```

---

## ✅ Tous les objectifs des images ont été réalisés
