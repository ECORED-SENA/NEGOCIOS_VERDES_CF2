<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="zoom-in")
      .titulo-principal__numero
        span 6
      h1 Pasos para realizar un plan de acción

    img.img-a(src='@/assets/curso/tema_6/img_1.png', alt='')(data-aos="zoom-in-down")

    .row.p-5.justify-content-center(data-aos="zoom-in-down")
      .col-lg-10.bg02.p-4
        p.mb-0 La necesidad de planificar en cada una de las acciones y actividades que se realicen dentro de las organizaciones y evaluar los riesgos existentes en cada proceso, son etapas indispensables para desarrollar los planes de acción y planes de mejora ambiental.  

    separador

    .titulo-segundo(data-aos="zoom-in")
      #t_6_1.h2 6.1 Plantear objetivos y estrategias 

    p.mb-5(data-aos="slide-left") El primer paso para llevar a cabo un plan de acción exitoso consiste en la definición de los objetivos, así como las estrategias que se utilizarán para lograrlos. Es así como se han desarrollado herramientas y metodologías que permiten de manera ordenada generar y presentar la información que se considera pertinente para abordar cada uno de ellos.

    .row.justify-content-center.mb-5(data-aos="slide-right")
      .col-lg-8.bor3.p-3
        p.text-center.mb-0 Con la intención de profundizar en cada una de ellas, se han organizado en las siguientes categorías:  

    .row.justify-content-center.mb-5(data-aos="slide-right")
      .col-lg-8
        img.img-a(src='@/assets/curso/tema_6/img_2.png', alt='')

    .row.bg-color2.px-5
      .col-lg-12.mb-4.mb-lg-0.col_top1(data-aos="slide-left")

        h4.tx_bg1 Herramientas

        .row.justify-content-center
          .col-lg-4
            .bg08.mb-5(data-aos="slide-right")
              h4.text-center.text-white.mb-0 Para generar y ordenar ideas
            img.img-b.mb-3(data-aos="zoom-in")(src='@/assets/curso/tema_6/img_3.png', alt='')

        .row.justify-content-center.mb-5
          .col-lg-8
            p Estas permiten a los participantes presentar sus ideas e hipótesis planteadas frente a la oportunidad de mejora, de una manera ordenada y concreta. Entre estas se encuentran: 

    .row.justify-content-center.mb-5
      .col-lg-10.col_top
        SlyderC.mb-5(:datos="datosSlyder")(data-aos="zoom-in")

        .row.justify-content-center
          .col-lg-5
            .bg08.mb-5(data-aos="slide-right")
              h4.text-center.text-white.mb-0 Para recolectar y procesar información 
            img.img-b.mb-3(data-aos="zoom-in")(src='@/assets/curso/tema_6/img_3.png', alt='')

        p.mb-5 Posterior a la generación de ideas, se lleva a cabo el proceso de recolección y procesamiento de información, entre las herramientas que facilitan el proceso se encuentran: 

        .tarjeta-avatar-b.mb-5(data-aos="fade-down-right")
          .tarjeta-avatar-b__img
            img.img-a(src='@/assets/curso/tema_6/img_8.svg' alt='AvatarTop')
          .tarjeta.bg04.bor_tarj
            .p-4
              h3 Diagrama de dispersión 
              p.mb-0 Se usa para descubrir y presentar las relaciones entre los datos recolectados. Se define como una técnica gráfica en la cual se presenta un eje x, y, en el cual se plasman los resultados de dos variables para un conjunto de datos como una nube de puntos, la cual permite mostrar la correlación existente entre las mismas. 

        .tarjeta-avatar-b.mb-5(data-aos="fade-down-left")
          .tarjeta-avatar-b__img
            img.img-a(src='@/assets/curso/tema_6/img_9.svg' alt='AvatarTop')
          .tarjeta.bg04.bor_tarj
            .p-4
              h3 Histograma
              p.mb-0 Son diagramas de barras que muestran un conjunto de datos en un intervalo específico.  Estos diagramas se usan para comunicar visualmente la información relacionada a los procesos y tomar decisiones. En los histogramas los datos son presentados como una serie de rectángulos de igual ancho y variadas alturas. El ancho representa un intervalo dentro del rango de datos. La altura representa la cantidad de datos numéricos.

        .row.justify-content-center.mb-5
          .col-lg-4
            .bg08.mb-5(data-aos="slide-right")
              h4.text-center.text-white.mb-0 Para presentar información
            img.img-b.mb-3(data-aos="zoom-in")(src='@/assets/curso/tema_6/img_3.png', alt='')

        p.mb-5(data-aos="zoom-in") Finalmente, después de realizar la generación de ideas, recolección y procesamiento de estas, la información se presenta mediante un diagrama de flujo o flujograma. 

        .row.mb-5
          .col-lg-8.mb-4.mb-lg-0(data-aos="fade-down-right")
            .cajon.color-primario.p-4.mb-5
              p #[strong Diagrama de flujo:] es una representación gráfica que indica las actividades que constituyen un proceso y en el cual se da la ordenación de los elementos de acuerdo con el momento de su ejecución. Este diagrama facilita la comprensión de cómo se lleva a cabo cualquier proceso.

            p Se puede representar tanto el diagrama de flujo de un proceso primario como de procesos paralelos o alternativos. De esta manera se puede observar la sucesión de acontecimientos que ocurren para la realización de un producto (desde los materiales hasta los productos). Esto permite, que cada persona sepa qué se hace antes y qué se va a hacer después de la ejecución de una actividad o tarea. 
          .col-lg-4.mb-4.mb-lg-0(data-aos="fade-up-left")
            img(src='@/assets/curso/tema_6/img_10.png' alt='')

        .bg_d(data-aos="zoom-in")
          .p-4
            p En este tipo de diagrama se utilizan diferentes símbolos los cuales según la norma ISO 5807, determinan ciertas categorías, por ejemplo, para iniciar el flujograma se establece el título en un óvalo, si se determina una actividad en un cuadrado y se utilizan flechas como líneas de conexión como se muestra a continuación: 
          figure
            img.img-a(src='@/assets/curso/tema_6/img_11.png' alt='')
            figcaption Fuente: (Instituto Uruguayo de Normas Técnicas, 2009)

    separador

    .titulo-segundo(data-aos="zoom-in")
      #t_6_2.h2 6.2 Plantear tareas y definir tiempos

    .row
      .col-lg-4.mb-4.mb-lg-0(data-aos="slide-left")
        img.img-a(src='@/assets/curso/tema_6/img_12.png' alt='')
      .col-lg-8.mb-4.mb-lg-0(data-aos="slide-right")
        p Al tener la información organizada de manera adecuada y tener claros cada uno de los objetivos a alcanzar, así como las estrategias que se llevarán a cabo para lograrlos, es momento de definir las tareas que cada integrante de la organización debe realizar, así como las fechas de inicio y finalización de estas. 

        p En este orden de ideas, en los planes de acción y en los proyectos en general, la primera y principal labor de programación consiste en coordinar los diversos recursos disponibles para asegurarse que se encontrarán en los lugares y momentos oportunos, así como la coordinación de los tiempos destinados para el cumplimiento de cada una de las acciones. 

    .row.justify-content-center.mb-5(data-aos="slide-right")
      .col-lg-8.bor3.p-3
        p.text-center.mb-0 En este sentido, se presentan dos herramientas indispensables en la elaboración de los planes: 

    
    .row.justify-content-center.mb-5
      .col-lg-10
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta bg04")
          .row.justify-content-center(titulo="Gráfico de Gantt")(data-aos="slide-right")
            .col-lg-3.mb-4.mb-lg-0
              figure
                img.img-a(src='@/assets/curso/tema_6/img_13.png' alt='')    
                     
            .col-lg-9.mb-4.mb-lg-0
              p “Es un gráfico de barras horizontales que consiste en hacer una lista de actividades las cuales se indican verticalmente en un diagrama. En forma horizontal (con forma de barra), se indica el tiempo en las unidades más apropiadas según el tipo de proyecto de que se trata” (Instituto Uruguayo de Normas Técnicas, 2009). 
              p En este diagrama se logra representar la duración proyectada y la duración verdadera de cada actividad. Así como el inicio más temprano posible para cada actividad. Eso depende de si tiene que estar finalizada o no una actividad para ejecutar la siguiente. 

            p.mt-3 Finalmente, este diagrama es muy práctico, porque a medida que se avance en el desarrollo de cada actividad propuesta, se sombrea la barra correspondiente. Por lo tanto, en un momento cualquiera se ve con claridad cuáles actividades están a tiempo y cuáles no. 

          .row.justify-content-center(titulo="Técnica PERT")(data-aos="slide-left")
            .col-lg-3.mb-4.mb-lg-0
              figure
                img.img-a(src='@/assets/curso/tema_6/img_14.png' alt='')  
                figcaption Fuente: (Instituto Uruguayo de Normas Técnicas, 2009)         
            .col-lg-9.mb-4.mb-lg-0
              p  “Fue desarrollada a fines de la década de 1950 por la Navy Projects Office en colaboración con la empresa de consultoría administrativa de Booz, Allen y Hamilton y la División de Sistemas de Armamentos de la Corporación Lockheed Aircraft.  La técnica recibió una considerable publicidad, favorable para su uso, en el programa de ingeniería y desarrollo del misil Polaris, un complicado proyecto que tenía 250 contratistas primarios y 9000 subcontratistas. Desde esa fecha, ha sido ampliamente utilizado en otras organizaciones, tanto industriales como de servicios”. (Instituto Uruguayo de Normas Técnicas, 2009).

            .cajon.color-acento-contenido.p-4.mb-3.mt-3
              p.mb-0 En la técnica PERT cada una de las actividades que se llevarán a cabo en el plan de acción o plan de mejora, se representa mediante una flecha llamada arco o rama. El principio y el fin de cada actividad se representan mediante un círculo que se denomina nodo o evento. 

            p Cada nodo se numera en forma arbitraria, utilizando dichos números solamente para identificar eventos, sin indicar las relaciones de precedencia. En esta técnica, cada una de las actividades debe empezar en el nodo en que termina su antecesor. 

            p.mb-0 No obstante, independiente del modelo utilizado (GANTT o PERT), cada organización deberá asignar los responsables directos de cada actividad y sus grupos de apoyo, quienes preferentemente deben ser los que estén involucrados en todo el plan de acción.

    separador

    .titulo-segundo(data-aos="zoom-in")
      #t_6_3.h2 6.3 Ejecutar el plan

    p.mb-5(data-aos="slide-left") Se ha llegado a la etapa final del plan de acción, en la cual cada participante tiene claras cuáles son las tareas a realizar, el cómo, cuándo, dónde realizarlas y el objetivo principal de cada una de ellas, todo con el propósito de lograr las dinámicas esperadas en cada uno de los aspectos abordados. 

    figure(data-aos="slide-right")
      img.img-a(src='@/assets/curso/tema_6/img_15.png' alt='')  





