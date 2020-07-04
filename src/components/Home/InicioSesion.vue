<template>
  <v-row>
    <v-col>
      <v-row align="center" justify="center">
        <v-col cols="4">
          <label>Usuario</label> <br />
          <input type="text" v-model="usuario" /> <br />
          <label>Contraseña</label> <br />
          <input type="text" v-model="clave" /> <br />
          <v-btn v-on:click="inicio">Inicio Sesión</v-btn>
        </v-col>
      </v-row>
      <v-row>
          <v-col>
              <v-btn @click="allUsers" > allUsers</v-btn>
          </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
import apiLocal from '../../plugins/apiLocal'
export default {
  data () {
    return {
      usuario: '',
      clave: ''
    }
  },
  methods: {
    inicio () {
      alert('Iniciando Sesión')
      apiLocal
        .post('/Users/Authenticate', {
          username: 'test',
          password: 'test'
        })
        .then(respuesta => {
          console.log(respuesta)
        })
    },
    allUsers () {
      apiLocal.get('/Users/usuarios').then(respuesta => {
        console.log(respuesta)
      })
    }
  }
}
</script>
