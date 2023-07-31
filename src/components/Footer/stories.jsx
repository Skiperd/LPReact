import { Footer } from ".";

export default {
  title: "Footer",
  component: Footer,
  args: {
    html: `<p><a href="https://github.com/Skiperd">Feito com ❤️ amor po mim <3<a/></p>`,
  },
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
