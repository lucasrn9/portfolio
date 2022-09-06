import Image from "next/image";
import dotsBg from "../../public/assets/dots-bg.svg";
import SectionTitleProps from "../../types/props/SectionTitleProps";
import StyledTitle from "./sectionTitleStyles";

const SectionTitle = ({ children, disableBg }: SectionTitleProps) => (
  <StyledTitle>
    {children}
    {!disableBg && (
      <div>
        <Image src={dotsBg} alt="dots background" />
      </div>
    )}
  </StyledTitle>
);

export default SectionTitle;
