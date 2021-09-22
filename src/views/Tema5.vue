<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="zoom-in")
      .titulo-principal__numero
        span 5
      h1 Ciclo Deming - PHVA

    img.img-a(src='@/assets/curso/tema_5/img_1.png', alt='')(data-aos="zoom-in-down")

    .row.p-5.justify-content-center(data-aos="zoom-in-down")
      .col-lg-10.bg02.p-4
        p.mb-0 El ciclo PHVA se considera uno de los mejores sistemas para lograr la mejora continua de las organizaciones porque permite de manera ordenada y sistemática Planificar, Hacer, Verificar y Actuar frente a cada una de las acciones establecidas. 

    .row.justify-content-center.mb-5(data-aos="slide-right")
      .col-lg-6.bor3.p-3
        p.text-center.mb-0 A continuación se describe cada una de sus etapas: 

    figure.mb-5(data-aos="zoom-in-down")
      img.img-a(src='@/assets/curso/tema_5/img_2.png', alt='')
      figcaption Fuente. Instituto Uruguayo de Normas Técnicas , 2009.

    .row.justify-content-center
      .col-lg-10
        p.mb-5(data-aos="flip-left") Por medio del uso de este ciclo, se pueden determinar las oportunidades de mejora existentes en cada una de las organizaciones y a partir de estas, desarrollar los diferentes planes de acción a favor del mejoramiento de las debilidades o riesgos que se puedan presentar.     

        .cajon.color-primario.p-4.mb-5(data-aos="flip-right")
          p.mb-0 No obstante, existen otras herramientas que permiten identificar y plantear las oportunidades de mejora en las organizaciones, una de estas es el análisis de riesgo de las variables ambientales que se estén estudiando. 

        .row
          .col-lg-4.mb-4.mb-lg-0(data-aos="slide-right")
            img.img-a(src='@/assets/curso/tema_5/img_3.png', alt='')
          .col-lg-8.mb-4.mb-lg-0(data-aos="slide-left")
            p El análisis de riesgos tiene como propósito principal identificar y cuantificar los riesgos que pueden comprometer la dinámica deseada de los recursos naturales.  Por ende, una adecuada gestión de estos podría controlar y eliminar la posibilidad de que cada riesgo ocurra, tomando el riesgo como una medida de la proximidad de un daño, algo que no se quiere que aparezca. Además, el riesgo resulta de la combinación de la probabilidad de que ocurra un daño y la severidad de este.


    
 

</template>

<script>
export default {
  name: 'Tema5',
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
