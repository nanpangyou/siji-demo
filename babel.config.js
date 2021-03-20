module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  // 加入下面官方推荐的配置进行按需引入，但是报错，解决方法是将less降级
  // issues： https://github.com/ant-design/ant-motion/issues/44#issuecomment-404395035
  // plugins: [
  //   [
  //     "import",
  //     { libraryName: "ant-design-vue", libraryDirectory: "es", style: true }
  //   ]
  // ]
}
