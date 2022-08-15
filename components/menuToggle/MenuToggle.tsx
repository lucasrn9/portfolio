import { MenuToggleProps } from "../../types/props/MenuToggleProps";
import StyledMenuToggle from "./menuToggleStyles";

const MenuToggle = ({ onClick }: MenuToggleProps) => (
  <StyledMenuToggle onClick={onClick} data-testid="menuToggle">
    <span className="icon-menu" />
  </StyledMenuToggle>
);

export default MenuToggle;
