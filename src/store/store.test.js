/**
 * Created by ben.kl on 3/2/2017.
 */

import expect from  'expect';
import { createStore} from 'redux';
import rootReducer from '../reducers';
import  initialState from '../reducers/initialState';
import * as courseActions from '../actions/courseActions';

 describe('Store', function(){
   it('Should handle creating courses',()=>{
       // arange
     const store = createStore(rootReducer, initialState);
     const course ={
       title: 'Clean code'
     };

     //act
     const action  = courseActions.createCourseSuccess(course);
     store.dispatch(action);

     // assert
     const actual = store.getState().courses[0];
     const expected = {
       title: "Clean Code"
     };
     expect(actual).toEqual(expected);
     });
 });
