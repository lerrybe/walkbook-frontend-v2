import { ComponentMeta } from '@storybook/react';

import { Dim } from '.';

export default {
  title: 'Components/Dim',
} as ComponentMeta<typeof Dim>;

export const Normal = () => {
  return <Dim />;
};
