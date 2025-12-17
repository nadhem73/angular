import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Suggestion } from '../../../models/suggestion';
import { SuggestionService } from '../../../core/services/suggestion.service';

@Component({
  selector: 'app-suggestion-detail',
  templateUrl: './suggestion-detail.component.html',
  styleUrls: ['./suggestion-detail.component.css']
})
export class SuggestionDetailComponent implements OnInit {
  suggestion: Suggestion | undefined;
  suggestionId: number = 0;
  suggestions: Suggestion[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private suggestionService: SuggestionService
  ) {}

  ngOnInit(): void {
    // Récupérer la liste des suggestions depuis le service
    this.suggestions = this.suggestionService.getSuggestionsList();
    
    // Récupérer l'ID depuis l'URL
    this.route.params.subscribe(params => {
      this.suggestionId = +params['id'];
      this.loadSuggestion();
    });
  }

  loadSuggestion(): void {
    // Filtrage par ID récupéré depuis l'URL
    this.suggestion = this.suggestionService.getSuggestionById(this.suggestionId);
  }

  onLike(): void {
    if (this.suggestion) {
      this.suggestionService.likeSuggestion(this.suggestion.id);
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
