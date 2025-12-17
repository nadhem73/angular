import { Injectable } from '@angular/core';
import { Suggestion } from '../../models/suggestion';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {
  private suggestions: Suggestion[] = [
    {
      id: 1,
      title: 'Organiser une journée team building',
      description: 'Suggestion pour organiser une journée de team building pour renforcer les liens entre les membres de l\'équipe. Cette activité permettrait d\'améliorer la cohésion d\'équipe et de créer un environnement de travail plus agréable.',
      category: 'Événements',
      date: new Date('2025-01-20'),
      status: 'acceptee',
      nbLikes: 12
    },
    {
      id: 2,
      title: 'Améliorer le système de réservation',
      description: 'Proposition pour améliorer la gestion des réservations en ligne avec un système de confirmation automatique. Cela réduirait les erreurs et améliorerait l\'expérience utilisateur.',
      category: 'Technologie',
      date: new Date('2025-01-15'),
      status: 'refusee',
      nbLikes: 5
    },
    {
      id: 3,
      title: 'Créer un système de récompenses',
      description: 'Mise en place d\'un programme de récompenses pour motiver les employés et reconnaître leurs efforts. Ce système inclurait des badges, des points et des récompenses mensuelles.',
      category: 'Ressources Humaines',
      date: new Date('2025-01-25'),
      status: 'refusee',
      nbLikes: 8
    },
    {
      id: 4,
      title: 'Moderniser l\'interface utilisateur',
      description: 'Refonte complète de l\'interface utilisateur pour une meilleure expérience utilisateur. Utilisation de technologies modernes et d\'un design responsive.',
      category: 'Technologie',
      date: new Date('2025-01-30'),
      status: 'en_attente',
      nbLikes: 15
    },
    {
      id: 5,
      title: 'Formation à la sécurité informatique',
      description: 'Organisation d\'une formation sur les bonnes pratiques de sécurité informatique pour tous les employés. Formation interactive avec des cas pratiques et des certifications.',
      category: 'Formation',
      date: new Date('2025-02-05'),
      status: 'acceptee',
      nbLikes: 20
    }
  ];

  constructor() { }

  /**
   * Retourne la liste complète des suggestions
   */
  getSuggestionsList(): Suggestion[] {
    return this.suggestions;
  }

  /**
   * Retourne une suggestion par son ID
   */
  getSuggestionById(id: number): Suggestion | undefined {
    return this.suggestions.find(s => s.id === id);
  }

  /**
   * Ajoute un like à une suggestion
   */
  likeSuggestion(id: number): void {
    const suggestion = this.getSuggestionById(id);
    if (suggestion) {
      suggestion.nbLikes++;
    }
  }

  /**
   * Ajoute une nouvelle suggestion
   */
  addSuggestion(suggestion: Suggestion): void {
    // Générer un nouvel ID
    const maxId = Math.max(...this.suggestions.map(s => s.id), 0);
    suggestion.id = maxId + 1;
    this.suggestions.push(suggestion);
  }

  /**
   * Met à jour une suggestion existante
   */
  updateSuggestion(suggestion: Suggestion): void {
    const index = this.suggestions.findIndex(s => s.id === suggestion.id);
    if (index !== -1) {
      this.suggestions[index] = suggestion;
    }
  }

  /**
   * Supprime une suggestion
   */
  deleteSuggestion(id: number): void {
    const index = this.suggestions.findIndex(s => s.id === id);
    if (index !== -1) {
      this.suggestions.splice(index, 1);
    }
  }
}
