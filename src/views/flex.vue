<template>
  <div class="box">
    <!-- <p class="fill-available">
      width:fill-available可以让元素的宽度表现为默认的block水平元素的尺寸表现。<br>
      但这里实际上是display:inline-block水平的，<br>
      于是，我们可以保证宽度满尺寸自适应的同时使用line-height实现近似的垂直居中效果。
    </p> -->
    <p>flex</p>
    <div class="initial">
      <button>left</button>
      <button>middle</button>
      <button>right</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
/* .box {
    width: 70%;
    height: 200px; line-height: 200px;
    padding: 10px; margin: 10px auto;
    background-color: #f0f3f9;
    resize: horizontal;
    overflow: hidden;
} */
.fill-available {
  display: inline-block;
  line-height: 20px;
  padding: 20px;
  background-color: #cd0000;
  color: #fff;
  vertical-align: middle;
  width: max-content;

  /* width: -webkit-fill-available;
    width: -moz-fill-available;
    width: -moz-available;    /* FireFox目前这个生效 */
  /* width: fill-available;  */
}

.initial {
  display: flex;
  justify-content: space-between;
}
</style>
