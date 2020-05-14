import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import welcomeReducer from 'reducers/welcomeReducer';
import findActivityReducer from 'reducers/findActivityReducer';
import nightModeReducer from 'reducers/nightModeReducer';

export default combineReducers({
  form: formReducer,
  welcome: welcomeReducer,
  findActivity: findActivityReducer,
  nightToggler: nightModeReducer,
});
