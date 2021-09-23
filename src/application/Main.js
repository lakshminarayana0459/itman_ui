import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../application/components/common/header/Header";
import BackDrop from "./components/common/BackDrop/BackDrop";
import SideDrawer from "./components/common/sidedrawer/SideDrawer";
import MainView from "./components/MainComponent/MainView";

export const SideBarContext = React.createContext([
  {
    isOpen: false,
  },
]);

const Main = (props) => {
  const location = useLocation();

  const [sidedrawerOpen, setSidedrawerOpen] = useState(true);

  const drawerToggleClickHandler = () => {
    setSidedrawerOpen(true);
  };

  const backDropClick = () => {
    setSidedrawerOpen(false);
  };
  return (
    <SideBarContext.Provider value={{ isOpen: sidedrawerOpen }}>
      {location.pathname !== "/login" && (
        <>
          <Header drawerClickHandler={drawerToggleClickHandler} />
          <div>
            <SideDrawer
              toggleShow={() => {
                setSidedrawerOpen(!sidedrawerOpen);
              }}
              show={sidedrawerOpen}
            />
            <BackDrop onClick={backDropClick} />
          </div>
        </>
      )}
      <MainView show={sidedrawerOpen} path={location.pathname} />
    </SideBarContext.Provider>
  );
};

export default Main;
