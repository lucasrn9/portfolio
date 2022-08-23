import { MenuToggleProps } from "../../types/props/MenuToggleProps";
import StyledMenuToggle from "./menuToggleStyles";

const MenuToggle = ({ onClick, sidebarOpen }: MenuToggleProps) => (
  <StyledMenuToggle onClick={onClick} data-testid="menuToggle">
    <span className={sidebarOpen?"icon-close":"icon-menu"} />
  </StyledMenuToggle>
);

export default MenuToggle;
