import { render, screen } from '@testing-library/react';
import {Slider} from "./components/Slider";
import App from './App';

xtest('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("Slider Checking whether it works or not", () => {
  render(<Slider />);
})