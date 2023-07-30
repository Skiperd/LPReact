import { renderTheme } from "../../styles/render-theme";
import { TextComponent } from ".";
import { screen } from "@testing-library/react";
describe("<TextComponent />", () => {
  it("should render", () => {
    renderTheme(<TextComponent>Children</TextComponent>);
    expect(screen.getByText("Children")).toBeInTheDocument();
  });

  // it("should match snapshot", () => {
  //   const { container } = renderTheme(<TextComponent>Children</TextComponent>);
  //   expect(container.firstChild).toMatchInlineSnapshot();
  // });
});
