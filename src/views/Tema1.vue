<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="zoom-in")
      .titulo-principal__numero
        span 1
      h1 Tratados y convenios ambientales ratificados por Colombia

    img.img-a(src='@/assets/curso/tema_1/img_2.png', alt='Temperatura')(data-aos="zoom-in-down")

    .row.p-5(data-aos="zoom-in-down")
      .col-lg-12.bg02.p-4
        p Colombia es un país que cuenta con diversos recursos naturales y una riqueza ambiental tan amplia como la necesidad de protegerlos y conservarlos. En los últimos años, ha aumentado la preocupación por la contaminación y el uso irracional de los recursos naturales, razones por las cuales se han desarrollado estrategias y se han conformado entidades a nivel local, nacional e internacional, encargadas de promover el cuidado y conservación de estos enfocándose en su uso adecuado y sostenible. 

    p.mb-5(data-aos="slide-left") Así pues, Colombia ha firmado y se ha vinculado a diferentes tratados y convenios ambientales a nivel mundial, cada uno con objetivos y funciones establecidas. Estos tratados son acuerdos voluntarios u obligatorios por medio de los cuales los países participantes desarrollan propuestas en asuntos ambientales tan diversos como: cambio climático, biodiversidad y ecosistemas, desarrollo sostenible, protección de los océanos, gestión de residuos y sustancias químicas peligrosas, entre otros; con un propósito principal centrado en proteger el medio ambiente y la salud de las personas de los efectos negativos que pueden provocar las sustancias químicas, los contaminantes, el tráfico de especies, el vertimiento de residuos al mar, entre otros.

    .cajon.color-primario.p-4.mb-5(data-aos="slide-right")
      p Es así como a continuación se presenta una breve descripción de cada una de estas organizaciones con el fin de identificar los tratados a los cuales Colombia se encuentra inscrito y sus disposiciones: 

    a(@click="mostrarColaps()") mostrar 3

    #MapaGroup01

      .row.mb-5
        .col-lg-1(data-aos="slide-up")
          button#boton1.ClasePripiaBtn.collapsed(data-bs-toggle='collapse' data-bs-target='#collapse01, #collapse01s' aria-expanded='true' aria-controls='#collapse01, #collapse01s')
            img.img-a(src='@/assets/curso/tema_1/img_3.svg', alt='')
          img#collapse01s.img-a.collapse.show(src='@/assets/curso/tema_1/img_14.svg', alt='')(data-bs-parent='#MapaGroup01')
        .col-lg-1(data-aos="slide-down")
          button#boton2.ClasePripiaBtn(data-bs-toggle='collapse' data-bs-target='#collapse02, #collapse02s' aria-expanded='false' aria-controls='#collapse02, #collapse02s')
            img.img-a(src='@/assets/curso/tema_1/img_4.svg', alt='')
          img#collapse02s.img-a.collapse(src='@/assets/curso/tema_1/img_14.svg', alt='')(data-bs-parent='#MapaGroup01')
        .col-lg-1(data-aos="slide-up")
          button#boton3.ClasePripiaBtn(data-bs-toggle='collapse' data-bs-target='#collapse03, #collapse03s' aria-expanded='false' aria-controls='#collapse03, #collapse03s')
            img.img-a(src='@/assets/curso/tema_1/img_5.svg', alt='')
          img#collapse03s.img-a.collapse(src='@/assets/curso/tema_1/img_14.svg', alt='')(data-bs-parent='#MapaGroup01')
        .col-lg-1(data-aos="slide-down")
          button#boton4.ClasePripiaBtn(data-bs-toggle='collapse' data-bs-target='#collapse04, #collapse04s' aria-expanded='false' aria-controls='#collapse04, #collapse04s')
            img.img-a(src='@/assets/curso/tema_1/img_6.svg', alt='')
          img#collapse04s.img-a.collapse(src='@/assets/curso/tema_1/img_14.svg', alt='')(data-bs-parent='#MapaGroup01')
        .col-lg-1(data-aos="slide-up")
          button#boton5.ClasePripiaBtn(data-bs-toggle='collapse' data-bs-target='#collapse05, #collapse05s' aria-expanded='false' aria-controls='#collapse05, #collapse05s')
            img.img-a(src='@/assets/curso/tema_1/img_7.svg', alt='')
          img#collapse05s.img-a.collapse(src='@/assets/curso/tema_1/img_14.svg', alt='')(data-bs-parent='#MapaGroup01')
        .col-lg-1(data-aos="slide-down")
          button#boton6.ClasePripiaBtn(data-bs-toggle='collapse' data-bs-target='#collapse06, #collapse06s' aria-expanded='false' aria-controls='#collapse06, #collapse06s')
            img.img-a(src='@/assets/curso/tema_1/img_8.svg', alt='')
          img#collapse06s.img-a.collapse(src='@/assets/curso/tema_1/img_14.svg', alt='')(data-bs-parent='#MapaGroup01')
        .col-lg-1(data-aos="slide-up")
          button#boton7.ClasePripiaBtn(data-bs-toggle='collapse' data-bs-target='#collapse07, #collapse07s' aria-expanded='false' aria-controls='#collapse07, #collapse07s')
            img.img-a(src='@/assets/curso/tema_1/img_9.svg', alt='')
          img#collapse07s.img-a.collapse(src='@/assets/curso/tema_1/img_14.svg', alt='')(data-bs-parent='#MapaGroup01')
        .col-lg-1(data-aos="slide-down")
          button#boton8.ClasePripiaBtn(data-bs-toggle='collapse' data-bs-target='#collapse08, #collapse08s' aria-expanded='false' aria-controls='#collapse08, #collapse08s')
            img.img-a(src='@/assets/curso/tema_1/img_10.svg', alt='')
          img#collapse08s.img-a.collapse(src='@/assets/curso/tema_1/img_14.svg', alt='')(data-bs-parent='#MapaGroup01')
        .col-lg-1(data-aos="slide-up")
          button#boton9.ClasePripiaBtn(data-bs-toggle='collapse' data-bs-target='#collapse09, #collapse09s' aria-expanded='false' aria-controls='#collapse09, #collapse09s')
            img.img-a(src='@/assets/curso/tema_1/img_11.svg', alt='')
          img#collapse09s.img-a.collapse(src='@/assets/curso/tema_1/img_14.svg', alt='')(data-bs-parent='#MapaGroup01')
        .col-lg-1(data-aos="slide-down")
          button#boton10.ClasePripiaBtn(data-bs-toggle='collapse' data-bs-target='#collapse10, #collapse10s' aria-expanded='false' aria-controls='#collapse10, #collapse10s')
            img.img-a(src='@/assets/curso/tema_1/img_12.svg', alt='')
          img#collapse10s.img-a.collapse(src='@/assets/curso/tema_1/img_14.svg', alt='')(data-bs-parent='#MapaGroup01')
        .col-lg-1(data-aos="slide-up")
          button#boton11.ClasePripiaBtn(data-bs-toggle='collapse' data-bs-target='#collapse11, #collapse11s' aria-expanded='false' aria-controls='#collapse11, #collapse11s')
            img.img-a(src='@/assets/curso/tema_1/img_13.svg', alt='')
          img#collapse11s.img-a.collapse(src='@/assets/curso/tema_1/img_14.svg', alt='')(data-bs-parent='#MapaGroup01')
        .col-lg-1.top_img2.d-none.d-lg-block(data-aos="slide-up")
          img.img-a(src='@/assets/curso/tema_1/img_27.png', alt='')

      #collapse01.collapse.show(data-bs-parent='#MapaGroup01')
        .titulo-segundo
          #t_1_1.h2 1.1  Convenio de Diversidad Biológica o #[i Convention on Biological Diversity]
        .row.mb-5
          .col-lg-8(data-aos="slide-left")
            p El Convenio sobre la Diversidad Biológica (CDB) es un tratado internacional jurídicamente vinculante con tres objetivos principales: la conservación de la diversidad biológica, la utilización sostenible de sus componentes y la participación justa y equitativa en los beneficios que se deriven de la utilización de los recursos genéticos. Su objetivo general es promover medidas que conduzcan a un futuro sostenible y la conservación de la diversidad biológica como interés común de toda la humanidad. 
          .col-lg-4(data-aos="slide-right")
            img.img-a(src='@/assets/curso/tema_1/img_15.png', alt='')

        .bloque-texto-d.color-secundario.p-4.mb-5(data-aos="slide-left")
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            h3.text-regular Este acuerdo cubre la diversidad biológica en todos los niveles: ecosistemas, especies y recursos genéticos. Cuenta con la Secretaría del Convenio sobre la Diversidad Biológica (SCDB), la cual tiene su sede en Montreal, Canadá y su principal función es ayudar a los Gobiernos a aplicar el CDB y sus programas de trabajo, organizar reuniones, redactar borradores de documentos, coordinar la labor del Convenio con la de otras organizaciones internacionales y recopilar, así como difundir información.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 - Secretaría del Convenio sobre la Diversidad Biológica, 2020.

        .bg03.mb-5(data-aos="slide-right")
          h4.text-center.text-white.mb-0 A continuación se mencionan algunos de los datos clave que menciona la Secretaría del Convenio sobre la Diversidad Biológica (2020):
        
        img.img-b.mb-5(data-aos="zoom-in")(src='@/assets/curso/tema_1/img_16.png', alt='')

        .tarjeta.tarjeta--azul.p-4.mb-5.d-none.d-lg-block.bor_tarj(data-aos="zoom-in")
          SlyderA
            .row.justify-content-center
              .col-lg-10.d-none.d-lg-block 
                p El Convenio sobre la Diversidad Biológica quedó listo para la firma el 5 de junio de 1992 en la Cumbre de la Tierra celebrada en Río de Janeiro, y entró en vigor el 29 de diciembre de 1993.
                    
            .row.justify-content-center
              .col-lg-10.d-none.d-lg-block 
                p Hasta la fecha hay 193 Partes.
            .row.justify-content-center
              .col-lg-10.d-none.d-lg-block 
                p Los componentes de la diversidad biológica son todas las formas de vida que hay en la tierra, incluidos ecosistemas, animales, plantas, hongos, microorganismos y diversidad genética.
            .row.justify-content-center
              .col-lg-10.d-none.d-lg-block 
                p Con sus tres objetivos, el CDB es considerado a menudo como el principal instrumento internacional para el desarrollo sostenible.
            .row.justify-content-center
              .col-lg-10.d-none.d-lg-block 
                p Los ecosistemas, las especies y los recursos genéticos deberían utilizarse en beneficio del ser humano, pero de manera que no lleve a la pérdida de diversidad biológica.
            .row.justify-content-center
              .col-lg-10.d-none.d-lg-block 
                p Para conservar la diversidad biológica hacen falta cuantiosas inversiones, pero se obtendrán considerables beneficios ambientales, económicos y sociales.
            .row.justify-content-center
              .col-lg-10.d-none.d-lg-block   
                p El enfoque por ecosistemas es una estrategia integrada para gestionar recursos es el marco de acción del Convenio.

        .row.justify-content-center
          .col-lg-10.d-block.d-lg-none.tarjeta--azul.p-3.bor_tarj 
            p.mb-0 El Convenio sobre la Diversidad Biológica quedó listo para la firma el 5 de junio de 1992 en la Cumbre de la Tierra celebrada en Río de Janeiro, y entró en vigor el 29 de diciembre de 1993. 
        .row.justify-content-center
          .col-lg-10.d-block.d-lg-none.tarjeta--azul.p-3.bor_tarj.mt-3 
            p.mb-0 Hasta la fecha hay 193 Partes.

        .row.justify-content-center
          .col-lg-10.d-block.d-lg-none.tarjeta--azul.p-3.bor_tarj.mt-3  
            p.mb-0 Los componentes de la diversidad biológica son todas las formas de vida que hay en la tierra, incluidos ecosistemas, animales, plantas, hongos, microorganismos y diversidad genética.

        .row.justify-content-center
          .col-lg-10.d-block.d-lg-none.tarjeta--azul.p-3.bor_tarj.mt-3  
            p.mb-0 Con sus tres objetivos, el CDB es considerado a menudo como el principal instrumento internacional para el desarrollo sostenible.

        .row.justify-content-center
          .col-lg-10.d-block.d-lg-none.tarjeta--azul.p-3.bor_tarj.mt-3  
            p.mb-0 Los ecosistemas, las especies y los recursos genéticos deberían utilizarse en beneficio del ser humano, pero de manera que no lleve a la pérdida de diversidad biológica.

        .row.justify-content-center
          .col-lg-10.d-block.d-lg-none.tarjeta--azul.p-3.bor_tarj.mt-3  
            p.mb-0 Para conservar la diversidad biológica hacen falta cuantiosas inversiones, pero se obtendrán considerables beneficios ambientales, económicos y sociales.

        .row.justify-content-center
          .col-lg-10.d-block.d-lg-none.tarjeta--azul.p-3.bor_tarj.mt-3 
            p.mb-0 El enfoque por ecosistemas es una estrategia integrada para gestionar recursos es el marco de acción del Convenio.
      #collapse02.collapse(data-bs-parent='#MapaGroup01')
        .titulo-segundo(data-aos="fade-down-left")
          #t_1_2.h2 1.2  Convención de las Naciones Unidas de Lucha contra la Desertificación (UNCCD)

        .row
          .col-lg-4.mb-4.mb-lg-0(data-aos="fade-up-left")
            img.img-a(src='@/assets/curso/tema_1/img_17.png', alt='')
          .col-lg-8.mb-4.mb-lg-0(data-aos="fade-down-right")
            p.mb-3 La Convención de las Naciones Unidas para combatir la Desertificación (UNCCD por sus siglas en inglés) es un acuerdo Internacional universal cuyo fin es promover una respuesta global para la desertificación. La Cumbre para la Tierra celebrada en Río de Janeiro en 1992, fue la génesis de esta Convención, la cual entró en vigor en 1996.

            .cajon.color-primario.p-4
              p Actualmente la UNCCD tiene 194 Partes (estados miembros de la ONU). Ha evolucionado para ser la piedra angular en la batalla para el desarrollo sostenible, aplicando un enfoque integrado consistente con la Agenda 21 al tiempo que fomenta la participación de la sociedad civil y la transferencia de la ciencia y la tecnología y su combinación eficaz con el conocimiento tradicional. Aunque la convención es un acuerdo entre países en vías de desarrollo y países desarrollados para asegurar la acción global para combatir la desertificación, también incluye compromisos nacionales específicos para acciones concretas.

      #collapse03.collapse(data-bs-parent='#MapaGroup01')
        .titulo-segundo
          #t_1_3.h2 1.3 Foro de las Naciones Unidas Sobre Bosques (UNFF)

        .row
          .col-lg-8.mb-4.mb-lg-0
            p.mb-3 El Foro de las Naciones Unidas sobre Bosques (UNFF, por sus siglas en inglés), tiene por objetivo principal promover el manejo, la conservación y el desarrollo sostenible de todo tipo de bosques y fortalecer el compromiso político a largo plazo para este fin.

            .bloque-texto-c.color-secundario.p-4
              i.fas.fa-quote-right
              h3.mb-2 Durante este foro, Colombia presentó sus contribuciones nacionales haciendo énfasis en la estrategia integral para la lucha contra la deforestación y programas en el marco de esta estrategia, como Visión Amazonía, Visión Pacífico, Bosques para la Paz, Cinturón Verde, entre otros.
              span - Cancillería de Colombia, 2018.
          .col-lg-4.mb-4.mb-lg-0
            img.img-a(src='@/assets/curso/tema_1/img_18.png', alt='')

      #collapse04.collapse(data-bs-parent='#MapaGroup01')
        .titulo-segundo
          #t_1_4.h2 1.4 Unión Internacional para la Protección de las Obtenciones Vegetales (UPOV)

        .row
          .col-lg-4.mb-4.mb-lg-0
            img.img-a(src='@/assets/curso/tema_1/img_19.png', alt='')
          .col-lg-8.mb-4.mb-lg-0
            p.mb-3 La Unión Internacional para la Protección de las Obtenciones Vegetales (UPOV) es una organización intergubernamental con sede en Ginebra (Suiza) y se creó para lograr la Protección de las Obtenciones Vegetales. El Convenio se adoptó en París en 1961. 
            .bloque-texto-c.color-acento-botones.p-4
              h1.fas.fa-quote-right.mb-0
              h3.mb-2 La misión de la UPOV es proporcionar y fomentar un sistema eficaz para la protección de las variedades vegetales, con miras al desarrollo de nuevas variedades vegetales para beneficio de la sociedad.
              span - UPOV, 2020.

      #collapse05.collapse(data-bs-parent='#MapaGroup01')
        .titulo-segundo
          #t_1_5.h2 1.5 Convenio de Viena para la Protección de la Capa de Ozono

        .row
          .col-lg-8.mb-4.mb-lg-0
            p.mb-3 El Convenio de Viena es el primer instrumento internacional que busca proteger la salud de los seres humanos y el medio ambiente, de los efectos adversos resultantes de la modificación de la capa de ozono atmosférica que rodea a la tierra.

            .cajon.color-acento-contenido.p-4.mb-3
              p “Este convenio se llevó a cabo el 24 de agosto de 2010, 196 países han firmado y ratificado la Convención de Viena” (Minambiente, 2020).
            p Mediante este convenio cada una de las partes o países participantes se comprometen a cooperar con los medios que cada uno disponga, en la investigación e intercambio de información para mejorar la comprensión de los efectos de las actividades humanas sobre la capa de ozono y de los efectos de la modificación de ésta sobre la salud humana y el medio ambiente.
            p Por consiguiente, se comprometen a adoptar medidas adecuadas para controlar, limitar, reducir o prevenir las actividades humanas cuando se compruebe que tienen o pueden tener efectos adversos como resultado de la modificación probable de la capa de ozono.


          .col-lg-4.mb-4.mb-lg-0
            img.img-a(src='@/assets/curso/tema_1/img_20.png', alt='')

      #collapse06.collapse(data-bs-parent='#MapaGroup01')
        .titulo-segundo
          #t_1_6.h2 1.6 Convenio Marco Cambio Climático

        .row
          .col-lg-4.mb-4.mb-lg-0
            img.img-a(src='@/assets/curso/tema_1/img_21.png', alt='')
          .col-lg-8.mb-4.mb-lg-0
            p.mb-3 Este convenio se desarrolló con el fin de mitigar las actividades que afecten el cambio climático global protegiendo dos aspectos principales: la biodiversidad biológica, de acuerdo con el Convenio sobre la Diversidad Biológica (CNUDB) y la desertificación por medio del Convención de Lucha contra la Desertificación (UNCCD).
            .bloque-texto-c.color-acento-botones.p-4
              h1.fas.fa-quote-right.mb-0
              h3.mb-2 Esto debido a que el cambio climático afecta a la biodiversidad y a la desertificación. Cuanto más intenso sea el cambio climático y mayor sea su alcance, mayor será la pérdida de especies vegetales y animales, y las tierras secas y semiáridas en todo el mundo perderán vegetación y se deteriorarán.
              span - Minambiente, 2020.
      #collapse07.collapse(data-bs-parent='#MapaGroup01')
        .titulo-segundo
          #t_1_7.h2 1.7 Protocolo de Kioto

        .row
          .col-lg-8.mb-4.mb-lg-0
            p Este protocolo compromete a los países industrializados a estabilizar las emisiones de gases de efecto invernadero. 
            p.mb-3 El Protocolo de Kioto, establece metas vinculantes de reducción de las emisiones para 37 países industrializados y la Unión Europea, reconociendo que son los principales responsables de los elevados niveles de emisiones de Gases Efecto Invernadero (GEI) que hay actualmente en la atmósfera, y que son el resultado de quemar combustibles fósiles durante más de 150 años.

            .cajon.color-acento-contenido.p-4
              p “Su principio central es el de la «responsabilidad común pero diferenciada»” (Minambiente, 2020).
          .col-lg-4.mb-4.mb-lg-0
            img.img-a(src='@/assets/curso/tema_1/img_22.png', alt='')
      #collapse08.collapse(data-bs-parent='#MapaGroup01')
        .titulo-segundo
          #t_1_8.h2 1.8 Convenio de Basilea sobre el Movimiento Transfronterizo de Desechos Peligrosos 

        .row
          .col-lg-4.mb-4.mb-lg-0
            img.img-a(src='@/assets/curso/tema_1/img_23.png', alt='')
          .col-lg-8.mb-4.mb-lg-0
            .cajon.color-primario.p-4.mb-3
              p El Convenio de Basilea se basa en el control de los movimientos transfronterizos de desechos peligrosos y su eliminación.

            p El convenio fue aprobado el 22 de marzo de 1989 por la Conferencia de Plenipotenciarios en Basilea (Suiza), se compone de 175 Partes y su objetivo principal se centra en proteger la salud de las personas y el medio ambiente frente a los efectos perjudiciales de los desechos peligrosos.
      #collapse09.collapse(data-bs-parent='#MapaGroup01')
        .titulo-segundo
          #t_1_9.h2 1.9 Convenio de Rotterdam 

        .row
          .col-lg-8.mb-4.mb-lg-0
            .bloque-texto-d.color-secundario.p-4
              .bloque-texto-d__texto.mb-2
                i.fas.fa-quote-left
                h3.text-regular El convenio de Rotterdam se enfoca en la gestión de productos químicos, entró en vigor en el 2004 y participan 73 miembros. Su función principal se centra en promover la responsabilidad compartida y los esfuerzos conjuntos de las Partes en la esfera del comercio internacional de ciertos productos químicos peligrosos a fin de proteger la salud humana y el medio ambiente frente a posibles daños y contribuir a su utilización ambientalmente racional, facilitando el intercambio de información acerca de sus características.
                i.fas.fa-quote-right
              .bloque-texto-d__autor 
                .h5.mb-0 -  Secretaría del Convenio de Rotterdam, 2004.
          .col-lg-4.mb-4.mb-lg-0
            img.img-a(src='@/assets/curso/tema_1/img_24.png', alt='')
        
      #collapse10.collapse(data-bs-parent='#MapaGroup01')
        .titulo-segundo
          #t_1_10.h2 1.10 Convenio de Estocolmo sobre Contaminantes Orgánicos Persistentes
        .row
          .col-lg-4.mb-4.mb-lg-0
            img.img-a(src='@/assets/curso/tema_1/img_25.png', alt='')
          .col-lg-8.mb-4.mb-lg-0
            p.mb-3 El convenio de Estocolmo sobre Contaminantes Orgánicos Persistentes entró en vigor en el 2004 y tiene como objetivo proteger la salud humana y el medio ambiente de Contaminantes Orgánicos Persistentes (COP).
            .bloque-texto-c.color-acento-botones.p-4
              h1.fas.fa-quote-right.mb-0
              h3.mb-2 En este convenio, cada una de las partes desarrollan y aplican medidas para eliminar o reducir la producción, utilización, importación, exportación y emisión al medio ambiente de COPs e incluye disposiciones en cuanto al acceso a la información, la sensibilización y formación del público y la participación en el desarrollo de planes de aplicación.
              span - Minambiente, 2020.
      #collapse11.collapse(data-bs-parent='#MapaGroup01')
        .titulo-segundo
          #t_1_11.h2 1.11 Tratado de Cooperación Amazónica – TCA
        .row
          .col-lg-8.mb-4.mb-lg-0
            p.mb-3 El Tratado de Cooperación Amazónica (TCA), centra su atención en la protección y desarrollo armónico de la Amazonía y la incorporación de sus territorios a las respectivas economías nacionales, lo que es fundamental para el mantenimiento del equilibrio entre crecimiento económico y preservación del medio ambiente.

            .cajon.color-acento-contenido.p-4.mb-3
              p “Este tratado fue firmado y ratificado el 3 de julio de 1978 por los ocho países que comparten la Amazonía: Bolivia, Brasil, Colombia, Ecuador, Guyana, Perú, Surinam y Venezuela” (Cancillería de Colombia, 2018).

            p Sumado a cada uno de los tratados y convenios mencionados anteriormente, Colombia dispone de organizaciones públicas que se encargan de velar por el cuidado y conservación de los recursos naturales disponibles y el fortalecimiento de negocios y economías verdes y sostenibles. 
          .col-lg-4.mb-4.mb-lg-0
            img.img-a(src='@/assets/curso/tema_1/img_26.png', alt='')



  
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  watch: {
    $route(to) {
      if (to.hash?.length) {
        const numero = to.hash.split('')[1]
        this.mostrarCollapse(numero)
        document.getElementById('MapaGroup01').scrollIntoView({
          behavior: 'smooth',
        })
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
  methods: {
    mostrarCollapse(id) {
      document.querySelector('#boton' + id).click()
    },
  },
}
</script>

<style lang="sass" scoped></style>
