import React, { Component } from "react";
import { Redirect } from "react-router";
import fakeAuth from "./auth";

export default class ProtectedPage extends Component {
  state = { signedOut: false };

  signOut = () => {
    fakeAuth.signout(() => {
      this.setState({ signedOut: true });
    });
  }

  render() {
    // если signedOut - true, редирект на корневую страницу
    const { signedOut } = this.state;
    return (
      <div>
        {signedOut && <Redirect to="/" />}
        <h1>Protected Page</h1>
        <p>You are signed in go back to some other page and come back here.</p>
        <p>You can sign out to view the login page again.</p>
        <button
          onClick={this.signOut}
        >
          Sign out
        </button>
      </div>
    );
  }
}
