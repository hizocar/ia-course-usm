# Clase 9 · Taller — Diseño de la Solución del Proyecto

<div class="usm-session-meta">
<span>📅 Miércoles 2 de septiembre de 2026</span>
<span>⏱️ 90 minutos</span>
<span class="usm-tag-gold">Unidad 2 · Toma de Decisiones y Automatización Inteligente</span>
<span class="usm-tag-red">🚀 Hito 3/7 · 10%</span>
</div>

!!! warning "Día de entregable"
    Hoy se entrega el **Hito 3 — Diseño de la solución con IA**. Esta clase es un taller de trabajo
    en equipo con retroalimentación de pares, no contenido nuevo: el objetivo es llegar a la versión
    final de la especificación de su solución y enviarla antes de las 23:59. En la próxima sesión
    ([Clase 10](clase10.md)) cada grupo defenderá esta especificación frente al curso.

## 🎯 Objetivos de la sesión

- Consolidar la especificación borrador de la Clase 8 (tecnología elegida, entrada/salida, flujo) en
  la versión final del Hito 3.
- Someter la especificación a una revisión de pares enfocada en **si la tecnología elegida es
  realmente la correcta** para el problema.
- Entregar el **Hito 3** cumpliendo formato, plazo y criterios de evaluación.
- Preparar la defensa del proyecto para la sesión "Derriba la idea" de la Clase 10.

*Resultado de aprendizaje asociado: **CTS2 · RDA 3.1** — Evalúa problemas complejos del ámbito
disciplinar, justificando los datos, variables o causas que lo determinan.*

---

## 🗓️ Agenda (90 min)

| Tiempo | Bloque |
|---|---|
| 0:00 – 0:10 | Checklist de entrega del Hito 3 y retroalimentación general del Hito 2 |
| 0:10 – 0:35 | Trabajo en equipo: consolidar la especificación final |
| 0:35 – 0:55 | Revisión de pares: "¿es la tecnología correcta?" (intercambio entre grupos) |
| 0:55 – 1:10 | Ajustes finales según la retroalimentación recibida |
| 1:10 – 1:20 | Revisión del checklist final y envío del Hito 3 |
| 1:20 – 1:30 | Instrucciones para la Clase 10: "Derriba la idea" |

---

## 📖 Contenidos

### 1. Checklist de entrega del Hito 3

Antes de empezar, revisen que su equipo tiene todo lo que pide el
[Hito 3 en la página del Proyecto](../proyecto.md#hito-3-diseno-de-la-solucion-con-ia):

- [ ] **Tecnología elegida** — ML predictivo, IA Generativa o ambos — con justificación de por qué
      esa y no la alternativa (árbol de decisión de la Clase 8).
- [ ] **Dato de entrada**: qué información usa la solución y de dónde sale.
- [ ] **Salida**: qué entrega exactamente (una predicción, una categoría, contenido generado, una
      recomendación).
- [ ] **Flujo** de cómo la solución se inserta en el proceso de negocio del Hito 2 (basta un dibujo
      a mano fotografiado con las 4 cajas: cliente/proceso → solución de IA → salida → acción).
- [ ] **Escalón analítico** (Clase 7): ¿la solución es descriptiva, predictiva o prescriptiva?
- [ ] Documento breve (máx. 2 páginas).

### 2. Retroalimentación general del Hito 2

Lo que más se repitió en las entregas del Hito 2 (ver [Notas](../notas.md)) y que conviene no
arrastrar al Hito 3:

- **Competidor o alternativa poco explícita.** Varios grupos describieron muy bien su propia
  solución, pero no nombraron contra qué compite (otra empresa, otra herramienta, o simplemente "el
  proceso manual actual"). Para el Hito 3, la pregunta equivalente es: **¿qué hace hoy la empresa
  sin esta solución?** — eso es el punto de comparación.
- **IA declarada como "central" sin decir qué haría distinto sin ella.** La mejor prueba de que la
  IA es central es el contrafactual: "si le quitamos la IA, la solución se reduce a X". Úsenlo
  también para justificar la tecnología en el Hito 3.

### 3. Revisión de pares: "¿es la tecnología correcta?"

Intercambien su especificación con otro grupo. El grupo revisor responde **tres preguntas**, por
escrito, en 10 minutos:

1. **¿Necesita realmente esa tecnología?** Si eligieron ML predictivo: ¿existen datos históricos
   suficientes para entrenarlo? Si eligieron IA Generativa: ¿la salida es realmente contenido
   nuevo, o bastaba con reglas/plantillas? (Clase 7: RPA vs. IA.)
2. **¿La entrada existe?** ¿El dato de entrada que describen lo tiene hoy la empresa, o es un
   supuesto?
3. **¿La salida cambia una decisión?** ¿Quién recibe la salida y qué hace distinto gracias a ella?
   Si nadie actúa distinto, la solución no crea valor (Clase 2).

### 4. Errores comunes a revisar antes de entregar

- Describir la **tecnología** ("usaremos un modelo de ML") sin describir la **salida** concreta.
- Elegir IA Generativa porque "está de moda" cuando el problema es de predicción, o ML predictivo
  cuando no hay datos históricos (revisar el árbol de decisión de la Clase 8).
- Un flujo donde la solución de IA "flota" sin conectarse a un proceso real del modelo de negocio
  del Hito 2.

---

## ✏️ Taller: consolidación y entrega del Hito 3

1. Reúnanse en su grupo y consoliden la especificación borrador de la Clase 8.
2. Intercambien con otro grupo y respondan las 3 preguntas de la sección 3.
3. Ajusten su especificación con lo recibido.
4. Revisen el checklist de la sección 1 completo.
5. **Envíen el Hito 3** por correo a **sebastian.azocarm@usm.cl**, con el asunto
   `Hito 3 – Nombre del grupo`, antes de las 23:59 de hoy.

---

## 📚 Para la próxima clase — "Derriba la idea"

La [Clase 10](clase10.md) (lunes 7 de septiembre) es una sesión presencial en la que **cada grupo
presenta en 4 minutos** lo que lleva del proyecto (problema, modelo de negocio y diseño de la
solución — Hitos 1 a 3) y **el resto del curso intenta derrumbar la idea**. Para prepararla:

- Preparen un pitch de **máximo 4 minutos** (con o sin láminas; máximo 3 láminas si las usan).
- Anticipen las **dos objeciones más duras** que podrían recibir y tengan lista una respuesta.
- Lean las reglas de la dinámica en la página de la Clase 10 — todos los grupos participan
  atacando, no solo presentando.
