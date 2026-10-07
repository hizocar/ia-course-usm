# Clase 15 · Taller de Prototipado (1) — De las Mitigaciones al Prototipo

<div class="usm-session-meta">
<span>📅 Miércoles 7 de octubre de 2026</span>
<span>⏱️ 90 minutos</span>
<span class="usm-tag-gold">Unidad 3 · Taller de Prototipado de Negocios con IA</span>
<span class="usm-tag-red">🚀 Hito 6A · 4% · se entrega en clases</span>
</div>

!!! danger "Entrega en clases: solo se evalúa lo enviado hoy entre 17:30 y 19:00"
    Desde ahora **cada clase deja un avance que se entrega durante la sesión**, y la suma de los
    avances es el hito. El [Hito 6](../proyecto.md#hito-6-prototipo-v2-refinado) se construye en tres:
    **6A hoy (4%)**, 6B el 14 de octubre (3%) y 6C el 19 de octubre (3%).

    Hoy corresponde el **Hito 6A — Primera mitigación implementada**. **Los correos recibidos fuera
    del horario de clases no se evalúan** y el avance queda con 0. Traigan computador y el prototipo
    funcionando.

## 🎯 Objetivos de la sesión

- Convertir la tabla de mitigaciones del Hito 5B en un **backlog priorizado** de cambios concretos.
- Conocer los cuatro tipos de resguardo que se pueden implementar sin programar.
- Implementar en clases **al menos una mitigación** en el prototipo.
- Dejar registrado el estado "antes" para poder demostrar la mejora en el Hito 6.

*Resultado de aprendizaje asociado: **CTS6 · RDA 3.2** — Implementa un dominio avanzado de
plataformas y programas, evaluando procedimientos y técnicas innovadoras.*

---

## 🗓️ Agenda (90 min)

| Tiempo | Bloque |
|---|---|
| 0:00 – 0:10 | Retroalimentación general del Hito 5 y qué viene hasta el 21 de octubre |
| 0:10 – 0:25 | De la tabla de mitigaciones al backlog: priorizar por impacto vs. esfuerzo |
| 0:25 – 0:45 | Los cuatro resguardos que se pueden implementar sin programar |
| 0:45 – 1:15 | **Taller: implementar la primera mitigación** |
| 1:15 – 1:22 | Registro del "antes" y del "después" |
| 1:22 – 1:28 | **Envío del Hito 6A** (correo desde la sala, antes de las 19:00) |
| 1:28 – 1:30 | Cierre |

---

## 📖 Contenidos

### 1. El backlog del prototipo v2

El Hito 6 no pide un prototipo nuevo: pide **evidencia de mejora** sobre el v1. Esa evidencia sale
de dos listas que ya tienen:

| Lista | De dónde viene | Qué aporta al v2 |
|---|---|---|
| **Mejoras pendientes** | Columna "idea de mejora" de la bitácora del [Hito 4](../proyecto.md#hito-4-prototipo-funcional-v1) | Lo que falló al probar el prototipo |
| **Mitigaciones** | Tabla de riesgos del [Hito 5B](../proyecto.md#hito-5-riesgos-y-gobernanza) | Lo que puede dañar a alguien si no se corrige |

Júntenlas en una sola lista y ordénenla con la matriz de la [Clase 7](clase7.md): **impacto alto y
esfuerzo bajo primero**. El Hito 6 pide al menos una mejora y al menos una mitigación
implementadas — no las diez.

> 💡 Una mitigación implementada y demostrada vale más que cinco declaradas en una tabla. El criterio
> del Hito 6 es *evidencia real de mejora*, no longitud de la lista.

### 2. Cuatro resguardos que se implementan sin programar

| Resguardo | Qué hace | Cómo se implementa | Qué riesgo ataca |
|---|---|---|---|
| **Límites en las instrucciones** | Define lo que el asistente no debe hacer nunca | Bloque LÍMITES de las instrucciones de sistema ([Clase 11](clase11.md)) | Sale del alcance · respuestas inadecuadas |
| **Obligación de citar la fuente** | Solo responde con lo que está en los archivos cargados, y lo dice | "Responde solo con las fuentes adjuntas; si no está, di *no tengo ese dato*" | Alucinación |
| **Campos mínimos** | El prototipo deja de pedir datos que no necesita | Quitar columnas del archivo de ejemplo; usar tramos en vez de valores exactos | Privacidad · variables proxy |
| **Humano en el circuito** | La salida es una recomendación, no una decisión ejecutada | Formato de salida que termina en "propuesta para revisión de ___" | Gobernanza · decisiones automáticas sin responsable |

!!! example "Ejemplo: de la mitigación declarada al cambio concreto"
    **Riesgo:** el asistente inventa un puntaje cuando el cliente no tiene historial.

    **Mitigación declarada en el Hito 5B:** *"exigir que diga 'sin datos suficientes'"*.

    **Cambio concreto en el prototipo (hoy):** agregar al bloque PASOS —
    ```text
    Antes de calcular, verifica que el cliente tenga al menos 3 meses de historial.
    Si no los tiene, responde exactamente: "Sin datos suficientes para recomendar."
    y no entregues puntaje ni ranking.
    ```
    **Prueba que lo demuestra:** el mismo caso de la bitácora que antes producía un puntaje
    inventado, ahora devuelve la frase. Guarden ambas capturas: ese par es la evidencia del Hito 6.

### 3. Registren el "antes" ahora, no después

Para demostrar mejora necesitan el estado previo. Antes de tocar nada:

- [ ] Guarden una copia de las instrucciones actuales del prototipo (copiar y pegar en un documento).
- [ ] Guarden las capturas de las fallas de la bitácora del Hito 4 que van a corregir.
- [ ] Anoten la fecha.

Sin el "antes", el Hito 6 queda en "lo mejoramos" sin prueba.

---

## ✏️ Taller y entrega del Hito 6A

*Esto **sí** se entrega hoy, antes de las 19:00. Vale el 4% de la nota final.*

En su grupo de proyecto, durante el taller:

1. **Unifiquen las dos listas** (mejoras del Hito 4 + mitigaciones del Hito 5B) en un solo backlog.
2. **Prioricen**: marquen las dos de mayor impacto y menor esfuerzo.
3. **Traduzcan** la primera de ellas a un cambio concreto, con el formato del ejemplo de la sección 2:
   riesgo → mitigación declarada → **cambio exacto** en el prototipo.
4. **Impleméntenla** en el prototipo, ahora.
5. **Prueben el caso que fallaba** y guarden la captura del antes y del después.

| # | Mejora o mitigación | Impacto | Esfuerzo | Cambio concreto | ¿Implementado hoy? |
|---:|---|---|---|---|---|
| 1 | | | | | |
| 2 | | | | | |

### 📤 Cómo entregar el Hito 6A

- [ ] El **backlog priorizado** (la tabla de arriba, con al menos dos filas).
- [ ] El **cambio concreto** implementado: el texto exacto que agregaron o quitaron del prototipo.
- [ ] Captura del **antes** (la falla original) y del **después** (el mismo caso ya corregido).
- [ ] Máximo dos páginas; se aceptan capturas.
- [ ] Correo a **sebastian.azocarm@usm.cl**, asunto `Hito 6A – Nombre del grupo`.
- [ ] **Enviado entre las 17:30 y las 19:00 de hoy.** Fuera de ese horario no se evalúa.

> ⚠️ Si alcanzaron a implementar solo una parte del cambio, envíen eso. Un avance parcial entregado
> a tiempo se evalúa; uno completo enviado mañana, no.

---

## 📚 Para la próxima clase

- No hay clase el **lunes 12 de octubre** (feriado, Encuentro de Dos Mundos).
- La [Clase 16](clase16.md) (miércoles 14 de octubre) es la segunda parte del taller: se trabajan las
  **mejoras de la bitácora del Hito 4** y se arma la **prueba de regresión** que demuestra que el v2
  es mejor que el v1 sin haber roto lo que ya funcionaba.
- Traigan el backlog priorizado de hoy y las capturas del "antes".
