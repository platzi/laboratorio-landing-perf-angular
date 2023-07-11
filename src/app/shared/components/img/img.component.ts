import { AfterContentInit, Component, Input, OnInit } from '@angular/core';

interface Source {
  path: string;
  media: string;
}

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
})
export class ImgComponent implements AfterContentInit {
  // Recibe el path de la imagen a mostrar
  @Input() path = '';
  @Input() alt = '';
  sources: Source[] = [];
  constructor() {}

  ngAfterContentInit(): void {
    this.generateSizes();
  }

  /* Genera los tamaños de la imagen recibida y genera los enlaces para utilizar la imagen adecuada según el tamaño de la pantalla (media query) */
  generateSizes() {
    // se  transforma el path recibido para generar los diferentes paths de las imagenes
    const splitPath = this.path.split('/');
    const fullName = splitPath.pop();
    const path = splitPath.join('/');
    const splitName = fullName?.split('.') ?? [];
    const ext = splitName.pop();
    const name = splitName.pop();

    // diferentes sources dependiendo de los media query
    this.sources = [
      {
        path: `${path}/${name}-large.webp`,
        media: '(min-width: 2000px)',
      },
      {
        path: `${path}/${name}-medium.webp`,
        media: '(min-width: 640px)',
      },
      {
        path: `${path}/${name}-small.webp`,
        media: '(min-width: 200px)',
      },
      {
        path: `${path}/${name}-large.${ext}`,
        media: '(min-width: 2000px)',
      },
      {
        path: `${path}/${name}-medium.${ext}`,
        media: '(min-width: 640px)',
      },
      {
        path: `${path}/${name}-small.${ext}`,
        media: '(min-width: 200px)',
      },
    ];
  }
}
