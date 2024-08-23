<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se presenta una síntesis de la temática estudiada en el componente formativo.

    .row.justify-content-center
      .col-lg-10.mb-5
        .fondo-color-sistema-i.p-4.borde-20
          figure
            img(src="@/assets/curso/temas/sintesis.svg", alt="Diagrama del manejo agroecológico de suelos que presenta un enfoque agrícola para mantener y mejorar la salud del suelo mediante prácticas sostenibles y ecológicas. Incluye conceptos básicos como el suelo como sistema y sus elementos, prácticas agroecológicas de conservación, recuperación y fertilización del suelo, destacando la rotación de cultivos, los policultivos, sistemas agroforestales y el uso de compostaje y abonos líquidos.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
