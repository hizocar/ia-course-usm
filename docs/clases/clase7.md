# Clase 7 · IA Predictiva, Prescriptiva y Descriptiva + Optimización de Procesos con IA

<div class="usm-session-meta">
<span>📅 Miércoles 26 de agosto de 2026</span>
<span>⏱️ 90 minutos</span>
<span class="usm-tag-gold">Unidad 2 · Toma de Decisiones y Automatización Inteligente</span>
</div>

!!! note "Sesión formativa (sin hito) — dos temas en una clase"
    Esta clase combina dos sesiones que originalmente eran independientes, para compensar la clase
    perdida el 19 de agosto sin atrasar el **Hito 3**, que se mantiene el miércoles 2 de septiembre
    (ver [Calendario](../calendario.md)). No hay entrega evaluada hoy.

## 🎯 Objetivos de la sesión

- Distinguir analítica descriptiva, predictiva y prescriptiva, y ubicarlas en una "escalera de
  valor" según su dificultad y el valor que aportan a la decisión.
- Identificar procesos internos (no necesariamente de cara al cliente) con potencial de
  optimización mediante IA.
- Distinguir automatización basada en reglas (RPA) de automatización inteligente (IA/ML).
- Aplicar una matriz de priorización (impacto vs. esfuerzo) para decidir qué optimizar primero.
- Avanzar en la especificación de la solución del proyecto propio, insumo directo del Hito 3.

*Resultado de aprendizaje asociado: **CTS2 · RDA 3.1** — Evalúa problemas complejos del ámbito
disciplinar, justificando los datos, variables o causas que lo determinan.*

---

## 🗓️ Agenda (90 min)

| Tiempo | Bloque |
|---|---|
| 0:00 – 0:10 | Recapitulación del Hito 2 y dudas de retroalimentación |
| 0:10 – 0:30 | Parte 1 — Los tipos de analítica: descriptiva, diagnóstica, predictiva, prescriptiva |
| 0:30 – 0:45 | Caso aplicado: mismos datos, tres preguntas distintas |
| 0:45 – 1:05 | Parte 2 — Procesos internos: RPA vs. IA |
| 1:05 – 1:20 | Matriz de priorización: impacto vs. esfuerzo |
| 1:20 – 1:27 | Actividad formativa: clasificar y priorizar la solución del proyecto |
| 1:27 – 1:30 | Cierre y vínculo con la Clase 8 (diseño de la solución) |

---

## 📖 Parte 1 — Analítica Descriptiva, Predictiva y Prescriptiva

### 1. Los tipos de analítica

No toda "analítica de datos" responde el mismo tipo de pregunta. Distinguir esto es clave para
especificar bien qué necesita la solución del proyecto:

| Tipo | Pregunta que responde | Ejemplo de negocio |
|---|---|---|
| **Descriptiva** | ¿Qué pasó? | "¿Cuánto vendimos el mes pasado por tienda?" |
| **Diagnóstica** | ¿Por qué pasó? | "¿Por qué bajaron las ventas en la tienda X?" |
| **Predictiva** | ¿Qué pasará? | "¿Cuánto venderemos el próximo mes?" |
| **Prescriptiva** | ¿Qué deberíamos hacer? | "¿Qué precio y stock fijar para maximizar ventas el próximo mes?" |

<div class="usm-chart">
<div class="usm-chart-canvas-wrap"><canvas id="chart-escalera-analitica"></canvas></div>
<span class="usm-chart-caption">La "escalera de valor analítico": a medida que se sube de descriptiva a prescriptiva, aumenta el valor para la decisión, pero también la dificultad y la madurez de datos requerida — ilustrativo.</span>
</div>

