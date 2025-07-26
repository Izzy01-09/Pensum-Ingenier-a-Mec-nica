let aprobadas = JSON.parse(localStorage.getItem("materiasAprobadas")) || [];

const contenedor = document.getElementById("malla");
const porcentajeTexto = document.getElementById("porcentaje");
const alertasDiv = document.getElementById("alertas");

function guardarAprobadas() {
  localStorage.setItem("materiasAprobadas", JSON.stringify(aprobadas));
}

function creditosAprobados() {
  return materias
    .filter(m => aprobadas.includes(m.codigo))
    .reduce((sum, m) => sum + m.creditos, 0);
}

function puedeCursar(materia) {
  return materia.prerrequisitos.every(pr => aprobadas.includes(pr));
}

function calcularProgreso() {
  const totalCreditos = 166;
  const aprobados = creditosAprobados();
  const restantes = totalCreditos - aprobados;
  const porcentaje = ((aprobados / totalCreditos) * 100).toFixed(1);
  porcentajeTexto.textContent = `${porcentaje}% (${aprobados}/${totalCreditos} créditos)`;

  let alertas = [];

  if (aprobados >= 125) {
    alertas.push("🎓 Ya puedes presentar la prueba Saber Pro.");
  }

  if (aprobados >= 128) {
    alertas.push("📝 Puedes matricular el Seminario de Grado.");
  }

  const creditosPorSemestre = 20;
  const estimadoFaltantes = Math.ceil(restantes / creditosPorSemestre);
  alertas.push(`⏳ Estimado: ${estimadoFaltantes} semestre(s) para completar la carrera.`);

  alertasDiv.innerHTML = alertas.join("<br>");
}

function renderMalla() {
  contenedor.innerHTML = "";

  const materiasPorSemestre = {};
  for (let i = 1; i <= 10; i++) materiasPorSemestre[i] = [];
  materias.forEach(m => materiasPorSemestre[m.semestre]?.push(m));

  for (let semestre in materiasPorSemestre) {
    const bloque = document.createElement("section");
    bloque.innerHTML = `<h2>📘 Semestre ${semestre}</h2>`;

    const grupo = document.createElement("div");
    grupo.classList.add("grupo-semestre");

    materiasPorSemestre[semestre].forEach(materia => {
      const div = document.createElement("div");
      div.classList.add("card");

      const estaAprobada = aprobadas.includes(materia.codigo);
      const habilitada = puedeCursar(materia);

      if (estaAprobada) div.classList.add("aprobada");
      else if (!habilitada) div.classList.add("bloqueada");

      div.innerHTML = `
        <div class="nombre">${materia.nombre}</div>
        <div class="codigo">${materia.codigo}</div>
        <div class="creditos">Créditos: ${materia.creditos}</div>
      `;

      div.onclick = () => {
        if (estaAprobada) {
          aprobadas = aprobadas.filter(c => c !== materia.codigo);
        } else {
          aprobadas.push(materia.codigo);
        }
        guardarAprobadas();
        renderMalla();
        calcularProgreso();
      };

      grupo.appendChild(div);
    });

    bloque.appendChild(grupo);
    contenedor.appendChild(bloque);
  }

  calcularProgreso();
}

renderMalla();
calcularProgreso();
