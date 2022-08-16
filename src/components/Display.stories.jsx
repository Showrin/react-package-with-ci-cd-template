import React from "react";
import Display from "./Display";

export default {
  title: "Components/Display",
  component: Display,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = (args) => <Display count={args.count} />;

export const DisplayWithCount = Template.bind({});
DisplayWithCount.args = {
  count: 10,
};
