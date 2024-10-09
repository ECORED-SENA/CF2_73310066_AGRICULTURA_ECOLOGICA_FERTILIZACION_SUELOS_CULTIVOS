<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.pb-0.pb-md-0
  
    .titulo-principal.color-acento-contenido.mb-3(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .fondo-personalizado-1.f1
      .fondo-personalizado-1__contenido.py-5
        p.mb-4(data-aos="fade") El manejo agroecológico de suelos es esencial para la sostenibilidad de la agricultura y la conservación de los recursos naturales. Este enfoque se centra en métodos y prácticas que satisfacen las necesidades nutricionales de los cultivos, utilizando técnicas que respetan y promueven el equilibrio natural del suelo.

        .row.align-items-center
          .col-lg-5(data-aos="fade-right")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/1.png",style="max-width: 505px;")
          .col-lg-7
            .fondo-color-secundario.p-4.borde-15.mb-4(data-aos="fade-down")
              .row.align-items-center
                .col-md-auto 
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/2.svg",style="max-width: 66px;")
                .col
                  p.mb-0 Este componente profundiza en los conceptos y prácticas agroecológicas, abarcando desde la comprensión del suelo como sistema hasta las estrategias específicas para su manejo. Se exploran prácticas de conservación, recuperación y fertilización del suelo, todas orientadas a mantener su salud y productividad a largo plazo.
            p.mb-0(data-aos="fade-left") La agroecología busca reducir la dependencia de insumos externos y mitigar los efectos negativos de la agricultura convencional. Al integrar conocimientos ancestrales y tecnologías modernas, se favorece una producción agrícola sostenible que respeta el medioambiente y promueve la resiliencia de los ecosistemas agrícolas.
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
