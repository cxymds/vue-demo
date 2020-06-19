<template>
	<div class="father" @click="cls1">
		<div class="child" @click.stop="cls2"></div>
		<button ref="btn">按钮</button>
		
		<img src="" alt="" ref="image">
	</div>
</template>

<script>
export default{
	name:"Demo",
	data:function(){
		return {
			
		}
	},
	methods:{
		cls1(){
			console.log(process.env);
		},
		cls2(){
			console.log(this.$refs.btn.innerText='123')
			
		}
		
	}
}
</script>

<style scoped>
	.father{
		width: 200px;
		height: 200px;
		background-color: red;
	}
	.child{
		width: 100px;
		height: 100px;
		background-color: #7FFFD4;
	}
</style>
