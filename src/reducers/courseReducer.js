/**
 * Created by ben.kl on 2/25/2017.
 */

import * as types from './../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action){
  switch (action.type){
    case types.LOAD_COURSES_SUCESS:
          return action.courses;

    case types.CREAT_COURSE_SUCCESS:
          return [...state, Object.assign({},action.course)];

    case types.UPDATE_COURSE_SUCCESS:
          return[
            ...state.filter(course=> course.id !== action.course.id),Object.assign({},action.course)
          ];
    default:
          return state;
  }

}
