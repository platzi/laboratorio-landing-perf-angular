# Landing - Angular

Este en proyecto está la landing de un producto, el cual tiene toda la información necesaria de lanzamiento.

- [Instalación](#instalación)
- [Configuración](#configuración)
- [Funcionalidades](#funcionalidades)
- [Como enviar tu solución](#como-enviar-tu-solución)
- [Licencia](#licencia)
- [Credits](#credits)

## Instalación

1. Hacer fork de este proyecto en tu espacio personal
1. Clonar el repositorio desde tu espacio personal en tu computadora
1. Instalar dependencias, con el comando `npm install`
1. Comprobar ambiente, con el comando `ng serve`

## Configuración

El proyecto ya viene con la configuración por defecto que maneja Angular, así:

```
.
├── README.md
├── angular.json
├── dist
├── karma.conf.js
├── node_modules
├── package-lock.json
├── package.json
├── src
│   ├── app
│   ├── assets
│   ├── environments
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── scss
│   ├── styles.scss
│   └── test.ts
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json
```

El sitio  usa sass para los estilos donde se llama el archivo principal `src/app/styles.scss`,  y todas las imágenes  en `src/assets/images/*`.

```
.
├── app
│   ├── app-routing.module.ts
│   ├── app.component.html
│   ├── app.component.ts
│   ├── app.module.ts
│   ├── components
│   └── pages
├── assets
│   └── images
├── environments
│   ├── environment.prod.ts
│   └── environment.ts
├── favicon.ico
├── index.html
├── main.ts
├── polyfills.ts
├── scss
│   ├── animate.scss
│   ├── base.scss
│   ├── layout.scss
│   ├── typography.scss
│   └── vars.scss
├── styles.scss
└── test.ts
```

La aplicación ya tiene componentes para cada sección de la siguiente manera:

```
.
├── app-routing.module.ts
├── app.component.html
├── app.component.ts
├── app.module.ts
├── components
│   ├── contact
│   ├── customers
│   ├── features
│   ├── hero
│   ├── integrations
│   ├── navbar
│   ├── snippets
│   ├── stats
│   └── summary
└── pages
    └── home
```

### Scripts

- El comando `npm run build` corre webpack en modo producción y deja los archivos de producción en la carpeta `/dis/app`.
- El comando `npm run analyze` genera el reporte de Webpack Bundle Analyze para examinar el bundle size de JS.
- El comando `npm run start` genera un servidor en modo desarrollo el cual tiene livereload.
- El comando `npm run start:prod` inicia un servidor usando `http-server` con la carpeta de `/dist/...` que es la carpeta en donde quedan los archivos para producción, recuerda antes de correr este comando asegurarte de correr `npm run build`.
- El comando `npm run lhci` corre [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci) para verificar los puntajes esperados de Lighthouse.
- El comando `npm run lhci:ssr` corre [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci) para verificar los puntajes esperados de Lighthouse usando SSR.

## Funcionalidades

En este momento tenemos que el sitio tiene un bajo puntaje según el reporte de Lighthouse lo cual hace que los usuarios se vayan del sitio, es decir hay un porcentaje de rebote muy alto, ya que el sitio se demora en cargar y no tiene buenas prácticas en SEO para que aparezca en motores de búsqueda, lo cual está afectando el negocio y el dinero invertido en campañas para atraer usuarios.

### 1. Remover de MomentJS

Corriendo el comando `npm run analyze` nos fijamos que Moment JS es una librería que pesa demasiado

![webpack bundle](https://i.imgur.com/yBKn7c7.png)

Y no solo eso cuando se corre el comando `npm run build` nos arroja alertas en donde nos muestra que la app esta excediendo los pesos de JS recomendados.

![webpack bundle](https://i.imgur.com/a5vCILu.png)

Realmente solo se usa para calcular hace cuanto tiempo se hizo un review desde el componente de `<app-customers></app-customers>`

![app-customers](https://i.imgur.com/e69TXpp.png)

Por ende se debe remover esta librería y encontrar una alternativa que sea mucho más ligera y nos permita la misma funcionalidad.

### 2. Puntajes en Lighthouse

El objetivo es implementar los cambios necesarios para que el puntaje de Lighthouse cumpla con los siguientes puntajes minimos:

- Performance: Mínimo 50% o más.
- Accessibility: Mínimo 80% o más.
- Best Practices: Mínimo 90% o más.
- SEO: Mínimo 80% o más.

Por ende en el repositorio se ha incluido el comando `npm run lhci` que dada la configuración en el archivo `lighthouserc.js` comprueba los puntajes.

Cuando corras el comando `npm run lhci` por primera vez se verá así:

![failed](https://i.imgur.com/QvvhuEK.png)

Además puedes ver un link al final para ver el reporte en modo HTML:

![report](https://i.imgur.com/ZIuV78Z.png)

Se espera se hagan los ajustes necesarios para que el reporte de Lighthouse cumpla con los puntajes esperados.

> Si usas WSL2 o Linux puede que tengas que especificar en el path en donde está instalado Chrome en el archivo `lighthouserc.js` y `lighthouserc-ssr.js` puedes configurar esa ubicación.

```js
module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run start",
      url: ["http://localhost:8080"],
      numberOfRuns: 3,
      // chromePath: "/bin/google-chrome", 👈
    },
    ...
  },
};

```

### 3. Implementar SSR

Con el mismo objetivo de seguir mejorando el rendimiento y el SEO del sitio, se debe incorporar SSR en ese sitio con [Angular Universal](https://angular.io/guide/universal)  y lograr mejores puntajes en el reporte de Lighthouse.

Para este caso se creó un script específico que es `npm run lhci:ssr` el cual corre el reporte de Lighthouse pero usando SSR.

Se espera que al implementar SSR los puntajes esperados aumenten así:

- Performance: Mínimo 55% o más.
- Accessibility: Mínimo 80% o más.
- Best Practices: Mínimo 90% o más.
- SEO: Mínimo 90% o más.

### 4. Animaciones en secciones

- Se espera que el cuándo se haga clics en la sección se haga scroll con una suave animación de scroll.
- Se espera que cuando se haga scroll la barra de navegación quede fija.
- Se espera que cuando el usuario llegue a las secciones de features, customers y stats haciendo scroll se ejecute una animación usando fadeInUp y pasando de opacity de 0 a 1.

### 5. Deployment (Bonus)

Desplegar la aplicación en alguno de los siguientes servicios: GitHub Pages, Netlify, Vercel, Firebase Hosting.

## Como enviar tu solución

Debes de hacer un "Fork" de este proyecto, revolver los problemas y crear un Pull Request hacia este repositorio.

## Licencia

Este proyecto se lanza bajo la licencia [MIT](https://opensource.org/licenses/MIT).

## Credits

- [Freebie: Oasis](https://tympanus.net/codrops/2018/04/20/freebie-oasis-jekyll-website-template/)
