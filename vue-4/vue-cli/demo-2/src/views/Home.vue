<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
	
	<button @click="getData">获取数据</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods:{
	  getData(){
		  this.$axios.get('http://127.0.0.1:3000/users').then(({data})=>{
			  console.log(data)
		  })
	  }
  }
}
</script>
