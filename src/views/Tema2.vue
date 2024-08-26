<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 El suelo como sistema
    
    .fondo-personalizado-1.f5.mb-4
      .fondo-personalizado-1__contenido
        .row.mb-4 
          .col-lg-5.align-self-center
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/23.png",style="max-width: 505px;")
          .col-lg-7
            .fondo-color-sistema-k.p-4.h-100.align-content-center.borde-15
              p.mb-0 Un sistema es un conjunto de elementos que se interrelacionan entre sí. Los sistemas abiertos reciben entradas y generan salidas provenientes de las dinámicas internas del sistema. El agroecosistema es un sistema artificial debido a la intervención humana con labores de producción agrícola sostenibles. Dentro del agroecosistema existe el subsistema del suelo.
        
        p.mb-4 #[span.fw-bold.c-color-sistema-n Las entradas] en el sistema del suelo son: 

        TabsB.tabs-p-1.color-acento-contenido
          .row.justify-content-center.py-4.py-lg-5(titulo="Rocas (material parental)" :icono="require('@/assets/curso/temas/25.svg')")
            .col-lg-6.mb-4.mb-lg-0
              h4.mb-4 Rocas (material parental)
              p.mb-0 Al degradarse física y químicamente, forman la fracción mineral del suelo. Este proceso de degradación ocurre de forma natural y toma cientos de años en desarrollarse.
            .col-lg-5
              figure
                img.mx-auto(src="@/assets/curso/temas/24.png",style="max-width: 412px;")
          .row.justify-content-center.py-4.py-lg-5(titulo="Materia orgánica" :icono="require('@/assets/curso/temas/27.svg')")
            .col-lg-6.mb-4.mb-lg-0
              h4.mb-4 Materia orgánica
              p.mb-0 Proviene de los residuos de los organismos que viven sobre el suelo (animales, plantas, microorganismos). Mejora la fertilidad del suelo, aumenta la retención de agua, incrementa la actividad biológica por su riqueza en microorganismos benéficos, y constituye una reserva de nutrientes de lenta liberación.
            .col-lg-5
              figure
                img.mx-auto(src="@/assets/curso/temas/26.png",style="max-width: 412px;")
          .row.justify-content-center.py-4.py-lg-5(titulo="Agua" :icono="require('@/assets/curso/temas/29.svg')")
            .col-lg-6.mb-4.mb-lg-0
              h4.mb-4 Agua
              p.mb-0 Proveniente de fuentes naturales, como la lluvia, o artificiales, como el riego. 
            .col-lg-5
              figure
                img.mx-auto(src="@/assets/curso/temas/28.png",style="max-width: 412px;")
          .row.justify-content-center.py-4.py-lg-5(titulo="Aire" :icono="require('@/assets/curso/temas/31.svg')")
            .col-lg-6.mb-4.mb-lg-0
              h4.mb-4 Aire
              p.mb-0 Proveniente de la atmósfera y propiciado por los espacios porosos de una adecuada labranza. 
            .col-lg-5
              figure
                img.mx-auto(src="@/assets/curso/temas/30.png",style="max-width: 412px;")
    
    p.mb-4 Las salidas en el sistema del suelo son: 

    .row.align-items-center.mb-4
      .col-lg-5
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/33.png",style="max-width: 505px;")
      .col-lg-7
        .fondo-color-acento-contenido.sombra-p-1.p-3.borde-10.mb-4
          .row.align-items-center 
            .col-md-auto
              figure.mb-4.mb-md-0
                img.mx-auto(src="@/assets/curso/temas/34.svg",style="max-width: 39px;") 
            .col
              p.mb-0 Producción agrícola
        .fondo-color-acento-contenido.sombra-p-1.p-3.borde-10.mb-4
          .row.align-items-center 
            .col-md-auto
              figure.mb-4.mb-md-0
                img.mx-auto(src="@/assets/curso/temas/35.svg",style="max-width: 39px;") 
            .col
              p.mb-0 Residuos de cosecha
        .fondo-color-acento-contenido.sombra-p-1.p-3.borde-10.mb-4
          .row.align-items-center 
            .col-md-auto
              figure.mb-4.mb-md-0
                img.mx-auto(src="@/assets/curso/temas/36.svg",style="max-width: 32px;") 
            .col
              p.mb-0 Oxígeno proveniente de la fotosíntesis
        .fondo-color-acento-contenido.sombra-p-1.p-3.borde-10.mb-4
          .row.align-items-center 
            .col-md-auto
              figure.mb-4.mb-md-0
                img.mx-auto(src="@/assets/curso/temas/37.svg",style="max-width: 38px;") 
            .col
              p.mb-0 #[b Pérdidas de fracción mineral:] Por erosión natural o inducida por prácticas nocivas.
        .fondo-color-acento-contenido.sombra-p-1.p-3.borde-10.mb-4
          .row.align-items-center 
            .col-md-auto
              figure.mb-4.mb-md-0
                img.mx-auto(src="@/assets/curso/temas/38.svg",style="max-width: 40px;") 
            .col
              p.mb-0 #[b Pérdidas de materia orgánica:] Por mal manejo de suelos, intoxicación de la fracción viva, y/o sobre mecanización.
        .fondo-color-acento-contenido.sombra-p-1.p-3.borde-10.mb-4
          .row.align-items-center 
            .col-md-auto
              figure.mb-4.mb-md-0
                img.mx-auto(src="@/assets/curso/temas/39.svg",style="max-width: 41px;") 
            .col
              p.mb-0 #[b Pérdidas de agua:] Por falta de elementos retenedores como la materia orgánica.
        .fondo-color-acento-contenido.sombra-p-1.p-3.borde-10.mb-4
          .row.align-items-center 
            .col-md-auto
              figure.mb-4.mb-md-0
                img.mx-auto(src="@/assets/curso/temas/40.svg",style="max-width: 43px;") 
            .col
              p.mb-0 #[b Pérdidas de aire:] Por sobre mecanización y pulverización del suelo con labranzas no adecuadas.
    
    p.mb-4 #[span.c-color-sistema-o.fw-bold Las plantas toman del suelo los minerales para su nutrición y el agua para su supervivencia.] Estos minerales deben estar en formas químicas disponibles para su absorción, las cuales están presentes de forma natural en suelos no degradados. Sin embargo, en la agricultura, y debido a la explotación agrícola, estas formas pueden estar agotadas. Por ello, es necesario restituir al suelo las condiciones para hacer disponibles los nutrientes.

    .fondo-color-sistema-p.p-4.borde-15
      .row 
        .col-lg-3
          figure.mb-4.mb-lg-0
            img.mx-auto(src="@/assets/curso/temas/41.svg",style="max-width: 270px;")
        .col-lg-9
          h3.c-color-acento-contenido.mb-4 Podcast
          p.text-white.mb-4 Es momento de escuchar el podcast en el que Don Campos, Azusena, el ingeniero y Evaristo explicarán detalladamente la importancia del suelo. En este episodio, abordarán temas como la fertilidad del suelo y su papel en la producción agroecológica.
          p(style="color: red;") Falta seccion de podcast aqui.

</template>

<script>
export default {
  name: 'Tema2',
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
