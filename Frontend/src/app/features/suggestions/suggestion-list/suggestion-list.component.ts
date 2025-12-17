import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Suggestion } from '../../../models/suggestion';
import { SuggestionService } from '../../../core/services/suggestion.service';

@Component({
  selector: 'app-suggestion-list',
  templateUrl: './suggestion-list.component.html',
  styleUrls: ['./suggestion-list.component.css']
})
export class SuggestionListComponent implements OnInit {
  searchTerm: string = '';
  filteredSuggestions: Suggestion[] = [];
  suggestions: Suggestion[] = [];

  constructor(
    private router: Router,
    private suggestionService: SuggestionService
  ) {}

  ngOnInit() {
    // Récupérer la liste des suggestions depuis le service
    this.suggestions = this.suggestionService.getSuggestionsList();
    this.filteredSuggestions = [...this.suggestions];
  }

  onLike(suggestion: Suggestion): void {
    this.suggestionService.likeSuggestion(suggestion.id);
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

  onViewDetails(id: number): void {
    this.router.navigate(['/suggestions', id]);
  }

  onAddSuggestion(): void {
    this.router.navigate(['/suggestions/add']);
  }
}
