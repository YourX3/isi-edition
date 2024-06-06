import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { ImageInputComponent } from '../image-input/image-input.component';
import { Author, CreateAuthorDto } from '../../model/author.dto';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-edit-author',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ImageInputComponent, MatButtonModule, ReactiveFormsModule],
  templateUrl: './edit-author.component.html',
  styleUrl: './edit-author.component.scss'
})
export class EditAuthorComponent {
  @Input() author: Author | undefined = undefined;
  @Output() save: EventEmitter<CreateAuthorDto> = new EventEmitter<CreateAuthorDto>();

  formGroup: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required)
  });;

  imgSrc = '';

  ngOnChanges(): void {
    if(this.author) {
      this.imgSrc = this.author.imageSrc;
      this.formGroup.controls['firstName'].setValue(this.author.firstName);
      this.formGroup.controls['lastName'].setValue(this.author.lastName);
    }
    else {
      this.imgSrc = '';
      this.formGroup.controls['firstName'].setValue('');
      this.formGroup.controls['lastName'].setValue('');
    }
  }

  saveAuthor(): void {
    if(this.formGroup.valid) {
      this.save.emit({id: this.author?.id, firstName: this.formGroup.controls['firstName'].getRawValue(), 
        lastName: this.formGroup.controls['lastName'].getRawValue(), imageSrc: this.imgSrc});
    }
  }
}
