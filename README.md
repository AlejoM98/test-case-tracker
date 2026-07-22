<div align="center">
  <h1>Test Case Tracker</h1>
  <p>Gestor simple de casos de prueba — creado con Vue 3, Pinia y Tailwind CSS</p>

  ![Vue](https://img.shields.io/badge/Vue-3-4FC08D?style=flat-square&logo=vuedotjs&logoColor=white)
  ![Pinia](https://img.shields.io/badge/Pinia-State_Management-FFD859?style=flat-square&logo=pinia&logoColor=black)
  ![Tailwind](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
  ![Vite](https://img.shields.io/badge/Vite-B73BFE?style=flat-square&logo=vite&logoColor=white)

  ### [🔗 Ver demo en vivo](https://test-case-tracker-one.vercel.app/)
</div>

---

## Descripción

Aplicación pequeña para gestionar casos de prueba: crear, marcar como **Pasó** / **Falló** / **Pendiente**, y ver un resumen en tiempo real. Nace de mi experiencia como analista de QA en banca — es la herramienta que yo mismo usaría para llevar un registro rápido de pruebas manuales.

Construido como proyecto de portafolio para practicar el stack moderno de frontend (Vue 3 + Composition API + Pinia + Tailwind v4).

---

## Capturas de pantalla

> _Se agregan después del deploy_

---

## Funcionalidades

- ✅ Crear casos de prueba con título y descripción
- ✅ Cambiar estado individual (Pendiente / Pasó / Falló)
- ✅ Eliminar casos de prueba
- ✅ Contadores en tiempo real (total, pendientes, pasados, fallados)
- ✅ Persistencia local — los datos no se pierden al recargar la página (`localStorage`)

---

## Stack tecnológico

| Tecnología | Uso |
|------------|-----|
| **Vue 3** (Composition API) | Framework principal |
| **Pinia** | Gestión de estado global |
| **Tailwind CSS v4** | Estilos |
| **Vite** | Bundler y servidor de desarrollo |

---

## Instalación local

```bash
git clone https://github.com/AlejoM98/test-case-tracker.git
cd test-case-tracker
npm install
npm run dev
```

Abre `http://localhost:5173`

---

## Estructura del proyecto

```
test-case-tracker/
├── src/
│   ├── components/
│   │   ├── TestCaseForm.vue    # Formulario para agregar casos
│   │   └── TestCaseList.vue    # Lista con tarjetas y acciones
│   ├── stores/
│   │   └── testCases.js        # Store de Pinia (estado + localStorage)
│   ├── App.vue                 # Vista principal
│   └── main.js
└── README.md
```

---

## Autor

**Ives Alejandro Orozco Mansilla**
Ingeniero en Sistemas Informáticos — QA / Desarrollo Web

[![GitHub](https://img.shields.io/badge/GitHub-AlejoM98-181717?style=flat-square&logo=github)](https://github.com/AlejoM98)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Ives_Alejandro-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ives-alejandro)