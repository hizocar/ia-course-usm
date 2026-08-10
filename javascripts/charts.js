/* Gráficos interactivos del curso (Chart.js), compatibles con la
   navegación instantánea de Material for MkDocs: se vuelven a montar
   en cada cambio de página vía document$.subscribe. */

document$.subscribe(function () {
  if (typeof Chart === "undefined") return;

  const NAVY = "#1b2a5e";
  const BLUE = "#005f96";
  const GOLD = "#e5b300";
  const RED = "#b30828";
  const GREY = "#8a94ad";

  Chart.defaults.font.family = getComputedStyle(document.body).fontFamily;
  Chart.defaults.plugins.legend.labels.usePointStyle = true;

  const isDark = () =>
    document.body.getAttribute("data-md-color-scheme") === "slate";
  const textColor = () => (isDark() ? "#e6e9f5" : "#1b2a5e");
  const gridColor = () => (isDark() ? "#ffffff22" : "#00000014");

  const charts = {
    /* ---------------- Clase 1 ---------------- */
    "chart-adopcion-industria": {
      type: "bar",
      data: {
        labels: [
          "Minería",
          "Retail",
          "Banca y Finanzas",
          "Transporte y Logística",
          "Salud",
          "Educación",
        ],
        datasets: [
          {
            label: "Nivel de madurez de adopción de IA (1-5, ilustrativo)",
            data: [4, 4, 4.5, 3.5, 3, 2],
            backgroundColor: [BLUE, BLUE, NAVY, BLUE, GOLD, GOLD],
            borderRadius: 6,
          },
        ],
      },
      options: {
        indexAxis: "y",
        responsive: true,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => `Madurez: ${ctx.raw} / 5`,
            },
          },
        },
        scales: {
          x: { min: 0, max: 5, grid: { color: gridColor() }, ticks: { color: textColor() } },
          y: { grid: { display: false }, ticks: { color: textColor() } },
        },
      },
    },

    "chart-genai-uso": {
      type: "bar",
      data: {
        labels: [
          "Redacción y comunicación",
          "Síntesis de documentos largos",
          "Ideación estratégica",
          "Análisis exploratorio de datos",
        ],
        datasets: [
          {
            label: "ChatGPT",
            data: [4, 3.5, 4, 4.5],
            backgroundColor: BLUE,
            borderRadius: 4,
          },
          {
            label: "Claude",
            data: [4, 4.5, 4, 3],
            backgroundColor: NAVY,
            borderRadius: 4,
          },
          {
            label: "Gemini",
            data: [3.5, 3.5, 3.5, 3.5],
            backgroundColor: GOLD,
            borderRadius: 4,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { labels: { color: textColor() } },
          tooltip: { callbacks: { label: (ctx) => `${ctx.dataset.label}: ${ctx.raw} / 5` } },
        },
        scales: {
          x: { grid: { display: false }, ticks: { color: textColor() } },
          y: { min: 0, max: 5, grid: { color: gridColor() }, ticks: { color: textColor() } },
        },
      },
    },

    "chart-ventaja-competitiva": {
      type: "radar",
      data: {
        labels: [
          "Menor costo marginal",
          "Efectos de red",
          "Velocidad de decisión",
          "Personalización",
          "Escalabilidad",
        ],
        datasets: [
          {
            label: "Empresa tradicional",
            data: [2, 1, 2, 2, 2],
            borderColor: GREY,
            backgroundColor: "#8a94ad33",
            pointBackgroundColor: GREY,
          },
          {
            label: "Empresa impulsada por IA",
            data: [4.5, 4, 4.5, 4.5, 5],
            borderColor: BLUE,
            backgroundColor: "#005f9633",
            pointBackgroundColor: BLUE,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: { legend: { labels: { color: textColor() } } },
        scales: {
          r: {
            min: 0,
            max: 5,
            angleLines: { color: gridColor() },
            grid: { color: gridColor() },
            pointLabels: { color: textColor() },
            ticks: { display: false },
          },
        },
      },
    },

    /* ---------------- Clase 2 ---------------- */
    "chart-costo-prediccion": {
      type: "line",
      data: {
        labels: ["2010", "2013", "2016", "2019", "2022", "2025"],
        datasets: [
          {
            label: "Costo relativo de predecir (índice, ilustrativo)",
            data: [100, 78, 55, 34, 18, 9],
            borderColor: RED,
            backgroundColor: "#b3082822",
            tension: 0.3,
            fill: true,
            pointRadius: 4,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          tooltip: { callbacks: { label: (ctx) => `Índice de costo: ${ctx.raw}` } },
        },
        scales: {
          x: { grid: { display: false }, ticks: { color: textColor() } },
          y: { grid: { color: gridColor() }, ticks: { color: textColor() } },
        },
      },
    },

    "chart-tipos-ml": {
      type: "doughnut",
      data: {
        labels: [
          "Supervisado (predicción/clasificación)",
          "No supervisado (segmentación)",
          "Por refuerzo (optimización secuencial)",
        ],
        datasets: [
          {
            data: [65, 25, 10],
            backgroundColor: [BLUE, GOLD, RED],
            borderColor: isDark() ? "#10142a" : "#ffffff",
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: "bottom", labels: { color: textColor() } },
          tooltip: { callbacks: { label: (ctx) => `${ctx.label}: ${ctx.raw}% de casos revisados en clase` } },
        },
      },
    },

    /* ---------------- Clase 3 ---------------- */
    "chart-genai-fortalezas": {
      type: "radar",
      data: {
        labels: [
          "Redacción y comunicación",
          "Documentos largos",
          "Integración empresarial",
          "Multimodalidad (texto/imagen/video)",
          "Búsqueda y datos actualizados",
        ],
        datasets: [
          {
            label: "ChatGPT",
            data: [4.5, 3.5, 4, 3.5, 4],
            borderColor: BLUE,
            backgroundColor: "#005f9633",
            pointBackgroundColor: BLUE,
          },
          {
            label: "Claude",
            data: [4, 4.5, 3.5, 3, 3],
            borderColor: NAVY,
            backgroundColor: "#1b2a5e33",
            pointBackgroundColor: NAVY,
          },
          {
            label: "Gemini",
            data: [3.5, 3.5, 4.5, 4.5, 4.5],
            borderColor: GOLD,
            backgroundColor: "#e5b30033",
            pointBackgroundColor: GOLD,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { labels: { color: textColor() } },
          tooltip: { callbacks: { label: (ctx) => `${ctx.dataset.label}: ${ctx.raw} / 5` } },
        },
        scales: {
          r: {
            min: 0,
            max: 5,
            angleLines: { color: gridColor() },
            grid: { color: gridColor() },
            pointLabels: { color: textColor() },
            ticks: { display: false },
          },
        },
      },
    },

    /* ---------------- Clase 4 ---------------- */
    "chart-ia-bloques-bmc": {
      type: "bar",
      data: {
        labels: [
          "Propuesta de valor",
          "Actividades clave",
          "Recursos clave",
          "Estructura de costos",
          "Canales",
          "Relación con clientes",
          "Fuentes de ingreso",
          "Socios clave",
          "Segmentos de clientes",
        ],
        datasets: [
          {
            label: "Frecuencia con que la IA aparece en este bloque (1-5, ilustrativo)",
            data: [5, 4.5, 4, 3.5, 2.5, 2.5, 2, 1.5, 1],
            backgroundColor: [GOLD, BLUE, BLUE, RED, BLUE, BLUE, RED, GREY, GREY],
            borderRadius: 6,
          },
        ],
      },
      options: {
        indexAxis: "y",
        responsive: true,
        plugins: {
          legend: { display: false },
          tooltip: { callbacks: { label: (ctx) => `Frecuencia: ${ctx.raw} / 5` } },
        },
        scales: {
          x: { min: 0, max: 5, grid: { color: gridColor() }, ticks: { color: textColor() } },
          y: { grid: { display: false }, ticks: { color: textColor() } },
        },
      },
    },
  };

  Object.keys(charts).forEach((id) => {
    const canvas = document.getElementById(id);
    if (!canvas) return;
    const previous = Chart.getChart(canvas);
    if (previous) previous.destroy();
    new Chart(canvas, charts[id]);
  });
});
