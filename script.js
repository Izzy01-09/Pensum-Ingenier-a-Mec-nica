// Obtener todos los datos desde malla.js
document.addEventListener("DOMContentLoaded", function () {
  const contenedor = document.getElementById("malla");
  const porcentajeTexto = document.getElementById("porcentaje");

  const TOTAL_CREDITOS = 166;
  const CREDITOS_SEMINARIO = 128;
  const PORCENTAJE_SABER_PRO = 0.75;

  let materiasAprobadas = new Set(
    JSON.parse(localStorage.getItem("materiasAprobadas") || "[]")
  );

  function calcularCreditosAprobados() {
    return malla
      .filter((m) => materiasAprobadas.has(m.codigo))
      .reduce((suma, m) => suma + m.creditos, 0);
  }

  function calcularSemestresRestantes() {
    const creditosFaltantes = malla
      .filter((m) => !materiasAprobadas.has(m.codigo))
      .reduce((suma, m) => suma + m.creditos, 0);

    const promedioPorSemestre = 19.5;
    return Math.ceil(creditosFaltantes / promedioPorSemestre);
  }

  function cumplePrerrequisitos(materia) {
    return materia.prerrequisitos.every((codigo) =>
      materiasAprobadas.has(codigo)
    );
  }

  function renderizarMalla() {
    contenedor.innerHTML = "";

    for (let semestre = 1; semestre <= 10; semestre++) {
      const materiasDelSemestre = malla.filter((m) => m.semestre === semestre);
      const bloque = document.createElement("div");
      bloque.className = "semestre";
      const titulo = document.createElement("h2");
      titulo.textContent = `Semestre ${semestre}`;
      bloque.appendChild(titulo);

      materiasDelSemestre.forEach((materia) => {
        const div = document.createElement("div");
        div.className = "materia";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = materia.codigo;
        checkbox.checked = materiasAprobadas.has(materia.codigo);
        checkbox.disabled = !cumplePrerrequisitos(materia);

        checkbox.addEventListener("change", () => {
          if (checkbox.checked) {
            materiasAprobadas.add(materia.codigo);
          } else {
            materiasAprobadas.delete(materia.codigo);
          }
          localStorage.setItem(
            "materiasAprobadas",
            JSON.stringify([...materiasAprobadas])
          );
          renderizarMalla(); // Actualizar para recalcular habilitados
        });

        const label = document.createElement("label");
        label.htmlFor = materia.codigo;
        label.innerHTML = `<strong>${materia.nombre}</strong><br>
        Código: ${materia.codigo}<br>
        Créditos: ${materia.creditos}`;

        div.appendChild(checkbox);
        div.appendChild(label);
        bloque.appendChild(div);
      });

      contenedor.appendChild(bloque);
    }

    // Progreso
    const creditosAprobados = calcularCreditosAprobados();
    let porcentaje = (creditosAprobados / TOTAL_CREDITOS) * 100;
    if (porcentaje > 100) porcentaje = 100;
    porcentajeTexto.textContent = `${porcentaje.toFixed(1)}%`;

    // Extra info (Saber Pro y Seminario)
    const infoExtra = document.createElement("div");
    infoExtra.className = "extra";

    if (creditosAprobados >= CREDITOS_SEMINARIO) {
      infoExtra.innerHTML += "✅ Puedes matricular Seminario de Grado.<br>";
    } else {
      infoExtra.innerHTML +=
        "❌ Te faltan créditos para Seminario de Grado (mínimo 128).<br>";
    }

    if (creditosAprobados >= TOTAL_CREDITOS * PORCENTAJE_SABER_PRO) {
      infoExtra.innerHTML += "✅ Puedes presentar la prueba Saber Pro.<br>";
    } else {
      infoExtra.innerHTML +=
        "❌ Aún no cumples el 75% para la prueba Saber Pro.<br>";
    }

    const semestresRestantes = calcularSemestresRestantes();
    infoExtra.innerHTML += `🗓️ Estimado: te faltan aproximadamente <strong>${semestresRestantes}</strong> semestre(s).`;

    contenedor.appendChild(infoExtra);
  }

  renderizarMalla();
});
