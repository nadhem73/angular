import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Suggestion } from '../../../models/suggestion';

@Component({
  selector: 'app-suggestion-detail',
  templateUrl: './suggestion-detail.component.html',
  styleUrls: ['./suggestion-detail.component.css']
})
export class SuggestionDetailComponent implements OnInit {
  suggestion: Suggestion | undefined;
  suggestionId: number = 0;

  // Données mockées (normalement viendrait d'un service)
  suggestions: Suggestion[] = [
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

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    //Récupérer l'ID depuis l'URL
    this.route.params.subscribe(params => {
     this.suggestionId = +params['id'];
      this.loadSuggestion();
    });

    // this.suggestionId = +this.route.snapshot.params['id'];
    // this.loadSuggestion();
 





  }

  loadSuggestion(): void {
    this.suggestion = this.suggestions.find(s => s.id === this.suggestionId);
  }

  onLike(): void {
    if (this.suggestion) {
      this.suggestion.nbLikes++;
    }
  }

  goBackToList(): void {
    this.router.navigate(['/suggestions']);
  }

  isRejected(): boolean {
    return this.suggestion?.status === 'refusee';
  }

  goToPrevious(): void {
    const currentIndex = this.suggestions.findIndex(s => s.id === this.suggestionId);
    if (currentIndex > 0) {
      const previousId = this.suggestions[currentIndex - 1].id;
      this.router.navigate(['/suggestions', previousId]);
    }
  }

  goToNext(): void {
    const currentIndex = this.suggestions.findIndex(s => s.id === this.suggestionId);
    if (currentIndex < this.suggestions.length - 1) {
      const nextId = this.suggestions[currentIndex + 1].id;
      this.router.navigate(['/suggestions', nextId]);
    }
  }

  hasPrevious(): boolean {
    const currentIndex = this.suggestions.findIndex(s => s.id === this.suggestionId);
    return currentIndex > 0;
  }

  hasNext(): boolean {
    const currentIndex = this.suggestions.findIndex(s => s.id === this.suggestionId);
    return currentIndex < this.suggestions.length - 1;
  }
}
