# ICS64225 — Inteligencia Artificial y Estrategia Empresarial

Sitio del curso (USM), publicado con MkDocs Material en GitHub Pages:
https://hizocar.github.io/ia-course-usm/

## Desarrollo local

```bash
poetry install
poetry run mkdocs serve
```

## Build

```bash
poetry run mkdocs build --site-dir public
```

El despliegue a GitHub Pages se realiza automáticamente vía GitHub Actions (`.github/workflows/documentation.yml`) en cada push a la rama principal.
