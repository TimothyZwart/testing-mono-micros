import { ComponentStory, ComponentMeta } from "@storybook/react";

import MuiButton from "./MuiButton";
import Mui from "./MuiAppWrapper";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
 title: "Example/MuiButton",
 component: MuiButton,
 // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
 argTypes: {
  backgroundColor: { control: "color" },
 },
} as ComponentMeta<typeof MuiButton>;

const Template: ComponentStory<typeof MuiButton> = (args: any) => (
 <Mui>
  <MuiButton {...args} />
 </Mui>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
 primary: true,
 name: "MuiButton",
};
