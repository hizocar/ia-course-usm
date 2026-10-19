# Clase 20 · Taller — Costos de Operar la Solución

<div class="usm-session-meta">
<span>📅 Miércoles 28 de octubre de 2026</span>
<span>⏱️ 90 minutos</span>
<span class="usm-tag-gold">Unidad 3 · Diseño de una Solución con IA: Evaluación Social y Privada</span>
<span class="usm-tag-red">🚀 Hito 7C · 2,5% · se entrega en clases</span>
</div>

!!! danger "Entrega en clases: solo se evalúa lo enviado hoy entre 17:30 y 19:00"
    Tercer avance del [Hito 7](../proyecto.md#hito-7-evaluacion-de-viabilidad): **Hito 7C — Costos
    de operar (2,5%)**. Se trabaja y se sube al buzón **durante la sesión**; lo recibido fuera del
    horario de clases no se evalúa y el avance queda con 0.

    Los costos se agregan a la **misma hoja de supuestos** del 7B.

## 🎯 Objetivos de la sesión

- Separar la **inversión inicial** de los **costos de operación**, y los costos **fijos** de los
  **variables**.
- Reconocer los costos propios de una solución con IA que casi nunca aparecen en el primer borrador.
- Costear las **mitigaciones** del Hito 5 y la **supervisión humana** que comprometieron.
- Calcular el **costo por transacción** usando el volumen del embudo del 7B.

*Resultado de aprendizaje asociado: **CTS6 · RDA 3.2** — Implementa un dominio avanzado de
plataformas y programas, evaluando procedimientos y técnicas innovadoras.*

---

## 🗓️ Agenda (90 min)

| Tiempo | Bloque |
|---|---|
| 0:00 – 0:10 | Qué mostraron los 7B: embudos y supuestos críticos |
| 0:10 – 0:25 | Inversión vs. operación · fijos vs. variables |
| 0:25 – 0:40 | Los costos que no se ven: supervisión, mantención, errores y cumplimiento |
| 0:40 – 0:50 | Cómo estimar sin cotización · costo por transacción |
| 0:50 – 1:20 | **Taller: estructura de costos del proyecto (Hito 7C)** |
| 1:20 – 1:28 | **Envío del Hito 7C** (buzón, antes de las 19:00) |
| 1:28 – 1:30 | Cierre y vínculo con la Clase 21 (beneficio y veredicto) |

---

## 📖 Contenidos

### 1. Dos cortes que ordenan cualquier estructura de costos

| | **Fijo** (no depende del volumen) | **Variable** (crece con el volumen) |
|---|---|---|
| **Inversión inicial** (una vez) | Integración con sistemas, preparación de datos, capacitación | — |
| **Operación** (cada mes) | Mantención del prototipo, monitoreo, horas de un responsable | Licencias por usuario, cobro por consulta, revisión humana por caso |

> 💡 El corte fijo/variable es el que importa para el 7D: los costos fijos definen **el volumen
> mínimo** para que el proyecto se pague; los variables definen **si cada transacción adicional
> deja margen**.

### 2. Los costos que no se ven

Un prototipo construido en el curso con una cuenta gratuita no cuesta nada. Operarlo en una empresa,
sí:

| Costo | De dónde sale en su proyecto | Error típico |
|---|---|---|
| **Licencias y uso** | Planes por usuario o cobro por consulta de la herramienta del Hito 4 | Usar el plan gratuito como si fuera el de empresa |
| **Integración** | Conectar el prototipo con el CRM, ERP o planilla real | Suponer que los datos ya están listos |
| **Supervisión humana** | La frase de gobernanza del Hito 5B: *"la decisión final la toma…"* | Comprometer revisión humana y no costear las horas |
| **Mantención y monitoreo** | Volver a correr el banco de casos del Hito 6, ajustar instrucciones | Pensar que la solución se construye una vez y queda lista |
| **Mitigaciones** | La prueba del par, la minimización de datos, la auditoría | Declararlas en el Hito 5 y olvidarlas en el presupuesto |
| **Costo de los errores** | Falsos positivos y falsos negativos del modelo | No contarlos porque "el modelo es bueno" |
| **Cumplimiento** | Revisión legal de privacidad, registro de tratamientos | Dejarlo para después de implementar |

> ⚠️ **Toda mitigación tiene un costo.** Si en el Hito 5 se comprometieron a revisar manualmente los
> casos marcados, esas horas van en esta tabla. Una mitigación sin costo es una mitigación que no se
> va a hacer.

### 3. Cómo estimar sin una cotización

No necesitan una cotización formal; necesitan una cifra **defendible**:

- **Licencias y uso:** la página de precios vigente del proveedor. **Anoten la fecha**: estos
  precios cambian seguido.
- **Horas de personas:** horas al mes × costo hora (sueldo de referencia del cargo, con un
  recargo por costo empresa si lo declaran).
- **Integración:** una estimación en horas de un desarrollador, o la analogía con un proyecto
  conocido.
- **Lo incierto:** un rango **mínimo – probable – máximo**. En el 7D se usa el probable y se prueba
  el máximo.

### 4. El ejemplo de cobranza, costeado

Continuación del ejemplo de la [Clase 19](clase19.md) (cifras **ilustrativas**):

**Inversión inicial**

| Ítem | Supuesto | Monto |
|---|---|---:|
| Integración con el CRM | Proveedor externo, proyecto acotado | $4.000.000 |
| Preparación de datos históricos | Analista, media jornada durante un mes | $1.200.000 |
| Capacitación de 15 ejecutivos | Dos sesiones + material | $800.000 |
| **Total inversión** | | **$6.000.000** |

**Operación mensual (en régimen)**

| Ítem | Tipo | Supuesto | Monto/mes |
|---|---|---|---:|
| Licencias de la herramienta | Variable por usuario | 15 usuarios × $25.000 | $375.000 |
| Uso por consulta | Variable por transacción | 12.000 consultas × $30 | $360.000 |
| Mantención y monitoreo | Fijo | Analista al 25% de su jornada | $625.000 |
| Revisión humana de casos dudosos | Variable | 40 horas × $10.000 (gobernanza del Hito 5B) | $400.000 |
| Control de sesgo y privacidad | Fijo | Prueba del par mensual + revisión trimestral prorrateada (Hito 5) | $300.000 |
| **Total operación** | | | **$2.060.000** |

**Costo por transacción:** $2.060.000 / 12.000 clientes gestionados ≈ **$172 por cliente**, o
$2.060.000 / 240 regularizaciones adicionales ≈ **$8.600 por regularización adicional**. Esta
segunda cifra se compara en el 7D con lo que vale cada regularización.

> 📌 Cada fila nueva entra a la hoja de supuestos con su número (S7, S8, …) y su fuente.

---

## ✏️ Taller y entrega del Hito 7C

*Esto **sí** se entrega hoy, antes de las 19:00. Vale el 2,5% de la nota final.*

En su grupo de proyecto:

1. **Listen todos los costos** de operar su solución en la empresa real, usando la tabla de la
   sección 2 como lista de chequeo.
2. **Sepárenlos** en inversión inicial y operación mensual, y marquen cada uno como fijo o variable.
3. **Estimen cada monto** con su supuesto y su fuente. Para el más incierto, den un rango.
4. **Costeen al menos una mitigación** del Hito 5 y la supervisión humana comprometida.
5. **Calculen el costo por transacción** usando el volumen de su embudo del 7B.
6. **Agreguen los costos a la hoja de supuestos**, con numeración correlativa.

### 📤 Cómo entregar el Hito 7C

- [ ] Tabla de inversión inicial y tabla de operación mensual, cada ítem con supuesto y fuente.
- [ ] Cada costo de operación marcado como fijo o variable.
- [ ] Al menos una **mitigación del Hito 5** y la **supervisión humana** costeadas.
- [ ] Costo por transacción, calculado con el volumen del 7B.
- [ ] Rango mínimo – probable – máximo para el costo más incierto.
- [ ] Hoja de supuestos actualizada.
- [ ] Máximo dos páginas; se aceptan capturas de planilla.
- [ ] Subido al **buzón del Hito 7C** (abajo), con el **nombre del grupo** escrito igual que en la
      planilla del curso.
- [ ] **Enviado entre las 17:30 y las 19:00 de hoy.** Fuera de ese horario no se evalúa.

!!! tip "Usen el asistente para encontrar lo que falta"
    ```text
    Mi solución es [descripción] y se va a operar en [empresa/área] con [volumen] transacciones al mes.
    Esta es mi lista de costos: [pegar tabla].
    1. ¿Qué costos de operar una solución así faltan en la lista?
    2. ¿Cuáles de mis montos te parecen subestimados y por qué?
    3. Para cada costo, ¿es fijo o variable?
    ```
    No acepten montos inventados por el asistente: úsenlo para encontrar ítems y luego busquen la
    cifra ustedes.

---

## 📚 Para la próxima clase

- La [Clase 21](clase21.md) (lunes 2 de noviembre) cierra el Hito 7: **beneficio esperado y
  veredicto de viabilidad**, con el **Hito 7D**.
- Traigan la hoja de supuestos completa (7B + 7C): en el 7D se arma el flujo con esas mismas cifras.

---

## 📬 Buzón del Hito 7C

<div class="usm-cta" markdown>
<div class="usm-cta-text">
<strong>📤 Entrega aquí el Hito 7C — Costos de operar</strong>
<span>Un <strong>PDF por grupo</strong>, con el nombre del grupo. El buzón <strong>se cierra a las 19:30</strong>, pero solo se evalúa lo enviado <strong>hasta las 19:00</strong>.</span>
</div>
[📬 Abrir buzón](https://script.google.com/macros/s/AKfycbz7ZR7YRvRjDcpEgcjCeIcI8qzfBShLpPoxmYisZS4t8GeEDbEvAp9lg1sIrZKBiLyQ7A/exec?a=hito7c){.usm-btn target="_blank" rel="noopener"}
</div>

Ver todos los buzones y las reglas de entrega en [Entregas](../entregas.md).
