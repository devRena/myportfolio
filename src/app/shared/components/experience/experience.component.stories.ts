import type { Meta, StoryObj } from '@storybook/angular';
import { ExperienceComponent } from './experience.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ExperienceComponent> = {
  component: ExperienceComponent,
  title: 'ExperienceComponent',
};
export default meta;
type Story = StoryObj<ExperienceComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/experience works!/gi)).toBeTruthy();
  },
};
