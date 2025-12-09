# Palette de Couleurs - Angular Dev

## Couleurs Principales

### Variables CSS
```css
:root {
  --color-primary: #d72631;      /* Rouge principal */
  --color-secondary: #a2d5c6;    /* Vert menthe clair */
  --color-tertiary: #077b8a;     /* Bleu-vert/Teal */
  --color-accent: #5c3c92;       /* Violet */
  --color-bg: #f5f5f0;           /* Fond beige clair */
  --color-surface: #ffffff;      /* Blanc pour les cartes */
  --color-text: #2d2d2d;         /* Texte principal */
  --color-text-light: #666666;   /* Texte secondaire */
  --color-border: #e0e0e0;       /* Bordures */
}
```

## Utilisation des Couleurs

### 🔴 Rouge Principal (#d72631)
- **Usage** : Boutons d'action principaux, titres importants, erreurs
- **Exemples** : 
  - Bouton "Soumettre"
  - Titre du logo
  - Messages d'erreur
  - Bordure supérieure du header

### 🌿 Vert Menthe (#a2d5c6)
- **Usage** : Zones de fond secondaires, états de survol
- **Exemples** :
  - Fond des champs en lecture seule
  - Fond des sections méta
  - Bouton de recherche
  - Séparateurs de sections

### 🌊 Bleu-Vert (#077b8a)
- **Usage** : Navigation active, liens, boutons secondaires
- **Exemples** :
  - Navigation active
  - Bouton "Détails"
  - Focus des champs de formulaire
  - Bordure gauche des cartes

### 💜 Violet (#5c3c92)
- **Usage** : Accents spéciaux, états particuliers
- **Exemples** :
  - Bordure de la page 404
  - Éléments décoratifs
  - États spéciaux

## Hiérarchie Visuelle

1. **Éléments Primaires** : Rouge (#d72631)
   - Actions principales
   - Titres importants
   - Alertes

2. **Éléments Secondaires** : Bleu-vert (#077b8a)
   - Navigation
   - Actions secondaires
   - Liens

3. **Éléments Tertiaires** : Vert menthe (#a2d5c6)
   - Fonds
   - Zones de contenu
   - États de survol

4. **Accents** : Violet (#5c3c92)
   - Éléments spéciaux
   - Décorations

## Badges de Statut

- **Acceptée** : Vert (#d4edda / #155724)
- **Refusée** : Rouge (#f8d7da / #d72631)
- **En attente** : Jaune (#fff3cd / #856404)
- **Catégorie** : Vert menthe (#a2d5c6 / #077b8a)

## Accessibilité

Tous les contrastes de couleurs respectent les normes WCAG 2.1 AA :
- Texte principal sur fond clair : ratio 7:1
- Texte secondaire sur fond clair : ratio 4.5:1
- Boutons et éléments interactifs : ratio minimum 3:1

## Exemples d'Application

### Header
- Fond : Blanc (#ffffff)
- Bordure : Rouge (#d72631)
- Logo : Rouge (#d72631)
- Navigation active : Bleu-vert (#077b8a)

### Cartes
- Fond : Blanc (#ffffff)
- Bordure : Gris (#e0e0e0)
- Bordure gauche : Bleu-vert (#077b8a)
- Survol : Rouge (#d72631)

### Formulaires
- Champs : Blanc avec bordure grise
- Focus : Bleu-vert (#077b8a)
- Erreur : Rouge (#d72631)
- Lecture seule : Vert menthe (#a2d5c6)

### Boutons
- Primaire : Rouge (#d72631)
- Secondaire : Blanc avec bordure
- Survol primaire : Rouge foncé (#b81e28)
- Survol secondaire : Vert menthe (#a2d5c6)
