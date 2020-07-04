<template>
  <v-container>
    <InicioSesion/>
    <indicador></indicador>
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
      
    }
  }
}
</script>
