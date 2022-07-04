import { createBackground } from './background.js'
import { createTime } from './time.js'
import { createData } from './data.js'
import { createWeek } from './week.js'
import { createStandbyBackground } from './standbyBackground.js'
import { createStandbyTime } from './standbyTime.js'

export class WatchFace {
  constructor () {
    createWeek()
    createBackground()
    createTime()
    createData()
    createStandbyBackground()
    createStandbyTime()
  }
}
