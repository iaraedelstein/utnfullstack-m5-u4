import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Listado Libros', () => {
  render(<App />);
  const linkElement = screen.getByText(/Listado Libros/i);
  expect(linkElement).toBeInTheDocument();
});
