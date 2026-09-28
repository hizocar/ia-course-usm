# Clase 14 · Privacidad, Protección de Datos y Transparencia

<div class="usm-session-meta">
<span>📅 Miércoles 30 de septiembre de 2026</span>
<span>⏱️ 90 minutos</span>
<span class="usm-tag-gold">Unidad 3 · Ética, Riesgos y Gobernanza de la IA</span>
<span class="usm-tag-red">🚀 Hito 5B · 5% · se entrega en clases</span>
</div>

!!! danger "Entrega en clases: solo se evalúa lo enviado hoy entre 17:30 y 19:00"
    Hoy se cierra el **Hito 5** con su segunda parte: **Hito 5B — Riesgos, mitigaciones y
    gobernanza (5%)**. Como la parte A de la [Clase 13](clase13.md), se trabaja y se envía
    **durante la sesión**.

    **Los correos recibidos fuera del horario de clases no se evalúan** y la parte queda con 0.

## 🎯 Objetivos de la sesión

- Clasificar los datos que usa su prototipo según qué tan sensibles son, y qué se puede hacer con cada tipo.
- Conocer el marco legal chileno de protección de datos personales, en términos prácticos para un rol comercial.
- Aplicar minimización de datos: usar lo mínimo necesario en vez de todo lo disponible.
- Distinguir **transparencia** (decir que hay IA) de **explicabilidad** (poder decir por qué decidió así).
- Completar la plantilla de riesgos y mitigaciones del Hito 5.

*Resultado de aprendizaje asociado: **CTS6 · RDA 3.2** — Implementa un dominio avanzado de
plataformas y programas, evaluando procedimientos y técnicas innovadoras.*

---

## 🗓️ Agenda (90 min)

| Tiempo | Bloque |
|---|---|
| 0:00 – 0:10 | Puesta en común: hallazgos de la auditoría de sesgo |
| 0:10 – 0:30 | Qué es un dato personal · marco legal en Chile, en simple |
| 0:30 – 0:45 | Minimización, anonimización y el error de "subir todo al chat" |
| 0:45 – 1:05 | Transparencia y explicabilidad: qué le debemos decir al usuario |
| 1:05 – 1:22 | **Taller: plantilla de riesgos y mitigaciones (Hito 5B)** |
| 1:22 – 1:28 | **Envío del Hito 5B** (correo desde la sala, antes de las 19:00) |
| 1:28 – 1:30 | Cierre y vínculo con la Clase 15 (taller de prototipado) |

---

## 📖 Contenidos

### 1. Clasifiquen sus datos antes de decidir nada

```mermaid
flowchart TD
    A["Un dato que usa mi prototipo"] --> B{"¿Permite identificar<br/>a una persona,<br/>solo o combinado?"}
    B -->|No| C["Dato no personal<br/>Uso libre"]
    B -->|Sí| D{"¿Es de una categoría<br/>especial? (salud, origen,<br/>creencias, biometría,<br/>situación socioeconómica)"}
    D -->|No| E["Dato personal<br/>Requiere base legal,<br/>minimización y resguardo"]
    D -->|Sí| F["Dato sensible<br/>Protección reforzada:<br/>evitarlo si no es imprescindible"]
```

> ⚠️ **Combinado cuenta.** Comuna + edad + rubro puede identificar a una persona aunque ningún campo
> lo haga por separado. Si su prototipo cruza tablas, revisen el resultado del cruce, no las tablas
> de entrada.

### 2. El marco legal chileno, en lo que les sirve

| | En simple |
|---|---|
| **Ley 19.628** | La ley histórica de protección de la vida privada: trata el tratamiento de datos personales y exige consentimiento o una fuente legal que lo autorice. |
| **Ley 21.719 (2024)** | Moderniza el régimen, alinea a Chile con estándares tipo GDPR, crea una **Agencia de Protección de Datos Personales** y establece sanciones. Su entrada en vigencia es diferida, así que revisen el estado vigente al momento de implementar. |
| **GDPR (Unión Europea)** | Referencia internacional. Importa si la empresa trata datos de residentes en la UE. |

Tres ideas que se aplican casi siempre, independiente de la letra fina:

1. **Finalidad:** los datos se recogen para algo declarado, y usarlos para otra cosa requiere justificarlo.
2. **Proporcionalidad:** pedir solo lo necesario para esa finalidad.
3. **Derechos de la persona:** saber qué se sabe de ella, corregirlo y, en ciertos casos, oponerse.

