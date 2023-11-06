import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';


describe("Test App", () => {
  test('renders learn react link', () => {
    render(<App />);
    const helloWorldElem = screen.getByText(/hello world/i);
    const btn = screen.getByRole('button');
    const input = screen.getByPlaceholderText(/input value/i);
    expect(helloWorldElem).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toMatchSnapshot();
  });

// eslint-disable-next-line jest/no-identical-title
test('renders learn react link', () => {
  render(<App />);
  const helloWorldElem = screen.getByText(/hello world/i);
  const btn = screen.getByRole('button');
  const input = screen.getByPlaceholderText(/input value/i);
  expect(helloWorldElem).toBeInTheDocument();
  expect(btn).toBeInTheDocument();
  expect(input).toMatchSnapshot();
});

// eslint-disable-next-line jest/no-identical-title
test('renders learn react link2', async () => {
  render(<App />);
  // const helloWorldElem = screen.queryByText(/hello2/i);
  // expect(helloWorldElem).toBeNull();
  // eslint-disable-next-line testing-library/no-debugging-utils
  screen.debug();
  const helloWorldElem = await screen.findByText(/data/i);
  expect(helloWorldElem).toBeInTheDocument();
  expect(helloWorldElem).toHaveStyle({color: 'red'})
  // eslint-disable-next-line testing-library/no-debugging-utils
  screen.debug();
})

test('Click event', async () => {
  render(<App />);
  const btn = screen.getByTestId('toggle-btn');
  expect(screen.queryByTestId('toggle-elem')).toBeNull();
  fireEvent.click(btn);
  // eslint-disable-next-line testing-library/prefer-presence-queries
  expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument();
  fireEvent.click(btn);
  expect(screen.queryByTestId('toggle-elem')).toBeNull();
});

test('Input event', async () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/input value/i);
  expect(screen.queryByTestId('value-elem')).toContainHTML('');
  fireEvent.input(input, {
    target: {value: '1212'}
  });
  // userEvent.type(input, '1212')
  expect(screen.queryByTestId('value-elem')).toContainHTML('1212');
})

})
