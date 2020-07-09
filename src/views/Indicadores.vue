<template>
  <v-row>
    <v-col>
      <SlideGroupIndicadores :propindicadores="indicadores" v-on:EntregarIndicador="recibirIndicador"/>
      <p v-show="indicadorSeleccionado">
          Fui Seleccionado {{indicadorSeleccionado}}
      </p>
      <v-btn @click="irHome">
          Ir a Home
      </v-btn>
    </v-col>
  </v-row>
</template>
<script>
import nameIndicadores from '../servicios/nameIndicadores'
import SlideGroupIndicadores from '../components/Indicadores/SlideGroupIndicadores'
export default {
    data(){
        return{
            indicadores:'',
            indicadorSeleccionado:null
        }
    },
    created(){
        this.indicadores=nameIndicadores
    },
    components:{
        SlideGroupIndicadores
    },
    methods:{
        recibirIndicador(indicador){
            this.indicadorSeleccionado=indicador
        },
        irHome(){
            console.log('this.$route',this.$route)
            console.log('this.$router',this.$router)
            this.$router.push({name:'Home'})
        }
    }
}
</script>