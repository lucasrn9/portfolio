import BadgeProps from "../../types/props/BadgeProps";
import {
  StyledBadge,
  StyledIcon,
  StyledNumber,
  StyledText,
} from "./badgeStyles";

const Badge = ({ name, iconClass, number }: BadgeProps) => (
  <StyledBadge>
    <StyledIcon role="img" className={iconClass} />
    <StyledText>
      <StyledNumber>{number}</StyledNumber>
      <span>{name}</span>
    </StyledText>
  </StyledBadge>
);

export default Badge;
