import { Component } from '@angular/core';
import { HomeTitleComponent } from '../../components/home-title/home-title.component';
import { CardSliderComponent } from '../../components/card-slider/card-slider.component';
import { AuthorCardComponent } from '../../components/author-card/author-card.component';
import { Author } from '../../model/author.dto';
import { AuthorApiService } from '../../api/author-api.service';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [HomeTitleComponent, CardSliderComponent, AuthorCardComponent],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.scss'
})
export class HomeViewComponent {
  authors: Author[] = [];

  constructor(private authorApiService: AuthorApiService) {
  }

  ngOnInit(): void {
    this.authorApiService.get().subscribe(authors => {
      this.authors = authors;
    });
  }
}
