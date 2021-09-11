<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="zoom-in")
      .titulo-principal__numero
        span 2
      h1 Sistema Nacional Ambiental (SINA) 

    img.img-a(src='@/assets/curso/tema_2/img_1.png', alt='')(data-aos="zoom-in-down")

    .row.p-5.justify-content-center(data-aos="zoom-in-down")
      .col-lg-10.bg02.p-4
        p.mb-0 La ley 99 de 1993 creó el Sistema Nacional Ambiental (SINA), que se define como el conjunto de orientaciones, normas, actividades, recursos, programas e instituciones que permiten la puesta en marcha de los principios generales ambientales contenidos en la Constitución Política de Colombia de 1991 y la ley 99 de 1993. 

    p.mb-5(data-aos="zoom-in-down") El SINA está integrado por el Ministerio del Medio Ambiente, las Corporaciones Autónomas Regionales (CAR), las Entidades Territoriales y los Institutos de Investigación adscritos y vinculados al Ministerio, y tiene como propósito asegurar la coordinación intersectorial en el ámbito público de las políticas, planes y programas en materia ambiental y de recursos naturales renovables.

    .row.justify-content-center.mb-5
      .col-lg-10
        .bg04.p-4.mb-5(data-aos="slide-left")
          p.text-center En Colombia existen diferentes autoridades ambientales todas adscritas al SINA, las cuales se pueden agrupar en autoridades nacionales, regionales y urbanas, como se observa en la siguiente imagen:  
        img.img-a(data-aos="slide-right")(src='@/assets/curso/tema_2/img_2.png', alt='')

    separador

    .titulo-segundo(data-aos="zoom-in")
      #t_2_1.h2 2.1. Autoridades Ambientales Nacionales 

    p.mb-5(data-aos="zoom-in") A continuación se realiza una breve descripción de cada una de las entidades que regulan el cumplimiento de lo dispuesto y por supuesto, la creación de políticas e iniciativas que promuevan el cuidado del medio ambiente a nivel nacional.

    .row.align-items-center.bg-color2.px-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="slide-left")

        .list.mb-5
          .list__item
              .list__item__bulletNumber 
                span 1
          .list__txt    
            h5.m-top.tx_bg1 Ministerio de Ambiente y Desarrollo Sostenible
        p De acuerdo con el Decreto 3570 de 2011 en su artículo 1º se decretaron los objetivos del Ministerio: 

        p “El Ministerio de Ambiente y Desarrollo Sostenible es el rector de la gestión del ambiente y de los recursos naturales renovables, encargado de orientar y regular el ordenamiento ambiental del territorio y de definir las políticas y regulaciones a las que se sujetarán la recuperación, conservación, protección, ordenamiento, manejo, uso y aprovechamiento sostenible de los recursos naturales renovables y del ambiente de la nación, a fin de asegurar el desarrollo sostenible, sin perjuicio de las funciones asignadas a otros sectores. 

        p El Ministerio Ambiente y Desarrollo Sostenible formulará, junto con el presidente de la República la política nacional ambiental y de recursos naturales renovables, de manera que se garantice el derecho de todas las personas a gozar de un medio ambiente sano y se proteja el patrimonio natural y la soberanía de la Nación.
      .col-lg-4.mb-4.mb-lg-0(data-aos="slide-right")
        img.img-a(data-aos="slide-right")(src='@/assets/curso/tema_2/img_3.png', alt='')

    .cajon.color-primario.p-4.mb-5(data-aos="zoom-in")
      p Corresponde al Ministerio de Ambiente y Desarrollo Sostenible dirigir el Sistema Nacional Ambiental (SINA), organizado de conformidad con la Ley 99 de 1993, para asegurar la adopción y ejecución de las políticas, planes, programas y proyectos respectivos, en orden a garantizar el cumplimiento de los deberes y derechos del Estado y de los particulares en relación con el ambiente y el patrimonio natural de la Nación”

    .row.justify-content-center.mb-5
      .col-lg-10.mb-4.mb-lg-0
        p.mb-5(data-aos="zoom-in-right") Así mismo, en el artículo 2º define las funciones que además de las funciones determinadas en la Constitución Política y en el artículo 59 de la Ley 489 de 1998 y en las demás leyes, el Ministerio de Ambiente y Desarrollo Sostenible debe cumplir. 

        .row.bor2.align-items-center.mb-5
          .col-lg-2.mb-4.mb-lg-0(data-aos="slide-up")
            figure
              img.img-a(src='@/assets/curso/tema_2/img_5.png', alt='')
          .col-lg-10.mb-4.mb-lg-0(data-aos="slide-down")
            p Para conocer en detalle las 19 funciones asignadas al Ministerio consulte el material complementario: Decreto 3571 de 2011. 

        p.mb-5(data-aos="zoom-in-left")  El Ministerio de Ambiente y Desarrollo Sostenible se encarga de definir la política Nacional Ambiental y promover la recuperación, conservación, protección, ordenamiento, manejo, uso y aprovechamiento de los recursos naturales renovables, a fin de asegurar el desarrollo sostenible y garantizar el derecho de todos los ciudadanos a gozar y heredar un ambiente sano.

        .row.justify-content-center(data-aos="zoom-in-left")
          .col-lg-10.mb-4.mb-lg-0.bg_d.p-2
            p.mb-0.text-center A continuación se observa el Marco Institucional del Ministerio, el cual define y regula su funcionamiento:  

    .row.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="slide-right")
        img.img-a(src='@/assets/curso/tema_2/img_6.png', alt='')
      .col-lg-8.mb-4.mb-lg-0(data-aos="slide-left")
        .tarjeta.tarjeta--gris.p-4.mb-5
          LineaTiempoC.color-acento-contenido(text-small)
            .row.justify-content-center(titulo="1968")
              .col-md-10.mb-4.mb-md-0
                p Se crea el INDERENA con el objetivo de ordenar el manejo de los recursos naturales.
            .row.justify-content-center(titulo="1974")
              .col-md-10.mb-4.mb-md-0
                p Se expide el Código Nacional de los Recursos Naturales, con el fin de prevenir y controlar la contaminación.
            .row.justify-content-center(titulo="1992")
              .col-md-10.mb-4.mb-md-0
                p Declaración de Río que consagra el concepto de desarrollo sostenible y garantizar la supervivencia del planeta.
            .row.justify-content-center(titulo="1993")
              .col-md-10.mb-4.mb-md-0
                p Creación del Ministerio del Medio Ambiente mediante la Ley 99 de 1993.
            .row.justify-content-center(titulo="1994")
              .col-md-10.mb-4.mb-md-0
                p Decreto 1868 - Estructura del Ministerio.
            .row.justify-content-center(titulo="1996")
              .col-md-10.mb-4.mb-md-0
                p Decreto Ley 344 - Facultades especiales al presidente de la República.
            .row.justify-content-center(titulo="1997")
              .col-md-10.mb-4.mb-md-0
                p Decreto 1687 - Por la cual se fusionan unas dependencias en el Ministerio del Medio Ambiente.
            .row.justify-content-center(titulo="1998")
              .col-md-10.mb-4.mb-md-0
                p Ley 489 - Facultades extraordinarias al presidente de la República.
            .row.justify-content-center(titulo="1999")
              .col-md-10.mb-4.mb-md-0
                p Decreto 1124 - Por el cual se modifica la Estructura del Ministerio del Medio Ambiente.
            .row.justify-content-center(titulo="2000")
              .col-md-10.mb-4.mb-md-0
                ul.lista-ul--color
                  li 
                    i.lista-ul__vineta
                    | Decreto 527- Por la cual se Modifica la estructura del Ministerio y la Planta de Personal del Ministerio del Medio Ambiente.
                  li 
                    i.lista-ul__vineta
                    | Decretos 1977 y 1998 - Los cuales modifican Planta y Estructura y se regresa al Decreto 1124 de 1999 y Decreto 2687 de 1999.
            .row.justify-content-center(titulo="2002")
              .col-md-10.mb-4.mb-md-0
                p Ley 790 - Facultades extraordinarias al presidente de la República.
            .row.justify-content-center(titulo="2003")
              .col-md-10.mb-4.mb-md-0
                ul.lista-ul--color
                  li 
                    i.lista-ul__vineta
                    | Decreto Reglamentario 190 – Por el cual se reglamenta parcialmente la Ley 790 de 2002.
                  li 
                    i.lista-ul__vineta
                    | Decreto 216 de 2003 - Por el cual se determinan los objetivos, la estructura orgánica del Ministerio de Ambiente, Vivienda y Desarrollo Territorial y se dictan otras disposiciones.
                  li 
                    i.lista-ul__vineta
                    | Decreto 217 - Por el cual se suprime los empleos de la planta de personal del Ministerio de Medio Ambiente y se establece la planta de personal del Ministerio de Ambiente, Vivienda y Desarrollo Territorial y se dictan otras disposiciones.

            .row.justify-content-center(titulo="2011")
              .col-md-10.mb-4.mb-md-0
                p Decreto 3570 - Por el cual se modifican los objetivos y la estructura del Ministerio de Ambiente y Desarrollo Sostenible y se integra el Sector Administrativo de Ambiente y Desarrollo Sostenible. (Minambiente , 2020)

    .list.mb-5
      .list__item
          .list__item__bulletNumber 
            span 2
      .list__txt    
        h5.m-top.tx_bg1  Autoridad Nacional de Licencias Ambientales 

    .row
      .col-md-8.mb-4.mb-md-0
        p(data-aos="slide-right") Es una Unidad Administrativa Especial, creada mediante el Decreto 3573 del 2011, de orden nacional encargada de que los proyectos, obras o actividades sujetos de licenciamiento, permiso o trámite ambiental cumplan con la normativa, de tal manera que contribuyan al desarrollo sostenible. 

        .bloque-texto-d.color-secundario.p-4.mb-5(data-aos="slide-left")
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            h3.text-regular Con respecto al recurso hídrico, esta autoridad se ocupa de otorgar los permisos de concesión de aguas superficiales y subterráneas, de prospección y exploración de aguas subterráneas y de la autorización de construcción en zonas que ocupen el cauce de una corriente o depósito de agua, así como hacer seguimiento a todas las licencias otorgadas.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 - ANLA, 2020
      .col-md-4.mb-4.mb-md-0.top_img(data-aos="zoom-out-right")
        img.img-a(src='@/assets/curso/tema_2/img_7.png', alt='')

    .row.mb-5.bg05.p-4.bg_top
      .col-md-8.mb-4.mb-md-0
        p.text-center.mb-0 Su objetivo principal es velar por el cumplimiento de la normativa ambiental por parte de los proyectos, obra o actividades que se encuentren sujetos de licenciamiento o trámites expedidos por la misma. 

    .list.mb-5(data-aos="zoom-out-down")
      .list__item
          .list__item__bulletNumber 
            span 3
      .list__txt    
        h5.m-top.tx_bg1 Parques Nacionales Naturales de Colombia

    p(data-aos="zoom-out-down") Es la Unidad Administrativa Especial encargada de la administración y manejo del Sistema de Parques Nacionales Naturales y la coordinación del Sistema Nacional de Áreas Protegidas.

    p(data-aos="zoom-out-up").mb-5 Sus funciones son todas las relacionadas a la administración y cuidado de los parques naturales de nuestro país al igual que proponer estrategias en materia de zonas amortiguadoras de las áreas del Sistema de Parques Nacionales Naturales.

    img.img-a.mb-5(data-aos="zoom-in-down")(src='@/assets/curso/tema_2/img_8.png', alt='')

    .list.mb-5(data-aos="zoom-out-down")
      .list__item
          .list__item__bulletNumber 
            span 4
      .list__txt    
        h5.m-top.tx_bg1 Instituto de Hidrología, Meteorología y Estudios Ambientales - IDEAM

    .row.mb-5
      .col-md-4.mb-4.mb-md-0(data-aos="slide-left")
        img.img-a(src='@/assets/curso/tema_2/img_9.png', alt='')
      .col-md-8.mb-4.mb-md-0(data-aos="slide-right")
        p.mb-4 El Instituto de Hidrología, Meteorología y Estudios Ambientales es una dependencia del Ministerio de Ambiente y Desarrollo Sostenible, la cual se encarga de la información científica, hidrológica, meteorológica y todo lo relacionado con el medio ambiente. Su misión consiste en ser apoyo técnico y científico al Sistema Nacional Ambiental, para la generación de conocimiento e información confiable y oportuna sobre el estado y las dinámicas de los recursos naturales y el medio ambiente en general, que facilite la definición de las políticas ambientales y toma de decisiones. 

        .row.justify-content-center
          .col-md-10.mb-4.mb-md-0.bor1.p-4
            p.mb-0.text-center “El objetivo general del Instituto es el de fortalecer la capacidad tecnológica, científica, administrativa y financiera para producir la información hidrológica, meteorológica y ambiental de manera oportuna y con la calidad que requieran la ciudadanía, los sectores públicos y privados del país” (IDEAM , 2020) 

    .row.justify-content-center.mb-5
      .col-md-6.mb-4.mb-md-0.bg06.p-2
        p.text-center.mb-0 Así mismo los objetivos misionales del IDEAM son: 

    ol.lista-ol--cuadro
      li(data-aos="slide-left") 
        .lista-ol--cuadro__vineta
          span 1
        | Generar información y conocimiento sobre los recursos naturales renovables e indicadores ambientales.
      li(data-aos="slide-right") 
        .lista-ol--cuadro__vineta
          span 2
        | Sistema de información ambiental.
      li(data-aos="slide-left")  
        .lista-ol--cuadro__vineta
          span 3
        | Hacer monitoreo y seguimiento de los Recursos Naturales Renovables.
      li(data-aos="slide-right")  
        .lista-ol--cuadro__vineta
          span 4
        | Servicios: Meteorología Aeronáutica, Redes hidrometeorológicas, Laboratorio físico químico ambiental, pronósticos y alertas. (IDEAM , 2020)

    separador

    .titulo-segundo(data-aos="zoom-in")
      #t_2_2.h2 2.2  Autoridades Ambientales Regionales

    .row.align-items-center.bg-color1.px-5.mb-3
      .col-lg-8.mb-4.mb-lg-0(data-aos="slide-left")
        p.mb-0 “Las Corporaciones Autónomas Regionales (CAR) son entes corporativos de carácter público, creados por la ley, integrados por las entidades territoriales que por sus características constituyen geográficamente un mismo ecosistema o conforman una unidad geopolítica, biogeográfica o hidrogeográfica, dotados de autonomía administrativa y financiera, patrimonio propio y personería jurídica, encargados por la ley de administrar, dentro del área de su jurisdicción el medio ambiente y los recursos naturales renovables y propender por su desarrollo sostenible, de conformidad con las disposiciones legales y las políticas del MADS.

    .row
      .col-lg-8.mb-4.mb-lg-0
        .bloque-texto-d.color-secundario.p-4.mb-5(data-aos="slide-right")
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            h3.text-regular Las Corporaciones para el desarrollo sostenible, cumplen las funciones anteriormente descritas para  las CAR, se encargan del aprovechamiento sostenible y racional de los recursos naturales renovables y del medio ambiente en su respectiva jurisdicción, de la promoción de la investigación científica e innovación tecnológica, de dirigir el proceso de planificación regional de uso del suelo para mitigar y desactivar presiones de explotación inadecuada del territorio, y propiciar con la cooperación de entidades nacionales e internacionales la generación de tecnologías apropiadas para la utilización y la conservación de los recursos y del entorno de su área de influencia
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 - Observatorio Colombiano de Gobernanza del Agua OCGA, 2020
      .col-lg-4.mb-4.mb-lg-0.top_img1(data-aos="zoom-out-down")
        img.img-a(src='@/assets/curso/tema_2/img_11.png', alt='')

    separador

    .titulo-segundo(data-aos="zoom-in")
      #t_2_3.h2 2.3 Autoridades Ambientales Urbanas 

    .row.justify-content-center
      .col-lg-10.mb-4.mb-lg-0
        .bg04.p-4(data-aos="slide-up")
          p.mb-0 “Las Autoridades Ambientales Urbanas se encuentran presentes en los municipios, distritos o áreas metropolitanas cuya población urbana es igual o superior a un millón de habitantes. Están encargadas de promover y ejecutar programas y políticas nacionales, regionales y sectoriales en relación con el medio ambiente y los recursos naturales renovables, es decir cumplen con las funciones de las Corporaciones Autónomas Regionales en su jurisdicción”. (Observatorio Colombiano de Gobernanza del Agua OCGA, 2020)
        img.img-a(data-aos="slide-down")(src='@/assets/curso/tema_2/img_12.png', alt='')

    





</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
