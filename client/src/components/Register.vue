<template>
  <div>
    <h1> Register </h1>
    <br>
    <input type="email" name="email" placeholder="email" v-model="email" />
    <br>
    <input type="password" name="password" placeholder="password" v-model="password" />
    <br>
    <div class="error" v-html="error" />
    <br>

    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthentificationService from '@/services/AuthentificationService'

export default {
  name: 'HelloWorld',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  watch: {
    email (value) {
      console.log('email has changed', value)
    }
  },
  methods: {
    async register () {
      try {
        await AuthentificationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  mounted () {
    setTimeout(() => { this.email = 'hello world' }, 2000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: 'red'
}
/style>
