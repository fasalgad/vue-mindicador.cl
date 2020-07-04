<template>
  <v-container>
    <indicador></indicador>
  </v-container>
</template>

<script>
// @ is an alias to /src
import indicador from '../components/Home/indicador'

export default {
  name: 'Home',
  components: {
    // HelloWorld
    indicador
  },
  methods:{
    
  },
  data(){
    return {
      
    }
  }
}
</script>
