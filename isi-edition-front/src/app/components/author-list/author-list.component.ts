import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Author } from '../../model/author.dto';
import { UpperCasePipe } from '@angular/common';
import { ImageApiDirective } from '../../directives/img-api.directive';

@Component({
  selector: 'app-author-list',
  standalone: true,
  imports: [UpperCasePipe, ImageApiDirective],
  templateUrl: './author-list.component.html',
  styleUrl: './author-list.component.scss'
})
export class AuthorListComponent {
  @Input() authors: Author[] = [];
  @Input() selectedAuthor: Author | undefined = undefined;
  @Output() selectedAuthorChange: EventEmitter<Author> = new EventEmitter<Author>();

  selectAuthor(author: Author): void {
    this.selectedAuthorChange.emit(author);
  }
}
