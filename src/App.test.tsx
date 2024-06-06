import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('Should have hello world byText', () => {
    // ARRANGE
    render(<App />);
    // ACT
    // EXPECT
    const message = screen.queryByText(/Hello World/i);
    expect(message).toBeVisible();
  });

  it('Renders hello world byRole', () => {
    // ARRANGE
    render(<App />);
    // ACT
    // EXPECT
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Hello World');
  });
});
