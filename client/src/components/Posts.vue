<template>
  <div class="hello">
    <h1>Posts Component</h1>  
    <div v-for="post in getPosts" v-bind:key="post._id">
      <p>{{post.text}}</p>  
    </div> 
  </div>
</template>

<script>
import {mapGetters,mapActions} from "vuex"

export default {
  name: "Posts",
  data () {
    return {
      posts: [],
      error:''
    }
  },
  methods: {
    ...mapActions({
      fetchPosts: "posts/fetchPosts"
    })
  },
  computed: {
    ...mapGetters({
      getPosts: "posts/getPosts"
    })
  },
  async created() {    
    try {
      this.fetchPosts();     
    } catch (error) {
      this.error = error;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
