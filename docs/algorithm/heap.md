# 堆
整理于[《算法与数据结构》](https://coding.imooc.com/learn/list/71.html)

## 引入堆
- 普通队列：先进先出，后进后出
- 优先队列：出队和入队与优先级有关，一般处理动态数据

			i. 服务器同时收到多个请求，按优先级给予响应

			ii. 游戏中角色视野内多个敌人，先攻击谁

			iii. 在n个元素中，选出前M个，用排序方法NlogN,使用优先队列NlogM
            
- 优先队列的操作：入队，出队（按优先级）
- 优先队列的实现：**堆**

## 堆的定义
用数组实现的一棵完全二叉树（最后一层之前必须都是满的，最后一层的节点靠近左边），在数组中存储是从索引1(或0)开始。最大堆时父节点都大于子节点，最小堆是父节点小于子节点。一般用于动态数据的维护。
- 父节点 parent(i)=i/2
- 左孩子 childLeft=i*2
- 右孩子 childRight=i*2+1 i为当前索引
<!-- ![最大堆](/最大堆.png){:height="50%" width="50%"} -->

<img src="/articles/heap/最大堆.png" width="300px" /> 

<img src="/img/weixin/微信小程序-新闻资讯.png" width="600px" />


## 最大堆的实现
- 创建一个最大堆的类(typescript)
```js
	class MaxHeap {
	    private data: Array<number> //存储数据的数组，私有属性，外部不可访问
	    private count: number //数据量，私有属性，外部不可访问
	    private capacity: number //数组空间，私有属性，外部不可访问
	 
	    constructor(capacity:number) {
	        this.data = new Array(capacity + 1)
	        this.count = 0
	        this.capacity = capacity
	    }
	      //返回堆的大小
	    size() {
	        return this.count
	    }
	    //堆是否为空
	    isEmpty() {
	        return this.count === 0
	    }
}
```
- 放入数据insert

<img src="/articles/heap/heap-insert.png" width="300px" />

插入52，与父节点16比较大小，比父节点大，交换位置，直到比父节点小
```js
		  //从下往上比较节点大小,时间复杂度是 O(log n)
		    private shiftUp(count) {
		        let max = this.data[count]
		        for (count; count > 1;) {
		            var parentCount = Math.floor(count/2)
		            if (max > this.data[parentCount]) {
		                this.data[count] = this.data[parentCount]
		                count = parentCount
		            } else {
		                break
		            }
		        }
		        this.data[count] = max
		    }
		
		 //向堆中放入数据，放在末尾
		 insert(item) {
		        console.assert(this.count<=this.capacity)
		        this.data[this.count + 1] = item
		        this.count++
		        this.shiftUp(this.count)
		    }
```

- 取出数据（根节点）extractMax

<img src="/articles/heap/heap-extractMax.png" width="300px" />	

取出索引1处的最大数据后，将最后一个数据放到索引1的位置，将其与左右两个孩子比较，和大孩子交换，直到最后一层。

实现：向maxHeap类中添加私有方法shiftDown和extractMax方法（ 从堆中不断取出数据的过程，也是对数组实现排序的过程）
```js
		//从上往下比较节点大小，这个操作也叫堆化（heapify）,时间复杂度是 O(log n)
		    private shiftDown(k) {
		        let min = this.data[k]
		        //节点有孩子时执行
		        while (k * 2 <= this.count) {
		            let j = k * 2
		            if (j + 1 <= this.count && this.data[j + 1] > this.data[j]) {
		                j += 1
		            }
		            if (min >= this.data[j]) {
		                break
		            }
		            this.data[k] = this.data[j]
		            k = j
		        }
		        this.data[k] = min
		    }
		
			extractMax() {
		        console.assert(this.count>0)
		        let item = this.data[1]
		        this.data[1] = this.data[this.count]
		        this.data.pop()
		        this.count--
		        this.shiftDown(1)
		        return item
		    }
```


- 对数组heapify（将无序数组构造成最大堆）

<img src="/articles/heap/heapify.png" width="300px" />	

从第一个有子节点的数据开始执行shiftDown,向前遍历所有节点后结束
	
实现：将maxHeap类中的constructor方法改为支持传入数字或者数组（ts中有根据不同类型选择不同方法，而不是在方法内使用if else，怎么用？）

```js
	constructor(item) {
	        //如果传入数字，给堆开辟相应的空间
	        if(typeof item==='number'){
	            this.data = new Array(item + 1)
	            this.count = 0
	            this.capacity = item
	        }
	        //如果传入数组，将其转化为最大堆
	        if(item instanceof Array){
	            this.data=new Array(item.length+1)
	            //将数组放入堆中存储，从索引1开始
	            item.forEach((value,index)=>{this.data[index+1]=value})
	            this.count=item.length
	            for(let i=Math.floor(this.count/2);i>=1;i--){
	                this.shiftDown(i)
	            }
	        }
	    }
	//对数组从小到大排序：
	let arr=[1,3,2,6,5,4]
	let maxheap=new MaxHeap(arr)
	for(let i=arr.length-1;i>=0;i--){
	    arr[i]=maxheap.extractMax()
	}
	console.log(arr); //[1,2,3,4,5,6]
```	
	
## 基于堆的排序算法
- 排序一：将n个元素逐个插入到空堆中，然后不断取出根节点，算法复杂度为o(nlogn)
```js
		function maxHeap1(arr) {
		    let maxHeap=new MaxHeap(arr.length)
		    for(let i=0;i<arr.length;i++){
		        maxHeap.insert(arr[i])
		    }
		    for(let i=arr.length-1;i>=0;i--){
		        arr[i]=maxHeap.extractMax()
		    }
		    return arr
		}
```		
		
- 排序二：将整个数组放入堆中，对父节点heapify,算法复杂度为o(logn)
```js
		function maxHeap2(arr) {
		    let maxHeap=new MaxHeap(arr)
		    for(let i=arr.length-1;i>=0;i--){
		        arr[i]=maxHeap.extractMax()
		    }
		    return arr
        }
```

对于一个在[0,10000]范围内随机生成的长度为10000的数组，第二种排序方法比第一种排序要快，测试https://github.com/YaseminLi/algorithm
		
以上两种排序方法，需要额外的空间来储存堆，怎么原地对数组进行堆排序??
		
- 排序三：原地堆排序

	<img src="/articles/heap/heap.png" width="400px" />		

1. 将一个数组变成最大堆
2. 取根节点与堆最后一个元素交换位置，此时，数组最大元素放到了数组末尾
3. 根节点变成了非最大元素，对其heapify
4. 重复步骤2，3
				
之前最大堆储存数组是从堆的的索引0开始，方便计算、观察规律，现在可以堆的索引1开始，只是孩子、父节点的索引计算方法不一样了，如图，另：最后一个父节点索引Math.floor((count-1)/2)

<img src="/articles/heap/indexStart0.png" width="400px" />		

实现：
```js
		function heapSort(arr) {
		    let count=arr.length
		    //对每个父节点执行shiftDown
		    for (let i = Math.floor((count-1)/2); i >= 0; i--) {
		        _shiftDown(i,count)
		    }
		    for(let i=count-1;i>0;i--){
		        //交换根节点与堆的最后一个元素
		        let m=arr[i]
		        arr[i]=arr[0]
		        arr[0]=m
		        //每次循环堆中的元素个数-1
		        _shiftDown(0,i)
		    }
		    //k为要shiftDown的索引，n为堆中元素个数
		    function _shiftDown(k,n) {
		        let min=arr[k]
		        //节点有孩子时执行，因为堆从索引0 开始，<n
		        while (k * 2+1 <n) {
		            let j = k * 2+1
		            if (j + 1 <n && arr[j + 1] > arr[j]) {
		                j += 1
		            }
		            if (min >=arr[j]) {
		                break
		            }
		            arr[k]=arr[j]
		            k = j
		        }
		        arr[k]=min
		    }
		    return arr
		}
```	
## 堆算法练习
- [练习一](https://leetcode-cn.com/problems/kth-largest-element-in-a-stream)

设计一个找到数据流中第K大元素的类（class）。注意是排序后的第K大元素，不是第K个不同的元素。
	
你的 KthLargest 类需要一个同时接收整数 k 和整数数组nums 的构造器，它包含数据流中的初始元素。每次调用 KthLargest.add，返回当前数据流中第K大的元素。
	
示例:
	
	int k = 3;
	int[] arr = [4,5,8,2];
	KthLargest kthLargest = new KthLargest(3, arr);
	kthLargest.add(3);   // returns 4
	kthLargest.add(5);   // returns 5
	kthLargest.add(10);  // returns 5
	kthLargest.add(9);   // returns 8
	kthLargest.add(4);   // returns 8
	说明: 
	你可以假设 nums 的长度≥ k-1 且k ≥ 1。
