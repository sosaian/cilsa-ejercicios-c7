# CILSA | Bootcamp Fullstack | Trabajo Grupal #1
## Información del proyecto

Este fue el primer proyecto grupal del curso, donde pudimos poner en práctica los conocimientos que aprendimos así como también los que ya teníamos previamente, en un grupo donde pudimos compartir ideas para encontrar una propuesta con la que cumplimos los requerimientos del proyecto así como también 

## Miembros del grupo

* Gabriel Abalde
* Antonella Almeida
* Paola Fraticola
* Ian Sosa

<hr>

<details>
  <summary>Requerimientos del proyecto</summary>

### Descripción del proyecto

Desarrollar un sitio web responsivo para una tienda online que permita a los usuarios explorar los productos desde diferentes dispositivos, como computadoras de escritorio, tablets y celulares (3 resoluciones).

### Características del Sitio Web

#### Frontend

* Diseño responsivo utilizando Bootstrap para garantizar una experiencia de usuario consistente en diferentes dispositivos y tamaños de pantalla.

* Página principal que muestra los productos destacados y las promociones actuales de la tienda.

* Páginas de categorías que permiten a los usuarios explorar productos por categorías específicas (definan máximo 2 categorías)

* Página de detalles del producto que muestra información detallada sobre un producto seleccionado (pueden trabajar con un máximo de 3 productos por categoría).

#### Git

 Utilización de Git para el control de versiones del código fuente del proyecto.

* Implementación de ramas para trabajar en diferentes características o correcciones de forma aislada.

* Uso de commits descriptivos y mensajes claros para documentar los cambios realizados.

#### Entrega del proyecto

* Desarrollo del sitio web completo, incluyendo frontend responsivo y optimizado para distintos dispositivos y orientaciones.

* Documentación del código que explique la estructura del proyecto, las decisiones de diseño y las funcionalidades implementadas.

* Implementación de Git para el control de versiones del código y la colaboración entre los miembros del equipo.
</details>

## Estructura del proyecto

La estructura general del proyecto por el que optamos ir consiste en 1 solo archivo HTML que se actualiza de manera **dinámica** mediante la lógica armada con Javascript y JQuery. También optamos por tener de manera local bootstrap para optimizar la carga del mismo gracias al uso del formato minificado de esa librería. La inclusión de JQuery es exclusivamente por la rapidez con la que nos permite traer y reutilizar componentes usados en proyectos anteriores, haciendo que a futuro pueda ser una dependencia que podamos eliminar para optimizar aun más este proyecto.

## Diseño del proyecto

En cuanto al diseño del proyecto, partimos de un diseño sencillo de branding como las imágenes que pueden verse debajo

![Branding](https://github.com/user-attachments/assets/13ffbcb5-b759-4d4d-bc89-8a8813889ea1)

![Imagotipo](https://github.com/user-attachments/assets/04c685a9-ebd0-45b3-bd8d-ee4d700b4dbf)

## Funcionalidades implementadas

Entre las funcionalidades que implementamos para este proyecto, podemos destacar la forma **dinámica** en la que cada página se renderiza en este proyecto (como si fuese un ```SPA```) a través del uso de distintos módulos javascript para exportar/importar funciones y manipular el DOM haciendo uso de ```innerHTML```.

Entre las otras funcionalidades implementadas, podemos listarlas (no exhaustivamente) debajo:

* Responsive design; desktop-first (Visualización correcta en desktop, tablet y mobile)
* AJAX / ASYNC JSON de manera local para la carga de los productos (fácilmente migrable a una API)
* Tema Oscuro; activable desde la barra de navegación.