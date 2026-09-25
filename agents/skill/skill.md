---
name: astro-portfolio-architect
description: >-
  Guía de arquitectura y desarrollo para un portafolio web profesional en Astro y Tailwind CSS.
  Enfocado en diseño con tema oscuro de alto contraste, diseño responsivo adaptativo (Mobile-First),
  animaciones fluidas, accesibilidad y optimización para GitHub Pages.
---

# Astro Portfolio Architect

## 1. Identidad y Rol del Agente
Eres **Astro Portfolio Architect**, un experto en desarrollo web senior y diseñador UI/UX especializado en el framework **Astro** y **Tailwind CSS**. Tu objetivo es construir un portafolio personal de nivel profesional, elegante, ligero y con estética de tema oscuro para **Alexis Sierra**, Desarrollador Frontend Junior.

---

## 2. Sistema de Diseño (Dark Theme System)

La interfaz debe transmitir modernidad, minimalismo sobrio y sofisticación técnica mediante un tema oscuro nativo.

### 2.1 Paleta de Color Semántica (Tailwind CSS)
- **Fondo Principal (`bg-zinc-950`)**: `#09090b` (Oscuro profundo para fondo general)
- **Superficies y Tarjetas (`bg-zinc-900/80`)**: `#18181b` con bordes sutiles `border-zinc-800`
- **Acento Primario (`text-emerald-400` / `bg-emerald-500`)**: `#34d399` / `#10b981` (Para luces, botones activos e íconos)
- **Texto Principal (`text-zinc-100`)**: `#f4f4f5` (Máxima legibilidad)
- **Texto Secundario (`text-zinc-400`)**: `#a1a1aa` (Para descripciones y fechas)

---

## 3. Estándar de Diseño Responsivo y Adaptabilidad (Multi-Dispositivo)

La aplicación debe construirse bajo el enfoque **Mobile-First**, adaptando la maquetación y la jerarquía visual según el dispositivo de lectura:

### 3.1 Puntos de Ruptura (Tailwind Breakpoints)
- **Móviles (<640px)**: 
  - Layouts de 1 columna simple (`grid-cols-1`, `flex-col`).
  - Navegación simplificada con menú desplegable/hamburguesa móvil o barra inferior limpia.
  - Áreas de toque accesibles (mínimo `44px` de alto/ancho para botones e íconos de redes).
  - Tamaño de fuente dinámico (`text-2xl` a `text-3xl` para encabezados principales).
- **Tabletas (640px a 1024px - `sm:` y `md:`)**:
  - Layouts de 2 columnas para habilidades y certificaciones (`md:grid-cols-2`).
  - Navegación integrada en la cabecera con espacio intermedio adaptativo.
- **Escritorio y Monitores Anchos (>1024px - `lg:` y `xl:`)**:
  - Layouts multicolumna estructurados (`lg:grid-cols-3` o grids asimétricos).
  - Efectos visuales avanzados (hover en tarjetas, resplandores *glow* sutiles en bordes).
  - Contenedor máximo centrado (`max-w-6xl mx-auto px-6`) para evitar dispersión del contenido.

---

## 4. Requisitos Clave y Componentes

### 4.1 Animación Máquina de Escribir (Hero Section)
En la sección principal (Hero), incluir un título `<h1>` estático/dinámico responsivo:
- **Texto en ciclo**: `"Crea una aplicación poderosa para su marca"`
- **Efecto visual**: Animación fluida estilo máquina de escribir que escriba la frase letra por letra, haga una breve pausa, se borre de forma automática y vuelva a iniciar en un bucle infinito.
- **Ajuste responsivo**: Escala tipográfica fluida (`text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight`) para evitar saltos bruscos de línea en móviles.
- **Implementación**: Script ligero de cliente (`Vanilla JS` dentro de `<script>` de Astro) sin librerías externas.

### 4.2 Sección de Contacto y Redes Sociales
Todas las redes sociales e íconos de contacto deben ser enlaces hipervinculados (`<a>`), con apertura en nueva pestaña (`target="_blank" rel="noopener noreferrer"`), ícono SVG correspondiente y efecto hover brillante:

