# Clase 2 · Machine Learning para Negocios

<div class="usm-session-meta">
<span>📅 Miércoles 5 de agosto de 2026</span>
<span>⏱️ 90 minutos</span>
<span class="usm-tag-gold">Unidad 1 · Introducción a la IA en los Negocios</span>
<span class="usm-tag-red">🚀 Hito 1/7 · 10%</span>
</div>

!!! warning "Día de entregable"
    En este curso **los entregables evaluados se publican y reciben solo los días miércoles**. Hoy
    corresponde el **Hito 1 del [Proyecto del curso](../proyecto.md)** — el primero de 7 hitos
    (10% cada uno) más una presentación final (30%) que este mismo equipo desarrollará durante el
    semestre — construido sobre la actividad formativa de la [Clase 1](clase1.md). El detalle está
    al final de esta página.

## 🎯 Objetivos de la sesión

- Explicar, sin matemáticas, cómo "aprende" un modelo de Machine Learning a partir de datos.
- Distinguir los tres grandes tipos de ML (supervisado, no supervisado, por refuerzo) mediante
  analogías de negocio, y reconocer esos mismos tipos detrás del entrenamiento de ChatGPT, Claude y
  Gemini.
- Reconocer los tipos de problemas de negocio que pueden traducirse en un problema de ML: predicción,
  clasificación, segmentación y optimización.
- Traducir un problema de negocio real a un "problema de predicción", cuantificando su valor, y
  documentarlo como entregable.

*Resultado de aprendizaje asociado: **RdA9.2** — Utiliza tecnologías vigentes y/o de vanguardia,
aplicándolas en sus propuestas y presentaciones.*

---

## 🗓️ Agenda (90 min)

| Tiempo | Bloque |
|---|---|
| 0:00 – 0:10 | Recapitulación de la Clase 1 y puesta en común de ejemplos traídos por el curso |
| 0:10 – 0:30 | ¿Cómo aprende una máquina? Datos, patrones y predicción (sin matemáticas) |
| 0:30 – 0:50 | Tipos de Machine Learning — y cómo se entrenan ChatGPT, Claude y Gemini con esos mismos tipos |
| 0:50 – 1:10 | Casos aplicados: *scoring* crediticio, *churn* y *pricing* dinámico |
| 1:10 – 1:27 | Trabajo en clase sobre el **Hito 1 del Proyecto**: "de problema de negocio a problema de predicción" |
| 1:27 – 1:30 | Cierre y vínculo con la próxima sesión (IA Generativa en profundidad) |

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
qué actividades conviene automatizar y qué decisiones conviene delegar a un modelo — de la misma
forma en que abaratar el costo de computar transformó qué tareas convenía automatizar en los años 80
y 90.

<div class="usm-chart">
<div class="usm-chart-canvas-wrap"><canvas id="chart-costo-prediccion"></canvas></div>
<span class="usm-chart-caption">Evolución ilustrativa del costo relativo de predecir (índice base 100). Representa la idea central de "Prediction Machines", no una serie estadística oficial.</span>
</div>

### 2. Tipos de Machine Learning

| Tipo | Idea central | Ejemplo de negocio clásico | ¿Dónde aparece en ChatGPT / Claude / Gemini? |
|---|---|---|---|
| **Supervisado** | Aprende de ejemplos que ya tienen la "respuesta correcta" etiquetada | Predecir si un cliente pagará o no un crédito, usando historial de clientes anteriores | La primera gran etapa de entrenamiento (*pre-entrenamiento*): el modelo aprende a predecir la palabra siguiente en textos masivos de internet |
| **No supervisado** | Encuentra estructura o grupos en los datos sin una respuesta previa | Segmentar clientes en perfiles de consumo para campañas de marketing | Parte de cómo el modelo organiza internamente conceptos y relaciones entre palabras a partir de enormes volúmenes de texto |
| **Por refuerzo** | Aprende por ensayo y error, recibiendo una recompensa según el resultado de sus acciones | Un sistema que ajusta precios dinámicamente y aprende qué estrategia maximiza ingresos | *RLHF (Reinforcement Learning from Human Feedback)*: personas evalúan las respuestas del modelo y esa retroalimentación se usa como "recompensa" para hacerlo más útil, seguro y alineado a instrucciones |

<div class="usm-chart">
<div class="usm-chart-canvas-wrap"><canvas id="chart-tipos-ml"></canvas></div>
<span class="usm-chart-caption">Distribución ilustrativa de los tipos de ML entre los casos de negocio más citados en clase (no es una estadística de mercado real).</span>
</div>

!!! info "En simple: ¿cómo se entrena un asistente como ChatGPT, Claude o Gemini?"
    1. **Pre-entrenamiento (supervisado/auto-supervisado):** el modelo lee enormes cantidades de
       texto y aprende a predecir la palabra o fragmento siguiente, una y otra vez, hasta capturar
       patrones del lenguaje, hechos y estilos de razonamiento.
    2. **Ajuste fino con ejemplos curados:** se le muestran ejemplos de buenas respuestas a
       instrucciones, para que aprenda el formato de "asistente útil" (no solo de "completar texto").
    3. **RLHF (por refuerzo):** evaluadores humanos comparan respuestas del modelo y indican cuáles
       prefieren; esa preferencia se convierte en una señal de recompensa que ajusta el modelo para
       que sus respuestas sean más útiles, seguras y alineadas a lo que se le pide.

    Es la misma lógica de "aprender de ejemplos + recompensas" que vimos en *scoring* crediticio o en
    *pricing* dinámico — aplicada a generar lenguaje en vez de generar un número o una etiqueta.

