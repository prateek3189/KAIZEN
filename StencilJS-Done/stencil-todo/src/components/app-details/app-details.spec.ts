import { newSpecPage } from '@stencil/core/testing';
import { AppDetails } from './app-details';

it('should render my component', async () => {
  const AppDetailsPage = await newSpecPage({
    components: [AppDetails],
    html: `<my-cmp></my-cmp>`,
  });
  console.log(AppDetailsPage);
  expect(1).toBe(1);
});