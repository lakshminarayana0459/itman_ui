import React from 'react';
import './MainView.css';
import Routes from '../../routes/Routes'

const MainView = (props) => {
  console.log("propd", props.show, props.path);
  return (
    <div className={`main-view ${props.path !== "/login" ? props.show ? "open": "close" : ""}`}>
      <Routes />
    </div>
  )
}

export default MainView