import { renderTheme } from "../../styles/render-theme";
import { Home } from ".";
import { screen } from "@testing-library/react";
describe("<Home />", () => {
  it("should render", () => {
    renderTheme(<Home>Children</Home>);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
