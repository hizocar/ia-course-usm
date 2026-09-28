# Clase 13 · Ética y Sesgos Algorítmicos

<div class="usm-session-meta">
<span>📅 Lunes 28 de septiembre de 2026</span>
<span>⏱️ 90 minutos</span>
<span class="usm-tag-gold">Unidad 3 · Ética, Riesgos y Gobernanza de la IA</span>
<span class="usm-tag-red">🚀 Hito 5A · 5% · se entrega en clases</span>
</div>

!!! danger "Entrega en clases: solo se evalúa lo enviado hoy entre 17:30 y 19:00"
    El **Hito 5** se divide en dos partes que se entregan **durante la sesión**, no desde la casa.
    Hoy corresponde el **Hito 5A — Auditoría de sesgo (5%)**: lo que produzcan en el taller de esta
    clase se envía antes de que termine la sesión.

    **Los correos recibidos fuera del horario de clases no se evalúan** y la parte queda con 0.
    La parte B se entrega el miércoles 30 en la [Clase 14](clase14.md).

## 🎯 Objetivos de la sesión

- Distinguir un error estadístico de un **sesgo** con consecuencias sobre personas.
- Identificar de dónde viene el sesgo: datos, etiquetas, diseño del problema, uso y retroalimentación.
- Reconocer que un modelo puede ser sesgado **sin usar ninguna variable prohibida**, por variables proxy.
- Auditar el propio prototipo con una checklist concreta y dejar registrado lo que encuentren.

*Resultado de aprendizaje asociado: **CTS6 · RDA 3.2** — Implementa un dominio avanzado de
plataformas y programas, evaluando procedimientos y técnicas innovadoras.*

---

## 🗓️ Agenda (90 min)

| Tiempo | Bloque |
|---|---|
| 0:00 – 0:10 | Retroalimentación general del Hito 4 y cierre del ciclo de prototipado |
| 0:10 – 0:30 | ¿Qué es un sesgo algorítmico? Cinco fuentes, con casos |
| 0:30 – 0:45 | Variables proxy: cómo discrimina un modelo que "no mira" el atributo sensible |
| 0:45 – 1:05 | Métricas de equidad: por qué no se pueden cumplir todas a la vez |
| 1:05 – 1:22 | **Taller: auditoría de sesgo de su propio prototipo** |
| 1:22 – 1:28 | **Envío del Hito 5A** (correo desde la sala, antes de las 19:00) |
| 1:28 – 1:30 | Cierre y vínculo con la Clase 14 (privacidad y datos) |

---

## 📖 Contenidos

### 1. Error no es lo mismo que sesgo

Todo modelo se equivoca. Eso es un **error**, y se mide. Hay **sesgo** cuando el error no se reparte
al azar, sino que **cae sistemáticamente sobre un grupo de personas**, y ese grupo suele ser el que
ya estaba en desventaja.

> 💡 La pregunta de negocio no es "¿cuánto se equivoca el modelo?", sino **"¿sobre quién se
> equivoca, y qué le pasa a esa persona cuando ocurre?"**

### 2. Cinco fuentes de sesgo

| Fuente | De dónde viene | Ejemplo |
|---|---|---|
| **Datos históricos** | El pasado que se usa para entrenar ya contenía la decisión sesgada | Un modelo de selección entrenado con contrataciones previas aprende a repetir a quién contrataban antes |
| **Muestra no representativa** | Un grupo aparece poco o nada en los datos | Un modelo de riesgo entrenado casi solo con clientes urbanos falla con clientes rurales |
| **Etiquetas** | La variable objetivo mide otra cosa distinta de la que creemos | Usar "fue detectado" como proxy de "cometió fraude": se aprende dónde se fiscaliza, no dónde hay fraude |
| **Diseño del problema** | La definición misma del objetivo excluye a alguien | Optimizar "ingreso por cliente" deja fuera a los segmentos de bajo ticket que igual importan |
| **Uso y retroalimentación** | La decisión del modelo genera los datos del próximo modelo | Solo se ofrece crédito a quienes el modelo aprueba, así que nunca aprende de los que rechazó |

<div class="usm-chart">
<div class="usm-chart-canvas-wrap"><canvas id="chart-fuentes-sesgo"></canvas></div>
<span class="usm-chart-caption">Frecuencia relativa ilustrativa con que cada fuente de sesgo aparece en proyectos de IA aplicada — para orientar dónde mirar primero, no una medición.</span>
</div>

### 3. Variables proxy: el sesgo que entra por la puerta de atrás

Quitar la variable sensible (género, nacionalidad, edad) **no elimina el sesgo**: el modelo la
reconstruye desde otras variables correlacionadas.

