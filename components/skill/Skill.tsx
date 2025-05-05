import SkillProps from "../../types/props/SkillProps";
import {
  StyledInformation,
  StyledName,
  StyledProgressbar,
  StyledSkill,
} from "./skillStyles";

const Skill = ({ name, percentage, barColor, barBgColor }: SkillProps) => (
  <StyledSkill>
    <StyledInformation>
      <StyledName>{name}</StyledName>
    </StyledInformation>
    <StyledProgressbar
      barBgColor={barBgColor}
      barColor={barColor}
      percentage={percentage}
    />
  </StyledSkill>
);

export default Skill;
