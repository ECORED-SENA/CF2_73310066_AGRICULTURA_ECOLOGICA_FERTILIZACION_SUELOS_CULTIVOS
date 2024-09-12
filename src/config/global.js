export default {
  global: {
    componenteFormativo: 'Manejo agroecológico de suelos',
    descripcionCurso:
      'Este componente formativo aborda el manejo agroecológico de suelos, explorando métodos y prácticas para satisfacer las necesidades nutricionales de los cultivos. Incluye conceptos básicos sobre el suelo como sistema, técnicas de conservación y recuperación del suelo, y prácticas de fertilización agroecológica. Se promueve la sostenibilidad agrícola y la preservación de recursos naturales mediante enfoques ecológicos y la rotación de cultivos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Generalidades',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'El suelo como sistema',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Prácticas agroecológicas de manejo de suelos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Prácticas de manejo sostenible de suelos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Prácticas de recuperación de suelos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Prácticas de fertilización agroecológica',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
  complementario: [
    {
      tema: 'Generalidades',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2023). Introducción - Manejo y conservación del suelo. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/GQDvZLMCT5I?feature=shared',
    },
    {
      tema: 'El suelo como sistema',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2020). Propiedades Biológicas del Suelo. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/xBgGSpUI8eo?feature=shared',
    },
    {
      tema: 'Prácticas agroecológicas de manejo de suelos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2022). Conflictos de uso de suelo. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/sJ25zmwBIE4?feature=shared',
    },
    {
      tema: 'Prácticas de manejo sostenible de suelos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2022). Prácticas agrícolas de manejo para transición o reconversión [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/Ss76Q7ojE5Y?feature=shared',
    },
    {
      tema: 'Prácticas de recuperación de suelos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2020). Prácticas y Aplicaciones de Agricultura Ecológica - Intro - La Nutrición Vegetal en la Agricultura [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/UALQDw4FasA?feature=shared',
    },
    {
      tema: 'Prácticas de fertilización agroecológica',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2022). Fertilización orgánica y química [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/dZU4zjHrhw4?feature=shared',
    },
  ],
  glosario: [
    {
      termino: 'Agricultura biodinámica',
      significado:
        'un enfoque holístico de la agricultura que considera la granja como un organismo vivo. Utiliza prácticas específicas como la preparación de compost y el uso de preparados biodinámicos para mejorar la salud del suelo y las plantas.',
    },
    {
      termino: 'Agricultura regenerativa',
      significado:
        'un enfoque de la agricultura que se centra en la restauración y mejora de la salud del suelo, aumentando la biodiversidad y capturando carbono. Utiliza prácticas como la rotación de cultivos, el compostaje y el uso de cultivos de cobertura para mantener la fertilidad del suelo y reducir la erosión.',
    },
    {
      termino: 'Agrosilvicultura',
      significado:
        'un sistema de uso de la tierra que combina la agricultura y la silvicultura, integrando árboles y arbustos en las tierras de cultivo y los pastizales. Esta práctica mejora la biodiversidad, protege el suelo y puede aumentar la productividad agrícola.',
    },
    {
      termino: 'Biodiversidad',
      significado:
        'la variedad de vida en el mundo o en un hábitat o ecosistema particular. En el contexto de la agroecología, se refiere a la diversidad de plantas, animales, insectos y microorganismos en un sistema agrícola.',
    },
    {
      termino: 'Captura de carbono',
      significado:
        'el proceso de captura y almacenamiento de dióxido de carbono (CO<sub>2</sub>) de la atmósfera. En la agricultura regenerativa, esto se logra mediante prácticas que aumentan la cantidad de carbono almacenado en el suelo, como la plantación de cultivos de cobertura y la mejora de la salud del suelo.',
    },
    {
      termino: 'Compostaje',
      significado:
        'el proceso de descomposición de materia orgánica, como restos de plantas y alimentos, en una forma que puede ser utilizada como enmienda del suelo para mejorar su fertilidad y estructura.',
    },
    {
      termino: 'Cultivos de cobertura',
      significado:
        'plantas que se cultivan principalmente para proteger y mejorar la calidad del suelo, evitando la erosión, mejorando la estructura del suelo y aumentando la biodiversidad.',
    },
    {
      termino: 'Permacultura',
      significado:
        'un sistema de diseño agrícola que imita los patrones y características de los ecosistemas naturales. Integra plantas, animales, suelos y agua en un entorno armonioso y autosuficiente, promoviendo la sostenibilidad a largo plazo.',
    },
    {
      termino: 'Rotación de cultivos',
      significado:
        'la práctica de alternar diferentes cultivos en el mismo campo en diferentes temporadas para mejorar la fertilidad del suelo y reducir la incidencia de plagas y enfermedades.',
    },
    {
      termino: 'Sistemas agroecológicos urbanos',
      significado:
        'aplicación de los principios de la agroecología en entornos urbanos, creando huertos comunitarios, jardines en azoteas y otras formas de producción de alimentos en la ciudad. Estos sistemas no solo proporcionan alimentos frescos y locales, sino que también fomentan la cohesión comunitaria y la educación ambiental.',
    },
  ],
  referencias: [
    {
      referencia:
        'Corpoica. (2017). Así mejoran los sistemas agroforestales la cacaocultura colombiana.',
      link: '',
    },
    {
      referencia:
        'Escobar, J. C., Zuluaga, J. J., Colorado, G. y Cárdenas, C. A. (1998). Tecnología para la producción de lombricompuesto. Alternativa para desarrollar una agricultura sostenible. Bogotá: Produmedios.',
      link: '',
    },
    {
      referencia:
        'Fonseca, P. (2016). ¿Qué tipos de productos corrigen problemas en el suelo?',
      link:
        'https://www.contextoganadero.com/reportaje/que-tipos-de-productos-corrigen-problemas-en-el-suelo',
    },
    {
      referencia:
        'Gosálbez, C. (2012). Rotaciones: una técnica de horticultura imprescindible.  Planeta huerto.',
      link:
        'https://www.planetahuerto.es/revista/rotaciones-una-tecnica-de-horticultura-imprescindible_00115',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). (2006). Crear y manejar un huerto escolar. Un manual para profesores, padres y comunidades.',
      link: 'https://www.fao.org/4/a0218s/a0218s00.htm',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). (2014). Una huerta para todos. Manual de auto-instrucción.',
      link:
        'https://openknowledge.fao.org/server/api/core/bitstreams/a7b544d0-a107-4616-a05e-f88a2de6a7ce/content',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO) y Gobernación de Antioquia. (2015). Sistemas de Abastecimiento Alimentario. Bases para la Inclusión de la Agricultura Familiar.',
      link:
        'https://openknowledge.fao.org/server/api/core/bitstreams/3d320c7d-10fb-4856-824d-e79359276809/content',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO) e Instituto Colombiano de Desarrollo Rural (INCODER). (2016). Guía para la implementación de Centros Demostrativos de Capacitación con enfoque agroecológico.',
      link:
        'https://openknowledge.fao.org/server/api/core/bitstreams/04ccd291-b9ac-40e2-9d7e-b07173835bcd/content',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nina Elvira Rocha Nieto',
          cargo: 'Experta temática',
          centro:
            'Centro de Atención al Sector Agropecuario - Regional Risaralda',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Gissela Del Carmen Alvis Ladino',
          cargo: 'Diseñadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Gloria Lida Alzate Suarez',
          cargo: 'Diseñadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabián Zárate Saavedra',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edwin Sneider Velandia Suarez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locutor',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Locutor',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Germán Acosta Ramos',
          cargo: 'Locutor',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locutor',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Productor pódcast',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'José Eduardo Solano Rivero',
          cargo: 'Productor pódcast',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Gustavo Adolfo Contreras Barranco',
          cargo: 'Guionista validador',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Guionista validador',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
