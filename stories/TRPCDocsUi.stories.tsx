import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DocsProps, TRPCDocsUi } from '../src';

const meta: Meta = {
  title: 'TRPC Docs UI',
  component: TRPCDocsUi,
  argTypes: {},
  parameters: {
    url: 'http://localhost:8080/trpc.json',
  },
};

export default meta;

const Template: Story<DocsProps> = (args) => <TRPCDocsUi {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'TRPC Docs UI',
  url: 'http://localhost:8080/trpc.json',
};
