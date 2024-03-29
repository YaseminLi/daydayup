>[官方文档](https://cn.vuejs.org/v2/api/#key
https://baijiahao.baidu.com/s?id=1645610028793678784&wfr=spider&for=pc
https://cn.vuejs.org/v2/guide/list.html#%E7%94%A8-v-for-%E6%8A%8A%E4%B8%80%E4%B8%AA%E6%95%B0%E7%BB%84%E5%AF%B9%E5%BA%94%E4%B8%BA%E4%B8%80%E7%BB%84%E5%85%83%E7%B4%A0)

1. 更高效的更新虚拟DOM;
2. 保持准确:性：如果不加key,那么vue会选择复用节点(Vue的就地更新策略),导致之前节点的状态被保留下来,会产生一系列的bug
	
-  更高效的更新虚拟DOM
不使用key:

在新旧 nodes 对比时辨识 VNodes。如果不使用 key，Vue 会使用一种最大限度减少动态元素并且尽可能的尝试修复/再利用相同类型元素的算法。使用 key，它会基于 key 的变化重新排列元素顺序，并且会移除 key 不存在的元素。

原来的节点A(也可以为一组节点)去和转换后的节点C(也可以为一组节点)比较发现并不相同，则会创建节点C并删除节点A，节点B(也可以为一组节点)比较发现相同不变化，节点C和A比较发现不同，创建节点A，删除节点C.如此，该层的节点就由A B C转化成了 C B A 。

使用key:

可以对同一层级的同组节点添加一个唯一的key进行区分.

这样vue就可以识别出每一组节点，经过比较key发现，A,B,C都是相同的。只是位置发生了变化，于是他就只是去做移动操作调整位置，而不是去做创建和删除的操作了，效率大大提高。

- 准确
如果不加key,那么vue会选择复用节点(Vue的就地更新策略),导致之前节点的状态被保留下来,会产生一系列的bug.

>就地更新：
>当 Vue 正在更新使用 v-for 渲染的元素列表时，它默认使用“就地更新”的策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序，而是就地更新每个元素，且确保它们在每个索引位置正确渲染.
>这个默认的模式是高效的，但是只适用于不依赖子组件状态或临时 DOM 状态 (例如：表单输入值) 的列表渲染输出。

