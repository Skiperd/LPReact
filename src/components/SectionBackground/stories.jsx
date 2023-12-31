import { SectionBackground } from ".";
import { SectionContainer } from "../SectionContainer";

export default {
  title: "SectionBackground",
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackground</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
          corporis soluta doloribus consequuntur cupiditate quas labore beatae
          ratione quisquam, inventore impedit? Asperiores aspernatur explicabo
          porro. Optio inventore quidem odio dignissimos.
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: "string" },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