| Atributo sensible | Proxies habituales |
|---|---|
| Nivel socioeconómico | Comuna, código postal, colegio, tipo de plan |
| Género | Rubro laboral, categorías de consumo, tratamiento en el texto |
| Edad | Antigüedad del cliente, canal de contacto, tipo de dispositivo |
| Nacionalidad | Idioma del formulario, tipo de documento, banco emisor |

!!! example "Ejemplo ilustrativo"
    Un modelo de scoring **no usa** la comuna. Pero sí usa "distancia a la sucursal más cercana" y
    "tipo de dispositivo desde el que se conecta". Entre ambas reconstruyen la comuna con bastante
    precisión — y con ella, el nivel socioeconómico. El modelo discrimina sin haber visto nunca el
    atributo prohibido.

### 4. Métricas de equidad: hay que elegir

Existen varias definiciones formales de "justo", y se puede demostrar que **no se pueden satisfacer
todas simultáneamente** salvo en casos triviales. Las tres más usadas:

| Criterio | Qué exige | Cuándo tiene sentido |
|---|---|---|
| **Paridad demográfica** | Misma tasa de aprobación entre grupos | Cuando se busca igualar el acceso |
| **Igualdad de oportunidades** | Misma tasa de acierto entre quienes sí cumplen la condición | Cuando lo injusto es dejar fuera a alguien que sí calificaba |
| **Calibración** | Que un puntaje de 0,8 signifique lo mismo en todos los grupos | Cuando el puntaje se comunica y se usa para decidir |

> ⚠️ Elegir una es una **decisión de negocio y ética**, no técnica. Lo que se evalúa en el Hito 5 no
> es que hayan elegido "la correcta", sino que hayan **elegido conscientemente y lo justifiquen**.

### 5. El sesgo del asistente de IA

El prototipo de varios grupos usa ChatGPT, Claude o Gemini. Esos modelos también traen sesgos:
tono distinto según cómo está escrito el nombre, supuestos implícitos sobre quién es el usuario,
o respuestas más pobres en español que en inglés. Si su prototipo genera texto que llega a un
cliente, **eso es parte de su superficie de riesgo**.

---

## ✏️ Taller y entrega del Hito 5A

*Esto **sí** se entrega hoy, antes de las 19:00. Vale el 5% de la nota final.*

En su grupo, con el prototipo del Hito 4 abierto:

1. **Identifiquen a quién afecta.** ¿Quién recibe la salida del prototipo y qué le pasa si se
   equivoca? Escriban la peor consecuencia concreta para esa persona.
2. **Revisen las cinco fuentes** de la sección 2: ¿cuál aplica a su caso? Marquen al menos una.
3. **Busquen proxies.** Listen sus variables de entrada y marquen cuáles podrían estar
   reconstruyendo un atributo sensible.
4. **Hagan la prueba del par.** Ejecuten su prototipo dos veces con casos idénticos salvo por un
   atributo sensible (o su proxy). ¿Cambia la respuesta? Registren ambas salidas.
5. **Elijan un criterio de equidad** de la sección 4 y escriban en una línea por qué es el adecuado
   para su caso.

Registren todo en esta tabla — es el entregable de hoy:

| Riesgo de sesgo detectado | Fuente | A quién afecta | Evidencia (prueba del par) | Mitigación posible |
|---|---|---|---|---|
| | | | | |

### 📤 Cómo entregar el Hito 5A

- [ ] Una página como máximo. Puede ser un documento o **una foto legible** del trabajo hecho en clases.
- [ ] Incluye la tabla completa, la evidencia de la prueba del par y el criterio de equidad elegido.
- [ ] Correo a **sebastian.azocarm@usm.cl**, asunto `Hito 5A – Nombre del grupo`.
- [ ] **Enviado entre las 17:30 y las 19:00 de hoy.** Fuera de ese horario no se evalúa.

> ⚠️ Envíen aunque esté imperfecto. Una tabla incompleta entregada a tiempo se evalúa; una tabla
> perfecta enviada a las 21:00 no.

---

## 📚 Para la próxima clase

- La [Clase 14](clase14.md) (miércoles 30 de septiembre) cubre **privacidad, protección de datos y
  transparencia**, y ahí se entrega el **Hito 5B (5%)**, también durante la sesión.
- Traigan la tabla de auditoría de hoy: el riesgo de sesgo que identificaron puede ser uno de los
  dos riesgos que pide la parte B.
- Piensen en la pregunta que quedó abierta desde la Clase 12: **¿qué dato de su prototipo no debería
  nunca pegarse en una herramienta pública de IA, y por qué?**
