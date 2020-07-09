<template>
    <v-sheet class="mx-auto" elevation="8" max-width="800">
        <v-slide-group
          v-model="model"
          class="pa-4"
          active-class="warning"
          show-arrows
        >
          <v-slide-item
            v-for="n in propindicadores"
            :key="n"
            v-slot:default="{ active,toggle }"
           
          >
            <v-card
              :color="active ? undefined : 'grey lighten-1'"
              class="ma-4"
              height="200"
              width="100"
              @click="toggle"
            >
              <v-row class="fill-height" align="center" justify="center"
               @click="clicktarjeta(n)">
                  <v-col>
                      <p>
                          {{n}}
                      </p>
                  </v-col>
                <v-scale-transition>
                  <v-icon
                    v-if="active"
                    color="white"
                    size="48"
                    v-text="'mdi-close-circle-outline'"
                    @click="close"
                  ></v-icon>
                </v-scale-transition>
              </v-row>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
</template>
<script>
export default {
    props:{
        propindicadores:Array
    },
    data(){
        return{
            model:''
        }
    },
    methods:{
        clicktarjeta(indicador){
            this.$emit('EntregarIndicador',indicador)
            console.log(this.model)
        },
        close(){

        }
    }
}
</script>