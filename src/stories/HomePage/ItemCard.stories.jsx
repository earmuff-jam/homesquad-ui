import ItemCard from "../../common/ItemCard/ItemCard";

export default {
  title: "HomePage/ItemCard",
  component: ItemCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
};

export const ItemCardDefaultMode = {
  args: {
    item: {
        title: "Default Groups",
        caption: "Default groups for users to select template"
    }
  },
};
