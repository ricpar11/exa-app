import { combineReducers } from 'redux'
import navigation from './navigation'
import tournament from './tournament'
import ui from './ui'

const AppRedux = combineReducers({
    nav: navigation,
    tournament,
    ui

})

export default AppRedux
