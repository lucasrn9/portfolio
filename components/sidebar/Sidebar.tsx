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
            <a href="#home" aria-label="Go to home section">
              <StyledNavbarIcon className="icon-home" />
            </a>
          </li>
          <li>
            <a href="#about" aria-label="Go to about section ">
              <StyledNavbarIcon className="icon-user-following" />
            </a>
          </li>
          <li>
            <a href="#academic" aria-label="Go to academic section">
              <StyledNavbarIcon className="icon-graduation" />
            </a>
          </li>
          <li>
            <a href="#works" aria-label="Go to recent works section">
              <StyledNavbarIcon className="icon-layers" />
            </a>
          </li>
          <li>
            <a href="#getintouch" aria-label="Go to get in touch section">
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
