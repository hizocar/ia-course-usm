# Clase 2 · Machine Learning para Negocios

<div class="usm-session-meta">
<span>📅 Miércoles 5 de agosto de 2026</span>
<span>⏱️ 90 minutos</span>
<span class="usm-tag-gold">Unidad 1 · Introducción a la IA en los Negocios</span>
</div>

## 🎯 Objetivos de la sesión

- Explicar, sin matemáticas, cómo "aprende" un modelo de Machine Learning a partir de datos.
- Distinguir los tres grandes tipos de ML (supervisado, no supervisado, por refuerzo) mediante
  analogías de negocio.
- Reconocer los tipos de problemas de negocio que pueden traducirse en un problema de ML: predicción,
  clasificación, segmentación y optimización.
- Practicar la traducción de un problema de negocio real a un "problema de predicción".

*Resultado de aprendizaje asociado: **RdA9.2** — Utiliza tecnologías vigentes y/o de vanguardia,
aplicándolas en sus propuestas y presentaciones.*

---

## 🗓️ Agenda (90 min)

| Tiempo | Bloque |
|---|---|
| 0:00 – 0:10 | Recapitulación de la Clase 1 y puesta en común de ejemplos traídos por el curso |
| 0:10 – 0:35 | ¿Cómo aprende una máquina? Datos, patrones y predicción (sin matemáticas) |
| 0:35 – 0:55 | Tipos de Machine Learning: supervisado, no supervisado y por refuerzo — con casos de negocio |
| 0:55 – 1:15 | Caso aplicado: *scoring* crediticio y predicción de fuga de clientes (*churn*) |
| 1:15 – 1:25 | Actividad en clases: "de problema de negocio a problema de predicción" |
| 1:25 – 1:30 | Cierre y vínculo con la próxima sesión (IA Generativa) |

---

## 📖 Contenidos

### 1. ¿Cómo aprende una máquina?

Un modelo de Machine Learning no recibe instrucciones del tipo "si pasa X, haz Y". En cambio:

1. Se le muestran muchos **ejemplos históricos** (datos).
2. El modelo **encuentra patrones** que relacionan las características de esos ejemplos con un
   resultado conocido.
3. Ese patrón se usa para **predecir el resultado** en casos nuevos, nunca antes vistos.

> 💡 **Analogía:** es similar a cómo un/a analista de crédito con años de experiencia "intuye" el
> riesgo de un cliente nuevo a partir de haber visto miles de casos anteriores — solo que el modelo
> lo hace de forma sistemática y a gran escala.

Siguiendo a Agrawal, Gans & Goldfarb (*Prediction Machines*), la contribución económica central del
ML es que **abarata drásticamente el costo de predecir**. Cuando predecir se vuelve barato, cambia
qué actividades conviene automatizar y qué decisiones conviene delegar a un modelo.

### 2. Tipos de Machine Learning

| Tipo | Idea central | Ejemplo de negocio |
|---|---|---|
| **Supervisado** | Aprende de ejemplos que ya tienen la "respuesta correcta" etiquetada | Predecir si un cliente pagará o no un crédito, usando historial de clientes anteriores |
| **No supervisado** | Encuentra estructura o grupos en los datos sin una respuesta previa | Segmentar clientes en perfiles de consumo para campañas de marketing |
| **Por refuerzo** | Aprende por ensayo y error, recibiendo una recompensa según el resultado de sus acciones | Un sistema que ajusta precios dinámicamente y aprende qué estrategia maximiza ingresos |

### 3. De problema de negocio a problema de Machine Learning

Antes de "aplicar IA", toda propuesta de negocio debería responder tres preguntas:

1. **¿Qué queremos predecir o decidir?** (la variable objetivo)
2. **¿Qué datos históricos existen** que relacionen esa variable con información disponible al
   momento de decidir?
3. **¿Qué acción tomaremos** distinto si tenemos esa predicción, y cuánto vale esa mejor decisión?

### 4. Caso aplicado: *scoring* crediticio y predicción de *churn*

- **Scoring crediticio (supervisado):** un banco usa el historial de miles de clientes (ingresos,
  comportamiento de pago, etc.) para predecir la probabilidad de que un nuevo solicitante caiga en
  mora, y así decidir si aprueba el crédito y a qué tasa.
- **Predicción de fuga o *churn* (supervisado):** una empresa de telecomunicaciones o retail
  identifica, antes de que ocurra, qué clientes tienen alta probabilidad de dejar de comprar o
  cancelar su plan, para actuar con una oferta de retención a tiempo.

En ambos casos, el valor de negocio no está en el algoritmo en sí, sino en **la decisión** que
la predicción permite tomar mejor y más temprano.

---

## ✏️ Actividad en clases: "De problema de negocio a problema de predicción"

En los mismos grupos de la Clase 1:

1. Retomen uno de los procesos identificados en el "mapa de calor de la IA" de la clase anterior.
2. Formulen ese proceso como un problema de predicción, respondiendo las 3 preguntas de la sección 3.
3. Clasifiquen si el problema es de tipo supervisado, no supervisado o por refuerzo, y justifiquen.
4. Entreguen una síntesis de media página (será la base de la **Tarea 1** del curso).

---

## 📚 Para la próxima clase

- Repasar los ejemplos de *scoring* y *churn* vistos hoy: en la Clase 3 se profundizará en **IA
  Generativa**, que utiliza una lógica distinta (generar contenido, no solo predecir un número o
  categoría).
- Traer identificado un ejemplo de uso de **ChatGPT, Copilot u otra herramienta de IA Generativa**
  en un contexto laboral o académico propio.
