export function createStandbyBackground () {
  return hmUI.createWidget(hmUI.widget.IMG, {
    x: 0,
    y: 0,
    w: 192,
    h: 490,
    src: '33.png',
    show_level: hmUI.show_level.ONLY_AOD
  })
}
