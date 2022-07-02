export class MiniApp {
  constructor () {
    this.img_bkg = hmUI.createWidget(hmUI.widget.IMG, { // 小程序图标
      x: 44,
      y: 401,
      src: '32.png'
      // show_level: hmUI.show_level.ONLY_NORMAL
    })
    this.img_bkg.addEventListener(hmUI.event.CLICK_DOWN, (info) => {
      // 控件注册事件监听
      console.log(info.x)
      console.log('qweqweqwe')
      this.switchUI(false)
    })
    this.txtBg = hmUI.createWidget(hmUI.widget.FILL_RECT, { // 自定义组件容器
      x: 0,
      y: 0,
      w: 192,
      h: 490,
      color: 0xFFFFFF
    })
    this.txtBg.setProperty(hmUI.prop.VISIBLE, false)
    this.txtGroup = hmUI.createWidget(hmUI.widget.GROUP, {
      x: 0,
      y: 0,
      w: 192,
      h: 490
    })

    // 切换页面

    // 自定义组件部分
    this.txtWd = this.txtGroup.createWidget(hmUI.widget.TEXT, { // 文本
      x: 6,
      y: 100,
      w: 180,
      h: 50,
      color: '0x000000',
      text_size: 20,
      text_style: hmUI.text_style.NONE,
      text: '请发挥你的想象力吧！'
    })

    this.backButton = this.txtGroup.createWidget(hmUI.widget.BUTTON, {
      x: 0,
      y: 0,
      w: 192,
      h: 50,
      press_color: 0xC3C3C3,
      normal_color: 0xEFEFEF,
      text: '返回',
      color: 0x000000,
      click_func: () => this.backButtonClickFunc()
    })
    this.txtGroup.setProperty(hmUI.prop.VISIBLE, false) // 设置隐藏
  }

  switchUI (b) {
    this.img_bkg.setProperty(hmUI.prop.VISIBLE, b)
    this.txtBg.setProperty(hmUI.prop.VISIBLE, !b)
    this.txtGroup.setProperty(hmUI.prop.VISIBLE, !b)
  }

  backButtonClickFunc () {
    this.switchUI(true)
  }
}
