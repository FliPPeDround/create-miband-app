const dataImgList = [
  '14.png',
  '15.png',
  '16.png',
  '17.png',
  '18.png',
  '19.png',
  '20.png',
  '21.png',
  '22.png',
  '23.png'
]

export function createData () {
  return hmUI.createWidget(hmUI.widget.IMG_DATE, {
    month_startX: 52,
    month_startY: 110,
    month_sc_array: dataImgList,
    month_tc_array: dataImgList,
    month_en_array: dataImgList,
    month_unit_sc: '24.png',
    month_unit_tc: '24.png',
    month_unit_en: '24.png',
    month_align: hmUI.align.RIGHT,
    month_zero: 0,
    month_follow: 0,
    month_space: 1,
    month_is_character: 0,
    day_sc_array: dataImgList,
    day_tc_array: dataImgList,
    day_en_array: dataImgList,
    day_zero: 1,
    day_follow: 1,
    day_is_character: 0
  })
}