!!! warning "Esto no es asesoría legal"
    El objetivo del curso es que sepan **reconocer cuándo hay un problema y a quién preguntarle**,
    no que actúen como abogados. En una empresa, esa conversación es con el área legal o de
    cumplimiento — y llegar a ella con el riesgo ya identificado es exactamente lo que se espera de
    un rol comercial.

### 3. Minimización: el prototipo también se diseña con menos

| En vez de… | Usen… | Por qué |
|---|---|---|
| RUT del cliente | Un identificador interno sin significado | El modelo no necesita saber quién es, solo distinguirlo |
| Fecha de nacimiento | Tramo etario | Igual de útil, mucho menos identificable |
| Dirección exacta | Comuna, o distancia a la sucursal | Menos riesgo y menos proxy directo |
| Texto libre completo del cliente | Solo el campo que se va a analizar | Reduce la superficie de exposición |

Y la regla que ya venimos repitiendo desde la Clase 1: **nunca peguen datos reales de clientes en
una herramienta pública de IA**. Para el prototipo del curso, datos sintéticos.

### 4. Transparencia ≠ explicabilidad

| | Qué significa | Pregunta que responde |
|---|---|---|
| **Transparencia** | Decirle a la persona que está interactuando con un sistema de IA y para qué se usan sus datos | "¿Sé que esto es una IA?" |
| **Explicabilidad** | Poder decir por qué el sistema entregó ese resultado en ese caso | "¿Por qué me rechazaron?" |

Un sistema puede ser transparente y nada explicable, y ahí está el problema: si su prototipo entrega
una decisión que afecta a alguien, esa persona tiene derecho a una razón comprensible. Modelos
simples la dan naturalmente; los complejos requieren trabajo extra o una alternativa interpretable.

> 💡 **Para el proyecto:** decidan quién queda **a cargo de la decisión final**. Un sistema que
> *recomienda* a una persona que decide es muy distinto —legal y éticamente— de uno que decide solo.
> Esa frase debe estar en su Hito 5.

---

## ✏️ Taller y entrega del Hito 5B

*Esto **sí** se entrega hoy, antes de las 19:00. Vale el 5% de la nota final.*

Con la tabla de sesgo de la Clase 13 y su prototipo abierto, completen:

**A. Clasificación de datos**

| Dato que usa el prototipo | ¿Personal? | ¿Sensible? | ¿Se puede minimizar? | Decisión |
|---|---|---|---|---|
| | | | | |

**B. Riesgos y mitigaciones** *(mínimo dos riesgos, como pide el [Hito 5](../proyecto.md#hito-5-riesgos-y-gobernanza))*

| # | Riesgo | Tipo (sesgo / privacidad / alucinación / dependencia) | A quién afecta | Mitigación **concreta** | ¿Implementable en el Hito 6? |
|---:|---|---|---|---|---|
| 1 | | | | | |
| 2 | | | | | |

**C. Gobernanza en una frase**

> *"En nuestro proyecto, la decisión final la toma __________, con apoyo del sistema. Si el sistema
> se equivoca, la persona afectada puede __________."*

### 📤 Cómo entregar el Hito 5B

- [ ] Máximo dos páginas, con las secciones A, B y C completas.
- [ ] Al menos **dos riesgos** con mitigación verificable (el sesgo del Hito 5A puede ser uno).
- [ ] Correo a **sebastian.azocarm@usm.cl**, asunto `Hito 5B – Nombre del grupo`.
- [ ] **Enviado entre las 17:30 y las 19:00 de hoy.** Fuera de ese horario no se evalúa.

!!! tip "Qué distingue una mitigación buena de una genérica"
    ❌ "Revisaremos periódicamente el modelo para evitar sesgos."
    ✅ "Antes de cada campaña, comparamos la tasa de recomendación entre comunas de alto y bajo
    ingreso; si difiere más de 10 puntos, la campaña no sale hasta revisarla."
    La segunda es verificable: dice **quién**, **cuándo**, **con qué umbral** y **qué pasa si falla**.

---

## 📚 Para la próxima clase

- Con el Hito 5 cerrado hoy, las Clases 15 a 18 son **talleres de prototipado**: el objetivo es
  llevar las mitigaciones que acaban de definir al prototipo y dejarlo listo para el **Hito 6 —
  Prototipo v2** (miércoles 21 de octubre).
- Traigan a la Clase 15 su prototipo del Hito 4 y la tabla de mitigaciones de hoy: esa tabla es la
  lista de trabajo.
