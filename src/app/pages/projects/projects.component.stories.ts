import type { Meta, StoryObj } from '@storybook/angular';
import { ProjectsComponent } from './projects.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ProjectsComponent> = {
  component: ProjectsComponent,
  title: 'ProjectsComponent',
};
export default meta;
type Story = StoryObj<ProjectsComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/projects works!/gi)).toBeTruthy();
  },
};
