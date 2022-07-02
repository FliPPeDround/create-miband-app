export function createStandbyTime () {
  return hmUI.createWidget(hmUI.widget.TIME_POINTER, {
    hour_centerX: 96,
    hour_centerY: 245,
    hour_posX: 12,
    hour_posY: 68,
    hour_path: '34.png',
    hour_cover_path: '',
    hour_cover_x: 84,
    hour_cover_y: 233,
    minute_centerX: 96,
    minute_centerY: 245,
    minute_posX: 12,
    minute_posY: 84,
    minute_path: '36.png',
    minute_cover_path: '35.png',
    minute_cover_x: 84,
    minute_cover_y: 233,
    show_level: hmUI.show_level.ONLY_AOD
  })
}
