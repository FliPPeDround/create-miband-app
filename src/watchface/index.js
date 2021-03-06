import { WatchFace } from './face/index.js'
import { MiniApp } from './app/index.js'

function createApp () {
  const App = __$$hmAppManager$$__.currentApp.current
  const logger = Logger.getLogger('watchface')
  App.module = DeviceRuntimeCore.WatchFace({
    init_view () {
      new WatchFace()
      new MiniApp()
    },
    onInit () {
      logger.log('index page.js on init invoke')
    },
    build () {
      this.init_view()
    },
    onDestory () {
      logger.log('index page.js on destory invoke')
    }
  })
}

createApp()
