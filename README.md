# Ferrenergía 2020: propuesta visual

Propuesta de sitio web para Ferrenergía 2020 C.A. Solo frontend demostrativo: sin backend, base de datos, autenticación ni inventario.

**Stack:** Next.js (exportación estática), React, TypeScript, Tailwind CSS, Motion y Embla Carousel.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # genera /out
```

Para publicar bajo un subdirectorio (GitHub Pages) se compila con `NEXT_PUBLIC_BASE_PATH=/ferrenergia-2020`. El workflow de `.github/workflows/deploy.yml` lo hace en cada push a `main`.

## Pendiente de confirmar con el cliente

- Logo original (el actual es provisional) y fotografías de alta resolución. La imagen del hero es referencial.
- Precios, especificaciones técnicas y disponibilidad: no se muestran porque no están confirmados.
- Fotos y productos de maquinaria agrícola y otros equipos.
