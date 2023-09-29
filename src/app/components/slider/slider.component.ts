import { Component } from '@angular/core';
import Swiper from 'swiper';
import { MatDialog } from '@angular/material/dialog';
import { ReserveComponent } from '../../reserve/reserve.component';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {

  constructor(public _dialog: MatDialog,) {
  }
  
  OpenReserve() {
    const searchModal = this._dialog.open(ReserveComponent, {
      disableClose: true,
    });
    searchModal.beforeClosed();
  }

  items = [
    {
      subtitulo: "Vistos recientemente",
      libro: [

        {
          imagen: '../../../assets/img/img_1.jpg',
          nombre: 'name one',
          autor: 'author one',
        },
        {
          imagen: '../../../assets/img/img_2.jpg',
          nombre: 'name two',
          autor: 'athor two',
        },
        {
          imagen: '../../../assets/img/img_3.jpg',
          nombre: 'name two',
          autor: 'athor two',
        },
        {
          imagen: '../../../assets/img/img_4.jpg',
          nombre: 'name two',
          autor: 'athor two',
        },
        {
          imagen: '../../../assets/img/img_5.jpg',
          nombre: 'name two',
          autor: 'athor two',
        },
        {
          imagen: '../../../assets/img/img_5.jpg',
          nombre: 'name two',
          autor: 'athor two',
        },
        {
          imagen: '../../../assets/img/img_5.jpg',
          nombre: 'name two',
          autor: 'athor two',
        }

      ],
     
    },
    {
      subtitulo: "Nuevas adquisiciones",
      libro: [

        {
          imagen: '../../../assets/img/img_1.jpg',
          nombre: 'name one',
          autor: 'author one',
        },
        {
          imagen: '../../../assets/img/img_2.jpg',
          nombre: 'name two',
          autor: 'athor two',
        },
        {
          imagen: '../../../assets/img/img_3.jpg',
          nombre: 'name two',
          autor: 'athor two',
        },
        {
          imagen: '../../../assets/img/img_4.jpg',
          nombre: 'name two',
          autor: 'athor two',
        },
        {
          imagen: '../../../assets/img/img_5.jpg',
          nombre: 'name two',
          autor: 'athor two',
        },
        {
          imagen: '../../../assets/img/img_5.jpg',
          nombre: 'name two',
          autor: 'athor two',
        },
        {
          imagen: '../../../assets/img/img_5.jpg',
          nombre: 'name two',
          autor: 'athor two',
        }

      ],
     
    },
    {
      subtitulo: "Los más solicitados",
      libro: [

        {
          imagen: '../../../assets/img/img_1.jpg',
          nombre: 'name one',
          autor: 'author one',
        },
        {
          imagen: '../../../assets/img/img_2.jpg',
          nombre: 'name two',
          autor: 'athor two',
        },
        {
          imagen: '../../../assets/img/img_3.jpg',
          nombre: 'name two',
          autor: 'athor two',
        },
        {
          imagen: '../../../assets/img/img_4.jpg',
          nombre: 'name two',
          autor: 'athor two',
        },
        {
          imagen: '../../../assets/img/img_5.jpg',
          nombre: 'name two',
          autor: 'athor two',
        },
        {
          imagen: '../../../assets/img/img_5.jpg',
          nombre: 'name two',
          autor: 'athor two',
        },
        {
          imagen: '../../../assets/img/img_5.jpg',
          nombre: 'name two',
          autor: 'athor two',
        }

      ],
     
    }
    
  ];

  
  ngOnInit(): void {
    const mySwiper = new Swiper('.swiper-container', {
      
      initialSlide: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      effect: 'coverflow',
      coverflowEffect: {
        rotate: 0,
        stretch: 400,
        depth: 0,
        modifier: 1,
        slideShadows: false
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 4,
          spaceBetween: 40
        }
      }
    });
  } 

}
