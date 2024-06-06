import { Component, ElementRef, ViewChild } from '@angular/core';
import { BookListComponent } from '../../components/book-list/book-list.component';
import { Book, BookDto, CreateBookDto } from '../../model/book.dto';
import { BookApiService } from '../../api/book-api.service';
import { ToastService } from '../../services/toaster.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EditBookComponent } from '../../components/edit-book/edit-book.component';

@Component({
  selector: 'app-book-view',
  standalone: true,
  imports: [BookListComponent, MatButtonModule, MatIconModule, EditBookComponent],
  templateUrl: './book-view.component.html',
  styleUrl: './book-view.component.scss'
})
export class BookViewComponent {
  @ViewChild('list') bookList: ElementRef<HTMLDivElement> | undefined;

  books: Book[] = [];
  selectedBook: Book | undefined = undefined;

  constructor(private bookApiService: BookApiService, private toastService: ToastService) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(selectionId?: number): void {
    this.bookApiService.get().subscribe(books => {
      this.books = books;
      if(selectionId) {
        this.selectedBook = this.books.find(book => book.id === selectionId);
      } else {
        this.selectedBook = this.selectedBook ? this.books.find(book => book.id === this.selectedBook?.id) : undefined;
      }
    });
  }

  selectBook(book: Book): void {
    if(this.selectedBook && !this.selectedBook.id) {
      this.books = this.books.filter(a => a !== this.selectedBook);
    }
    this.selectedBook = book;
  }

  saveBook(bookDto: CreateBookDto): void {
    if(bookDto.id) {
      this.bookApiService.update(bookDto).subscribe(() => {
        this.loadBooks();
        this.toastService.addToast({message: 'Livre mise à jour', duration: 3000});
      });
    }
    else {
      this.bookApiService.create(bookDto).subscribe((bookDto: BookDto) => {
        this.loadBooks(bookDto.id);
        this.selectedBook = this.books.find(book => book.id === bookDto.id);
        this.toastService.addToast({message: 'Livre créé(e)', duration: 3000});
      });
    }
  }

  addBook(): void {
    const newBook = {title: 'Nouveau Livre', summary: '', imageSrc: ''};
    this.books.push(newBook);
    this.selectedBook = newBook;
    setTimeout(() => {
      if(this.bookList) {
        this.bookList.nativeElement.scrollTo(0, this.bookList.nativeElement.scrollHeight);
      }
    });
  }

  deleteBook(): void {
    if(!this.selectedBook) return;

    if(!this.selectedBook.id) {
      this.books = this.books.filter(book => book !== this.selectedBook);
      this.selectedBook = undefined;
      return;
    }

    this.bookApiService.delete(this.selectedBook.id).subscribe(() => {
      this.loadBooks();
      this.toastService.addToast({message: 'Livre supprimé(e)', duration: 3000});
    });
  }
}
