<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal(data-aos="zoom-in")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p(data-aos="slide-left") Para el desarrollo de las propuestas ambientales es fundamental conocer la normativa y eventos en los cuales participa nuestro país, con el fin de proponer el plan de acción a seguir para cumplir con los objetivos de cada organización.

    p(data-aos="slide-right") Por consiguiente, mediante el estudio del presente material, usted logrará identificar los tratados o convenios en los cuales se ha vinculado Colombia, las entidades que regulan las actividades del medio ambiente y su conservación a nivel local, regional y nacional, así como el paso a paso para realizar una propuesta ambiental, basada en las herramientas de generación, recolección y procesamiento de ideas. 

    p.mb-5(data-aos="slide-left") Finalmente, podrá identificar las metodologías para poner en marcha y evaluar las propuestas y los protocolos necesarios para la transformación de los recursos. 

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/RXPOL7VaNZU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.p-5.bg01.mb-5(data-aos="zoom-in-down")
      .col-lg-10
        p A través de los años, el cuidado del medio ambiente se ha convertido en una constante preocupación entre los países a nivel mundial, razón por la cual, se han desarrollado diferentes convenios y tratados en los cuales los países participantes adquieren compromisos relacionados al cuidado y conservación de los recursos naturales, tales como el agua, aire, suelos, animales, plantas y por supuesto, el bienestar del ser humano.

        p Colombia no es ajeno a estos procesos, por el contrario, ratifica su compromiso y sus esfuerzos desarrollando políticas a nivel nacional que promuevan estos principios. Así mismo, se han creado entidades encargadas de la vigilancia y control de estas políticas a nivel local, regional y nacional. 

    .row.justify-content-center.mb-5
      .col-lg-11
        .bor1.px-4.mb-5(data-aos="slide-left")
          p No obstante, estas entidades no solo vigilan y controlan el desarrollo adecuado de las políticas sino también, proponen e implementan nuevas estrategias con un único fin, desarrollar economías sostenibles, que promuevan la conservación y cuidado de los recursos naturales con los que se cuenta en la totalidad del territorio nacional. 

        .cajon.color-primario.p-4(data-aos="slide-right")
          p.mb-0 Finalmente, estas estrategias y actores participan en la elaboración de planes de acción ambientales, dentro de los cuales, los actores validan los indicadores ambientales existentes y su correcto funcionamiento, para así mismo, detectar las oportunidades de mejora que se presenten y el paso a paso a seguir por cada responsable asignado, para así lograr la dinámica deseada del uso y conservación de los recursos.

    

    
    



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
