import React, { Component } from 'react'
import UserClass from './UserClass'
import User from './User';
import UserContext from '../context/userContext';

 class About extends Component {
  constructor(props){
    super(props);
    //console.log("parent constructor")
  }

  componentDidMount(){
    //console.log("parent component Did Mount")
  }
  render(){
    //console.log("parent render")
    return (
      <div style={{margin:"15px"}}>
          <h2>About</h2>
          <div>LoggedIn User: 
            <UserContext.Consumer>
            {(data)=>data.loggedInUser}
            </UserContext.Consumer>
          </div>
          <div style={{paddingTop:"5px"}}>
          <UserClass name={" P Dinesh Kumar class"} location ={"BPM class"}/>
          <User/>
          </div>
          </div>
    )
  }
  
}

export default About
