<template>
  <v-row>
    <v-col>
      <v-row align="center" justify="center">
        <v-col cols="4">
          <label>Usuario</label> <br />
          <input type="text" v-model="usuario" /> <br />
          <label>Contraseña</label> <br />
          <input type="password" v-model="clave" /> <br />
          <v-btn v-on:click="inicio">Inicio Sesión</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn @click="allUsers"> allUsers</v-btn>
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
      clave: '',
      token: ''
    }
  },
  methods: {
    inicio () {
      alert('Iniciando Sesión')
      apiLocal
        .post('/Users/Authenticate', {
          username: this.usuario,
          password: this.clave
        })
        .then(respuesta => {
          console.log(respuesta)
          this.token=respuesta.data.token
        })
    },
    allUsers () { 
      apiLocal
        .get('/Users/usuarios', {
          headers: { Authorization: 'Bearer '+this.token }
        })
        .then(respuesta => {
          console.log(respuesta)
        })
    }
  }
}
</script>
