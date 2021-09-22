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

    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/itANoeFfkGA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
    



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
