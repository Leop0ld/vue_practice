<template lang="html">
  <form class="login form">
    <div class="field">
      <label for="id_username">Username</label>
      <input
        v-model="username"
        type="text"
        placeholder="Username"
        autofocus="autofocus"
        maxlength="100"
        id="id_username">
    </div>
    <div class="field">
      <label for="id_password">Password</label>
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        id="id_password">
    </div>
    <button
      @click.prevent="authenticate"
      class="button primary"
      type="submit">
      Log In
    </button>
  </form>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    authenticate () {
      const payload = {
        username: this.username,
        password: this.password
      }
      this.$http.post(this.$store.state.endpoints.obtainJWT, payload)
        .then((response) => {
          this.$store.commit('updateToken', response.data.token)
          const base = {
            baseURL: this.$store.state.endpoints.baseUrl,
            headers: {
              Authorization: `JWT ${this.$store.state.jwt}`,
              'Content-Type': 'application/json'
            },
            xhrFields: {
                withCredentials: true
            }
          }
          const axiosInstance = this.$http.create(base)
          axiosInstance({
            url: "/users/",
            method: "get",
            params: {}
          })
          .then((response) => {
            this.$store.commit("setAuthUser",
              {authUser: response.data, isAuthenticated: true}
            )
            this.$router.push({name: 'PostList'})
          })
        })
        .catch((error) => {
          console.log(error);
          console.debug(error);
          console.dir(error);
        })
    }
  }
}
</script>

<style lang="css">
</style>
