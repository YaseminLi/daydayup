<template>
  <div>
    <h3>图片加载失败</h3>
    <img
      src="break.png"
      alt="这是图片标题"
      @error="e => e.target.classList.add('error')"
    />
    <h3>左对齐，子项宽度不固定</h3>
    <div class="parent">
      <div
        v-for="item in [10, 20, 30, 40, 50, 60, 70, 80]"
        :key="item"
        class="child"
        :style="{ width: `${item}px` }"
      />
    </div>
    <h3>左对齐，列数不固定</h3>
    <div class="parent1">
      <div class="list"></div>
      <div class="list"></div>
      <div class="list"></div>
      <div class="list"></div>
      <div class="list"></div>
      <div class="list"></div>
      <div class="list"></div>
      <i></i><i></i><i></i><i></i><i></i>
    </div>
    <h3>inline-block元素间距</h3>
    <div class="space">
      <a href="##">dsfdg</a>
      <a href="##">gtrhret</a>
      <a href="##">thy</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
img {
  width: 300px;
  height: 300px;
}
img.error {
  display: inline-block;
  position: relative;
  color: transparent;
}
img.error::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f5f5f5 url('../assets/images/break.svg') no-repeat center / 50%
    50%;
}
img.error::after {
  content: attr(alt);
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #ececec;
  line-height: 2;
  text-align: center;
  color: #333;
}

.parent {
  width: 30vw;
  display: flex;
  border: 1px solid #ececec;
  justify-content: space-between;
  flex-wrap: wrap;
}

.child {
  height: 50px;
  background: #ececec;
  margin: 10px;
}
.child:last-child {
  margin-right: auto;
}

.parent1 {
  border: 1px solid #ececec;
  width: 50vw;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-right: -10px;
}
.list {
  width: 100px;
  height: 100px;
  background-color: #ececec;
  margin: 15px 10px 0 0;
}
/* 和列表一样的宽度和margin值 */
.parent1 > i {
  width: 100px;
  margin-right: 10px;
}

.space a {
  display: inline-block;
  padding: 0.5em 1em;
  background-color: #cad5eb;
}
</style>
