/**
 * Created by ben.kl on 2/25/2017.
 */
import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxStatusReducer from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  ajaxStatusReducer
});

export default rootReducer;
