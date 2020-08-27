<template>
  <v-row justify="center">
    <v-col cols="9">
      <div class="about">
        <h1>Este es acerca de la página</h1>
        <ul>
          <li v-for="(post, i) of posts" :key="i" @click="verInfo(post)">
            {{ post.title }}
          </li>
        </ul>
        <hr />
        <ul>
          <li
            v-for="(post, i) of posts"
            :key="i"
            @click="verInfoVerbo(post.id)"
          >
            {{ post.id }}
            {{ post.title }}
          </li>
        </ul>
        <hr />
        <v-text-field v-model="post.title" placeholder="title" /> <br />
        <v-text-field v-model="post.author" placeholder="author" /> <br />
        <v-btn @click="enviarDatos">Enviar datos</v-btn>
      </div>
    </v-col>
  </v-row>
</template>
<script>
import fake from '../plugins/apiFake.js'
export default {
  name: 'About',
  methods: {
    verInfoVerbo (id) {
      fake.get(`/posts/${id}`).then(response => {
        alert(`
        Mostrando información
        Identificador: ${response.data.id}
        title: ${response.data.title}
        Author: ${response.data.author}
      `)
      })
    },
    verInfo (post) {
      alert(`
        Mostrando información
        Identificador: ${post.id}
        title: ${post.title}
        Author: ${post.author}
      `)
    },
    enviarDatos () {
      alert('enviando ...')
      if (!this.post.author || !this.post.title) {
        alert('Error en enviar los datos')
      } else {
        fake
          .post('/posts', this.post)
          .then(response => {
            alert(`Datos almacenados 
          author: ${response.data.author}
          title: ${response.data.title}`)
            this.leerPosts()
          })
          .catch(e => {
            console.log(e)
          })
      }
    },
    leerPosts () {
      fake
        .get('/posts/')
        .then(response => {
          console.log(response)
          this.posts = response.data
        })
        .catch(e => {
          console.log(e)
        })
    }
  },
  data () {
    return {
      post: {
        title: '',
        author: ''
      },
      informacion: [
        { title: 'Información' },
        { title: 'Información2' },
        { title: 'Información3' }
      ],
      posts: []
    }
  },
  // async created () {
  //   let posts = await fake.get('/posts/')
  //   console.log(posts)
  // }
  // ,
  created () {
    this.leerPosts()
  }
}
</script>