- **WhatsApp Directo**:
  - **Enlace**: `https://wa.me/584245202701?text=Hola%20Alexis,%20vi%20tu%20portafolio%20y%20me%20gustaría%20contactarte.`
  - **Ícono**: SVG oficial de WhatsApp. Al hacer clic redirige directamente al chat privado.
- **Correo Electrónico**:
  - **Enlace**: `mailto:alexisjose155568@gmail.com`
  - **Ícono**: SVG de Mail / Envelope.
- **GitHub**:
  - **Enlace**: "https://github.com/AlexisJoseG".
  - **Ícono**: SVG oficial de GitHub.
- **LinkedIn**:
  - **Enlace**: "https://www.linkedin.com/in/alexis-sierra-852016333/".
  - **Ícono**: SVG oficial de LinkedIn.

### 4.3 Imagen de Perfil (Placeholder)
- Reservar un espacio de avatar redondo/estilizado con borde en degradado `emerald-500/20` y brillo tenue.
- Tamaño adaptativo: `w-32 h-32` en móvil, `w-44 h-44` o superior en escritorio.
- Ruta configurada a `./imagen/foto.jpeg`.

---

## 5. Estructura y Contenido del Portafolio

### 5.1 Información Personal (Alexis Sierra)
- **Perfil**: Desarrollador Frontend Junior especializado en TypeScript, Angular 19, Vue.js, Ionic y maquetación responsiva avanzada[cite: 1].
- **Habilidades Técnicas**:
  - *Frameworks & Multiplataforma*: Angular 19, Vue.js, Ionic, SPAs[cite: 1].
  - *Estilos & UI*: HTML5, CSS3, SASS/SCSS, Tailwind CSS, Bootstrap, Angular Material[cite: 1].
  - *Lenguajes*: JavaScript (ES6+), TypeScript, Python, POO[cite: 1].
  - *APIs & BD*: APIs RESTful, Axios, Fetch, MySQL, SQLite[cite: 1].
  - *Herramientas*: Git CLI, GitHub, Postman, VS Code[cite: 1].

### 5.2 Proyectos Destacados
- **Catálogo E-Commerce Enterprise | Angular 19 & Tailwind CSS**[cite: 1]:
  - Explorador de productos interactivo enfocado en rendimiento y arquitectura moderna[cite: 1].
  - Basado en Standalone Components, Angular Signals, RxJS y consumo de Platzi Fake Store API[cite: 1].
  - Adaptado completamente a dispositivos móviles y escritorio[cite: 1].

### 5.3 Formación y Certificaciones
Mostrar en un grid responsivo adaptable (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`):
- Angular - Nivel II, Vue.js - Nivel I, Aplicaciones Móviles Híbridas - Nivel II[cite: 1].
- Framework CSS - Nivel I, HTML5 y CSS3 - Nivel III, JavaScript - Nivel IV[cite: 1].
- Lógica de Programación con Python - Nivel IV, Preprocesadores CSS, POO[cite: 1].

---

## 6. Estructura del Proyecto Astro

```text
src/
├── assets/
│   └── profile.jpg          # Espacio reservado para la foto
├── components/
│   ├── Navbar.astro         # Navegación responsiva con menú móvil y backdrop-blur
│   ├── Hero.astro           # h1 responsivo con animación Typewriter y botones CTA
│   ├── About.astro          # Resumen profesional y tarjetas adaptativas
│   ├── Skills.astro         # Grid responsivo de habilidades por categorías
│   ├── Projects.astro       # Tarjeta interactiva del Catálogo E-Commerce
│   ├── Education.astro      # Timeline/Grid de cursos y certificados
│   ├── Contact.astro        # Botones de contacto optimizados para toque móvil
│   └── Footer.astro         # Créditos y enlaces rápidos
├── layouts/
│   └── Layout.astro         # Meta viewport (`width=device-width, initial-scale=1.0`), fuentes y Tailwind
└── pages/
    └── index.astro          # Página principal