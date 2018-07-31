<template>
  <div class="post-list">
    <table class="post-table" border="1" v-if="hasResult">
      <thead>
        <tr>
          <td>id</td>
          <td>title</td>
          <td>author</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post.id">
          <td>{{ post.id }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.author }}</td>
        </tr>
      </tbody>
    </table>
    <div v-else>로드중</div>
  </div>
</template>

<script>
export default {
  name: 'PostList',
  data () {
    return {
      posts: []
    }
  },
  created: function() {
    const baseURI = 'http://localhost:8080';

    this.$http.get(`${baseURI}/posts/`, {
      headers: {
        'Authorization': `JWT ${this.$store.state.jwt}`
      }
    })
    .then((result) => {
      console.log(result)
      this.posts = result.data
    })
  },
  computed: {
    hasResult: function () {
      return this.posts.length > 0
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.post-table {
  width: 100%;
}
</style>
