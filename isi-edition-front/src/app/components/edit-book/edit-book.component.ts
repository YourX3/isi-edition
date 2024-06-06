import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Book, CreateBookDto } from '../../model/book.dto';
import { ImageInputComponent } from '../image-input/image-input.component';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { AuthorInputComponent } from '../author-input/author-input.component';
import { Author } from '../../model/author.dto';

@Component({
  selector: 'app-edit-book',
  standalone: true,
  imports: [ImageInputComponent, FormsModule, ReactiveFormsModule, MatFormField, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.scss'
})
export class EditBookComponent {
  @Input() book: Book | undefined = undefined;
  @Output() save: EventEmitter<CreateBookDto> = new EventEmitter<CreateBookDto>();

  formGroup: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    summary: new FormControl('', Validators.required)
  });

  imgSrc? = '';
  selectedAuthor: Author | undefined = undefined;

  constructor(public dialog: MatDialog) {}

  ngOnChanges(): void {
    if(this.book) {
      this.imgSrc = this.book.imageSrc;
      this.formGroup.controls['title'].setValue(this.book.title);
      this.formGroup.controls['summary'].setValue(this.book.summary);
      this.selectedAuthor = this.book.author;
    }
    else {
      this.imgSrc = '';
      this.formGroup.controls['title'].setValue('');
      this.formGroup.controls['summary'].setValue('');
    }
  }

  saveBook(): void {
    if(this.formGroup.valid && this.selectedAuthor?.id) {
      this.save.emit({id: this.book?.id, title: this.formGroup.controls['title'].getRawValue(), 
        summary: this.formGroup.controls['summary'].getRawValue(), imageSrc: this.imgSrc, authorId: this.selectedAuthor.id});
    }
  }

  selectAuthor(): void {
    this.dialog.open(AuthorInputComponent, {
      height: '400px',
      width: '600px',
    }).afterClosed().subscribe((author: Author) => {
      this.selectedAuthor = author;
    });
  }
}
