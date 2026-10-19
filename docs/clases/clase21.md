# Clase 21 · Taller — Beneficio Esperado y Veredicto de Viabilidad

<div class="usm-session-meta">
<span>📅 Lunes 2 de noviembre de 2026</span>
<span>⏱️ 90 minutos</span>
<span class="usm-tag-gold">Unidad 3 · Diseño de una Solución con IA: Evaluación Social y Privada</span>
<span class="usm-tag-red">🚀 Hito 7D · 2,5% · se entrega en clases</span>
</div>

!!! danger "Entrega en clases: solo se evalúa lo enviado hoy entre 17:30 y 19:00"
    Último avance del [Hito 7](../proyecto.md#hito-7-evaluacion-de-viabilidad): **Hito 7D —
    Beneficio y conclusión (2,5%)**. Se trabaja y se sube al buzón **durante la sesión**; lo recibido
    fuera del horario de clases no se evalúa y el avance queda con 0.

    Con este envío queda cerrado el **Hito 7** (7A + 7B + 7C + 7D = 10%). Las cifras de hoy deben
    salir de la misma hoja de supuestos del 7B y el 7C.

## 🎯 Objetivos de la sesión

- Calcular el **beneficio esperado** de la solución, incremental y con rampa de adopción.
- Armar un **flujo simple** con la inversión y los costos del 7C, y obtener VAN y período de
  recuperación.
- Encontrar el **punto de quiebre**: qué valor del supuesto crítico hace que el proyecto deje de ser
  viable.
- Cruzar la mirada **privada** con la **social** del 7A y emitir un **veredicto** con condiciones.

*Resultado de aprendizaje asociado: **CTS6 · RDA 3.2** — Implementa un dominio avanzado de
plataformas y programas, evaluando procedimientos y técnicas innovadoras.*

---

## 🗓️ Agenda (90 min)

| Tiempo | Bloque |
|---|---|
| 0:00 – 0:08 | Qué mostraron los 7C: los costos que más se olvidaron |
| 0:08 – 0:20 | El beneficio esperado y los tres errores que lo inflan |
| 0:20 – 0:35 | Del beneficio al flujo: VAN y período de recuperación |
| 0:35 – 0:50 | ¿Bajo qué condiciones deja de ser viable? Punto de quiebre y sensibilidad |
| 0:50 – 1:20 | **Taller: flujo, punto de quiebre y veredicto (Hito 7D)** |
| 1:20 – 1:28 | **Envío del Hito 7D** (buzón, antes de las 19:00) |
| 1:28 – 1:30 | Cierre del Hito 7 y vínculo con la Clase 22 (pitch final) |

---

## 📖 Contenidos

### 1. El beneficio esperado y los tres errores que lo inflan

El beneficio ya lo empezaron a calcular en el 7B (captura de valor). Hoy se vuelve un número mensual
que entra al flujo. Antes de usarlo, revisen que no tenga estos errores:

| Error | Cómo se ve | Cómo corregirlo |
|---|---|---|
| **Precio en vez de margen** | "Vendemos $10 MM más al mes" | Lo que entra al flujo es el margen de esas ventas, no el ingreso |
| **Doble conteo** | Se suman "horas ahorradas" y "menor costo de cobranza" cuando son lo mismo | Una fila por efecto; si dos filas describen el mismo ahorro, queda una |
| **Sin rampa** | El beneficio completo desde el primer mes | Aplicar la rampa de adopción del 7B |

Y el que ya trabajamos: el beneficio es **contra la situación sin proyecto**, no contra cero.

### 2. Del beneficio al flujo

Con el ejemplo de cobranza (cifras **ilustrativas**, en millones de pesos): beneficio en régimen de
$11,52 MM al mes (Clase 19), costos de operación de $2,06 MM al mes e inversión de $6,0 MM
(Clase 20), con rampa de 30% / 60% / 100%.

| | Mes 0 | Mes 1 | Mes 2 | Meses 3 a 24 (cada mes) |
|---|---:|---:|---:|---:|
| Adopción | — | 30% | 60% | 100% |
| Beneficio | — | 3,46 | 6,91 | 11,52 |
| Costos de operación | — | −2,06 | −2,06 | −2,06 |
| Inversión | −6,00 | | | |
| **Flujo neto** | **−6,00** | **1,40** | **4,85** | **9,46** |
| Acumulado | −6,00 | −4,60 | +0,25 | … |

- **Horizonte:** 24 meses. Para un prototipo de IA, más allá de dos o tres años la herramienta
  probablemente ya cambió.
- **Tasa de descuento:** 1% mensual (≈ 12,7% anual), como supuesto. Usen la que corresponda a su
  empresa y decláranla.
- **VAN (24 meses, 1% mensual):** ≈ **$182 MM**.
- **Período de recuperación:** durante el **mes 2**.

> 💡 Un período de recuperación de dos meses debería generar sospecha, no celebración. Casi siempre
> significa que **un solo supuesto** está cargando todo el resultado. La sección 3 sirve para
> encontrarlo.

### 3. ¿Bajo qué condiciones deja de ser viable?

Es la pregunta textual del Hito 7D, y se responde con dos herramientas.

**A. Sensibilidad:** muevan uno a uno los supuestos más inciertos y miren el VAN.

| Supuesto | Valor base | Valor probado | VAN resultante |
|---|---|---|---:|
| Base | — | — | ≈ $182 MM |
| S3 · Mejora en regularización | +2 pts | +1 pt | ≈ $66 MM |
| S5 · Fracción que se habría perdido | 40% | 20% | ≈ $66 MM |
| Costos de operación | $2,06 MM | +50% ($3,09 MM) | ≈ $161 MM |

Los costos casi no mueven el resultado. Lo que manda son **S3 y S5**: cuánto mejora el modelo y
cuánto vale cada mejora.

**B. Punto de quiebre:** el valor del supuesto crítico que deja el VAN en cero. En el ejemplo, cada
punto de mejora aporta ≈ $116 MM de VAN, y los costos más la inversión suman ≈ $50 MM, así que:

> **El proyecto deja de ser viable si el modelo mejora la regularización en menos de ≈ 0,43
> puntos.**

Esa frase es mucho más útil para quien decide que "el VAN es $182 MM": le dice **qué tiene que
verificar** antes de invertir.

### 4. El veredicto: privado y social juntos

| | **Social positivo** (7A) | **Social negativo** (7A) |
|---|---|---|
| **Privado positivo** | Implementar | Viable pero frágil: riesgo regulatorio y reputacional; solo con mitigaciones |
| **Privado negativo** | Rediseñar cómo se captura el valor, o buscar socio o financiamiento | Descartar |

Y el veredicto se escribe **con condiciones**:

!!! example "Veredicto del ejemplo"
    **Viable bajo condiciones.** El proyecto se paga si el modelo mejora la regularización temprana
    en al menos 0,43 puntos; nuestra estimación es de 2 puntos, pero viene de un banco de 8 casos.
    Recomendamos un **piloto de tres meses con grupo de control** antes de escalar. El efecto social
    es positivo (7A) mientras se mantenga la prueba del par mensual, que ya está costeada en el 7C.

---

## ✏️ Taller y entrega del Hito 7D

*Esto **sí** se entrega hoy, antes de las 19:00. Vale el 2,5% de la nota final.*

En su grupo de proyecto, con la hoja de supuestos del 7B y el 7C abierta:

1. **Calculen el beneficio mensual en régimen**, revisando los tres errores de la sección 1.
2. **Armen el flujo** (entre 12 y 36 meses) con la rampa de adopción, los costos y la inversión del
   7C. Declaren la tasa de descuento.
3. **Calculen el VAN y el período de recuperación.**
4. **Hagan la sensibilidad** de al menos dos supuestos y encuentren el **punto de quiebre** del
   supuesto crítico.
5. **Ubiquen el proyecto en la matriz** privado/social y escriban el **veredicto con condiciones**.

### 📤 Cómo entregar el Hito 7D

- [ ] Beneficio mensual con el cálculo a la vista, incremental y sin doble conteo.
- [ ] Flujo con rampa, VAN, período de recuperación y tasa de descuento declarada.
- [ ] Sensibilidad de al menos **dos supuestos** y el **punto de quiebre** del supuesto crítico.
- [ ] Ubicación en la matriz privado/social, coherente con el 7A.
- [ ] Veredicto de tres o cuatro líneas: viable, viable bajo condiciones o no viable, y **qué
      tendría que pasar para que deje de serlo**.
- [ ] Las cifras coinciden con las del 7B y el 7C (si cambió algún supuesto, digan cuál y por qué).
- [ ] Máximo dos páginas, más la **hoja de supuestos final** como anexo.
- [ ] Subido al **buzón del Hito 7D** (abajo), con el **nombre del grupo** escrito igual que en la
      planilla del curso.
- [ ] **Enviado entre las 17:30 y las 19:00 de hoy.** Fuera de ese horario no se evalúa.

> 📌 Con este envío queda cerrado el **Hito 7** (7A + 7B + 7C + 7D = 10%). El veredicto de hoy es la
> lámina más importante del pitch final.

!!! tip "Usen el asistente para revisar la planilla, no para hacerla"
    ```text
    Este es el flujo de mi proyecto y la hoja de supuestos que lo alimenta: [pegar].
    1. Verifica que el VAN y el período de recuperación estén bien calculados.
    2. ¿Hay algún beneficio contado dos veces, o ingresos en lugar de márgenes?
    3. ¿Qué supuesto, si fuera la mitad de lo estimado, cambiaría el veredicto?
    ```
    Comprueben ustedes cualquier corrección que proponga: el asistente también se equivoca en
    aritmética.

---

## 📚 Para la próxima clase

- La [Clase 22](clase22.md) (miércoles 4 de noviembre) empieza la preparación de la **presentación
  final**: estructura del pitch, con el **Avance 1 (5%)**.
- Traigan los siete hitos a mano: el pitch es la versión de 10 minutos de todo el semestre.

---

## 📬 Buzón del Hito 7D

<div class="usm-cta" markdown>
<div class="usm-cta-text">
<strong>📤 Entrega aquí el Hito 7D — Beneficio y conclusión</strong>
<span>Un <strong>PDF por grupo</strong>, con el nombre del grupo. El buzón <strong>se cierra a las 19:20</strong>, pero solo se evalúa lo enviado <strong>hasta las 19:00</strong>.</span>
</div>
[📬 Abrir buzón](https://script.google.com/macros/s/AKfycbz7ZR7YRvRjDcpEgcjCeIcI8qzfBShLpPoxmYisZS4t8GeEDbEvAp9lg1sIrZKBiLyQ7A/exec?a=hito7d){.usm-btn target="_blank" rel="noopener"}
</div>

Ver todos los buzones y las reglas de entrega en [Entregas](../entregas.md).
