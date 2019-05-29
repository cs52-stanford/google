import React, { Component } from "react";

class NavBar extends Component {
  styles = {
    fontSize: 20
  };

  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light" style={this.styles}>
        <button
          class="btn"
          type="submit"
          style={{ position: "absolute", left: "50px", top: "40px" }}
        >
          <img
            src="https://www.lawctopus.com/wp-content/uploads/2017/12/Accountability-Counsel-Logo-1024x261.jpg"
            width="240"
            height="70"
            alt=""
          />
        </button>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>

        <div
          class="collapse navbar-collapse"
          id="navbarTogglerDemo02"
          justify="right"
          style={{ margin: "40px" }}
        >
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Past Cases <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Current Cases
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" tabindex="-1" aria-disabled="false">
                New Case
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;