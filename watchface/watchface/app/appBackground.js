export function createAppBackground () {
  return hmUI.createWidget(hmUI.widget.FILL_RECT, { // 自定义组件容器
    x: 0,
    y: 0,
    w: 192,
    h: 490,
    color: 0xFFFFFF
  })
}
