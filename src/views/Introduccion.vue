<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal(data-aos="zoom-in")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.p-5.bg01.mb-5(data-aos="zoom-in-down")
      .col-lg-10
        p A través de los años, el cuidado del medio ambiente se ha convertido en una constante preocupación entre los países a nivel mundial, razón por la cual, se han desarrollado diferentes convenios y tratados en los cuales los países participantes adquieren compromisos relacionados al cuidado y conservación de los recursos naturales, tales como el agua, aire, suelos, animales, plantas y por supuesto, el bienestar del ser humano.

        p Colombia no es ajeno a estos procesos, por el contrario, ratifica su compromiso y sus esfuerzos desarrollando políticas a nivel nacional que promuevan estos principios. Así mismo, se han creado entidades encargadas de la vigilancia y control de estas políticas a nivel local, regional y nacional. 

    .row.justify-content-center.mb-5
      .col-lg-11
        .bor1.px-4(data-aos="slide-left")
          p No obstante, estas entidades no solo vigilan y controlan el desarrollo adecuado de las políticas sino también, proponen e implementan nuevas estrategias con un único fin, desarrollar economías sostenibles, que promuevan la conservación y cuidado de los recursos naturales con los que se cuenta en la totalidad del territorio nacional. 

        .cajon.color-primario.p-4(data-aos="slide-right")
          p.mb-0 Finalmente, estas estrategias y actores participan en la elaboración de planes de acción ambientales, dentro de los cuales, los actores validan los indicadores ambiental existentes y su correcto funcionamiento, para así mismo, detectar las oportunidades de mejora que se presenten y el paso a paso a seguir por cada responsable asignado, para así lograr la dinámica deseada del uso y conservación de los recursos.



</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
