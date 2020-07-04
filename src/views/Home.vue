<template>
  <v-container>
    <InicioSesion/>
    <label>Fecha</label> <br/>
    <input type="text" v-model="b_fecha"> <br>
    <indicador v-bind:propfecha="b_fecha" v-on:llamarcantidad="showcantidad"></indicador>
    <label>Cantidad de series que consulta</label> <br/>
    <label>{{cantidad_a_mostrar}}</label>
  </v-container>
</template>

<script>
// @ is an alias to /src
import indicador from '../components/Home/indicador'
import InicioSesion from '../components/Home/InicioSesion'

export default {
  name: 'Home',
  components: {
    // HelloWorld
    indicador,
    InicioSesion
  },
  methods:{
    
  },
  data(){
    return {
      b_fecha:'',
      cantidad_a_mostrar:''
    }
  },
  methods:{
    showcantidad(cantidad){
      this.cantidad_a_mostrar=cantidad
    }
  }
}
</script>
