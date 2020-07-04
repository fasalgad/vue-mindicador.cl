<template>
  <v-row>
    <v-col>
      <v-row>
        <v-col cols="10" sm="6" md="4" xl="3">
          Mi indicador {{ indicador }}
        </v-col>
        <v-col cols="3"> Valor es {{ valor }} </v-col>
        <v-col> fecha: {{ fecha }} </v-col>
      </v-row>
      <v-row>
        <v-col>
          <ul>
            <li v-for="(item, index) in series" v-bind:key="index">
              {{ item.fecha }} - {{ item.valor }}
            </li>
          </ul>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn v-on:click="llamarIndicador">
            Llamar a dolar
          </v-btn>
          <v-btn v-on:click="llamarIndicadorFecha">
            LLamar a dolar con la fecha de la propiedad
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
import ApiIndicador from '../../plugins/apiMindicador'
export default {
  props: {
    propfecha: String
  },
  data () {
    return {
      indicador: '',
      valor: '',
      fecha: '',
      series: []
    }
  },
  methods: {
    llamarIndicador () {
      ApiIndicador.get('/dolar').then(respuesta => {
        console.log(respuesta)
        this.indicador = respuesta.data.nombre
        this.valor = respuesta.data.serie[0].valor
        this.fecha = respuesta.data.serie[0].fecha
        this.series = respuesta.data.serie
        this.$emit('llamarcantidad', respuesta.data.serie.length)
      })
    },
    llamarIndicadorFecha () {
      ApiIndicador.get('/dolar/' + this.propfecha).then(respuesta => {
        console.log(respuesta)
        this.indicador = respuesta.data.nombre
        this.valor = respuesta.data.serie[0].valor
        this.fecha = respuesta.data.serie[0].fecha
        this.series = respuesta.data.serie
        this.$emit('llamarcantidad', respuesta.data.serie.length)
      })
    }
  }
}
</script>
