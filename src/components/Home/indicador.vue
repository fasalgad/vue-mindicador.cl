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
          <v-btn v-on:click="llamarIndicador">
            Llamar función
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
import ApiIndicador from '../../plugins/apiMindicador'
export default {
  data () {
    return {
      indicador: '',
      valor: '',
      fecha: ''
    }
  },
  methods: {
    llamarIndicador () {
      ApiIndicador.get('/dolar').then(respuesta => {
        console.log(respuesta)
        this.indicador = respuesta.data.nombre
        this.valor = respuesta.data.serie[0].valor
        this.fecha = respuesta.data.serie[0].fecha
      })
    }
  }
}
</script>
