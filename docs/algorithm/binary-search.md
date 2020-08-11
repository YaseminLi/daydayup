对于有序数组才能使用二分查找法，通过取中间值来不断缩小查找范围,存在返回索引，不存在返回-1，时间复杂度logn。

<img src='/articles/algorithm/1.png' width=300px/>

## 实现

```js
function binarySearch(arr, target) {
    //在arr[l……r]范围内查找目标值
    let l = 0;
    let r = arr.length - 1
    while (l <= r) {
        let mid = Math.floor((l + r) / 2)//查找范围的中间值
        if (arr[mid] === target) {
            return mid
        }
        if (arr[mid] < target) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    return -1
}
```

但当数组中有重复元素时，不能保证目标值出现的位置

二分查找常用的两个方法：

- floor方法：第一次出现的位置或者不存在时最后一个比目标值小的元素
- ceil方法：最后一次出现的位置或者不存在时第一个比目标值大的元素

## floor方法
- floor方法：返回目标值第一次出现的位置或者目标值不存在时最后一个比目标值小的元素
-  如果找到target, 返回第一个target相应的索引index
-  如果没有找到target, 返回比target小的最大值相应的索引, 如果这个最大值有多个, 返回最大索引
-  如果这个target比整个数组的最小元素值还要小, 则不存在这个target的floor值, 返回-1
```js
function binarySearchFloor(arr, target) {
    if(arr[0]>target){
        return -1
    }
    //在arr[l……r]范围内查找目标值
    let l = 0;
    let r = arr.length - 1
    while (l <r) {
        let mid = Math.floor((l + r) / 2)+1//查找范围的中间值
        if (arr[mid] < target) {
            l = mid
        } else {
            r = mid - 1
        }
    }
    if(l+1<arr.length&&arr[l+1]===target){
        return l+1
    }
    return arr[l]
}
```

## ceil方法
- ceil方法：返回目标值最后一次出现的位置或者不存在时第一个比目标值大的元素
-  如果找到target, 返回最后一个target相应的索引index
-  如果没有找到target, 返回比target大的最小值相应的索引, 如果这个最小值有多个, 返回最小的索引
-  如果这个target比整个数组的最大元素值还要大, 则不存在这个target的ceil值, 返回整个数组元素个数n

```js
function binarySearchCeil(arr, target) {
    //在arr[l……r]范围内查找目标值
    let l = 0;
    let r = arr.length - 1
    if(arr[r]<target){
        return r+1
    }
    while (l <r) {
        let mid = Math.floor((l + r) / 2)-1//查找范围的中间值
        if (arr[mid] <= target) {
            l = mid+1
        } else {
            r =mid
        }
    }
    if(r-1>0&&arr[r-1]===target){
        return r-1
    }
    return arr[r]
}
```
## 题目
1. [实现 int sqrt(int x) 函数](https://leetcode-cn.com/problems/sqrtx)

计算并返回 x 的平方根，其中 x 是非负整数。

由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

2. [搜索插入位置](https://leetcode-cn.com/problems/search-insert-position/)
给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

输入: [1,3,5,6], 5

输出: 2

