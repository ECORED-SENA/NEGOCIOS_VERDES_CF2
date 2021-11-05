<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="zoom-in")
      .titulo-principal__numero
        span 3
      h1 Indicadores Ambientales 

    img.img-a(src='@/assets/curso/tema_3/img_1.png', alt='')(data-aos="zoom-in-down")

    .row.p-5.justify-content-center.mb-0(data-aos="zoom-in-down")
      .col-lg-10.bg02.p-4
        p.mb-0 A propósito de la primera función del IDEAM mencionada anteriormente, en la cual nombran a los indicadores ambientales, es importante resaltar que estos son definidos como una medida que puede ser de origen físico, químico, biológico, social o económico, que permite evaluar toda aquella información ambiental disponible, con el fin de reflejar las condiciones en las que se encuentra el medio ambiente o un factor ambiental particular, en un tiempo y en un lugar determinados. 

    .row.p-2.justify-content-center.mb-5
      .col-lg-10
        p(data-aos="zoom-in-down") Asimismo, los indicadores ambientales pueden ser de tipo cualitativo los cuales se basan en las percepciones y observaciones y los cuantitativos se basan en parámetros que facilitan información de los fenómenos. Dentro de sus principales características se encuentran: 

        .tarjeta.tarjeta--azul.bg06.p-4.mb-5.d-none.d-lg-block(data-aos="slide-left")
          SlyderA
            .row.justify-content-center
              .col-lg-6.p-0.m-0.d-none.d-lg-block 
                p.text-center.mb-0 Facilidad de manejar y comprender datos e información.
            .row.justify-content-center
              .col-lg-6.p-0.m-0.d-none.d-lg-block 
                p.text-center.mb-0 Evalúa datos de calidad.
            .row.justify-content-center
              .col-lg-8.p-0.m-0.d-none.d-lg-block 
                p.text-center.mb-0 Permiten predecir si existirá una evolución negativa del fenómeno. 
            .row.justify-content-center
              .col-lg-6.p-0.m-0.d-none.d-lg-block 
                p.text-center.mb-0 Son sensibles a cambios.

        .row.justify-content-center
          .col-lg-10.d-block.d-lg-none.bg06.p-3.bor_tarj 
            p.mb-0.text-center Facilidad de manejar y comprender datos e información.
        .row.justify-content-center
          .col-lg-10.d-block.d-lg-none.bg06.p-3.bor_tarj.mt-3 
            p.mb-0.text-center Evalúa datos de calidad.
        .row.justify-content-center
          .col-lg-10.d-block.d-lg-none.bg06.p-3.bor_tarj.mt-3 
            p.mb-0.text-center Permiten predecir si existirá una evolución negativa del fenómeno. 
        .row.justify-content-center.mb-5
          .col-lg-10.d-block.d-lg-none.bg06.p-3.bor_tarj.mt-3 
            p.mb-0.text-center Son sensibles a cambios.

        .row.justify-content-center(data-aos="slide-right")
          .col-lg-7.bor3.p-3
            p.text-center.mb-0 En los indicadores ambientales se pueden identificar tres tipos: 


    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="fade-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema_3/img_2.svg' alt='AvatarTop')
          .tarjeta.bg_d.tarjeta01 
            .p-4
              p Los datos están siempre disponibles ya que son obtenidos gracias a un monitoreo permanente.

      .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="fade-down")
        .tarjeta-avatar
          img(src='@/assets/curso/tema_3/img_3.svg' alt='AvatarTop')
          .tarjeta.bg_d.tarjeta01 
            .p-4
              p Se basan en cálculos de datos que provienen del monitoreo permanente, pero necesitan datos adicionales ya que los datos pueden estar total o parcialmente disponibles.


      .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="fade-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema_3/img_4.svg' alt='AvatarTop')
          .tarjeta.bg_d.tarjeta01 
            .p-4
              ul.lista-ul--color
                li 
                  i.lista-ul__vineta
                  | No tienen ninguna base matemática ni están basados en datos que estén disponibles. 
                li 
                  i.lista-ul__vineta
                  | Son indicadores conceptuales.

    p.mb-5(data-aos="zoom-in") Así mismo, para lograr un estudio detallado de cada uno de ellos, el IDEAM los ha clasificado en ocho temáticas diferentes: bosques y recursos forestales, agua, suelos y tierras, aire, cambio climático, residuos peligrosos y bifenilos policlorados - PCB, clima y ecosistemas. 

    separador

    .titulo-segundo(data-aos="zoom-in")
      #t_3_1.h2 3.1 Huella Hídrica 

    p.mb-5(data-aos="slide-left") Este indicador permite cuantificar el volumen total de agua utilizada por los habitantes de una determinada región. Según (Tolón Becerra & Lastra Bravo, 2013) este índice es útil para cuantificar los flujos de agua virtual, de las importaciones y de las exportaciones, y su estudio a niveles geográficos inferiores y específicos permite conocer exactamente cuánta agua, y en qué condiciones, se utiliza de los sistemas de agua locales, y cuánta agua sería necesaria para contrarrestar las corrientes contaminadas. 

    .row.justify-content-center.mb-5(data-aos="slide-right")
      .col-lg-9.bor2.p-3
        p.mb-0.text-center Existen tres tipos de huella hídrica, los cuales dependen de la procedencia del agua o el estado que tiene después de usarse: 

    .row.justify-content-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
        img.img-a(src='@/assets/curso/tema_3/img_5.png', alt='')
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-up")
        TabsA.color-acento-contenido.mb-5
          .tarjeta.bg06.p-4(titulo="Huella hídrica azul")
            p Esta agua procede de los cuerpos de agua subterráneos o superficiales.
          .tarjeta.bg06.p-4(titulo="Huella hídrica verde")
            p Es el agua que procede de la lluvia y queda almacenada en el suelo sin convertirse en escorrentía, esta puede usarse en la producción de algún producto.
          .tarjeta.bg06.p-4(titulo="Huella hídrica gris")
            p Es el agua que está contaminada después de haber sido usada, un ejemplo serían las aguas residuales.

    separador

    .titulo-segundo(data-aos="zoom-in")
      #t_3_2.h2 3.2  Huella ecológica

    p.mb-5(data-aos="zoom-in-down") Actualmente se considera como uno de los indicadores más importantes para evaluar el impacto ambiental de las actividades que se realizan habitualmente. Es decir, se evalúa el impacto que tiene el medio ambiente cuando se utiliza un terreno ecológicamente productivo para obtener los recursos deseados. 

    .row.justify-content-center.p-5.bg07(data-aos="zoom-in-down")
      .col-lg-11.mb-5
        p.mb-5 Este indicador también tiene en cuenta cuestiones energéticas, por ejemplo, en un bosque se determinan el número de hectáreas que se necesitan para asumir el CO2 (dióxido de carbono) que produce el consumo energético de esa actividad realizada. Además, se tiene en cuenta la clase de energía usada, si, por ejemplo, se usan energías renovables (energía eólica, solar), la huella ecológica será menor que utilizando otras fuentes de energía (Ecología Verde, 2018).






</template>

<script>
export default {
  name: 'Tema3',
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
