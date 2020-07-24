<template>
  <v-sheet elevation="10" class="pa-4">
    <v-chip-group column active-class="primary--text">
      <v-chip
        v-for="(item, index) in listaIndicadores"
        :key="index"
        @click="holasoy(item)"
      >
        {{ item }}
      </v-chip>
    </v-chip-group>
  </v-sheet>
</template>
<script>
import apiMindicador from '../../plugins/apiMindicador'
export default {
  props: {
    listaIndicadores: Array
  },
  data () {
    return {
    }
  },
  methods: {
    async holasoy (item) {
      try {
        let respuesta = await apiMindicador.get(`/${item}`)
        console.log(respuesta)
        this.$emit('EntregaValorConsultado', {
          valor: respuesta.data.serie[0].valor,
          seleccionado: item
        })
      } catch (error) {}
    }
  }
}
</script>
