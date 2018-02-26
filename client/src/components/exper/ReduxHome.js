import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import UserList from './UserList';
import UserDetail from './UserDetail';
import ReduxForm from '../forms/Redux-form'
import {viewUser} from '../../actions/viewUser';
import {addUser} from '../../actions/addUser';
import {user} from '../../actions/user';

class TestRedux extends Component {
  inputGrab = (newUser) => {
    this.props.addUser(newUser)
  }
  componentDidMount() {
    this.props.usersss()
  }
  render() {
    const { users, viewUser,user} = this.props;
    console.log(this.props)
    let showData = null;
    if (users) {
      showData = <UserList userAction={viewUser} users={users} />
    } else {
      showData = <div> Loding data ... </div>
    }
    return (
      <div>
        <div className= "left"> 
          <h3 className="hi"> Redux Example Gose Here</h3>
          <hr />
          {showData}
          
          <ReduxForm getData={this.inputGrab} />
        </div>
        <div className= "right"> 
          <UserDetail user={user} />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    users: state.users,
    user: state.user,
  }
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ viewUser: viewUser, addUser: addUser,usersss:user }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(TestRedux)