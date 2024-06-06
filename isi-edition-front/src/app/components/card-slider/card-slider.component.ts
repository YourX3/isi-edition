import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-card-slider',
  standalone: true,
  imports: [],
  templateUrl: './card-slider.component.html',
  styleUrl: './card-slider.component.scss'
})
export class CardSliderComponent {
  left: number = 0;
  acceleration: number = 0;
  sliding = false;
  mouseStart: number = 0;
  slideStartLeft: number = 0;
  lastMouseX = 0;
  isBrowser:boolean;

  constructor(@Inject(DOCUMENT) private document: Document, @Inject(PLATFORM_ID) private platformId: any) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit(): void {
    this.document.addEventListener('mousemove', (event) => {
      if (this.sliding) {
        this.left = this.slideStartLeft + event.clientX - this.mouseStart;
        if(this.left > 100) {
          this.left = 100;
        }
        this.acceleration += (event.clientX - this.lastMouseX) * 0.05;
        this.lastMouseX = event.clientX;
      }
    });

    this.document.addEventListener('mouseup', (event) => {
      this.clickEnd(event);
    });

    if(this.isBrowser) {
      console.log('Browser');
      window.requestAnimationFrame((timestamps) => this.slideUpdate(timestamps));
    }
  }

  clickStart(event: MouseEvent) {
    this.sliding = true;
    this.mouseStart = event.clientX;
    this.slideStartLeft = this.left;
    this.lastMouseX = event.clientX;
  }

  clickEnd(event: MouseEvent) {
    this.sliding = false;
  }

  slideUpdate(timestamps: number): void {
    this.acceleration *= 0.95;
    if(this.left > 100) {
      this.acceleration -= 0.1 + 0.002 * this.left;
    }
    if(!this.sliding) {
      this.left += this.acceleration - 0.3;
    }
    window.requestAnimationFrame((timestamps) => this.slideUpdate(timestamps));
  }
}
