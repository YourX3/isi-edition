import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ImageApiDirective } from '../../directives/img-api.directive';
import { MatButtonModule } from '@angular/material/button';
import { Subscription } from 'rxjs';
import { HttpEventType } from '@angular/common/http';
import { ImageTransferService } from '../../api/image-transfer.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-image-input',
  standalone: true,
  imports: [ImageApiDirective, MatButtonModule, MatProgressBarModule],
  templateUrl: './image-input.component.html',
  styleUrl: './image-input.component.scss'
})
export class ImageInputComponent {
  @ViewChild('input') fileInput!: ElementRef<HTMLInputElement>;

  @Input() selectedImageSrc?: string = '';
  @Output() selectedImageSrcChange = new EventEmitter<string>();

  @Input() type?: 'avatar' | 'book' | 'picture' = 'avatar';

  upload: Subscription | null = null;
  uploadProgress = 0;
  uploading = false;

  constructor(private imageTransferService: ImageTransferService) {}

  imageSelection(): void {
    this.fileInput.nativeElement.click();
  }

  imageSelected(event: Event): void {
    if(!this.fileInput.nativeElement.files || this.fileInput.nativeElement.files.length === 0) {
      this.selectedImageSrc = "";
    }
    else {
      const file = this.fileInput.nativeElement.files[0];
      this.uploading = true;
      this.uploadProgress = 0;
      this.upload = this.imageTransferService.transfer(file).subscribe(event => {
        if (event.type == HttpEventType.UploadProgress) {
          this.uploadProgress = Math.round(100 * (event.loaded / event.total));
        }
        else if (event.type == HttpEventType.Response) {
          this.selectedImageSrcChange.emit(event.body.imageSrc);
          this.uploading = false;
        }
      });
    }
  }
}
