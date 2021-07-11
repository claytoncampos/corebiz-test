import { render, screen } from '@testing-library/react';

import Footer from './index';
describe('<Footer/>', () => {
  it(`should render without any marker `, () => {
    //test RenderMAP
    render(<Footer />);

    //screen.logTestingPlaygroundURL()
    expect(screen.getByTitle(/Localização/i)).toBeInTheDocument();
  });
});
