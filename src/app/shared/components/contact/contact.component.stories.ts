import type { Meta, StoryObj } from '@storybook/angular';
import { ContactComponent } from './contact.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ContactComponent> = {
  component: ContactComponent,
  title: 'ContactComponent',
};
export default meta;
type Story = StoryObj<ContactComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/contact works!/gi)).toBeTruthy();
  },
};
