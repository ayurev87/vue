<template>
 <div class="Hello">
  <form v-if="!isAuthentificated"  @submit="login">
    <label for="username">Имя пользователя:</label>
    <input type="text" id="username" v-model="username" required>
    <label for="password"> Пароль: </label>
    <input type="password" id="password" v-model="password" required>
    <button type="submit"> Войти</button> 

  </form>
    <p v-else> вы успешно авторизованы!</p>

    <!-- <h1>{{isAuthentificated}}</h1>
    <template v-if="!isAuthentificated">Вход разрешен </template>
    <template v-if="isAuthentificated">Вход запрещен </template> -->
 </div>
</template>

<script>

export default {
  name: 'Authentification-comp',
  data() {
    return {
      isAuthentificated: false,
    }
  },
  methods: {
    login() {
      this.isAuthentificated = true;
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
