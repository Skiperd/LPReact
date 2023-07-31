import linksMock from "../../components/NavLinks/mock";
import gridMock from "../../components/GridText/mock";
import { GridText } from "../../components/GridText";

export const mockBase = {
  children: (
    <>
      <GridText {...gridMock} background />
      <GridText {...gridMock} />
      <GridText {...gridMock} background />
      <GridText {...gridMock} />
      <GridText {...gridMock} background />
      <GridText {...gridMock} />
    </>
  ),
  links: linksMock,
  logoData: {
    text: "Logo",
    link: "#",
  },
  background: false,
  footerHtml: `<p><a href="https://github.com/Skiperd">Feito com ❤️ amor po mim <3<a/></p>`,
};
