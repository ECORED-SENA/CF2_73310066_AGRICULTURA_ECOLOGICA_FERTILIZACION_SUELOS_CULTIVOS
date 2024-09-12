<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-4(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Generalidades
    
    .fondo-personalizado-1.bottom-1.f2.mb-4
      .fondo-personalizado-1__contenido.pt-5
        .row.align-items-center 
          .col-lg-5(data-aos="fade-right")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/4.png",style="max-width: 505px;")
          .col-lg-7(data-aos="fade-left")
            .fondo-color-sistema-k.p-4.h-100.align-content-center.borde-15
              p.mb-0 La agricultura ecológica es un modelo alternativo basado en los principios de la agroecología como ciencia. En ella se aplican las prácticas agroecológicas a todos los aspectos relacionados con la producción, tales como la preparación del terreno, la siembra, el manejo integrado de arvenses, plagas y enfermedades, el uso de suelos, las labores culturales, la cosecha y la poscosecha.
    
        .titulo-decorativo.my-5(data-aos="fade-right")
          .cont-figura
            img(src="@/assets/curso/temas/img-tit-dec.svg")
          .cont-text 
            h3 Manejo agroecológico del suelo
        
        p.mb-4(data-aos="fade") El manejo agroecológico del suelo es uno de los componentes fundamentales de este tipo de agricultura. El suelo y su equilibrio determinan la nutrición, fitosanidad, calidad de la producción, creación y sostenibilidad de estos sistemas.

        .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5(data-aos="zoom-in-out")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/5.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El suelo debe ser comprendido como un sistema en el que sus elementos realizan todo tipo de interacciones que influyen en los cultivos allí establecidos. La comprensión de estas dinámicas y el favorecimiento de condiciones propicias a las especies vegetales mediante prácticas agroecológicas son el objeto de estudio de este material de formación.
    
    p.mb-4(data-aos="fade-up") Los beneficios del manejo agroecológico son: 

    .fondo-personalizado-1.top-1.f3.mb-5
      .fondo-personalizado-1__contenido
        .row.align-items-center.mb-4 
          .col-lg-3(data-aos="fade-right")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/7.png",style="max-width: 295px;")
          .col-lg-9(data-aos="fade-left")
            AcordionA.acordion-personalizado-1(tipo="a" clase-tarjeta="tarjeta")
              .div(titulo="Producciones agrícolas sostenibles")
                .ps-md-5.ms-md-3
                  p Propicia producciones agrícolas sostenibles en las que se frena el deterioro del recurso del suelo. Al utilizar prácticas que mejoran la estructura y fertilidad del suelo, se asegura que las tierras agrícolas puedan seguir siendo productivas a largo plazo sin causar daños irreversibles al ecosistema.
              .div(titulo="Mitigación de efectos negativos")
                .ps-md-5.ms-md-3
                  p Se mitigan los efectos negativos de la agricultura sobre el suelo. Las técnicas agroecológicas reducen la erosión, la compactación y la salinización del suelo, además de disminuir la contaminación por agroquímicos, lo que mejora la salud del suelo y del entorno natural.
              .div(titulo="Recuperación de suelos degradados")
                .ps-md-5.ms-md-3
                  p Se recuperan suelos degradados. A través de prácticas como la incorporación de materia orgánica, la rotación de cultivos y el uso de abonos verdes, los suelos que han sido dañados por prácticas agrícolas intensivas pueden ser restaurados y devueltos a un estado productivo y saludable.
              .div(titulo="Disminución de dependencia de insumos externos")
                .ps-md-5.ms-md-3
                  p Se disminuye la dependencia de insumos externos. Al fomentar el uso de recursos locales y naturales, como compost y abonos orgánicos, los agricultores pueden reducir su dependencia de fertilizantes y pesticidas sintéticos, lo que también disminuye los costos y el impacto ambiental.
              .div(titulo="Recuperación de saberes ancestrales")
                .ps-md-5.ms-md-3
                  p Se recuperan conocimientos tradicionales y ancestrales. El manejo agroecológico de suelos integra prácticas y conocimientos tradicionales que han sido desarrollados por comunidades locales a lo largo de generaciones. Estos saberes son valiosos para el desarrollo de técnicas agrícolas sostenibles que respeten y trabajen en armonía con el medio ambiente.
        
        p.mb-4(data-aos="fade-up") Estas prácticas contribuyen a la sostenibilidad y eficiencia de los sistemas agroecológicos, promoviendo un equilibrio natural y una producción más respetuosa con el medio ambiente.

        .row(data-aos="fade-up")
          .col-lg-7
            .fondo-color-sistema-m.p-4.borde-10.h-100.align-content-center
              .row.align-items-center
                .col-md-auto 
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/8.png",style="max-width: 76px;")
                .col
                  p.mb-0 Se considera al suelo como la capa superficial de la corteza terrestre, en la cual se sostienen las plantas. Esta capa es un sistema vivo con elementos sólidos, líquidos y gaseosos.
          .col-lg-5.order-first.order-lg-last.align-self-center
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/9.png",style="max-width: 505px;")

        .titulo-decorativo.mt-5(data-aos="fade-right")
          .cont-figura
            img(src="@/assets/curso/temas/img-tit-dec.svg")
          .cont-text 
            h3 Composición del suelo

    p.mb-4(data-aos="fade-left") La composición del suelo determina su capacidad para sustentar la vida vegetal, influenciando factores como la textura, estructura, contenido de nutrientes y materia orgánica, así como su capacidad de retención de agua y aireación.

    .row.align-items-center.mb-4(data-aos="fade-down")
      .col-lg-10.col-md-9
        ul.lista-ul.lista-p-1.mb-0
          li.mb-0
            img.me-2(src="@/assets/curso/temas/11.svg",style="max-width: 16px;")        
            p.mb-0 #[span.fw-bold.c-color-sistema-n Elementos sólidos:] conformados por la descomposición física y química de las rocas, la materia orgánica proveniente de los residuos de los organismos presentes, microorganismos vivos con funciones fundamentales en la descomposición y mineralización de la materia orgánica, rocas y agregados.
      .col-lg-2.col-md-3.order-first.order-md-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/12.svg",style="max-width: 190px;")
    
    .tabla-a.tabla-p-1.mb-4(data-aos="fade-down")
      table
        thead
          tr
            th(colspan="2") Proporciones en un suelo ideal
        tbody
          tr
            td.text-center.fw-bold(style="background-color: #F7F0D8;") 45 % minerales
            td.text-center.fw-bold(style="background-color: #FDF7E6;") 5 % materia orgánica
    
    ul.lista-ul.lista-p-1.mb-4(data-aos="fade-down")
      li.mb-0
        img.me-2(src="@/assets/curso/temas/11.svg",style="max-width: 16px;")        
        p.mb-0 #[span.fw-bold.c-color-sistema-n Elementos líquidos y gaseosos:] juegan un papel crucial en el transporte de nutrientes y la respiración de las raíces, contribuyendo a la salud y vitalidad del ecosistema del suelo.
    
    .row.align-items-center.mb-4
      .col-lg-5(data-aos="fade-right")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/13.png",style="max-width: 505px;")
      .col-lg-7(data-aos="fade-left")
        .fondo-color-sistema-k.p-3.borde-10.mb-4
          .row.align-items-center 
            .col-md-auto 
              figure.mb-4.mb-md-0
                img.mx-auto(src="@/assets/curso/temas/14.svg",style="max-width: 78px;")
            .col
              p.mb-0 #[span.fw-bold 25 % agua:] vital para la producción agrícola.
        .fondo-color-sistema-m.p-3.borde-10
          .row.align-items-center 
            .col-md-auto 
              figure.mb-4.mb-md-0
                img.mx-auto(src="@/assets/curso/temas/15.svg",style="max-width: 78px;")
            .col
              p.mb-0 #[span.fw-bold 25 % aire:] propicia la vida en los organismos y microorganismos del suelo, permitiendo el intercambio entre las raíces de las plantas y el suelo mismo.
    
    p.mb-4(data-aos="fade") Las prácticas agroecológicas de manejo de suelos son:

    .fondo-personalizado-1.f4.mb-4
      .fondo-personalizado-1__contenido.py-5
        .bg-white.borde-20.p-4(data-aos="flip-up")
          SlyderA.slider-personalizado-1.pt-lg-3(tipo="b")
            .row.justify-content-center
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-4.pt-lg-4 Mineralización de la materia orgánica
                p.mb-0 Facilita el proceso natural de descomposición, lo cual es esencial para la liberación de nutrientes en formas que las plantas pueden absorber y utilizar eficientemente. Este proceso contribuye a la fertilidad del suelo y al crecimiento saludable de las plantas.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/17.png",style="max-width: 412px;")
            .row.justify-content-center
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-4.pt-lg-4 Aporte externo de nutrientes
                p.mb-0 Provenientes de procesos de compostaje y otros métodos, incrementa la cantidad de nutrientes disponibles en el suelo. Esto mejora la calidad del suelo, promueve el crecimiento de las plantas y puede reducir la necesidad de fertilizantes químicos. 
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/18.png",style="max-width: 412px;")
            .row.justify-content-center
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-4.pt-lg-4 Retención de agua
                p.mb-0 Mejora la capacidad del suelo para retener agua, lo que es crucial para mantener la humedad necesaria para el crecimiento de las plantas. Un suelo con buena capacidad de retención de agua puede reducir la frecuencia de riego y proteger las plantas durante periodos de sequía.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/19.png",style="max-width: 412px;")
            .row.justify-content-center
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-4.pt-lg-4 Aireación del suelo
                p.mb-0 Evita procesos de compactación, favoreciendo la entrada de aire y permitiendo que las raíces de las plantas respiren. Un suelo bien aireado facilita el drenaje del agua y la actividad microbiana, ambos factores importantes para la salud del suelo y las plantas.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/20.png",style="max-width: 412px;")
            .row.justify-content-center
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-4.pt-lg-4 Conservación de suelos
                p.mb-0 Previene la degradación del suelo por labores erosivas e invasivas, protegiendo su estructura y composición. Prácticas de conservación, como el uso de cultivos de cobertura y la reducción de la labranza, ayudan a mantener la productividad del suelo y su sostenibilidad a largo plazo.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/21.png",style="max-width: 412px;")
    
    .fondo-color-sistema-k.p-3.borde-10(data-aos="fade-right")
      .row.align-items-center
        .col-md-auto
          figure.mb-4.mb-md-0
            img.mx-auto(src="@/assets/curso/temas/22.svg",style="max-width: 82px;")
        .col
          p.mb-0 Estas prácticas promueven un manejo sostenible del suelo, mejorando su calidad y productividad a largo plazo.
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

<style lang="sass"></style>
