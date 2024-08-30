<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Modelos alternativos de agroecología',
      titulo: 'Cuestionario',
      introduccion:
        'Identificar los diferentes enfoques y prácticas de la agroecología, destacando su impacto en la sostenibilidad agrícola y la conservación de los ecosistemas naturales.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el enfoque principal de la agricultura regenerativa?',
          imagen: require('@/assets/componentes/pregunta_1.svg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Maximizar la producción de cultivos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Restaurar y mejorar la salud del suelo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Utilizar pesticidas y fertilizantes químicos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir el costo de producción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de las siguientes prácticas es típica en la permacultura?',
          imagen: require('@/assets/componentes/pregunta_2.svg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Uso intensivo de pesticidas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Monocultivo de plantas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Integración de plantas, animales, suelos y agua en un entorno armonioso.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cultivo hidropónico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué beneficio ofrece la agrosilvicultura?',
          imagen: require('@/assets/componentes/pregunta_3.svg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementa el uso de fertilizantes químicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mejora la biodiversidad y protege el suelo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Disminuye la cantidad de árboles en las tierras de cultivo.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Fomenta el monocultivo.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué caracteriza a los sistemas agroecológicos urbanos?',
          imagen: require('@/assets/componentes/pregunta_4.svg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Uso de grandes maquinarias agrícolas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Creación de huertos comunitarios y jardines en azoteas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Producción de alimentos exclusivamente para la exportación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Dependencia de fertilizantes sintéticos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es el objetivo principal de la agricultura biodinámica?',
          imagen: require('@/assets/componentes/pregunta_1.svg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Uso de grandes maquinarias agrícolas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Creación de huertos comunitarios y jardines en azoteas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Producción de alimentos exclusivamente para la exportación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Dependencia de fertilizantes sintéticos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué significa la captura de carbono en la agricultura regenerativa?',
          imagen: require('@/assets/componentes/pregunta_2.svg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'El uso de fertilizantes para aumentar la producción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El proceso de captura y almacenamiento de dióxido de carbono en el suelo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La eliminación de carbono del proceso de cultivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La quema de residuos agrícolas para reducir el carbono en el suelo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué es la rotación de cultivos?',
          imagen: require('@/assets/componentes/pregunta_3.svg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto:
                'Plantar el mismo cultivo en el mismo campo cada temporada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Alternar diferentes cultivos en el mismo campo en diferentes temporadas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Dejar el campo sin cultivar durante todo el año.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Utilizar cultivos transgénicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Cuál es la principal función de los cultivos de cobertura?',
          imagen: require('@/assets/componentes/pregunta_4.svg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar el uso de fertilizantes químicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mejorar la calidad del suelo y evitar la erosión.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir la biodiversidad en el campo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Aumentar la cantidad de agua utilizada en la agricultura.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué es el compostaje?',
          imagen: require('@/assets/componentes/pregunta_1.svg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'La quema de residuos agrícolas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El proceso de descomposición de materia orgánica para mejorar la fertilidad del suelo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La utilización de pesticidas para controlar plagas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La plantación de cultivos sin rotación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué se entiende por biodiversidad en el contexto de la agroecología?',
          imagen: require('@/assets/componentes/pregunta_2.svg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'La variedad de cultivos comerciales en una granja.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La diversidad de vida en un hábitat o ecosistema, incluyendo plantas, animales, insectos y microorganismos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El uso de un solo tipo de planta en un campo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La cantidad de pesticidas utilizados en la agricultura.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
