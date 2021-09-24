export default {
  global: {
    componenteFormativo:
      'Propuesta ambiental y protocolos de producción limpia ',
    descripcionCurso:
      'El medio ambiente es uno de los pilares de la humanidad, razón por la cual, diariamente se desarrollan planes y propuestas de mejoramiento ambiental con el fin de mitigar las acciones humanas que impiden el desarrollo sostenible y cuidado de nuestro entorno, nuestro hogar.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Tratados y convenios ambientales ratificados por Colombia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Convenio de Diversidad Biológica o Convention on Biological Diversity',
            hash: 't_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Convención de las Naciones Unidas de Lucha contra la Desertificación (UNCCD)',
            hash: 't_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Foro de las Naciones Unidas sobre Bosques (UNFF)',
            hash: 't_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo:
              'Unión Internacional para la Protección de las Obtenciones Vegetales (UPOV)',
            hash: 't_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Convenio de Viena para la Protección de la Capa de Ozono',
            hash: 't_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Convenio Marco Cambio Climático',
            hash: 't_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Protocolo de Kioto',
            hash: 't_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo:
              'Convenio de Basilea sobre el Movimiento Transfronterizo de Desechos Peligrosos',
            hash: 't_8',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.9',
            titulo: 'Convenio de Rotterdam',
            hash: 't_9',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.10',
            titulo:
              'Convenio de Estocolmo sobre Contaminantes Orgánicos Persistentes',
            hash: 't_10',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.11',
            titulo: 'Tratados de Cooperación Amazónica (TCA)',
            hash: 't_11',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Sistema Nacional Ambiental (SINA)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Autoridades Ambientales Nacionales',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Autoridades Ambientales Regionales',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Autoridades Ambientales Urbanas',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Indicadores Ambientales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Plan de acción ambiental',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Ciclo Deming – PHVA',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Pasos para realizar un plan de acción',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Plantear objetivos y estrategias',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Plantear tareas y definir tiempos',
            hash: 't_6_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.3',
            titulo: 'Ejecutar el plan',
            hash: 't_6_3',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Buenas Prácticas de Manufactura (BPM)',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia: 'ANLA. (2020). Autoridad Nacional de Licencias Ambientales. ',
      link: 'http://www.anla.gov.co/entidad/institucional/objeto-y-funciones',
    },

    {
      referencia: 'Cancillería de Colombia. (2018). Cancillería de Colombia. ',
      link: 'https://www.cancilleria.gov.co/',
    },

    {
      referencia:
        'Decreto 3570 de 2011, Por el cual se modifican los objetivos y la estructura del Ministerio de Ambiente y Desarrollo Sostenible y se integra el Sector Administrativo de Ambiente y Desarrollo Sostenible. (Diario Oficial 48205, septiembre 27 de 2011).',
    },

    {
      referencia: 'Ecología Verde. (2018). Ecología Verde. ',
      link:
        'https://www.ecologiaverde.com/huella-ecologica-definicion-sencilla-para-ninos-1124.html',
    },

    {
      referencia: 'IDEAM. (2020). IDEAM. ',
      link: 'http://www.ideam.gov.co/web/entidad/manual-funciones',
    },

    {
      referencia:
        'Industria Alimenticia. (2013). Las buenas prácticas de manufactura (BPM). ',
      link:
        'https://search-proquest-com.bdigital.sena.edu.co/docview/1448016394?accountid=31491',
    },

    {
      referencia:
        'Instituto Uruguayo de Normas Técnicas. (2009). Herramientas para la Mejora de la Calidad.',
    },

    {
      referencia: 'Minambiente. (2020). Convención de Viena. Minambiente. ',
      link:
        'https://www.minambiente.gov.co/index.php/component/content/article?id=193:plantilla-asuntos-ambientales-y-sectorial-y-urbana-sin-galeria-',
    },

    {
      referencia:
        'NACIONES UNIDAS CHILE. (2020). Convención de las Naciones Unidas de Lucha contra la Desertificación. Naciones Unidas Chile. ',
      link:
        'https://www.unccd.int/sites/default/files/relevant-links/2017-08/UNCCD_Convention_text_SPA.pdf',
    },

    {
      referencia:
        'Observatorio Colombiano de Gobernanza del Agua OCGA. (2020). AUTORIDADES AMBIENTALES EN COLOMBIA. ',
      link:
        'https://www.unccd.int/sites/default/files/relevant-links/2017-08/UNCCD_Convention_text_SPA.pdf',
    },

    { referencia: 'Pareja, D. (2019). ¿Qué es un plan de acción?' },

    {
      referencia:
        'Parques Nacionales Naturales de Colombia . (2020). Parques Nacionales Naturales de Colombia. ',
      link:
        'https://www.parquesnacionales.gov.co/portal/es/organizacion/objetivos-y-funciones/',
    },

    {
      referencia: 'Secretaría del Convenio de Rotterdam. (2004). FAO. ',
      link: 'http://www.fao.org/3/a0137s/a0137s00.htm#Contents',
    },

    {
      referencia:
        'Secretaría del Convenio sobre la Diversidad Biológica. (2020). www.cbd.int/int. ',
      link:
        'https://www.cbd.int/undb/media/factsheets/undb-factsheets-es-web.pdf',
    },

    {
      referencia:
        'Tolón Becerra, A., & Lastra Bravo, X. (2013). HUELLA HÍDRICA Y SOSTENIBILIDAD DEL USO DE LOS RECURSOS. Revista electrónica de medio ambiente, 56.',
    },

    {
      referencia: 'UPOV. (2020). UPOV. ',
      link: 'https://www.upov.int/portal/index.html.es',
    },
  ],
  glosario: [
    {
      termino: 'Agenda 21',
      significado:
        'es un plan de acción exhaustivo que habrá de ser adoptado universal, nacional y localmente por organizaciones del sistema de naciones unidas, gobiernos y grupos principales de cada zona en la cual el ser humano influya en el medio ambiente.',
    },
    {
      termino: 'Cambio climático',
      significado:
        'es la variación global del clima de la tierra. Esta variación se debe a causas naturales y a la acción del hombre y se produce sobre todos los parámetros climáticos: temperatura, precipitaciones, nubosidad, entre otras, a muy diversas escalas de tiempo.',
    },
    {
      termino: 'Capa de ozono',
      significado:
        'la capa de ozono es una capa protectora dentro de la atmósfera terrestre que tiene la función de preservar la vida del planeta tierra haciendo las veces de escudo contra la radiación ultravioleta (rayos uv).',
    },
    {
      termino: 'Contaminantes Orgánicos Persistentes (COP)',
      significado:
        'son sustancias químicas altamente tóxicas, que pueden durar muchos años antes de degradarse, acumulándose en el tejido graso de los seres vivos. Además, estas sustancias se pueden evaporar y viajar grandes distancias por el aire y el agua, por lo cual el impacto es a nivel local, regional y global.',
    },
    {
      termino: 'Desertificación',
      significado:
        'consiste en una degradación persistente de los ecosistemas de las tierras secas producida por las variaciones climáticas y la actividad del hombre. Está presente en todos los continentes (salvo en la Antártida) y afecta al medio de vida de millones de personas, entre los que se encuentran buena parte de los pobres que viven en las tierras secas.',
    },
    {
      termino: 'Gases de Efecto Invernadero (GEI)',
      significado:
        'son compuestos químicos en estado gaseoso como el vapor de agua, el dióxido de carbono (CO2), el metano (CH4) y el óxido nitroso (N2O) que se acumulan en la atmósfera de la tierra y que son capaces de absorber la radiación infrarroja del sol, aumentando y reteniendo el calor en la atmósfera.',
    },
    {
      termino: 'Huella ecológica',
      significado:
        'es uno de los indicadores más importantes para evaluar el impacto ambiental de las actividades que se realizan habitualmente, es decir, se evalúa el impacto que tiene el medio ambiente cuando se utiliza un terreno ecológicamente productivo para obtener los recursos deseados.',
    },
    {
      termino: 'Huella hídrica',
      significado:
        'este indicador permite cuantificar el volumen total de agua utilizada por los habitantes de una determinada región.',
    },
    {
      termino: 'Recursos naturales',
      significado:
        'son los bienes de origen natural, que no se encuentran alterados por la actividad humana, de los cuales las sociedades se valen mediante su explotación para lograr su bienestar y desarrollo.',
    },
    {
      termino: 'Sequía',
      significado:
        'es un periodo seco que se prolonga de manera significativa. Se caracteriza porque durante la sequía la disponibilidad del agua está por debajo de sus niveles habituales y, en consecuencia, no puede abastecer las necesidades de los seres vivos (animales, plantas y personas) que habitan en una región determinada.',
    },
  ],
  complementario: [
    {
      texto:
        'Decreto 3570 de 2011. Por el cual se modifican los objetivos y la estructura del Ministerio de Ambiente y Desarrollo Sostenible y se integra el Sector Administrativo de Ambiente y Desarrollo Sostenible. (Diario Oficial 48205, septiembre 27 de 2011).',
      tipo: 'PDF',
      descarga: '/downloads/Decreto_3570_2011.pdf',
    },
    {
      texto:
        'Instituto Uruguayo de Normas Técnicas (2009). Herramientas para la mejora de la calidad.',
      tipo: 'Capítulo de libro',
      descarga: '/downloads/Herramientas_mejora_de_calidad.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Kateryn Dallan Valderrama Varón',
        cargo: 'Experta temática',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'José Gregorio Ramírez',
        cargo: 'Experto temático',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Vilma Lucía Perilla Méndez',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial – Regional Distrito Capital',
      },
      {
        nombre: 'Julieth Paola Vital López',
        cargo: 'Correctora de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: ['Oscar Iván Uribe Ortiz'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: ['Gilberto Junior Rodríguez Rodríguez'],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: ['José Jaime Luis Tang Pinzón'],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: ['María Carolina Tamayo López'],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: ['Víctor Raúl Cárdenas Cáceres'],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: ['Wilson Andrés Arenales Cáceres'],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: ['Zuleidy María Ruiz Torres'],
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Ricardo Alfonso González Vargas',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jenny Paola Montillo Gélvez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
