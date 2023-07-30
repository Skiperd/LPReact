import { Heading } from "../../components/Heading";
import { TextComponent } from "../../components/TextComponent";
import * as Styled from "./styles";

function Home() {
  return (
    <div className="App">
      <Styled.Wrapper>
        <Heading>O texto que quero</Heading>
        <TextComponent />
      </Styled.Wrapper>
    </div>
  );
}

export default Home;