</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'La tormenta de ideas',
        texto:
          'También denominada lluvia de ideas o brainstorming, es una metodología para encontrar e identificar posibles soluciones a los problemas y oportunidades potenciales para el plan de acción. Por medio de la tormenta de ideas, se reúne un grupo de personas a exponer sus ideas frente a una temática determinada, no existe moderador, todos son participantes y se lleva a cabo en dos etapas: (i) generación de ideas y (ii) aclaración de estas.',
        imagen: require('@/assets/curso/tema_6/img_4.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Diagrama de afinidades',
        texto:
          'Es una herramienta que divide una gran cantidad de ideas y conceptos relacionados con una temática en particular en grupos de trabajo con relaciones naturales existentes entre ellos. Este diagrama permite estimular la creatividad y participación plena en equipos de trabajo pequeños que preferiblemente estén constituidos por personas acostumbradas a trabajar juntas. ',
        imagen: require('@/assets/curso/tema_6/img_5.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Diagrama causa – efecto',
        texto:
          'También conocido como diagrama de espina de pescado o “fish-bone”. Es un método gráfico que se usa para efectuar un diagnóstico de las posibles causas que provocan ciertos efectos, los cuales pueden ser controlables. Es utilizado para analizar y comunicar las relaciones causa - efecto y facilitar la resolución de problemas desde el síntoma, pasando por la causa hasta la solución. ',
        imagen: require('@/assets/curso/tema_6/img_6.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Diagrama de Pareto',
        texto:
          'Este diagrama permite ordenar elementos desde el más frecuente hasta el menos frecuente, basándose en el principio de Pareto o regla del 80-20. Este diagrama permite presentar, en orden de importancia, la contribución de cada elemento al efecto total y ordenar las oportunidades de mejora. ',
        imagen: require('@/assets/curso/tema_6/img_7.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
    ],
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
