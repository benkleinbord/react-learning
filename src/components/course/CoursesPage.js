/**
 * Created by ben.kl on 2/24/2017.
 */

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseAction from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddCoursesPage = this.redirectToAddCoursesPage.bind(this);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  redirectToAddCoursesPage() {
    browserHistory.push('/course');
  }

  render() {
    const {courses} = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <input type="submit"
               value="Add Course"
               className="btn btn-primary"
               onClick={this.redirectToAddCoursesPage}
        />
        <CourseList courses={courses}/>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
  return{
    courses: state.courses
  };
}
function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(courseAction, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

///**
// * Created by ben.kl on 2/24/2017.
// */
//
//import React, {PropTypes} from 'react';
//import {connect} from 'react-redux';
//import {bindActionCreators} from 'redux';
//import * as courseAction from '../../actions/courseActions';
//
//
//class CoursesPage extends React.Component{
//  constructor (props, context){
//    super(props, context);
//
//    this.state = {
//      course: {title: ""}
//    };
//    this.onTitleChange = this.onTitleChange.bind(this);
//    this.onClickSave = this.onClickSave.bind(this);
//  }
//  onTitleChange(event){
//    const course = this.state.course;
//    course.title = event.target.value;
//    this.setState({course:course});
//  }
//  onClickSave(){
//    this.props.actions.createCourse(this.state.course);
//  }
//  courseRow(course, index){
//    return <div key={index}>{course.title}</div>;
//  }
//
//  render(){
//    return(
//      <div>
//        <h1>Courses</h1>
//        {this.props.courses.map(this.courseRow)}
//        <h2>Add Courses</h2>
//        <input type="text" onChange={this.onTitleChange} value={this.state.course.title} />
//        <input type="submit" value="save" onClick = {this.onClickSave} />
//      </div>
//    );
//  }
//}
//CoursesPage.propType = {
//  courses: PropTypes.array.isRequired,
//  actions: PropTypes.object.isRequired
//};
//
//function mapStateToProps(state, ownProps){
//  return{
//    courses: state.courses
//  };
//}
//function mapDispatchToProps(dispatch){
//  return{
//    actions: bindActionCreators(courseAction, dispatch)
//  }
//}
//export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
