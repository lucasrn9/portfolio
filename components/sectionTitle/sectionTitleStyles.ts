import styled from "styled-components"

const StyledTitle = styled.h1`
position:relative;
margin-bottom: 4rem;
div{
  position: absolute ;
  left:0;
  top:0;
  transform:translateX(-50%) translateY(-30%);
  @media (max-width:1282px) {
    display:none ;
  }
}
`

export default StyledTitle