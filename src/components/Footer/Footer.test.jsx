import { renderTheme } from "../../styles/render-theme";
import { Footer } from ".";
import { screen } from "@testing-library/react";
describe("<Footer />", () => {
  it("should render", () => {
    const { container } = renderTheme(<Footer html={"<h1>Ola</h1>"} />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
