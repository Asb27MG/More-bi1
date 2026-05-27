# More BI · Landing

Landing page one-page para **More BI** — software, datos e integraciones para empresas que necesitan escalar.

## Stack

- Vite + React 18 + TypeScript
- Tailwind CSS 3 (tema dark premium con violeta / azul / aqua)
- Animaciones con IntersectionObserver + transiciones CSS
- Fondo de partículas con Canvas (sin dependencias externas)

## Comandos

```bash
npm install
npm run dev      # arranca el dev server en http://localhost:5173
npm run build    # build de producción en /dist
npm run preview  # sirve el build
```

## Estructura

```
src/
  App.tsx                  # composición de la one-page
  main.tsx                 # bootstrap React
  index.css                # tokens, utilidades y estilos base
  hooks/useScrollReveal.ts # reveal animado al hacer scroll
  components/
    Navbar.tsx       Hero.tsx          ParticleField.tsx
    Services.tsx     Solutions.tsx     UseCases.tsx
    Approach.tsx     Stack.tsx         Process.tsx
    Portfolio.tsx    WhyMoreBI.tsx     FAQ.tsx
    CTA.tsx          Footer.tsx        SectionHeading.tsx
    Logo.tsx
```

## Secciones

1. Navbar sticky con blur
2. Hero con partículas y mesh
3. Servicios (bento grid)
4. Soluciones destacadas
5. Casos de uso por industria
6. Enfoque (3 pilares)
7. Stack tecnológico
8. Proceso de trabajo (timeline)
9. Portfolio / proyectos tipo
10. Por qué More BI
11. FAQ
12. CTA final
13. Footer

## Demo IA Integrada

El proyecto ahora incluye una demo de IA integrada directamente dentro del app React en la sección `#ia-demo`.

- Componente React en `src/components/IaDemo.tsx`
- Estilos del demo en `src/components/IaDemo.css`
- Backend Express + Groq en `backend/`
- Vite proxy configurado para `POST /api/chat` hacia `http://localhost:4000`

### Cómo correr la demo

1. Instalar dependencias del frontend:
```bash
npm install
```
2. Instalar dependencias del backend:
```bash
cd backend
npm install
```
3. Configurar `backend/.env` con `GROQ_API_KEY` y otros valores.
4. Iniciar el backend:
```bash
npm run backend:dev
```
5. Iniciar el frontend:
```bash
npm run dev
```
6. Abrir `http://localhost:5173` y hacer clic en el botón `Demo IA`.
