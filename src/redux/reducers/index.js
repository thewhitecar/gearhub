import { combineReducers } from 'redux'

import auth from './auth_reducer'
import form from './form_reducer'
import photo from './photos_reducer'

export default combineReducers({ auth, form, photo })