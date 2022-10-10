import { MenuToggleProps } from "../../types/props/MenuToggleProps";
import StyledMenuToggle from "./menuToggleStyles";

const MenuToggle = ({ onClick, sidebarOpen }: MenuToggleProps) => (
  <StyledMenuToggle
    aria-label="Open menu"
    onClick={onClick}
    data-testid="menuToggle"
    sidebarOpen={sidebarOpen}
  >
    <span
      data-testid="menuToggleIcon"
      className={sidebarOpen ? "icon-close" : "icon-menu"}
    />
  </StyledMenuToggle>
);

export default MenuToggle;
