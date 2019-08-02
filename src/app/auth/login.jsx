import React, { Component } from 'react'
import fakeAuth from './auth'
import { Redirect } from 'react-router'


const homePath = '/';

export default class Login extends Component {
  state = {
    redirectToReferrer: false,
  }
  // пользователь авторизовался 
  login = () => {
  	fakeAuth.authenticate(() => {
  		this.setState({redirectToReferrer:true})
  	})
  }
  // если в location, кот. попал на это компонент, есть параметр state, то здесь мы отобразим откуда мы пришли (с какого url - /protected)
  // если мы залогенены, то нас редиректнет на страницу из from (/protected или /login - если нет залог.) <Redirect to={from || homePath}/>
  render() {
    const { from } = this.props.location.state;
    const { redirectToReferrer } = this.state;  
    return (
      <div>
        {redirectToReferrer && (
          <Redirect to={from || homePath}/>
        )}
        {from && (
          <p>
            You must log in to view the page at {from.pathname}
          </p>
        )}
        <button onClick={this.login}>Log in</button>
      </div>
    )
  }
}