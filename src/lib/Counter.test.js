import { fireEvent, render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';

import Counter from './Counter.svelte';

function setup() {
  const view = render(Counter);

  return {
    count: view.getByTestId('count-value'),
    incrementButton: view.getByTestId('increment-btn'),
    decrementButton: view.getByTestId('decrement-btn'),
    clearButton: view.getByTestId('clear-btn'),
  };
}

describe('Counter', () => {
  it('renders initial count as 0', () => {
    const { count } = setup();

    expect(count.textContent).toBe('0');
  });

  it('increments the count', async () => {
    const { count, incrementButton } = setup();

    await fireEvent.click(incrementButton);

    expect(count.textContent).toBe('1');
  });

  it('decrements the count', async () => {
    const { count, incrementButton, decrementButton } = setup();

    await fireEvent.click(incrementButton);
    await fireEvent.click(decrementButton);

    expect(count.textContent).toBe('0');
  });

  it('prevents the count from going below 0', async () => {
    const { count, decrementButton } = setup();

    await fireEvent.click(decrementButton);

    expect(count.textContent).toBe('0');
  });

  it('clears the count back to 0', async () => {
    const { count, incrementButton, clearButton } = setup();

    await fireEvent.click(incrementButton);
    await fireEvent.click(incrementButton);
    await fireEvent.click(clearButton);

    expect(count.textContent).toBe('0');
  });
});
