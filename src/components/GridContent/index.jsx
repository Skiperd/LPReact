import P from "prop-types";
import * as Styled from "./styles";
import { SectionBackground } from "../SectionBackground";
import { Heading } from "../Heading";
import { TextComponent } from "../TextComponent";

export const GridContent = ({ title, html, background }) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Styled.Html>
          <Heading uppercase colorDark={!background} as="h2">
            {title}
          </Heading>
        </Styled.Html>
        <TextComponent>{html}</TextComponent>
      </Styled.Container>
    </SectionBackground>
  );
};

GridContent.propTypes = {
  title: P.string.isRequired,
  html: P.string.isRequired,
  background: P.bool,
};
