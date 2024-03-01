import type { Meta, StoryObj } from '@storybook/angular';
import { ProjectsPreviewComponent } from './projects-preview.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ProjectsPreviewComponent> = {
  component: ProjectsPreviewComponent,
  title: 'ProjectsPreviewComponent',
};
export default meta;
type Story = StoryObj<ProjectsPreviewComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/projects-preview works!/gi)).toBeTruthy();
  },
};
