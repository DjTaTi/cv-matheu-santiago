
#### TRABAJO PRACTICO N° 1. CURRICULUM WEB - Matheu Santiago ####
     -------------------------------------------------------



# ESPECIFICACIONES

Este proyecto es un portafolio / Curriculum Vitae interactivo y completamente responsivo, diseñado y desarrollado para la materia **Programación 3** de la Tecnicatura Universitaria en Programación (TUP) de la **UTN Facultad Regional La Plata**.

## 🚀 Características Principales

El currículum fue programado utilizando de manera estricta y exclusiva tecnologías web nativas (**HTML5, CSS3, y Vanilla JavaScript**). Demuestra un profundo entendimiento sobre la manipulación del DOM y el diseño moderno sin depender de *frameworks* pesados (como React, Angular o Bootstrap) ni un Backend pre-estructurado.

*   **🌐 Soporte Bilingüe (Español / Inglés):** Incluye un sistema de traducciones dinámicas alimentado por un diccionario JSON interno usando atributos `data-i18n`. La página refleja el cambio de forma instantánea sin recargar, y guarda de forma persistente la configuración elegida a través de `localStorage`.
*   **🎨 Selector Interactivo de Temas (Theme Switcher):** Sistema de apariencia sustentado por arquitecturas de **Variables CSS (`:root`)**. El usuario puede elegir entre 3 estéticas: un *Modo Claro* (minimalista), un *Modo Oscuro* (profesional) y un *Modo Vibrante* (tipo Dribbble). Detecta por defecto la preferencia de color configurada en Windows / O.S. del cliente.
*   **📱 Diseño Responsivo (Responsive Design):** Perfecta resolución gráfica en distintos tamaños de pantalla (PC, Tablet, Teléfonos móviles) gracias a la combinación de `Flexbox`, `CSS Grid`, y *media queries*. Cuenta, además, con un menú de navegación estilo "Hamburguesa" para resoluciones estrechas, gestionado de manera personalizada por JS puro.
*   **🖼️ Galería Interactiva con Visor Modal:** Las tarjetas de la lista de repositorios reaccionan de manera vistosa al pasar el ratón (efectos de `transform` y `opacity`). Si el usuario cliquea la tarjeta de un proyecto (exceptuando en el link de Github), JavaScript detiene la propagación y dispara un visualizador (Lightbox Modal) estructurado con efecto borroso (*Glassmorphism*).
*   **✉️ Formulario "Headless" por AJAX:** El formulario de contacto intercepta el clásico evento *submit*, previniendo la recarga de navegación del navegador (usando `e.preventDefault()`). Utiliza la moderna `Fetch API` para empujar de manera asíncrona la información hacia un servicio externo gratuito como Formspree y muestra feedback de éxito mediante micro-animaciones programáticas.
*   **♿ Accesibilidad WEB y Estructura Semántica:** Se han implementado etiquetas de formato estrictas y atributos de tipo `aria-labels`, `aria-hidden` y de roles (ej. `role="banner"`) para volver a los elementos altamente digeribles a motores de lectura para personas con visión reducida.
*   **✨ Favicon Inteligente:** Un ícono dibujado programáticamente desde código vectorial escalable (SVG) e incorporado en las mismas etiqutas meta, eliminando solicitudes de carga extra.

## 🛠️ Tecnologías Aplicadas

*   **HTML5**
*   **CSS3**
*   **JavaScript (ES10/ES2022+ Asíncrono)**
*   **Recursos Externos:** *Devicon* (imágenes CDN de iconos técnicos) y *Formspree API* para emails.

## 📂 ¿Cómo visualizar el proyecto?

Por su naturaleza Front-end (Zero-Backend/Headless), **no es necesario iniciar ningún servidor, script de compilación ni utilizar NodeJS/NPM**.

1. Clona o extrae los archivos en un directorio local del ordenador.
2. Abre tu navegador web principal y haz doble clic sobre el archivo **`index.html`** residente en la raíz.
3. Modifica tus elecciones y preferencias desde la barra de accesos superiores (Idioma y Tema) e interactúa plenamente para probar la lógica.

---
> **Desarrollador:** Matheu Santiago 
> **Materia:** Programación 3 
> **Año académico:** 2026
