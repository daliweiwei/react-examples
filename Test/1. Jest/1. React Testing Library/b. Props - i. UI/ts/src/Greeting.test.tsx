import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Greeting from './Greeting';

/// React Testing Library: https://testing-library.com/docs/react-testing-library/intro ///

describe('Greeting', () => {
  it('throws when no name is provided', () => {
    expect(() => {
      render(<Greeting />);
    }).toThrow();
  });

  it('renders hello world message when name is world [1]', () => {
    const { getByText } = render(<Greeting name="World" />);

    getByText('Hello World!');
  });

  it('renders hello world message when name is world [2]', () => {
    const { container } = render(<Greeting name="World" />);

    const h1 = container.querySelector('h1');

    expect(h1).toBeDefined;
    expect(h1).toContainHTML('<h1 class="greeting">Hello World!</h1>');
  });

  it('renders hello world snapshot when name is world', () => {
    const { container } = render(<Greeting name="World" />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders hello world inline-snapshot when name is world', () => {
    const { container } = render(<Greeting name="World" />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <h1
        class="greeting"
      >
        Hello 
        World
        !
      </h1>
    `);
  });
});
