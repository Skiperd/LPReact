import { renderTheme } from "../../styles/render-theme";
import { GridContent } from ".";
import { screen } from "@testing-library/react";
import mock from "./mock";

describe("<GridContent />", () => {
  it("should render", () => {
    const { container } = renderTheme(<GridContent {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
