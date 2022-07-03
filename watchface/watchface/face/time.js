const timeImgList = [
  '3.png',
  '4.png',
  '5.png',
  '6.png',
  '7.png',
  '8.png',
  '9.png',
  '10.png',
  '11.png',
  '12.png'
]

export function createTime () {
  return hmUI.createWidget(hmUI.widget.IMG_TIME, {
    hour_zero: 0,
    hour_startX: 18,
    hour_startY: 47,
    hour_array: timeImgList,
    hour_space: 3,
    hour_unit_sc: '13.png',
    hour_unit_tc: '13.png',
    hour_unit_en: '13.png',
    hour_align: hmUI.align.RIGHT,
    minute_zero: 1,
    minute_array: timeImgList,
    minute_follow: 1
  })
}
