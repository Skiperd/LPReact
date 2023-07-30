import { TextComponent } from ".";

export default {
  title: "TextComponent",
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, libero quisquam iure facilis molestiae recusandae excepturi quis mollitia magni eligendi totam, voluptas error? Labore atque omnis vero, magnam temporibus totam?`,
  },
  argTypes: {
    children: { type: "string" },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
