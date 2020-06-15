## 三大框架

react      谷歌开源    不进行维护了

angular  最早的  jquery 2015

vue  最主流  纯国产   尤雨溪   2017 所有开源项目 atar 

MVC : M-V-C
	model  view controller
	模型   视图  控制器
MVVM: M-V-VM  
MV*	: 
	moedl  view  数据与视图的处理
	vue的重点在视图。


##vue安装

下载

CDN

npm

cli

### 使用

```
<script type="text/javascript">
		let app = new Vue({
			el: "#app",    //element   挂载节点
			data:{
				message:'hello world!',
				title:"first  page"
			}
		});
		
		console.log(app.message)
</script>
```

el:  虚拟dom的挂载节点

data:  vue实例里面的数据

​	使用： 

		1. {{ value_name }}
		2. v-bind:attr="value_name"







## vue指令

v-bind  :  将数据与属性绑定

v-if : 条件判断  v-else   v-else-if 用于控制标签的显示

v-for : 循环遍历

```
v-for="value in value_name"   {{value}}
```

v-model :双向绑定 ， 视图和数据相互影响

v-on : 事件绑定  处理事件 简便写法 ：  @    @click

​	比如 ： v-on:click = "function"

## vue实例

el: 挂载节点，一般作为vue创实例的第一个参数

​	app.$el  

​	如果没有el指定节点，需要使用vm.$mount()主动挂载

template: 视图模板

data: vue的数据，实例会将这些属性添加在vue的响应式系统中。

​	注意：当这些数据改变时，视图会进行重渲染。

​		值得注意的是只有当实例被创建时就已经存在于 	 data 中的 property 才是响应式的

​	实例的$watch可以监听数据值的变化。

```
app.$watch('message',function(new_value,old_velue){
		console.log('变化了')
})
```

**8个生命周期钩子函数**

会在vue实例运行在相应阶段自动调用的。

beforeCreate：  生命周期钩子。

created:  生命周期的第二个钩函数，可以进行页面初始化数据的请求

beforeMount: 产生虚拟dom之前

mounted:  以及产生虚拟dom，并且以及将页面的el进行了替换

beforeUpdate： 进行虚拟dom更新之前，每一次数据变化都会产生

updated： 更新成功之后的钩子函数

deforeDestory: vm实例摧毁之前

destoryed: vue实例已经被摧毁。



methods:  指定vue实例需要使用的方法。

computed：与data里面的数据是有趣别的，computed是根据data里面的数据变化进行变化的。



## 模板语法

+ 如何使用简单的vue数据

1. 进行简单的页面渲染 

   {{ value_name }}

2. 将变量使用到HTML属性中

​	属性绑定： v-bind   简写  :

​	v-bind:src="url"

​	:src="url"

+ 如何在HTML标签中显示HTML代码

​	v-html: 会将字符串解析成html

​	v-text: 会将字符串直接按照普通文本输出

+ 指令

  vue使用v-* 表示指令 ，指令后面需要绑定一个参数。并且只能绑定一个参数。

  v-bind:title

  v-if=""

  修饰符：

  ​	prevent: 阻止事件的默认行为

   	stop: 阻止事件冒泡

+ 缩写

  v-bind  可以缩写为  ：

  v-on  可以缩写为 @

## 计算属性

属性： data里面的数据称之为属性，

方法： methods里面的函数称之为方法。

计算属性： 进过计算获取的属性。computed指定。

监听属性：监听data属性的变化，watch指定，监听的函数有两个参数，第一个是新值，第二个是旧值。





## 类的绑定与样式的绑定

可以使用对象 **常用**

也可以使用数组





复习vue实例：

​	el ： 挂载节点

​	data ： 数据 属性

​	template： 模本

​	methods:方法

​	生命周期钩子8个 bc c  bm  m  bu   u   bd  d

​	computed ：计算  

​	watch ： 监听data属性

