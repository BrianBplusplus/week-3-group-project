import React, { Component } from "react";

class UserSubmit extends Component {
  render() {
    return (
      <div>
        <h2>Submit Here</h2>
        <form>
          <input type="text" placeholder="Enter headline here"></input>
          <br></br>
          <input type="textarea" placeholder="The description"></input>
          <br></br>
          <button>Submit!</button>
        </form>
      </div>
    );
  }
}

export default UserSubmit;
