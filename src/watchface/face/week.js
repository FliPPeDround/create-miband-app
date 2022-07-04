const weekImgList = [
  '25.png',
  '26.png',
  '27.png',
  '28.png',
  '29.png',
  '30.png',
  '31.png'
]

export function createWeek () {
  return hmUI.createWidget(hmUI.widget.IMG_WEEK, {
    x: 102,
    y: 161,
    week_en: weekImgList,
    week_tc: weekImgList,
    week_sc: weekImgList
  })
}
