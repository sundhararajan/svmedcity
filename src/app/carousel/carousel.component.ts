import { AfterViewInit, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare var bootstrap: any;

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit, AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

 ngOnInit(): void {
  
 }
 
   ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const carouselElement = document.getElementById('carouselExample');
      const carousel = new bootstrap.Carousel(carouselElement, {
        interval: 3000,
        pause: 'hover',
        wrap: true,
        ride: 'carousel'
      });
    }
  }

}


