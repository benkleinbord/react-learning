/**
 * Created by ben.kl on 2/24/2017.
 */
import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
  render(){
    return(
      <div className="jumbotron">
        <h1>Plurlsight Administrator</h1>
        <p>React, Redux and React Router in ES6 for ultra-responsive web app.</p>
        <Link to="about" className="btn btn-primary btn-log">Learn More </Link>
      </div>
    );
  }
}

export default HomePage;
