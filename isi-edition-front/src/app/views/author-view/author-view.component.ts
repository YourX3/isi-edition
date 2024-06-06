import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthorListComponent } from '../../components/author-list/author-list.component';
import { Author, AuthorDto, CreateAuthorDto } from '../../model/author.dto';
import { AuthorApiService } from '../../api/author-api.service';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { EditAuthorComponent } from '../../components/edit-author/edit-author.component';
import { ToastService } from '../../services/toaster.service';

@Component({
  selector: 'app-author-view',
  standalone: true,
  imports: [AuthorListComponent, MatButtonModule, MatIconModule, EditAuthorComponent],
  templateUrl: './author-view.component.html',
  styleUrl: './author-view.component.scss'
})
export class AuthorViewComponent {
  @ViewChild('list') authorList: ElementRef<HTMLDivElement> | undefined;

  authors: Author[] = [];
  selectedAuthor: Author | undefined = undefined;

  constructor(private authorApiService: AuthorApiService, private toastService: ToastService) {}

  ngOnInit(): void {
    this.loadAuthors();
  }

  loadAuthors(selectionId?: number): void {
    this.authorApiService.get().subscribe(authors => {
      this.authors = authors;
      if(selectionId) {
        this.selectedAuthor = this.authors.find(author => author.id === selectionId);
      } else {
        this.selectedAuthor = this.selectedAuthor ? this.authors.find(author => author.id === this.selectedAuthor?.id) : undefined;
      }
    });
  }

  selectAuthor(author: Author): void {
    if(this.selectedAuthor && !this.selectedAuthor.id) {
      this.authors = this.authors.filter(a => a !== this.selectedAuthor);
    }
    this.selectedAuthor = author;
  }

  saveAuthor(authorDto: CreateAuthorDto): void {
    if(authorDto.id) {
      this.authorApiService.update(authorDto).subscribe(() => {
        this.loadAuthors();
        this.toastService.addToast({message: 'Auteur(rice) mise à jour', duration: 3000});
      });
    }
    else {
      this.authorApiService.create(authorDto).subscribe((authorDto: AuthorDto) => {
        this.loadAuthors(authorDto.id);
        this.selectedAuthor = this.authors.find(author => author.id === authorDto.id);
        this.toastService.addToast({message: 'Auteur.rice créé(e)', duration: 3000});
      });
    }
  }

  addAuthor(): void {
    const newAuthor = {firstName: 'Nouvel Auteur', lastName: '', imageSrc: '', contracts: []};
    this.authors.push(newAuthor);
    this.selectedAuthor = newAuthor;
    setTimeout(() => {
      if(this.authorList) {
        this.authorList.nativeElement.scrollTo(0, this.authorList.nativeElement.scrollHeight);
      }
    });
  }

  deleteAuthor(): void {
    if(!this.selectedAuthor) return;

    if(!this.selectedAuthor.id) {
      this.authors = this.authors.filter(author => author !== this.selectedAuthor);
      this.selectedAuthor = undefined;
      return;
    }

    this.authorApiService.delete(this.selectedAuthor.id).subscribe(() => {
      this.loadAuthors();
      this.toastService.addToast({message: 'Auteur(rice) supprimé(e)', duration: 3000});
    });
  }
}
