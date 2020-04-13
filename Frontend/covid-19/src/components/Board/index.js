import React from "react";

import Sidebar from "../Sidebar";
import Content from "../Content";
import "./style.css";

class Board extends React.Component {
  render() {
    return (
      <div>
        <Sidebar />
        <Content />
      </div>
    );
  }
}

export default Board;
