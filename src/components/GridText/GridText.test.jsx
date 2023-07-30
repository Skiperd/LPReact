import { renderTheme } from "../../styles/render-theme";
import { GridText } from ".";
import { screen } from "@testing-library/react";

import mock from "./mock";

describe("<GridText />", () => {
  it("should render", () => {
    const { container } = renderTheme(<GridText {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
