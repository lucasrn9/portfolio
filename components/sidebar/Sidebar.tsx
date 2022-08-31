import Logo from "../logo/Logo";
import {
  StyledCopyright,
  StyledNavbar,
  StyledNavbarIcon,
  StyledSidebar,
  StyledSidebarWrapper,
} from "./sidebarStyles";
import { SidebarProps } from "../../types/props/SidebarProps";

const Sidebar = ({ showSidebar }: SidebarProps) => (
  <StyledSidebarWrapper>
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
  </StyledSidebarWrapper>
);
export default Sidebar;
