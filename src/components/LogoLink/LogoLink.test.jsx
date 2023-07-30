import { renderTheme } from "../../styles/render-theme";
import { LogoLink } from ".";
import { screen } from "@testing-library/react";
describe("<LogoLink />", () => {
  it("should render text logo", () => {
    renderTheme(<LogoLink link="#target" text="Olá mundo" />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