> 💡 **Para el proyecto:** muchas soluciones parten siendo descriptivas ("un dashboard que muestra
> qué pasó") y solo después maduran a predictivas o prescriptivas. No es necesario partir arriba de
> la escalera — sí es necesario **saber en qué escalón están** y decirlo explícitamente en el Hito 3.

### 2. Caso aplicado: mismos datos, tres preguntas distintas

Con la misma base de datos de ventas de una tienda, el tipo de pregunta cambia completamente la
solución necesaria:

- **Descriptiva:** un reporte o dashboard que resume ventas históricas — no requiere IA/ML.
- **Predictiva:** un modelo que estima la demanda de la próxima semana — requiere un modelo
  entrenado con historial.
- **Prescriptiva:** un sistema que recomienda cuánto stock pedir y a qué precio vender, optimizando
  el margen esperado — requiere el modelo predictivo *más* una regla o algoritmo de decisión encima.

---

## 📖 Parte 2 — Optimización de Procesos Internos con IA

### 3. Procesos internos con potencial de IA

No toda oportunidad de IA está de cara al cliente. Muchos de los casos de negocio más rentables
están en procesos **internos**:

| Área | Ejemplo de proceso optimizable con IA |
|---|---|
| Finanzas | Conciliación automática de transacciones, detección de anomalías en gastos |
| Recursos Humanos | Preselección de CVs, respuestas a preguntas frecuentes internas |
| Operaciones | Mantenimiento predictivo, optimización de inventario |
| Compras | Previsión de demanda de insumos, apoyo en negociación con proveedores |

### 4. RPA vs. IA: dos formas distintas de automatizar

| | RPA (automatización basada en reglas) | IA / Machine Learning |
|---|---|---|
| Cómo funciona | Sigue instrucciones fijas ("si pasa X, haz Y") | Aprende patrones a partir de datos históricos |
| Maneja excepciones | No — falla ante casos no previstos | Sí — generaliza a casos parecidos, no idénticos |
| Ejemplo | Copiar datos de un formulario a un sistema | Decidir si una transacción es probablemente fraudulenta |
| Cuándo conviene | Proceso muy estable y bien definido | Proceso con variabilidad, juicio o ambigüedad |

> ⚠️ Un error común es usar IA donde un simple RPA (o incluso una fórmula de Excel) habría bastado.
> Antes de proponer IA para un proceso, pregúntense: **¿el proceso realmente requiere aprender de
> datos, o solo seguir una regla fija?**

### 5. Matriz de priorización: impacto vs. esfuerzo

Con varios procesos candidatos, no se puede optimizar todo a la vez. Una matriz simple ayuda a
decidir por dónde empezar:

<div class="usm-chart">
<div class="usm-chart-canvas-wrap"><canvas id="chart-matriz-priorizacion"></canvas></div>
<span class="usm-chart-caption">Ejemplos ilustrativos ubicados en la matriz: arriba-derecha (alto impacto, alto esfuerzo) son grandes apuestas; abajo-derecha (alto impacto, bajo esfuerzo) son las mejores primeras opciones ("quick wins").</span>
</div>

- **Alto impacto + bajo esfuerzo** → hacerlo primero ("quick win").
- **Alto impacto + alto esfuerzo** → planificarlo, pero no necesariamente ahora.
- **Bajo impacto + bajo esfuerzo** → opcional, sin urgencia.
- **Bajo impacto + alto esfuerzo** → evitar.

---

## ✏️ Actividad formativa: clasificar y priorizar la solución del proyecto

*No se entrega ni se califica. Es preparación directa para el Hito 3 (miércoles 2 de septiembre).*

En su grupo de proyecto:

1. Ubiquen su solución en la escalera de la Parte 1: ¿es descriptiva, predictiva o prescriptiva
   hoy? ¿A cuál deberían apuntar?
2. Si su proyecto involucra un proceso interno, clasifíquenlo: ¿le conviene más un RPA simple o
   realmente necesita IA/ML? Justifiquen en una frase.
3. Ubiquen su proyecto (y, si tienen más de una idea de proceso a optimizar, cada una) en la matriz
   de impacto vs. esfuerzo de la sección 5.
4. Anoten sus conclusiones: las usarán directamente para especificar la solución en el Hito 3.

---

## 📚 Para la próxima clase

- La [Clase 8](clase8.md) (lunes 31 de agosto) trabaja directamente la pregunta central del
  Hito 3: **¿ML predictivo, IA Generativa, o ambos?**
- Traer las conclusiones de la actividad de hoy: son el punto de partida para especificar la
  solución.
