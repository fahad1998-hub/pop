// import React from 'react';
import React, { Component } from 'react'

 class Profile extends Component {
     constructor(props) {
         super(props);
        
         
     }
     
    render() {
        console.log("Prfofile")
        return (
            <div>
                <h3>Student Name: {this.props.user.name}</h3>
                <h3>Student Address:{this.props. user.address} </h3>
                <h3>Student PhoneNumber:{this.props.user.contact} </h3>
                <h3>Student Email:{this.props.user.email} </h3>
            </div>
        )
    }
}
export default Profile;
