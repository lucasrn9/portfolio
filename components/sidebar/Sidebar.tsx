import { useState } from "react";
import Logo from "../logo/Logo";
import MenuToggle from "../menuToggle/MenuToggle";
import {
  StyledCopyright,
  StyledNavbar,
  StyledNavbarIcon,
  StyledSidebar,
} from "./sidebarStyles";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => {
    setShowSidebar((prevState) => !prevState);
  };

  return (
    <div style={{ display: "flex" }}>
      <StyledSidebar visible={showSidebar}>
        <Logo />
        <StyledNavbar>
          <ul>
            <li>
              <a href="https://www.google.com">
                <StyledNavbarIcon className="icon-home" />
              </a>
            </li>
            <li>
              <a href="https://www.google.com">
                <StyledNavbarIcon className="icon-user-following" />
              </a>
            </li>
            <li>
              <a href="https://www.google.com">
                <StyledNavbarIcon className="icon-briefcase" />
              </a>
            </li>
            <li>
              <a href="https://www.google.com">
                <StyledNavbarIcon className="icon-graduation" />
              </a>
            </li>
            <li>
              <a href="https://www.google.com">
                <StyledNavbarIcon className="icon-layers" />
              </a>
            </li>
            <li>
              <a href="https://www.google.com">
                <StyledNavbarIcon className="icon-note" />
              </a>
            </li>
            <li>
              <a href="https://www.google.com">
                <StyledNavbarIcon className="icon-bubbles" />
              </a>
            </li>
          </ul>
        </StyledNavbar>
        <StyledCopyright>&copy; 2022 - 2023.</StyledCopyright>
      </StyledSidebar>
      <MenuToggle onClick={toggleSidebar} />
    </div>
  );
};

export default Sidebar;
