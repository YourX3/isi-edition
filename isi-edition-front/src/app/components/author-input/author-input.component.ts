import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthorApiService } from '../../api/author-api.service';
import { Author } from '../../model/author.dto';
import { AuthorListComponent } from '../author-list/author-list.component';

@Component({
  selector: 'app-author-input',
  standalone: true,
  imports: [MatDialogModule, 
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    AuthorListComponent
  ],
  templateUrl: './author-input.component.html',
  styleUrl: './author-input.component.scss'
})
export class AuthorInputComponent {
  authors: Author[] = [];
  selectedAuthor: Author | undefined = undefined;

  constructor(
    public dialogRef: MatDialogRef<AuthorInputComponent>,
    private authorApiService: AuthorApiService
  ) {}

  ngOnInit(): void {
    this.authorApiService.get().subscribe(authors => {
      this.authors = authors;
      this.selectedAuthor = undefined;
    });
  }

  cancelClick(): void {
    this.dialogRef.close();
  }
}
