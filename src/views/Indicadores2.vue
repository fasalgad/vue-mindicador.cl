<template>
  <v-row>
    <v-col>
      <v-row>
        <v-col>
          <chipgroup
            :listaIndicadores="listaIndicadores"
            @EntregaValorConsultado="valorConsultado"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-alert type="success">
            Seleccionado es {{ seleccionado }} con el valor
            {{ valorseleccionado }}
          </v-alert>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
import chipgroup from '../components/Indicadores2/chipgroup'
import apiMindicador from '../plugins/apiMindicador'
export default {
  components: {
    chipgroup
  },
  data () {
    return {
      listaIndicadores: [
        'uf',
        'ivp',
        'dolar',
        'dolar_intercambio',
        'euro',
        'ipc',
        'utm',
        'imacec',
        'tpm',
        'libra_cobre',
        'tasa_desempleo',
        'bitcoin'
      ],
      seleccionado: '----',
      valorseleccionado: 0
    }
  },
  methods: {
    valorConsultado ({ valor, seleccionado }) {
      this.valorseleccionado = valor
      this.seleccionado = seleccionado
    }
  }
}
</script>
