<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 El suelo como sistema
    
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
