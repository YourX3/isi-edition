import { Component, Input } from '@angular/core';
import { Author } from '../../model/author.dto';
import { ImageApiDirective } from '../../directives/img-api.directive';

@Component({
  selector: 'app-author-card',
  standalone: true,
  imports: [ImageApiDirective],
  templateUrl: './author-card.component.html',
  styleUrl: './author-card.component.scss'
})
export class AuthorCardComponent {
  @Input() author!: Author;
}
