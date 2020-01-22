import React, { Component } from "react";

class UserSubmit extends Component {
  render() {
    return (
      <div>
        <h2>Submit Here</h2>
        <form>
          <input type="text" placeholder="Enter headline here"></input>
          <br></br>
          <textarea placeholder="The description"></textarea>
          <br></br>
          <button>Submit!</button>
        </form>
      </div>
    );
  }
}

export default UserSubmit;
