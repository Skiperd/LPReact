import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { Menu } from ".";
import linksMock from "../NavLinks/mock";
const logoData = {
  text: "Logo",
  link: "#target",
};

describe("<Menu />", () => {
  it("should render Logo and Main Menu Nav", () => {
    const { container } = renderTheme(
      <Menu links={linksMock} logoData={logoData}>
        Children
      </Menu>
    );
    expect(screen.getByRole("heading", { name: "Logo" })).toBeInTheDocument();
    expect(
      screen.getByRole("navigation", { name: "Main menu" })
    ).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("should render menu mobile and button for open and close the menu", () => {
    const { container } = renderTheme(
      <Menu links={linksMock} logoData={logoData}>
        Children
      </Menu>
    );

    const button = screen.getByLabelText("Open/Close menu");
    const menuContainer = button.nextSibling;

    // expect(button).toHaveStyleRule("display", "none");
  });
});
