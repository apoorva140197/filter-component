import React, { useState, useEffect } from 'react';
import { Meta } from '@storybook/react';
import Introduction from './Introduction';
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY
} from '@storybook/addon-docs/blocks';

export default {
  title: 'Introduction',
  component: Introduction,
  parameters: {
    docs: {
      description: {
        component: 'Classplus Modal Component'
      },
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      )
    }
  }
} as Meta;

const Template = () => <Introduction />;

export const intro = Template.bind({});
