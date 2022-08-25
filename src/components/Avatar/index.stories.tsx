import { Story } from '@storybook/react';

import { Avatar } from '.';
import { Props } from './types';

export default {
  component: Avatar,
  title: 'General/Avatar',
  args: {
    src: '',
  },
};

const Template: Story<Props> = (args) => <Avatar {...args} />;

export const Default = Template.bind({
  src: '',
});

export const WithImage = Template.bind({
  src: 'https://avatars.githubusercontent.com/u/1164541?v=4',
});