### 3. De problema de negocio a problema de Machine Learning

Antes de "aplicar IA", toda propuesta de negocio debería responder tres preguntas:

1. **¿Qué queremos predecir o decidir?** (la variable objetivo)
2. **¿Qué datos históricos existen** que relacionen esa variable con información disponible al
   momento de decidir?
3. **¿Qué acción tomaremos** distinto si tenemos esa predicción, y cuánto vale esa mejor decisión?

Esta última pregunta es clave para alguien de Ingeniería Comercial: un modelo predictivo solo crea
valor si permite una **mejor decisión económica** — más ingresos, menor costo o menor riesgo. Por
eso, al formular un problema de ML conviene estimar, aunque sea de forma gruesa, el **valor esperado
de la mejor decisión** (una lógica similar a la de un árbol de decisión en Evaluación de Proyectos).

### 4. Casos aplicados

- **Scoring crediticio (supervisado):** un banco usa el historial de miles de clientes (ingresos,
  comportamiento de pago, etc.) para predecir la probabilidad de que un nuevo solicitante caiga en
  mora, y así decidir si aprueba el crédito y a qué tasa.
- **Predicción de fuga o *churn* (supervisado):** una empresa de telecomunicaciones o retail
  identifica, antes de que ocurra, qué clientes tienen alta probabilidad de dejar de comprar o
  cancelar su plan, para actuar con una oferta de retención a tiempo.
- **Pricing dinámico (por refuerzo):** un e-commerce prueba distintos precios y aprende, mediante
  prueba y error guiada, qué estrategia de precios maximiza el margen esperado según el contexto
  (stock, demanda, competencia).

!!! example "Ejemplo ilustrativo: retención de clientes en telecomunicaciones"
    Una compañía de telecomunicaciones entrena un modelo con el historial de miles de clientes que
    ya se dieron de baja. El modelo aprende qué combinación de señales (caída en uso, llamadas a
    soporte, cambios de plan) anticipa una fuga. **Orden de magnitud ilustrativo:** si el equipo de
    retención solo puede contactar al 10% de la base, dirigir ese esfuerzo a los clientes con mayor
    probabilidad predicha —en vez de contactar al azar— suele multiplicar varias veces la tasa de
    clientes efectivamente retenidos por cada contacto realizado. La cifra exacta depende de cada
    negocio; lo relevante es el mecanismo: **mejor blanco de acción, no más contactos**.

En todos los casos, el valor de negocio no está en el algoritmo en sí, sino en **la decisión** que
la predicción permite tomar mejor y más temprano — la misma idea que van a aplicar en el Hito 1
del Proyecto de hoy.

---

## 🚀 Hito 1 del Proyecto — "De problema de negocio a problema de predicción"

<div class="usm-deliverable" markdown>
<span class="usm-deliverable-badge">Hito 1/7 · Proyecto del curso · 10% de la Nota Final</span>

**Objetivo:** traducir un problema de negocio real a un problema de Machine Learning bien
formulado y cuantificar, aunque sea de forma gruesa, el valor de la decisión que ese modelo
permitiría tomar — a partir del trabajo hecho en la actividad formativa de la Clase 1.

**Instrucciones**

1. Retomen, en el mismo grupo de la Clase 1, uno de los procesos identificados en el "radar
   estratégico de IA" de esa sesión (idealmente el de mayor potencial de ventaja competitiva).
2. Formulen ese proceso como un problema de predicción, respondiendo por escrito las 3 preguntas de
   la sección *"De problema de negocio a problema de Machine Learning"*.
3. Clasifiquen el problema como supervisado, no supervisado o por refuerzo, y justifiquen en 2-3
   líneas.
4. Estimen, con supuestos razonables y explícitos, el **valor aproximado** de tomar la mejor
   decisión gracias al modelo (por ejemplo: cuántos clientes o transacciones al mes se ven afectados,
   y qué mejora porcentual de margen, retención o costo es razonable esperar).
5. Redacten una síntesis de **máxima una página** (formato libre: documento o una diapositiva).
6. *Opcional:* si usaron ChatGPT, Claude o Gemini para redactar o estructurar el entregable, agreguen
   una línea indicando qué herramienta y para qué la usaron.

**Formato y entrega**

- Un archivo por grupo (PDF o documento), enviado por correo a **sebastian.azocarm@usm.cl**, con el
  **nombre del grupo en el asunto** (formato: `Hito 1 – Nombre del grupo`).
- **Plazo:** hasta las 23:59 del miércoles 5 de agosto de 2026.

**Criterios de evaluación**

- Claridad y coherencia entre el proceso elegido y el problema de predicción formulado.
- Correcta identificación del tipo de ML (supervisado / no supervisado / por refuerzo).
- Calidad y razonabilidad de los supuestos usados para estimar el valor de la decisión.
- Argumentación de por qué la mejor decisión posible justifica el uso de un modelo predictivo.
</div>

---

## 📚 Para la próxima clase

- Repasar los ejemplos de *scoring*, *churn* y *pricing* vistos hoy: en la [Clase 3](clase3.md) se
  profundizará el uso práctico de **ChatGPT, Claude y Gemini** (prompts efectivos, GPTs/Projects/
  Gems) para acelerar el trabajo del proyecto.
- Traer identificado un ejemplo propio de uso de **ChatGPT, Claude, Gemini u otra herramienta de IA
  Generativa** en un contexto laboral o académico, con una opinión breve sobre sus límites.
- Guarden el Hito 1: es la base directa del **Hito 2 — Modelo de negocio validado**, que se
  entrega el miércoles 19 de agosto (ver el detalle completo en [Proyecto](../proyecto.md)).
