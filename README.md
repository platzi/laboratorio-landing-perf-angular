# Landing - Angular

Este en proyecto está la landing de un producto, el cual tiene toda la información necesaria de lanzamiento.

- [Instalación](#instalación)
- [Configuración](#configuración)
- [El Reto](#el-reto)
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
- El comando `npm run start` genera un servidor en modo desarrollo el cual tiene livereload.
- El comando `npm run start:prod` inicia un servidor usando `http-server` con la carpeta de `/dist/...` que es la carpeta en donde quedan los archivos para producción, recuerda antes de correr este comando asegurarte de correr `npm run build`.
- El comando `npm run lhci` corre [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci) para verificar los puntajes esperados de Lighthouse.

## El reto

En este momento tenemos que el sitio tiene un bajo puntaje según el reporte de Lighthouse lo cual hace que los usuarios se vayan del sitio, es decir hay un porcentaje de rebote muy alto, ya que el sitio se demora en cargar y no tiene buenas prácticas en SEO para que aparezca en motores de búsqueda, lo cual está afectando el negocio y el dinero invertido en campañas para atraer usuarios.

El objetivo es implementar los cambios necesario para que el puntaje de Lighthouse cumpla con los siguientes puntajes minimos:

- Performance: Mínimo 75% o más.
- Accessibility: Mínimo 80% o más.
- Best Practices: Mínimo 90% o más.
- SEO: Mínimo 90% o más.

Por ende en el repositorio se ha incluido el comando `npm run lhci` que dada la configuración en el archivo `lighthouserc.js` comprueba los puntajes.

Cuando corras el comando `npm run lhci` por primera vez se verá así:

![failed](https://i.imgur.com/VE4xYG3.png)

Además puedes ver un link al final para ver el reporte en modo HTML:

![report](https://i.imgur.com/hHfGWE6.png)

Se espera se hagan los ajustes necesarios para que el reporte de Lighthouse cumpla con los puntajes esperados.

## Como enviar tu solución

Debes de hacer un "Fork" de este proyecto, revolver los problemas y crear un Pull Request hacia este repositorio.

## Licencia

Este proyecto se lanza bajo la licencia [MIT](https://opensource.org/licenses/MIT).

## Credits

- [Freebie: Oasis](https://tympanus.net/codrops/2018/04/20/freebie-oasis-jekyll-website-template/)
