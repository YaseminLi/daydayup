## <Prompt/>

- 离开当前页面时（包括触发浏览器的回退、前进），提示如：是否离开当前页面
- history.block() location监听触发之前注册一个提示信息
- 子组件lifeCycle 只包含生命周期函数，componentWillUnmount时执行history.block