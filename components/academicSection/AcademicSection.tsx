import SectionTitle from "../sectionTitle/SectionTitle";
import Bubble from "../styled/Bubble";
import AcademicExperience from "../academicExperience/AcademicExperience";
import {
  StyledBubbleWrapper,
  StyledContainerCustom,
  StyledSectionCustom,
} from "./academicSectionStyles";

const AcademicSection = () => (
  <StyledSectionCustom>
    <StyledContainerCustom>
      <SectionTitle disableBg>Academic</SectionTitle>
      <Bubble>
        <StyledBubbleWrapper>
          <AcademicExperience
            title="Técnologo em Informática para Negócios - FATEC SBC"
            description="Algoritmos e Lógica de Programação, Sistemas Operacionais, Modelagem de Bancos de Dados, C++ , JAVA"
            startYear="2019"
            conclusionYear="2022"
            uncompleted
          />
          <AcademicExperience
            title="Inglês - Alt Idiomas"
            description="Escrever e Responder a e-mails, Elaborar apresentações, Conversações de
            nível intermediário."
            startYear="2017"
            conclusionYear="2022"
          />
          <AcademicExperience
            title="Bootcamp MRV Front End SPA Developer - Digital Innovation One"
            description="Javascript ES6, ReactJs, state management with Redux"
            startYear="2021"
            conclusionYear="2021"
          />
          <AcademicExperience
            title="Excel Intermediário e Excel Avançado - Fundação Bradesco"
            description="Elaborar Relatórios, Planilhas e DashBoards utilizando as principais funçoes e filtros do excel (20h&30h)"
            startYear="2021"
            conclusionYear="2021"
          />
          <AcademicExperience
            title="Hardware e Manutenção de Computadores - Líder Centro de Profissões"
            description="Manutenção de Problemas de Hardware e Software, Instalação, formatação
            e otimização de Sistemas Operacionais."
            startYear="2018"
            conclusionYear="2020"
          />
          <AcademicExperience
            title="Windows, Office, Digitação, Secretariado - OnByte Formação Profissional"
            description="Elaborar Relatórios, Planilhas, DashBoards, Artigos e Apresentações
            utilizando as principais ferramentas do pacote Microsoft Office."
            startYear="2018"
            conclusionYear="2019"
          />
        </StyledBubbleWrapper>
      </Bubble>
    </StyledContainerCustom>
  </StyledSectionCustom>
);

export default AcademicSection;
