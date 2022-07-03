import { createSwitchButton } from './switch.js'
import { createAppBackground } from './appBackground.js'
import { createGroup } from './group.js'
export class MiniApp {
  constructor () {
    this.switchButton = createSwitchButton()
    this.switchButton.addEventListener(hmUI.event.CLICK_DOWN, (info) => {
      // 控件注册事件监听
      console.log(info.x)
      this.switchUI(false)
    })
    this.appBackground = createAppBackground()
    this.appBackground.setProperty(hmUI.prop.VISIBLE, false)
    this.rootGroup = createGroup()

    // 自定义组件部分
    this.txtWd = this.rootGroup.createWidget(hmUI.widget.TEXT, { // 文本
      x: 6,
      y: 100,
      w: 180,
      h: 50,
      color: '0x000000',
      text_size: 20,
      text_style: hmUI.text_style.NONE,
      text: '请发挥你的想象力吧！'
    })

    this.backButton = this.rootGroup.createWidget(hmUI.widget.BUTTON, {
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
    this.rootGroup.setProperty(hmUI.prop.VISIBLE, false) // 设置隐藏
  }

  switchUI (b) {
    this.switchButton.setProperty(hmUI.prop.VISIBLE, b)
    this.appBackground.setProperty(hmUI.prop.VISIBLE, !b)
    this.rootGroup.setProperty(hmUI.prop.VISIBLE, !b)
  }

  backButtonClickFunc () {
    this.switchUI(true)
  }
}
