<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="zoom-in")
      .titulo-principal__numero
        span 4
      h1 Plan de acción ambiental

    img.img-a(src='@/assets/curso/tema_4/img_1.png', alt='')(data-aos="zoom-in-down")

    .row.p-5.justify-content-center(data-aos="zoom-in-down")
      .col-lg-10.bg02.p-4
        p.mb-0 A partir de la Conferencia de las Naciones Unidas sobre el Medio Ambiente y Desarrollo celebrada en Río de Janeiro en 1992, se inició la Agenda 21, un programa pensado para llevar a cabo un plan de acción ambiental y   fue firmada por más de 178 países en la Conferencia de Naciones Unidas sobre el Medio Ambiente y el Desarrollo (UNCED).determinados. 

    p.mb-5(data-aos="zoom-in-down") La Agenda 21 es un plan de acción exhaustivo que habrá de ser adoptado universal, nacional y localmente por organizaciones del Sistema de Naciones Unidas, Gobiernos y Grupos principales de cada zona en la cual el ser humano influya en el medio ambiente. 

    .row.justify-content-center.mb-5(data-aos="slide-right")
      .col-lg-10.bor3.p-3
        p.text-center.mb-0 Pero ¿en qué consiste este plan de acción? A continuación, se hace referencia a los conceptos más importantes para su realización. 


    .row.mb-5.bg06.p-4
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-down-right")
        img.img-a(src='@/assets/curso/tema_4/img_2.png', alt='')
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-down-left")
        p Un plan de acción es una ruta que trazan las organizaciones con el fin de gestionar y controlar las tareas y actividades que están proyectadas y que deben desarrollarse para cumplir con los objetivos y metas de un proyecto. Así como lo indica (Pareja, 2019), un plan de acción es una guía para definir las metas, fijar plazos y calcular recursos para planificar de forma correcta, optimizar la gestión y mejorar el rendimiento de la empresa.  

        p Asimismo, mediante el plan de acción se realiza un análisis detallado de la situación actual de las organizaciones y los posibles riesgos a los cuales estarían expuestas durante su ejecución y de este modo, proponer las acciones de mejora a realizar durante un tiempo estipulado. Sumado a esto, los planes de acción responden a los interrogantes: qué, cómo, cuándo, dónde y con quién se realizarán las acciones que se implementarán en la organización para cumplir con los objetivos de una manera ordenada y comprometida, asignando responsables, tiempo y recursos.

    .row.justify-content-center.align-items-center
      .col-lg-10(data-aos="slide-left")
        p Finalmente, el Plan de Acción Ambiental, define las directrices de una política nacional, regional o municipal que responde al compromiso de las corporaciones para actuar desde sus competencias y funciones dinamizadoras en pro del Desarrollo Sostenible.

    .row.justify-content-center.align-items-center.bg-color3.px-5
      .col-lg-10
        p.top_txt.mb-5(data-aos="slide-right") Para realizar un plan de acción, es necesario identificar las oportunidades de mejora, las cuales son el resultado de la aplicación del ciclo Deming también conocido como PHVA (Planear, Hacer, Verificar, Actuar) o de las salidas de la revisión por la dirección. Estas oportunidades pueden incluir alguna corrección, actividades de mejora continua, un cambio abrupto, una innovación o una reorganización. 

        img.img-a(src='@/assets/curso/tema_4/img_4.png', alt='')(data-aos="zoom-in-down")

        .bg04.p-4(data-aos="zoom-in-down")
          p En la mayoría de los casos, las acciones resultantes para abordar una oportunidad de mejora se integran en cronogramas con acciones asignadas a algún responsable de implementarlas, los cuales se pueden desarrollar bajo un diagrama de GANTT o metodología PERT, los cuales se abordarán más adelante.
 

</template>

<script>
export default {
  name: 'Tema4',
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
