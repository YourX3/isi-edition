import {Directive, ElementRef, Input, SimpleChanges} from '@angular/core';
import { environment } from '../../environments/environment';

const DEFAULT_AVATAR_SRC = 'assets/images/default_avatar.jpg';
const DEFAULT_BOOK_SRC = 'assets/images/default_book.jpg';
const DEFAULT_PICTURE_SRC = 'assets/images/default_avatar.jpg';

@Directive({
  standalone: true,
  selector: '[img-src]',
})
export class ImageApiDirective {
  @Input('img-src') imgSrc: string | undefined = '';
  @Input() defaultImage?: 'avatar' | 'book' | 'picture' = 'avatar';

  constructor(private el: ElementRef) { this.updateImageSrc(); }

  ngOnChanges(changes: SimpleChanges) {
    this.updateImageSrc();
  }

  updateImageSrc(): void {
    if(this.imgSrc) {
      this.el.nativeElement.src = environment.API_URL + '/images/' + this.imgSrc;
      this.el.nativeElement.style.opacity = '1';
    } else {
      this.el.nativeElement.style.opacity = '0.5';
      switch(this.defaultImage) {
        case 'avatar':
          this.el.nativeElement.src = DEFAULT_AVATAR_SRC;
          break;
        case 'book':
          this.el.nativeElement.src = DEFAULT_BOOK_SRC;
          break;
        case 'picture':
          this.el.nativeElement.src = DEFAULT_PICTURE_SRC;
          break;
        default:
          this.el.nativeElement.src = DEFAULT_AVATAR_SRC;
      }
    }
  }
}