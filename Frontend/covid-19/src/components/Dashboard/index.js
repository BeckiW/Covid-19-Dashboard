import React from "react";
import "./header.scss";

class Dashboard extends React.Component {
  render() {
    return (
      <header>
        <div className="logoContainer">
          <img src="booklogo.png" alt="Logo" />
        </div>
        <nav className="headerLinks">
          <Link to="/admin">Admin</Link>
        </nav>
      </header>
    );
  }
}

export default Dashboard;
