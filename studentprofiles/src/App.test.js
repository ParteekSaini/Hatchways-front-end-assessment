/*
Parteek Saini
+1-236-512-0453
sainiparteek18@gmail.com
https://www.linkedin.com/in/parteek-saini-95a122158/
*/

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
