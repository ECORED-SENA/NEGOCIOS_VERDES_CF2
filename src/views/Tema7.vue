<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="zoom-in")
      .titulo-principal__numero
        span 7
      h1 Buenas Prácticas de Manufactura (BPM) 

    img.img-a(src='@/assets/curso/tema_7/img_1.png', alt='')(data-aos="zoom-in-down")

    .row.p-5.justify-content-center.mb-0(data-aos="zoom-in-down")
      .col-lg-10.bg02.p-4
        p.mb-0 Las Buenas Prácticas de Manufactura o (BPM) o #[i Good Manufacturing Practices (GMP)], consiste en una regulación de carácter obligatorio en una gran cantidad de países; buscando evitar la presentación de riesgos de índole física, química y biológica durante el proceso de manufactura de alimentos, que pudieran repercutir en afectaciones a la salud del consumidor. (Industria Alimenticia, 2013).

    .row.p-5.justify-content-center
      .col-lg-10
        p.mb-3(data-aos="zoom-in-down") Estas prácticas deben aplicarse a todos y cada uno de los procesos que se lleven a cabo con los productos. Es decir, son aplicables al proceso de producción o fabricación, higiene, limpieza y desinfección de las áreas y del personal, almacenamiento, control y registro de cada uno de ellos. 

        .row
          .col-lg-4.mb-4.mb-lg-0(data-aos="slide-left")
            figure
              img.img-a(src='@/assets/curso/tema_7/img_2.png' alt='')   
          .col-lg-8.mb-4.mb-lg-0(data-aos="slide-right")
            .cajon.color-primario.p-4.mb-3
              p.mb-0 Asimismo, comprende actividades a vigilar sobre las instalaciones, equipos, utensilios, cada una de las fases de producción, control de fauna nociva, manejo de desechos, entre otras. 

            p Finalmente, estos procedimientos constituyen los requisitos básicos e indispensables para participar en el mercado, necesarios para lograr alimentos inocuos y saludables, reducir los riesgos para la salud del consumidor y cumplir con regulaciones nacionales e internacionales.



</template>

<script>
export default {
  name: 'Tema7',
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
