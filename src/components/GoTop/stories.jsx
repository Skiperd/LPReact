import { GoTop } from ".";

export default {
  title: "GoTop",
  component: GoTop,
  args: {
    children: "GoTop",
  },
  argTypes: {
    children: { type: "string" },
  },
};

export const Template = (args) => {
  return (
    <div style={{ height: "400vh" }}>
      <h1>Lorem ipsum, dolor sit amet</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, debitis
        illum dicta minus est placeat deleniti natus sequi ad eos cupiditate
        atque dolores molestias exercitationem laboriosam? Non quaerat ipsum
        dignissimos?
      </p>
      <h1>Lorem ipsum, dolor sit amet</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, debitis
        illum dicta minus est placeat deleniti natus sequi ad eos cupiditate
        atque dolores molestias exercitationem laboriosam? Non quaerat ipsum
        dignissimos?
      </p>
      <h1>Lorem ipsum, dolor sit amet</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, debitis
        illum dicta minus est placeat deleniti natus sequi ad eos cupiditate
        atque dolores molestias exercitationem laboriosam? Non quaerat ipsum
        dignissimos?
      </p>
      <h1>Lorem ipsum, dolor sit amet</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, debitis
        illum dicta minus est placeat deleniti natus sequi ad eos cupiditate
        atque dolores molestias exercitationem laboriosam? Non quaerat ipsum
        dignissimos?
      </p>
      <h1>Lorem ipsum, dolor sit amet</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, debitis
        illum dicta minus est placeat deleniti natus sequi ad eos cupiditate
        atque dolores molestias exercitationem laboriosam? Non quaerat ipsum
        dignissimos?
      </p>
      <h1>Lorem ipsum, dolor sit amet</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, debitis
        illum dicta minus est placeat deleniti natus sequi ad eos cupiditate
        atque dolores molestias exercitationem laboriosam? Non quaerat ipsum
        dignissimos?
      </p>
      <h1>Lorem ipsum, dolor sit amet</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, debitis
        illum dicta minus est placeat deleniti natus sequi ad eos cupiditate
        atque dolores molestias exercitationem laboriosam? Non quaerat ipsum
        dignissimos?
      </p>
      <h1>Lorem ipsum, dolor sit amet</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, debitis
        illum dicta minus est placeat deleniti natus sequi ad eos cupiditate
        atque dolores molestias exercitationem laboriosam? Non quaerat ipsum
        dignissimos?
      </p>
      <GoTop {...args} />
    </div>
  );
};
