import { Component, OnInit } from '@angular/core';
import { Suggestion } from '../../models/suggestion';

@Component({
  selector: 'app-list-suggestion',
  templateUrl: './list-suggestion.component.html',
  styleUrls: ['./list-suggestion.component.css']
})
export class ListSuggestionComponent implements OnInit {
  searchTerm: string = '';
  filteredSuggestions: Suggestion[] = [];
  
  suggestions: Suggestion[] = [
    {
      id: 1,
      title: 'Organiser une journée team building',
      description: 'Suggestion pour organiser une journée de team building pour renforcer les liens entre les membres de l\'équipe.',
      category: 'Événements',
      date: new Date('2025-01-20'),
      status: 'acceptee',
      likes: 12,
      isFavorite: false
    },
    {
      id: 2,
      title: 'Améliorer le système de réservation',
      description: 'Proposition pour améliorer la gestion des réservations en ligne avec un système de confirmation automatique.',
      category: 'Technologie',
      date: new Date('2025-01-15'),
      status: 'refusee',
      likes: 5,
      isFavorite: false
    },
    {
      id: 3,
      title: 'Créer un système de récompenses',
      description: 'Mise en place d\'un programme de récompenses pour motiver les employés et reconnaître leurs efforts.',
      category: 'Ressources Humaines',
      date: new Date('2025-01-25'),
      status: 'refusee',
      likes: 8,
      isFavorite: true
    },
    {
      id: 4,
      title: 'Moderniser l\'interface utilisateur',
      description: 'Refonte complète de l\'interface utilisateur pour une meilleure expérience utilisateur.',
      category: 'Technologie',
      date: new Date('2025-01-30'),
      status: 'en_attente',
      likes: 15,
      isFavorite: false
    },
    {
      id: 5,
      title: 'Formation à la sécurité informatique',
      description: 'Organisation d\'une formation sur les bonnes pratiques de sécurité informatique pour tous les employés.',
      category: 'Formation',
      date: new Date('2025-02-05'),
      status: 'acceptee',
      likes: 20,
      isFavorite: true
    }
  ];

  ngOnInit() {
    this.filteredSuggestions = [...this.suggestions];
  }

  onLike(suggestion: Suggestion): void {
    suggestion.likes++;
  }

  onToggleFavorite(suggestion: Suggestion): void {
    suggestion.isFavorite = !suggestion.isFavorite;
  }

  onSearch(): void {
    if (!this.searchTerm.trim()) {
      this.filteredSuggestions = [...this.suggestions];
      return;
    }

    const searchLower = this.searchTerm.toLowerCase();
    this.filteredSuggestions = this.suggestions.filter(suggestion =>
      suggestion.title.toLowerCase().includes(searchLower) ||
      suggestion.category.toLowerCase().includes(searchLower)
    );
  }

  isRejected(status: string): boolean {
    return status === 'refusee';
  }
}