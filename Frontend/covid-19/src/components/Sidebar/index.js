import React from "react";
import "./style.css";

class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <div class="header"></div>
        {/* <input
          type="checkbox"
          class="openSidebarMenu"
          id="openSidebarMenu"
        ></input> */}
        {/* <label for="openSidebarMenu" class="sidebarIconToggle">
          <div class="spinner diagonal part-1"></div>
          <div class="spinner horizontal"></div>
          <div class="spinner diagonal part-2"></div>
        </label> */}
        <div id="sidebarMenu">
          <ul class="sidebarMenuInner">
            <li>
              Becki Wordsworth <span>Full Stack Developer</span>
            </li>
            <li>
              <a href="https://vanila.io" target="_blank">
                COUNTRIES
              </a>
            </li>
            <li>
              <a href="https://instagram.com/plavookac" target="_blank">
                WORLD
              </a>
            </li>
            <li>
              <a href="https://twitter.com/plavookac" target="_blank">
                WHO INFORMATION
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/plavookac/" target="_blank">
                Linkedin
              </a>
            </li>
          </ul>
        </div>
        {/* <div id="center" class="main center">
          <div class="mainInner">
            <div>HELLO</div>
          </div>
          <div class="mainInner">
            <div>HELLO</div>
          </div>
          <div class="mainInner">
            <div>HELLO</div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Sidebar;
