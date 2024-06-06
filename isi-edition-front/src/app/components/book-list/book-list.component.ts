import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../model/book.dto';
import { UpperCasePipe } from '@angular/common';
import { ImageApiDirective } from '../../directives/img-api.directive';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [UpperCasePipe, ImageApiDirective],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {
  @Input() books: Book[] = [];
  @Input() selectedBook: Book | undefined = undefined;
  @Output() selectedBookChange: EventEmitter<Book> = new EventEmitter<Book>();

  selectBook(author: Book): void {
    this.selectedBookChange.emit(author);
  }
}
