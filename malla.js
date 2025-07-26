const materias = [
  {
    codigo: "452004",
    nombre: "ALGORITMO Y PROGRAMACION",
    creditos: 2,
    semestre: 1,
    prerrequisitos: []
  },
  {
    codigo: "452007",
    nombre: "APRENDIZAJE AUTONOMO",
    creditos: 1,
    semestre: 1,
    prerrequisitos: []
  },
  {
    codigo: "452001",
    nombre: "CALCULO I",
    creditos: 3,
    semestre: 1,
    prerrequisitos: []
  },
  {
    codigo: "452006",
    nombre: "COMPETENCIAS COMUNICATIVAS I",
    creditos: 2,
    semestre: 1,
    prerrequisitos: []
  },
  {
    codigo: "452002",
    nombre: "GEOMETRIA",
    creditos: 3,
    semestre: 1,
    prerrequisitos: []
  },
  {
    codigo: "452005",
    nombre: "INTRODUCCION A LA INGENIERIA MECANICA",
    creditos: 2,
    semestre: 1,
    prerrequisitos: []
  },
  {
    codigo: "452003",
    nombre: "QUIMICA GENERAL Y LAB",
    creditos: 3,
    semestre: 1,
    prerrequisitos: []
  }
  // Aquí seguirán las demás materias del semestre 2 en adelante...
];
  ,
  {
    codigo: "452009",
    nombre: "ALGEBRA LINEAL",
    creditos: 3,
    semestre: 2,
    prerrequisitos: ["452002"] // Geometría
  },
  {
    codigo: "452008",
    nombre: "CALCULO II",
    creditos: 3,
    semestre: 2,
    prerrequisitos: ["452001"] // Cálculo I
  },
  {
    codigo: "452013",
    nombre: "COMPETENCIAS COMUNICATIVAS II",
    creditos: 2,
    semestre: 2,
    prerrequisitos: ["452006"] // Competencias Comunicativas I
  },
  {
    codigo: "452012",
    nombre: "DIBUJO TÉCNICO I",
    creditos: 2,
    semestre: 2,
    prerrequisitos: ["452005"] // Introducción a la Ingeniería Mecánica
  },
  {
    codigo: "452010",
    nombre: "FÍSICA I Y LABORATORIO",
    creditos: 3,
    semestre: 2,
    prerrequisitos: ["452001"] // Cálculo I
  },
  {
    codigo: "452011",
    nombre: "QUÍMICA DE POLÍMEROS",
    creditos: 3,
    semestre: 2,
    prerrequisitos: ["452003"] // Química General y Lab
  },
  {
    codigo: "452014",
    nombre: "UNIVERSIDAD Y CONTEXTO",
    creditos: 1,
    semestre: 2,
    prerrequisitos: ["452007"] // Aprendizaje Autónomo
  }
  ,
  {
    codigo: "452015",
    nombre: "CÁLCULO III",
    creditos: 3,
    semestre: 3,
    prerrequisitos: ["452009"] // Álgebra Lineal
  },
  {
    codigo: "452018",
    nombre: "DIBUJO TÉCNICO II",
    creditos: 2,
    semestre: 3,
    prerrequisitos: ["452012"] // Dibujo Técnico I
  },
  {
    codigo: "452021",
    nombre: "ELECTIVA LIBRE I",
    creditos: 2,
    semestre: 3,
    prerrequisitos: []
  },
  {
    codigo: "452017",
    nombre: "ELECTROTÉCNIA Y ELECTRÓNICA",
    creditos: 2,
    semestre: 3,
    prerrequisitos: ["452010"] // Física I y Laboratorio
  },
  {
    codigo: "452016",
    nombre: "FÍSICA II Y LABORATORIO",
    creditos: 3,
    semestre: 3,
    prerrequisitos: ["452008"]
  ,
  {
    codigo: "452022",
    nombre: "ECUACIONES DIFERENCIALES",
    creditos: 3,
    semestre: 4,
    prerrequisitos: ["452015"] // Cálculo III
  },
  {
    codigo: "452024",
    nombre: "ESTADISTICA",
    creditos: 3,
    semestre: 4,
    prerrequisitos: ["452008"] // Cálculo II
  },
  {
    codigo: "452026",
    nombre: "ESTÁTICA",
    creditos: 3,
    semestre: 4,
    prerrequisitos: ["452016"] // Física II y Laboratorio
  },
  {
    codigo: "452023",
    nombre: "FÍSICA III Y LABORATORIO",
    creditos: 3,
    semestre: 4,
    prerrequisitos: ["452015", "452010"] // Cálculo III y Física I
  },
  {
    codigo: "452025",
    nombre: "GEOMETRÍA DESCRIPTIVA",
    creditos: 2,
    semestre: 4,
    prerrequisitos: ["452018"] // Dibujo Técnico II
  },
  {
    codigo: "452028",
    nombre: "INGLÉS I",
    creditos: 2,
    semestre: 4,
    prerrequisitos: []
  },
  {
    codigo: "452027",
    nombre: "MATERIALES DE INGENIERÍA II",
    creditos: 2,
    semestre: 4,
    prerrequisitos: ["452019"] // Materiales de Ingeniería I
  }
  ,
  {
    codigo: "452033",
    nombre: "DINÁMICA",
    creditos: 3,
    semestre: 5,
    prerrequisitos: ["452026"] // Estática
  },
  {
    codigo: "452030",
    nombre: "ELECTIVA LIBRE II",
    creditos: 2,
    semestre: 5,
    prerrequisitos: []
  },
  {
    codigo: "452035",
    nombre: "HUMANIDADES II",
    creditos: 2,
    semestre: 5,
    prerrequisitos: ["452020"] // Humanidades I
  },
  {
    codigo: "452036",
    nombre: "INGLÉS II",
    creditos: 2,
    semestre: 5,
    prerrequisitos: ["452028"] // Inglés I
  },
  {
    codigo: "452031",
    nombre: "METODOLOGÍA DE LA INVESTIGACIÓN",
    creditos: 2,
    semestre: 5,
    prerrequisitos: ["452024"] // Estadística
  },
  {
    codigo: "452029",
    nombre: "MÉTODOS NUMÉRICOS",
    creditos: 3,
    semestre: 5,
    prerrequisitos: ["452022"] // Ecuaciones Diferenciales
  },
  {
    codigo: "452034",
    nombre: "RESISTENCIA DE MATERIALES I",
    creditos: 3,
    semestre: 5,
    prerrequisitos: ["452027", "452026", "452022", "452011"]
    // Materiales II, Estática, Ecuaciones Diferenciales, Química de Polímeros
  }
  ,
  {
    codigo: "452042",
    nombre: "INGLÉS III",
    creditos: 2,
    semestre: 6,
    prerrequisitos: ["452036"] // Inglés II
  },
  {
    codigo: "452037",
    nombre: "MECÁNICA DE FLUIDOS",
    creditos: 3,
    semestre: 6,
    prerrequisitos: ["452032", "452026"] // Termodinámica y Estática
  },
  {
    codigo: "452038",
    nombre: "MECANISMOS",
    creditos: 3,
    semestre: 6,
    prerrequisitos: ["452033"] // Dinámica
  },
  {
    codigo: "452040",
    nombre: "METROLOGÍA Y CONTROL DE CALIDAD",
    creditos: 3,
    semestre: 6,
    prerrequisitos: ["452024"] // Estadística
  },
  {
    codigo: "452039",
    nombre: "RESISTENCIA DE MATERIALES II",
    creditos: 3,
    semestre: 6,
    prerrequisitos: ["452034"] // Resistencia de Materiales I
  },
  {
    codigo: "452032",
    nombre: "TERMODINÁMICA",
    creditos: 3,
    semestre: 6,
    prerrequisitos: []
  },
  {
    codigo: "452041",
    nombre: "TRANSFERENCIA DE CALOR",
    creditos: 3,
    semestre: 6,
    prerrequisitos: ["452032"] // Termodinámica
  }
  ,
  {
    codigo: "452043",
    nombre: "DISEÑO DE MÁQUINAS I",
    creditos: 3,
    semestre: 7,
    prerrequisitos: ["452039"] // Resistencia de Materiales II
  },
  {
    codigo: "452047",
    nombre: "ELECTIVA DE CARRERA I",
    creditos: 2,
    semestre: 7,
    prerrequisitos: ["452031"] // Metodología de la Investigación
    // NOTA: también menciona 86 créditos acumulados, pero aquí seguimos con el curso.
  },
  {
    codigo: "452048",
    nombre: "GESTIÓN AMBIENTAL",
    creditos: 1,
    semestre: 7,
    prerrequisitos: ["452042"] // Inglés III
  },
  {
    codigo: "452049",
    nombre: "INGLÉS IV",
    creditos: 2,
    semestre: 7,
    prerrequisitos: ["452041"] // Transferencia de Calor
  },
  {
    codigo: "452045",
    nombre: "MÁQUINAS TÉRMICAS",
    creditos: 3,
    semestre: 7,
    prerrequisitos: ["452037"] // Mecánica de Fluidos
  },
  {
    codigo: "452046",
    nombre: "NEUMÁTICA E HIDRÁULICA",
    creditos: 3,
    semestre: 7,
    prerrequisitos: ["452040"] // Metrología y Control de Calidad
  },
  {
    codigo: "452044",
    nombre: "PROCESOS DE MANUFACTURA I",
    creditos: 3,
    semestre: 7,
    prerrequisitos: ["452040"] // Metrología y Control de Calidad
  }  ,
  {
    codigo: "452052",
    nombre: "CONVERSIÓN DE ENERGÍA",
    creditos: 4,
    semestre: 8,
    prerrequisitos: ["452046", "452045"] // Neumática e Hidráulica y Máquinas Térmicas
  },
  {
    codigo: "452050",
    nombre: "DISEÑO DE MÁQUINAS II",
    creditos: 3,
    semestre: 8,
    prerrequisitos: ["452043"] // Diseño de Máquinas I
  },
  {
    codigo: "452055",
    nombre: "ECONOMÍA PARA INGENIEROS",
    creditos: 1,
    semestre: 8,
    prerrequisitos: ["452048"] // Gestión Ambiental
  },
  {
    codigo: "452054",
    nombre: "ELECTIVA DE CARRERA II",
    creditos: 2,
    semestre: 8,
    prerrequisitos: ["452044", "452040"] // Procesos de Manufactura I y Metrología
  },
  {
    codigo: "452051",
    nombre: "PROCESOS DE MANUFACTURA II",
    creditos: 3,
    semestre: 8,
    prerrequisitos: ["452044"] // Procesos de Manufactura I
  },
  {
    codigo: "452053",
    nombre: "TALLER DE MÁQUINAS Y HERRAMIENTAS",
    creditos: 3,
    semestre: 8,
    prerrequisitos: ["452044"]
    // Aunque en el Excel dice 136 créditos acumulados, no tiene un curso directo como prerrequisito.
  }  ,
  {
    codigo: "452059",
    nombre: "CAD CAM",
    creditos: 3,
    semestre: 9,
    prerrequisitos: ["452053"] // Taller de Máquinas y Herramientas
  },
  {
    codigo: "452062",
    nombre: "ELABORACIÓN Y EVALUACIÓN DE PROYECTOS",
    creditos: 2,
    semestre: 9,
    prerrequisitos: ["452055"] // Economía para Ingenieros
  },
  {
    codigo: "452060",
    nombre: "ELECTIVA DE CARRERA III",
    creditos: 2,
    semestre: 9,
    prerrequisitos: ["452051"] // Procesos de Manufactura II
  },
  {
    codigo: "452057",
    nombre: "INSTRUMENTACIÓN Y CONTROL DE PROCESOS",
    creditos: 3,
    semestre: 9,
    prerrequisitos: ["452053", "452037"] // Taller de Máquinas y Mecánica de Fluidos
  },
  {
    codigo: "452056",
    nombre: "LUBRICACIÓN Y MANTENIMIENTO",
    creditos: 3,
    semestre: 9,
    prerrequisitos: ["452052"] // Conversión de Energía
  },
  {
    codigo: "452058",
    nombre: "REFRIGERACIÓN Y AIRE ACONDICIONADO",
    creditos: 3,
    semestre: 9,
    prerrequisitos: ["452052"] // Conversión de Energía
  },
  {
    codigo: "452061",
    nombre: "SEMINARIO DE GRADO",
    creditos: 1,
    semestre: 9,
    prerrequisitos: ["452059"] // CAD CAM
    // También aplica la regla de mínimo 128 créditos (ya considerada en el script)
  }  ,
  {
    codigo: "452064",
    nombre: "CIM",
    creditos: 3,
    semestre: 10,
    prerrequisitos: ["452059"] // CAD CAM
  },
  {
    codigo: "452063",
    nombre: "ELECTIVA DE PROFUNDIZACION I",
    creditos: 3,
    semestre: 10,
    prerrequisitos: []
  },
  {
    codigo: "452065",
    nombre: "ELECTIVA DE PROFUNDIZACION II",
    creditos: 3,
    semestre: 10,
    prerrequisitos: []
  },
  {
    codigo: "452067",
    nombre: "GERENCIA PARA INGENIEROS",
    creditos: 1,
    semestre: 10,
    prerrequisitos: ["452062"] // Elaboración y Evaluación de Proyectos
  },
  {
    codigo: "452066",
    nombre: "PROYECTO DE GRADO",
    creditos: 3,
    semestre: 10,
    prerrequisitos: ["452061"] // Seminario de Grado
  }
