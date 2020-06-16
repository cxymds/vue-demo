复习：

1.   安装

     下载引入

     CDN 

2.   vue实例的组成

     el： 挂载虚拟dom的节点  vue.$mount

     data: 数据，vue数据的属性

     methods:  方法

     template: 视图模板

     computed: 计算属性  ，有点类似与methods

     watch: 监听 侦听 属性

     生命周期钩子：8个  

     ​     beforecreate

     ​     created

     ​     beforemount

     ​     mouted

     ​     beforeupdate

     ​     updated

     ​     beforedestory

     ​    destoryed

     ​

## 指令

### 条件渲染

v-if  ：条件成立的时候显示

v-else：条件成立的时候不显示 ，配合v-if使用

v-else-if： 条件成立的时候显示，配合v-if使用

注意： 条件渲染内部会根据标签的内容进行最小替换，也就是有可能发生不替换标签只替换属性的可能，如果想要一定替换标签，需要添加key‘的属性。这个属性是唯一值。

不同的是带有 v-show 的元素始终会被渲染并保留在 DOM 中。v-show 只是简单地切换元素的 CSS property display。

v-if: 操作的是display ： block | none;

v-show: 虽然操作的也是display，但是类似于操作的是visibility： visable | hidden；会有一个行间的display:none。





